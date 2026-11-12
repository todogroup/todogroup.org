const ICAL = require('ical.js');
const sources = require('../../data/meeting_sources.json');
const { expandCalendar } = require('../../assets/js/meeting-events.js');

function validateCalendar(text) {
  if (text.length > 2000000 || !text.trim().startsWith('BEGIN:VCALENDAR') || !text.trim().endsWith('END:VCALENDAR')) throw new Error('Invalid calendar response');
  const calendar = new ICAL.Component(ICAL.parse(text));
  if (calendar.name !== 'vcalendar') throw new Error('Invalid calendar');
  return calendar;
}

function mergeCalendars(feeds) {
  const merged = new ICAL.Component('vcalendar');
  merged.addPropertyWithValue('version', '2.0');
  merged.addPropertyWithValue('prodid', '-//TODO Group//Community meetings//EN');
  merged.addPropertyWithValue('x-wr-calname', 'TODO Group community meetings');
  merged.addPropertyWithValue('x-published-ttl', 'PT5M');
  const zones = new Set();
  for (const { source, text } of feeds) {
    const calendar = validateCalendar(text);
    for (const component of calendar.getAllSubcomponents('vtimezone')) {
      const tzid = component.getFirstPropertyValue('tzid');
      if (!zones.has(tzid)) { merged.addSubcomponent(component); zones.add(tzid); }
    }
    for (const component of calendar.getAllSubcomponents('vevent')) {
      const uid = component.getFirstPropertyValue('uid');
      if (!uid) throw new Error('Meeting has no UID');
      component.updatePropertyWithValue('uid', source.id + ':' + uid);
      merged.addSubcomponent(component);
    }
  }
  return merged.toString() + '\r\n';
}

async function handleCalendar(request, fetcher = fetch, now = new Date()) {
  const query = request.queryStringParameters || {};
  const sourcePath = (request.path || '').match(/\/(?:calendar-feeds|\.netlify\/functions\/community-calendar)\/(.*)$/);
  const name = sourcePath ? sourcePath[1] : (query.source || 'all.ics');
  const selected = name === 'all.ics' || query.format === 'json' ? sources : sources.filter(source => source.id + '.ics' === name);
  if (!selected.length) return { statusCode: 404, body: 'Calendar not found' };
  let start, end;
  if (query.format === 'json') {
    start = query.start ? new Date(query.start) : new Date(now.getTime() - 86400000);
    end = query.end ? new Date(query.end) : new Date(now.getTime() + 90 * 86400000);
    if (!Number.isFinite(start.getTime()) || !Number.isFinite(end.getTime()) || end <= start || end - start > 120 * 86400000) return { statusCode: 400, body: 'Use a date range of at most 120 days' };
  }
  try {
    const feeds = await Promise.all(selected.map(async source => {
      const response = await fetcher(source.url, { signal: AbortSignal.timeout(12000), headers: { Accept: 'text/calendar' } });
      if (!response.ok) throw new Error('Calendar request failed');
      const text = await response.text();
      validateCalendar(text);
      return { source, text };
    }));
    const json = query.format === 'json';
    const body = json ? JSON.stringify({ complete: true, fetchedAt: now.toISOString(), sources: selected.map(source => source.id), events: feeds.flatMap(({ source, text }) => expandCalendar(ICAL, text, start, end, source)) }) : (name === 'all.ics' ? mergeCalendars(feeds) : feeds[0].text);
    return {
      statusCode: 200,
      headers: { 'Content-Type': json ? 'application/json; charset=utf-8' : 'text/calendar; charset=utf-8', 'Cache-Control': 'public, max-age=60, s-maxage=300', 'X-Content-Type-Options': 'nosniff' },
      body
    };
  } catch {
    return { statusCode: 502, headers: { 'Cache-Control': 'no-store', 'Retry-After': '60' }, body: 'Calendar temporarily unavailable. Please use the source calendar links.' };
  }
}

exports.handler = request => handleCalendar(request);
exports.handleCalendar = handleCalendar;
exports.mergeCalendars = mergeCalendars;
