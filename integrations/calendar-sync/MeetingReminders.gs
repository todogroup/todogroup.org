function previewTodoMeetingReminders() {
  return runTodoMeetingReminders(true);
}

function checkUpcomingEventsV2() {
  return runTodoMeetingReminders(false);
}

function runTodoMeetingReminders(dryRun) {
  var properties = PropertiesService.getScriptProperties();
  var calendarId = properties.getProperty('TODO_SYNC_CALENDAR_ID') || 'c_cpd890ckcd8lgtqak65o6413ts@group.calendar.google.com';
  var calendarUrl = properties.getProperty('TODO_MEETINGS_URL') || 'https://todogroup.org/community/meetings/';
  var webhook = dryRun ? null : properties.getProperty('TODO_SLACK_WEBHOOK');
  if (!dryRun && !webhook) throw new Error('Set TODO_SLACK_WEBHOOK before enabling the replacement reminder.');
  var calendar = CalendarApp.getCalendarById(calendarId);
  if (!calendar) throw new Error('Reminder calendar not found.');
  var lock = LockService.getScriptLock();
  if (!lock.tryLock(10000)) return [];
  try {
    var now = new Date();
    var in30minutes = new Date(now.getTime() + 30 * 60000);
    var report = [];
    calendar.getEvents(now, in30minutes).forEach(function (event) {
      var start = event.getStartTime();
      if (start <= now || start > in30minutes || event.isAllDayEvent()) return;
      var key = 'todoReminder:' + event.getId() + ':' + start.toISOString();
      if (properties.getProperty(key)) return;
      var minutes = Math.ceil((start.getTime() - now.getTime()) / 60000);
      report.push({ title: event.getTitle(), start: start.toISOString(), minutes: minutes });
      if (!dryRun) {
        var response = UrlFetchApp.fetch(webhook, {
          method: 'post', contentType: 'application/json', muteHttpExceptions: true,
          payload: JSON.stringify({ text: 'Hey OSPOers! We have a meeting in ' + minutes + ' minutes 🗓️ Please use the community calendar to check the details and join: ' + calendarUrl })
        });
        if (response.getResponseCode() < 200 || response.getResponseCode() >= 300) throw new Error('Slack did not accept the reminder. It will be retried on the next run.');
        properties.setProperty(key, String(start.getTime()));
      }
    });
    if (!dryRun) {
      var oldest = now.getTime() - 30 * 86400000;
      var values = properties.getProperties();
      Object.keys(values).forEach(function (key) {
        if (key.indexOf('todoReminder:') === 0 && Number(values[key]) < oldest) properties.deleteProperty(key);
      });
    }
    console.log(JSON.stringify({ dryRun: dryRun, upcoming: report }));
    return report;
  } finally {
    lock.releaseLock();
  }
}
