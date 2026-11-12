(() => {
  const root = document.querySelector('[data-events-finder]');
  if (!root) return;

  const lang = document.documentElement.lang || 'en';
  const cards = [...root.querySelectorAll('[data-event]')];
  const lists = { upcoming: root.querySelector('[data-list="upcoming"]'), past: root.querySelector('[data-list="past"]') };
  const tabs = [...root.querySelectorAll('[data-tab-button]')];
  const viewButtons = [...root.querySelectorAll('[data-view-button]')];
  const views = [...root.querySelectorAll('[data-view]')];
  const search = root.querySelector('[data-filter-search]');
  const kind = root.querySelector('[data-filter-kind]');
  const status = root.querySelector('[data-status]');
  const empties = [...root.querySelectorAll('[data-empty]')];
  const pastWrapper = root.querySelector('[data-past-wrapper]');
  const pastCount = root.querySelector('[data-past-count]');
  const panel = root.querySelector('[data-results]');
  const label = (name) => root.dataset[name] || '';

  const state = { tab: 'official', q: '', kind: '', view: 'grid' };
  const pastPageSize = 9;
  let pastLimit = pastPageSize;
  const moreWrapper = root.querySelector('[data-more-wrapper]');
  let monthCursor = null;
  let map = null;
  let markerLayer = null;

  // Cards are split into upcoming and past at build time; move any that ended since then.
  const now = Date.now();
  cards.filter((card) => !card.classList.contains('events-card--past') && Date.parse(card.dataset.end) < now)
    .reverse()
    .forEach((card) => { card.classList.add('events-card--past'); lists.past.prepend(card); });

  const isPast = (card) => card.classList.contains('events-card--past');
  const matches = (card) => card.dataset.tab === state.tab
    && (!state.kind || card.dataset.kind === state.kind)
    && (!state.q || state.q.split(/\s+/).every((word) => card.dataset.search.includes(word)));

  function readUrl() {
    const params = new URLSearchParams(location.search);
    if (params.get('tab') === 'community') state.tab = 'community';
    state.q = (params.get('q') || '').trim().toLowerCase();
    if (['in-person', 'hybrid', 'online'].includes(params.get('type'))) state.kind = params.get('type');
    if (['map', 'calendar'].includes(params.get('view'))) state.view = params.get('view');
    search.value = params.get('q') || '';
    kind.value = state.kind;
  }

  function writeUrl() {
    const params = new URLSearchParams(location.search);
    const set = (key, value, fallback) => (value && value !== fallback ? params.set(key, value) : params.delete(key));
    set('tab', state.tab, 'official');
    set('q', search.value.trim());
    set('type', state.kind);
    set('view', state.view, 'grid');
    const query = params.toString();
    history.replaceState(null, '', location.pathname + (query ? '?' + query : '') + location.hash);
  }

  function render() {
    const visible = cards.filter(matches);
    cards.forEach((card) => { card.hidden = !visible.includes(card); });
    const upcoming = visible.filter((card) => !isPast(card));
    const past = visible.filter(isPast);
    past.slice(pastLimit).forEach((card) => { card.hidden = true; });
    moreWrapper.hidden = past.length <= pastLimit;

    tabs.forEach((tab) => {
      const selected = tab.dataset.tabButton === state.tab;
      tab.setAttribute('aria-selected', selected);
      tab.tabIndex = selected ? 0 : -1;
      if (selected) panel.setAttribute('aria-labelledby', tab.id);
    });
    viewButtons.forEach((button) => button.setAttribute('aria-pressed', button.dataset.viewButton === state.view));
    views.forEach((view) => { view.hidden = view.dataset.view !== state.view; });

    status.textContent = `${upcoming.length} ${label(upcoming.length === 1 ? 'labelUpcomingOne' : 'labelUpcoming')}`;
    const filtered = Boolean(state.q || state.kind);
    empties.forEach((block) => {
      block.hidden = upcoming.length > 0 || block.dataset.empty !== (filtered ? 'filtered' : state.tab);
    });
    pastWrapper.hidden = past.length === 0;
    if (!upcoming.length && past.length) pastWrapper.open = true;
    pastCount.textContent = `(${past.length})`;

    if (state.view === 'map') renderMap(upcoming.length ? upcoming : past);
    if (state.view === 'calendar') renderCalendar(visible, upcoming);
    writeUrl();
  }

  // Map view: Leaflet is only fetched the first time someone opens the map.
  function loadLeaflet() {
    if (window.L) return Promise.resolve();
    if (loadLeaflet.promise) return loadLeaflet.promise;
    const css = Object.assign(document.createElement('link'), { rel: 'stylesheet', href: 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css', integrity: 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=', crossOrigin: '' });
    document.head.append(css);
    loadLeaflet.promise = new Promise((resolve, reject) => {
      const script = Object.assign(document.createElement('script'), { src: 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js', integrity: 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=', crossOrigin: '' });
      script.onload = resolve;
      script.onerror = reject;
      document.head.append(script);
    });
    return loadLeaflet.promise;
  }

  const escapeHtml = (text) => text.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  async function renderMap(items) {
    const canvas = root.querySelector('[data-map]');
    try { await loadLeaflet(); } catch { canvas.textContent = label('labelMapError'); return; }
    if (!map) {
      map = L.map(canvas, { center: [25, 10], zoom: 2, minZoom: 1, maxZoom: 6, scrollWheelZoom: false, maxBounds: [[-85, -180], [85, 180]], maxBoundsViscosity: 1 });
      map.createPane('countries');
      map.getPane('countries').style.zIndex = 200;
      fetch(canvas.dataset.countries).then((response) => response.json()).then((countries) => {
        L.geoJSON(countries, {
          pane: 'countries',
          className: 'events-map-country',
          style: { weight: 0.7, fillOpacity: 1 },
          attribution: '<a href="https://www.naturalearthdata.com/">Natural Earth</a>',
        }).addTo(map);
      }).catch(() => {});
      markerLayer = L.layerGroup().addTo(map);
    }
    map.invalidateSize();
    markerLayer.clearLayers();
    const groups = new Map();
    items.filter((card) => card.dataset.lat).forEach((card) => {
      const key = `${card.dataset.lat},${card.dataset.lng}`;
      groups.set(key, [...(groups.get(key) || []), card]);
    });
    const points = [];
    groups.forEach((group, key) => {
      const [lat, lng] = key.split(',').map(Number);
      points.push([lat, lng]);
      const shown = group.slice(0, 4);
      const html = shown.map((card) => `<p class="events-popup"><strong><a href="${escapeHtml(card.dataset.url)}">${escapeHtml(card.dataset.title)}</a></strong><br>${escapeHtml(card.dataset.date)} • ${escapeHtml(card.dataset.location)}</p>`).join('')
        + (group.length > shown.length ? `<p class="events-popup">+${group.length - shown.length}</p>` : '');
      L.circleMarker([lat, lng], { radius: 9, color: '#ffffff', weight: 2, fillColor: '#285f50', fillOpacity: 0.95 })
        .bindPopup(html, { maxWidth: 280 })
        .bindTooltip(`${group[0].dataset.location} (${group.length})`)
        .addTo(markerLayer);
    });
    if (points.length === 1) map.setView(points[0], 5);
    else if (points.length) map.fitBounds(points, { padding: [40, 40], maxZoom: 5 });
  }

  // Calendar view: a month grid plus a list of that month's events.
  function renderCalendar(visible, upcoming) {
    if (!monthCursor) {
      const first = upcoming[0] ? new Date(upcoming[0].dataset.start) : new Date();
      monthCursor = new Date(first.getFullYear(), first.getMonth(), 1);
    }
    const year = monthCursor.getFullYear();
    const month = monthCursor.getMonth();
    root.querySelector('[data-month-label]').textContent = monthCursor.toLocaleDateString(lang, { month: 'long', year: 'numeric' });

    const byDay = new Map();
    const inMonth = visible.filter((card) => {
      const start = new Date(card.dataset.start);
      return start.getFullYear() === year && start.getMonth() === month;
    }).sort((a, b) => a.dataset.start.localeCompare(b.dataset.start));
    inMonth.forEach((card) => {
      const day = new Date(card.dataset.start).getDate();
      byDay.set(day, [...(byDay.get(day) || []), card]);
    });

    const grid = root.querySelector('[data-calendar-grid]');
    grid.replaceChildren();
    const weekStart = new Date(2024, 0, 1); // a Monday
    for (let i = 0; i < 7; i += 1) {
      const name = document.createElement('div');
      name.className = 'events-calendar__weekday';
      name.textContent = new Date(weekStart.getFullYear(), 0, 1 + i).toLocaleDateString(lang, { weekday: 'short' });
      grid.append(name);
    }
    const offset = (new Date(year, month, 1).getDay() + 6) % 7;
    const days = new Date(year, month + 1, 0).getDate();
    const today = new Date();
    for (let i = 0; i < offset; i += 1) grid.append(Object.assign(document.createElement('div'), { className: 'events-calendar__day events-calendar__day--blank' }));
    for (let day = 1; day <= days; day += 1) {
      const cell = document.createElement('div');
      cell.className = 'events-calendar__day';
      if (today.getFullYear() === year && today.getMonth() === month && today.getDate() === day) cell.classList.add('events-calendar__day--today');
      cell.append(Object.assign(document.createElement('span'), { className: 'events-calendar__date', textContent: day }));
      (byDay.get(day) || []).forEach((card) => {
        const link = Object.assign(document.createElement('a'), { href: card.dataset.url, textContent: card.dataset.title, title: `${card.dataset.title} · ${card.dataset.location}` });
        link.className = 'events-calendar__event';
        cell.append(link);
      });
      grid.append(cell);
    }

    const list = root.querySelector('[data-calendar-list]');
    list.replaceChildren();
    if (!inMonth.length) {
      list.append(Object.assign(document.createElement('li'), { className: 'events-calendar__none', textContent: label('labelNoneMonth') }));
    }
    inMonth.forEach((card) => {
      const item = document.createElement('li');
      const link = Object.assign(document.createElement('a'), { href: card.dataset.url, textContent: card.dataset.title });
      const meta = Object.assign(document.createElement('span'), { textContent: `${card.dataset.date} • ${card.dataset.location}` });
      item.append(meta, link);
      list.append(item);
    });
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => { state.tab = tab.dataset.tabButton; monthCursor = null; pastLimit = pastPageSize; render(); });
    tab.addEventListener('keydown', (event) => {
      if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
      const next = tabs[(index + (event.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
      next.focus();
      next.click();
    });
  });
  viewButtons.forEach((button) => button.addEventListener('click', () => { state.view = button.dataset.viewButton; render(); }));
  search.addEventListener('input', () => { state.q = search.value.trim().toLowerCase(); monthCursor = null; pastLimit = pastPageSize; render(); });
  kind.addEventListener('change', () => { state.kind = kind.value; monthCursor = null; pastLimit = pastPageSize; render(); });
  root.querySelector('[data-more]').addEventListener('click', () => { pastLimit += pastPageSize; render(); });
  root.querySelector('[data-clear]').addEventListener('click', () => {
    search.value = ''; kind.value = ''; state.q = ''; state.kind = ''; render(); search.focus();
  });
  root.querySelectorAll('[data-switch-tab]').forEach((button) => button.addEventListener('click', () => {
    const tab = tabs.find((item) => item.dataset.tabButton === button.dataset.switchTab);
    tab.click();
    tab.focus();
  }));
  root.querySelectorAll('[data-month]').forEach((button) => button.addEventListener('click', () => {
    monthCursor = new Date(monthCursor.getFullYear(), monthCursor.getMonth() + Number(button.dataset.month), 1);
    render();
  }));

  readUrl();
  render();
})();
