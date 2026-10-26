const test = require('node:test');
const assert = require('node:assert/strict');
const ICAL = require('ical.js');
const { expandCalendar } = require('../assets/js/meeting-events');
const { handleCalendar, mergeCalendars } = require('../netlify/functions/community-calendar');
const sources = require('../data/meeting_sources.json');
const zone = `BEGIN:VTIMEZONE
TZID:America/Chicago
BEGIN:DAYLIGHT
TZOFFSETFROM:-0600
TZOFFSETTO:-0500
DTSTART:19700308T020000
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU
END:DAYLIGHT
BEGIN:STANDARD
TZOFFSETFROM:-0500
TZOFFSETTO:-0600
DTSTART:19701101T020000
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU
END:STANDARD
END:VTIMEZONE`;
const master = `BEGIN:VEVENT
UID:metrics-series
DTSTAMP:20261001T000000Z
DTSTART;TZID=America/Chicago:20261022T100000
DTEND;TZID=America/Chicago:20261022T110000
RRULE:FREQ=WEEKLY;COUNT=4
SUMMARY:Metrics meeting
END:VEVENT`;
const wrap = (...events) => ['BEGIN:VCALENDAR','VERSION:2.0',zone,...events,'END:VCALENDAR',''].join('\r\n');
const expand = (text, start='2026-10-01T00:00:00Z', end='2026-12-01T00:00:00Z') => expandCalendar(ICAL,text,new Date(start),new Date(end),sources[1]);

test('weekly recurrence follows the source timezone across the November DST transition', () => {
  assert.deepEqual(expand(wrap(master)).map(e=>e.start), ['2026-10-22T15:00:00.000Z','2026-10-29T15:00:00.000Z','2026-11-05T16:00:00.000Z','2026-11-12T16:00:00.000Z']);
});

test('EXDATE and cancelled overrides remove occurrences; moved events keep their original identity', () => {
  const withExcluded=master.replace('SUMMARY:', 'EXDATE;TZID=America/Chicago:20261112T100000\nSUMMARY:');
  const cancelled=`BEGIN:VEVENT\nUID:metrics-series\nRECURRENCE-ID;TZID=America/Chicago:20261029T100000\nSTATUS:CANCELLED\nEND:VEVENT`;
  const moved=`BEGIN:VEVENT\nUID:metrics-series\nRECURRENCE-ID;TZID=America/Chicago:20261105T100000\nDTSTART;TZID=America/Chicago:20261106T110000\nDTEND;TZID=America/Chicago:20261106T120000\nSUMMARY:Moved metrics\nEND:VEVENT`;
  const events=expand(wrap(withExcluded,cancelled,moved));
  assert.deepEqual(events.map(e=>e.start), ['2026-10-22T15:00:00.000Z','2026-11-06T17:00:00.000Z']);
  assert.equal(events[1].id,'chaoss:metrics-series:2026-11-05T10:00:00');
  assert.equal(expand(wrap(withExcluded,cancelled,moved),'2026-11-06T00:00:00Z','2026-11-07T00:00:00Z').length,1);
});

test('an occurrence moved earlier than its original visible range is included', () => {
  const moved=`BEGIN:VEVENT\nUID:metrics-series\nRECURRENCE-ID;TZID=America/Chicago:20261105T100000\nDTSTART;TZID=America/Chicago:20261020T100000\nDTEND;TZID=America/Chicago:20261020T110000\nSUMMARY:Moved earlier\nEND:VEVENT`;
  assert.equal(expand(wrap(master,moved),'2026-10-20T00:00:00Z','2026-10-21T00:00:00Z')[0].start,'2026-10-20T15:00:00.000Z');
});

test('a cancelled series contributes no events', () => {
  assert.equal(expand(wrap(master.replace('SUMMARY:', 'STATUS:CANCELLED\nSUMMARY:'))).length,0);
});

test('only HTTPS event links are exposed', () => {
  const event=expand(wrap(master.replace('SUMMARY:', 'URL:javascript:alert(1)\nSUMMARY:')))[0];
  assert.equal(event.url,sources[1].calendarUrl);
});

test('merged subscriptions preserve recurrence and namespace source identities', () => {
  const result=mergeCalendars(sources.map(source=>({source,text:wrap(master)})));
  const parsed=new ICAL.Component(ICAL.parse(result));
  assert.equal(parsed.getAllSubcomponents('vtimezone').length,1);
  assert.deepEqual(parsed.getAllSubcomponents('vevent').map(e=>e.getFirstPropertyValue('uid')),['lfx:metrics-series','chaoss:metrics-series']);
  assert.equal(parsed.getAllSubcomponents('vevent')[0].getFirstPropertyValue('rrule').toString(),'FREQ=WEEKLY;COUNT=4');
});

test('one failed source fails closed for the bot feed instead of returning a partial calendar', async () => {
  let calls=0;
  const response=await handleCalendar({queryStringParameters:{format:'json'}},async()=>{if(++calls===2)throw new Error('Offline');return{ok:true,text:async()=>wrap(master)};});
  assert.equal(response.statusCode,502);
  assert.equal(response.headers['Cache-Control'],'no-store');
});

test('JSON endpoint supplies both sources and rejects invalid or excessive ranges', async () => {
  const fetcher=async()=>({ok:true,text:async()=>wrap(master)});
  const response=await handleCalendar({queryStringParameters:{format:'json',start:'2026-10-01',end:'2026-11-30'}},fetcher,new Date('2026-10-25T09:00:00Z'));
  const data=JSON.parse(response.body);
  assert.equal(data.complete,true);assert.deepEqual(data.sources,['lfx','chaoss']);assert.equal(data.events.length,8);
  assert.equal((await handleCalendar({queryStringParameters:{format:'json',start:'bad'}},fetcher)).statusCode,400);
  assert.equal((await handleCalendar({queryStringParameters:{format:'json',start:'2026-01-01',end:'2027-01-01'}},fetcher)).statusCode,400);
});

test('HTML responses from a source are rejected; unknown source paths are not proxied', async () => {
  assert.equal((await handleCalendar({queryStringParameters:{source:'lfx.ics'}},async()=>({ok:true,text:async()=>'<html>Login</html>'}))).statusCode,502);
  assert.equal((await handleCalendar({queryStringParameters:{source:'other.ics'}},()=>assert.fail('Unexpected fetch'))).statusCode,404);
});


test('Netlify rewritten source paths fetch only the requested calendar', async () => {
  for (const source of sources) {
    for (const prefix of ['/calendar-feeds/', '/.netlify/functions/community-calendar/']) {
      const urls=[];
      const response=await handleCalendar({path:prefix+source.id+'.ics',queryStringParameters:{}},async url=>{urls.push(url);return{ok:true,text:async()=>wrap(master)};});
      assert.equal(response.statusCode,200);
      assert.deepEqual(urls,[source.url]);
      assert.equal(response.body,wrap(master));
    }
  }
  assert.equal((await handleCalendar({path:'/calendar-feeds/unknown.ics'},()=>assert.fail('Unexpected fetch'))).statusCode,404);
});
