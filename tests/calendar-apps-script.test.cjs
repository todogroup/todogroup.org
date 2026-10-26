const test=require('node:test');
const assert=require('node:assert/strict');
const vm=require('node:vm');
const fs=require('node:fs');
const crypto=require('node:crypto');
const now='2026-10-25T09:00:00.000Z';
class FixedDate extends Date { constructor(...args){super(...(args.length?args:[now]));} static now(){return new Date(now).getTime();} }
function environment(events=[], payload={complete:true,sources:['lfx','chaoss'],events:[]}) {
  const writes=[], properties={TODO_SYNC_CALENDAR_ID:'test-calendar',TODO_SLACK_WEBHOOK:'https://example.test/slack'};
  const ctx={Date:FixedDate,console:{log(){}},PropertiesService:{getScriptProperties:()=>({getProperty:k=>properties[k]||null,setProperty:(k,v)=>{properties[k]=v;},getProperties:()=>({...properties}),deleteProperty:k=>{delete properties[k];}})},LockService:{getScriptLock:()=>({tryLock:()=>true,releaseLock(){}})},Utilities:{DigestAlgorithm:{SHA_256:'sha256'},Charset:{UTF_8:'utf8'},computeDigest:(_,s)=>[...crypto.createHash('sha256').update(s).digest()]},UrlFetchApp:{fetch:url=>{if(url==='https://example.test/slack')writes.push(['notify']);return {getResponseCode:()=>200,getContentText:()=>JSON.stringify(payload)};}},Calendar:{Events:{list:()=>({items:events}),get:(_,id)=>{const found=events.find(e=>e.id===id);if(!found)throw new Error('404 Not Found');return found;},insert:(body)=>writes.push(['insert',body]),patch:(body,_,id)=>writes.push(['patch',id,body]),remove:(_,id)=>writes.push(['remove',id])}}};
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync('integrations/calendar-sync/TodoCalendarSync.gs','utf8'),ctx);
  vm.runInContext(fs.readFileSync('integrations/calendar-sync/MeetingReminders.gs','utf8'),ctx);
  return {ctx,writes,properties};
}
function incoming() {return{id:'lfx:test-meeting:single',title:'Test meeting',start:'2026-10-27T10:00:00.000Z',end:'2026-10-27T11:00:00.000Z',allDay:false,url:'https://example.test/meeting',extendedProps:{source:'lfx',description:'Details',location:''}};}

test('sync preview reports changes without creating or updating Google events',()=>{
  const {ctx,writes}=environment([],{complete:true,sources:['lfx','chaoss'],events:[incoming()]});
  const report=ctx.previewTodoCalendarSync();assert.equal(report.actions[0].type,'create');assert.equal(writes.length,0);
});

test('incomplete feeds abort before any calendar writes',()=>{
  const {ctx,writes}=environment([],{complete:false,sources:['lfx'],events:[]});
  assert.throws(()=>ctx.syncTodoCalendar(),/Incomplete/);assert.equal(writes.length,0);
});

test('malformed event data aborts before calendar writes',()=>{
  const bad={...incoming(),end:'not-a-date'};
  const {ctx,writes}=environment([],{complete:true,sources:['lfx','chaoss'],events:[incoming(),bad]});
  assert.throws(()=>ctx.syncTodoCalendar(),/Invalid event/);assert.equal(writes.length,0);
});

test('only sync-owned future events are removed, leaving manually maintained events alone',()=>{
  const base={summary:'Old event',start:{dateTime:'2026-10-28T10:00:00Z'},end:{dateTime:'2026-10-28T11:00:00Z'}};
  const {ctx,writes}=environment([{...base,id:'owned',extendedProperties:{private:{todoCalendarSync:'v1'}}},{...base,id:'manual'}]);
  ctx.syncTodoCalendar();assert.deepEqual(writes,[['remove','owned']]);
});

test('matching manually copied meetings are reported and not duplicated',()=>{
  const data=incoming();
  const {ctx,writes}=environment([{id:'manual',summary:data.title,start:{dateTime:data.start},end:{dateTime:data.end}}],{complete:true,sources:['lfx','chaoss'],events:[data]});
  assert.equal(ctx.syncTodoCalendar().possibleDuplicates.length,1);assert.equal(writes.length,0);
});

test('recurring occurrences with the same event ID receive distinct reminder keys',()=>{
  const {ctx,writes,properties}=environment();
  const mock=(start)=>({getId:()=> 'shared-series-id',getStartTime:()=>new Date(start),getTitle:()=> 'Recurring',isAllDayEvent:()=>false});
  ctx.CalendarApp={getCalendarById:()=>({getEvents:()=>[mock('2026-10-25T09:20:00Z'),mock('2026-10-25T09:25:00Z')]})};
  ctx.checkUpcomingEventsV2();assert.equal(writes.filter(w=>w[0]==='notify').length,2);
  ctx.checkUpcomingEventsV2();assert.equal(writes.filter(w=>w[0]==='notify').length,2);
  assert.equal(Object.keys(properties).filter(k=>k.startsWith('todoReminder:')).length,2);
});

test('reminder preview does not send to Slack or mark events as notified',()=>{
  const {ctx,writes,properties}=environment();
  ctx.CalendarApp={getCalendarById:()=>({getEvents:()=>[{getId:()=> 'id',getStartTime:()=>new Date('2026-10-25T09:25:00Z'),getTitle:()=> 'Soon',isAllDayEvent:()=>false}]})};
  assert.equal(ctx.previewTodoMeetingReminders().length,1);assert.equal(writes.length,0);
  assert.equal(Object.keys(properties).filter(k=>k.startsWith('todoReminder:')).length,0);
});

test('a rejected Slack request does not mark the reminder as delivered',()=>{
  const {ctx,properties}=environment();
  ctx.CalendarApp={getCalendarById:()=>({getEvents:()=>[{getId:()=> 'id',getStartTime:()=>new Date('2026-10-25T09:25:00Z'),getTitle:()=> 'Soon',isAllDayEvent:()=>false}]})};
  ctx.UrlFetchApp.fetch=()=>({getResponseCode:()=>429});
  assert.throws(()=>ctx.checkUpcomingEventsV2(),/Slack did not accept/);
  assert.equal(Object.keys(properties).filter(k=>k.startsWith('todoReminder:')).length,0);
});
