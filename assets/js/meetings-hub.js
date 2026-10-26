import ICAL from "https://cdn.jsdelivr.net/npm/ical.js@2.2.1/dist/ical.min.js";

function initializeMeetings() {
  const root = document.querySelector('.meetings-calendar');
  if (!root) return;
  const japanese = root.dataset.locale === 'ja';
  const t = (en, ja) => japanese ? ja : en;
  const status = root.querySelector('[data-calendar-status]');
  const error = root.querySelector('[data-calendar-error]');
  const refresh = root.querySelector('[data-calendar-refresh]');
  const sources = JSON.parse(root.dataset.sources);
  const selected = new Set(sources.map(source => source.id));
  const failures = new Map();
  const cache = new Map();
  const dialog = document.querySelector('.meeting-dialog');
  const timezone = root.querySelector('#meetings-timezone');
  const localZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  timezone.options[0].textContent = t('Your local time', '現地時間') + ' (' + localZone + ')';
  let calendar;
  let lastRefresh = 0;
  function showFailures() {
    const failed = [...failures.entries()].filter(([id]) => selected.has(id)).map(([, label]) => label);
    error.hidden = !failed.length;
    error.textContent = failed.length ? t('Could not load: ', '読み込めませんでした：') + failed.join(', ') + t('. Use the source calendar links or try Refresh.', '。元のカレンダーを開くか、再読み込みしてください。') : '';
  }
  function details(info) {
    info.jsEvent.preventDefault();
    const event = info.event;
    const zone = calendar.getOption('timeZone') === 'UTC' ? 'UTC' : localZone;
    const formatter = new Intl.DateTimeFormat(japanese ? 'ja' : 'en', event.allDay ? { dateStyle: 'full', timeZone: 'UTC' } : { dateStyle: 'full', timeStyle: 'short', timeZone: zone });
    dialog.querySelector('#meeting-dialog-title').textContent = event.title;
    dialog.querySelector('[data-meeting-source]').textContent = event.extendedProps.sourceLabel;
    dialog.querySelector('[data-meeting-time]').textContent = (event.end && !event.allDay ? formatter.formatRange(event.start, event.end) : formatter.format(event.start)) + ' (' + zone + ')';
    const location = dialog.querySelector('[data-meeting-location]');
    location.hidden = !event.extendedProps.location;
    location.textContent = event.extendedProps.location;
    const description = event.extendedProps.description || '';
    const text = /<[a-z][\s>]/i.test(description) ? new DOMParser().parseFromString(description, 'text/html').body.textContent : description;
    dialog.querySelector('[data-meeting-description]').textContent = text;
    dialog.querySelector('[data-meeting-link]').href = event.url;
    dialog.showModal();
  }
  try {
    if (!window.FullCalendar || !ICAL || !window.TodoMeetingEvents) throw new Error('Calendar library unavailable');
    calendar = new FullCalendar.Calendar(root.querySelector('#community-meetings-calendar'), {
      initialView: matchMedia('(max-width:700px)').matches ? 'listMonth' : 'dayGridMonth',
      headerToolbar: { left: 'prev,next today', center: 'title', right: 'dayGridMonth,timeGridWeek,listMonth' },
      buttonText: { today: t('Today', '今日'), month: t('Month', '月'), week: t('Week', '週'), list: t('List', '一覧') },
      buttonHints: { prev: t('Previous', '前へ'), next: t('Next', '次へ'), today: t('Today', '今日') },
      locale: japanese ? 'ja' : 'en', timeZone: 'local', firstDay: 1,
      height: 'auto', fixedWeekCount: false, dayMaxEvents: 4, nowIndicator: true,
      noEventsText: t('No meetings in this period. Try another date or check the source calendars.', 'この期間に会議はありません。別の日付や元のカレンダーをご確認ください。'),
      allDayText: t('All day', '終日'), moreLinkText: count => '+' + count,
      eventTimeFormat: { hour: '2-digit', minute: '2-digit', hour12: false },
      eventClick: details,
      eventDidMount: info => { info.el.title = info.event.title; },
      loading(isLoading) {
        if (isLoading) status.textContent = t('Loading meetings…', '会議を読み込み中…');
        else {
          showFailures();
          const count = selected.size - [...failures.keys()].filter(id => selected.has(id)).length;
          status.textContent = selected.size ? (count === selected.size ? t('Calendar up to date', 'カレンダーを更新しました') : t('Some calendars could not be loaded', '一部のカレンダーを読み込めませんでした')) : t('Select a calendar to show meetings.', '表示するカレンダーを選択してください。');
          lastRefresh = Date.now();
        }
      },
      eventSources: sources.map(source => ({
        id: source.id, color: source.color, textColor: '#fff',
        events: async (range, success) => {
          if (!selected.has(source.id)) { success([]); return; }
          try {
            let item = cache.get(source.id);
            if (!item || Date.now() - item.time > 300000) {
              const response = await fetch('/calendar-feeds/' + source.id + '.ics', { signal: AbortSignal.timeout(15000), credentials: 'omit' });
              if (!response.ok) throw new Error('Feed unavailable');
              item = { text: await response.text(), time: Date.now() };
              cache.set(source.id, item);
            }
            const events = TodoMeetingEvents.expandCalendar(ICAL, item.text, range.start, range.end, source);
            failures.delete(source.id);
            success(events);
          } catch {
            cache.delete(source.id);
            failures.set(source.id, source.label);
            success([]);
          }
        }
      }))
    });
    calendar.render();
    refresh.hidden = false;
    refresh.addEventListener('click', () => { cache.clear(); calendar.refetchEvents(); });
    root.querySelectorAll('input[type="checkbox"]').forEach(input => input.addEventListener('change', () => {
      if (input.checked) selected.add(input.value); else selected.delete(input.value);
      calendar.refetchEvents();
      showFailures();
    }));
    timezone.addEventListener('change', () => calendar.setOption('timeZone', timezone.value));
    dialog.querySelector('.meeting-dialog__close').addEventListener('click', () => dialog.close());
    const refreshVisibleCalendar = () => { if (!document.hidden && Date.now() - lastRefresh >= 300000) calendar.refetchEvents(); };
    setInterval(refreshVisibleCalendar, 300000);
    document.addEventListener('visibilitychange', refreshVisibleCalendar);
  } catch (cause) {
    console.warn('Community calendar initialization failed', cause);
    status.textContent = t('Open a source calendar below to see meetings.', '下記の元のカレンダーを開いて会議をご確認ください。');
    error.hidden = false;
    error.textContent = t('The interactive calendar could not be loaded.', 'カレンダーを読み込めませんでした。');
  }
}

if (document.readyState === "complete") initializeMeetings();
else window.addEventListener("load", initializeMeetings, { once: true });
