function previewTodoCalendarSync() {
  return runTodoCalendarSync(true);
}

function syncTodoCalendar() {
  return runTodoCalendarSync(false);
}

function runTodoCalendarSync(dryRun) {
  var properties = PropertiesService.getScriptProperties();
  var calendarId = properties.getProperty('TODO_SYNC_CALENDAR_ID');
  var feedUrl = properties.getProperty('TODO_SYNC_FEED_URL') || 'https://todogroup.org/calendar-feeds/all.ics';
  if (!calendarId) throw new Error('Set TODO_SYNC_CALENDAR_ID to the calendar already used by the reminder bot.');
  var lock = LockService.getScriptLock();
  if (!lock.tryLock(10000)) throw new Error('Another calendar sync is running.');
  try {
    var now = new Date();
    var from = new Date(now.getTime() - 86400000);
    var until = new Date(now.getTime() + 90 * 86400000);
    var url = feedUrl + (feedUrl.indexOf('?') >= 0 ? '&' : '?') + 'format=json&start=' + encodeURIComponent(from.toISOString()) + '&end=' + encodeURIComponent(until.toISOString());
    var response = UrlFetchApp.fetch(url, { muteHttpExceptions: true });
    if (response.getResponseCode() !== 200) throw new Error('Calendar feed unavailable. No changes made.');
    var data = JSON.parse(response.getContentText());
    if (data.complete !== true || !Array.isArray(data.events) || !Array.isArray(data.sources) || data.sources.slice().sort().join(',') !== 'chaoss,lfx') throw new Error('Incomplete calendar feed. No changes made.');
    data.events.forEach(function (event) {
      if (!event.id || typeof event.title !== 'string' || !event.extendedProps || data.sources.indexOf(event.extendedProps.source) < 0 || !Number.isFinite(new Date(event.start).getTime()) || !Number.isFinite(new Date(event.end).getTime()) || new Date(event.end) <= new Date(event.start)) throw new Error('Invalid event data. No changes made.');
    });
    var allEvents = [];
    var pageToken;
    do {
      var page = Calendar.Events.list(calendarId, { timeMin: from.toISOString(), timeMax: until.toISOString(), singleEvents: true, maxResults: 2500, pageToken: pageToken });
      allEvents = allEvents.concat(page.items || []);
      pageToken = page.nextPageToken;
    } while (pageToken);
    var managed = {};
    var unmanaged = [];
    allEvents.forEach(function (event) {
      if (event.extendedProperties && event.extendedProperties.private && event.extendedProperties.private.todoCalendarSync === 'v1') managed[event.id] = event;
      else if (event.status !== 'cancelled') unmanaged.push(event);
    });
    var desired = {};
    var actions = [];
    var possibleDuplicates = [];
    data.events.forEach(function (event) {
      if (new Date(event.start) < now) return;
      var hash = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, event.id, Utilities.Charset.UTF_8).map(function (byte) { return ((byte + 256) % 256).toString(16).padStart(2, '0'); }).join('');
      var id = 't0d0' + hash;
      var body = {
        summary: event.title,
        start: event.allDay ? { date: event.start } : { dateTime: event.start },
        end: event.allDay ? { date: event.end } : { dateTime: event.end },
        description: event.extendedProps.description + '\n\n' + event.url,
        location: event.extendedProps.location,
        extendedProperties: { private: { todoCalendarSync: 'v1', sourceId: event.extendedProps.source, feedKey: event.id } }
      };
      desired[id] = true;
      var existing = managed[id];
      if (!existing) {
        try {
          var stored = Calendar.Events.get(calendarId, id);
          if ((!stored.extendedProperties || !stored.extendedProperties.private || stored.extendedProperties.private.todoCalendarSync !== 'v1') && !(stored.status === 'cancelled' && properties.getProperty('TODO_SYNC_OWNED_' + id) === calendarId)) throw new Error('Calendar event ID collision.');
          existing = stored;
        } catch (error) {
          if (!/not found|404|gone|410/i.test(String(error.message || error))) throw error;
        }
      }
      if (!existing) {
        var duplicate = unmanaged.some(function (candidate) {
          var begin = candidate.start && (candidate.start.dateTime || candidate.start.date);
          return String(candidate.summary || '').trim().toLowerCase() === event.title.trim().toLowerCase() && new Date(begin).getTime() === new Date(event.start).getTime();
        });
        if (duplicate) { possibleDuplicates.push({ title: event.title, start: event.start }); return; }
        actions.push({ type: 'create', id: id, title: event.title, start: event.start });
        if (!dryRun) {
          Calendar.Events.insert(Object.assign({ id: id }, body), calendarId, { sendUpdates: 'none' });
          properties.setProperty('TODO_SYNC_OWNED_' + id, calendarId);
        }
      } else {
        body.status = 'confirmed';
        var changed = existing.status === 'cancelled' || ['summary', 'description', 'location'].some(function (key) { return (existing[key] || '') !== (body[key] || ''); });
        changed = changed || new Date(existing.start.dateTime || existing.start.date).getTime() !== new Date(event.start).getTime() || new Date(existing.end.dateTime || existing.end.date).getTime() !== new Date(event.end).getTime();
        if (changed) {
          actions.push({ type: 'update', id: id, title: event.title, start: event.start });
          if (!dryRun) Calendar.Events.patch(body, calendarId, id, { sendUpdates: 'none' });
        }
      }
    });
    Object.keys(managed).forEach(function (id) {
      var event = managed[id];
      if (!desired[id] && new Date(event.start.dateTime || event.start.date) >= now) {
        actions.push({ type: 'remove', id: id, title: event.summary });
        if (!dryRun) {
          properties.setProperty('TODO_SYNC_OWNED_' + id, calendarId);
          Calendar.Events.remove(calendarId, id, { sendUpdates: 'none' });
        }
      }
    });
    var report = { dryRun: dryRun, actions: actions, possibleDuplicates: possibleDuplicates };
    console.log(JSON.stringify(report));
    return report;
  } finally {
    lock.releaseLock();
  }
}
