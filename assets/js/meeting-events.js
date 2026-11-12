(function (root) {
  function expandCalendar(ICAL, text, start, end, source) {
    const calendar = new ICAL.Component(ICAL.parse(text));
    if (calendar.name !== 'vcalendar') throw new Error('Invalid calendar');
    ICAL.TimezoneService.reset();
    calendar.getAllSubcomponents('vtimezone').forEach(component => {
      const tzid = component.getFirstPropertyValue('tzid');
      ICAL.TimezoneService.register(tzid, new ICAL.Timezone({ component, tzid }));
    });
    const groups = new Map();
    for (const component of calendar.getAllSubcomponents('vevent')) {
      const uid = component.getFirstPropertyValue('uid');
      if (!uid) throw new Error('Meeting has no UID');
      if (!groups.has(uid)) groups.set(uid, []);
      groups.get(uid).push(component);
    }
    const result = [];
    const cancelled = component => String(component.getFirstPropertyValue('status')).toUpperCase() === 'CANCELLED';
    const version = component => Number(component.getFirstPropertyValue('sequence') || 0);
    const dateValue = time => time.isDate ? time.toString().slice(0, 10) : time.toJSDate().toISOString();
    function add(item, begin, finish, key) {
      if (cancelled(item.component)) return;
      const startDate = begin.toJSDate();
      const endDate = finish.toJSDate();
      if (!(startDate < end && (endDate > start || (endDate.getTime() === startDate.getTime() && startDate >= start)))) return;
      const explicitUrl = item.component.getFirstPropertyValue('url');
      const description = item.description || '';
      const lfxLink = description.match(/https:\/\/zoom-lfx\.platform\.linuxfoundation\.org\/meeting\/[^\s<>"\\]+/);
      const candidate = explicitUrl || (lfxLink && lfxLink[0]) || (/^https:\/\//i.test(item.location || '') ? item.location : null);
      let url = source.calendarUrl;
      if (candidate) {
        try {
          const parsed = new URL(candidate);
          if (parsed.protocol === 'https:') url = parsed.href;
        } catch {}
      }
      result.push({
        id: source.id + ':' + item.uid + ':' + key,
        title: item.summary || source.label,
        start: dateValue(begin), end: dateValue(finish), allDay: begin.isDate,
        url,
        extendedProps: { source: source.id, sourceLabel: source.label, description, location: item.location || '' }
      });
    }
    for (const components of groups.values()) {
      const versions = new Map();
      for (const component of components) {
        const recurrence = component.getFirstPropertyValue('recurrence-id');
        const key = recurrence ? recurrence.toString() : 'master';
        if (!versions.has(key) || version(component) >= version(versions.get(key))) versions.set(key, component);
      }
      const master = versions.get('master');
      if (!master) {
        for (const component of versions.values()) {
          if (cancelled(component)) continue;
          const event = new ICAL.Event(component);
          add(event, event.startDate, event.endDate, event.recurrenceId.toString());
        }
        continue;
      }
      if (cancelled(master)) continue;
      const exceptions = [...versions.entries()].filter(([key]) => key !== 'master').map(([, component]) => component);
      const cancelledDates = new Set(exceptions.filter(cancelled).map(component => component.getFirstPropertyValue('recurrence-id').toString()));
      const event = new ICAL.Event(master, { exceptions: exceptions.filter(component => !cancelled(component)) });
      if (!event.isRecurring()) {
        add(event, event.startDate, event.endDate, 'single');
        continue;
      }
      const iterator = event.iterator();
      let steps = 0;
      for (let occurrence = iterator.next(); occurrence; occurrence = iterator.next()) {
        if (++steps > 20000) throw new Error('Recurrence expansion limit exceeded');
        if (occurrence.toJSDate() >= end) break;
        if (cancelledDates.has(occurrence.toString())) continue;
        const detail = event.getOccurrenceDetails(occurrence);
        add(detail.item, detail.startDate, detail.endDate, occurrence.toString());
      }
      for (const component of exceptions) {
        if (cancelled(component)) continue;
        const exception = new ICAL.Event(component);
        if (exception.recurrenceId.toJSDate() >= end) add(exception, exception.startDate, exception.endDate, exception.recurrenceId.toString());
      }
    }
    return [...new Map(result.map(event => [event.id, event])).values()];
  }
  if (typeof module !== 'undefined' && module.exports) module.exports = { expandCalendar };
  else root.TodoMeetingEvents = { expandCalendar };
})(typeof window === 'undefined' ? globalThis : window);
