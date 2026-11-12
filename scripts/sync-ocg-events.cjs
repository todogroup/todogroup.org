#!/usr/bin/env node
// Refreshes data/ocg_events.json from the TODO Group community on Open Community Groups (OCG).
//
// OCG publishes a JSON search endpoint with each event's name, group, dates and coordinates.
// The event pages add the format (in person, virtual, hybrid) and venue, so those are read
// from each page. OCG images can't be embedded on other sites, so the cards show the
// OSPOlogy logo instead. Which tab an event belongs to is decided by its group in
// data/ocg_groups.json.
// When OCG has no coordinates or a clear city for an event, set them under "overrides" in that file.
//
// Usage: npm run sync:events [-- --months-back=12 --months-ahead=24]
const fs = require('node:fs/promises');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const configFile = path.join(root, 'data/ocg_groups.json');
const outputFile = path.join(root, 'data/ocg_events.json');
const userAgent = 'todogroup.org events sync (+https://todogroup.org/community/events/)';

const args = Object.fromEntries(process.argv.slice(2).map((arg) => arg.replace(/^--/, '').split('=')));
const monthsBack = Number(args['months-back'] || 12);
const monthsAhead = Number(args['months-ahead'] || 24);
const regionNames = new Intl.DisplayNames(['en'], { type: 'region' });

const decode = (text) => text
  .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
  .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)))
  .replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&')
  .replace(/\s+/g, ' ').trim();

const isoDate = (date) => date.toISOString().slice(0, 10);

async function get(url, type) {
  const response = await fetch(url, { headers: { 'User-Agent': userAgent, Accept: type } });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText} for ${url}`);
  return type === 'application/json' ? response.json() : response.text();
}

// Reads the details OCG only shows on the event page.
function parseEventPage(html) {
  const kindMatch = html.match(/\b(In-person|Virtual|Hybrid) event\b/);
  const kind = kindMatch ? kindMatch[1].toLowerCase().replace('virtual', 'online') : 'in-person';
  const address = html.match(/pointer-events-none hidden sm:block[^>]*>([^<]+)</);
  const short = html.match(/pointer-events-none block sm:hidden[^>]*>([^<]+)</);
  const lat = html.match(/data-lat="(-?[\d.]+)"/);
  const lng = html.match(/data-lon(?:g)?="(-?[\d.]+)"/);
  const countryCode = short ? decode(short[1]).split(',').pop().trim() : '';
  let country = '';
  if (/^[A-Z]{2}$/.test(countryCode)) {
    try { country = regionNames.of(countryCode); } catch { country = ''; }
  }
  return {
    kind,
    venue: address ? decode(address[1]) : '',
    country,
    lat: lat ? Number(lat[1]) : null,
    lng: lng ? Number(lng[1]) : null,
  };
}

// "Venue, 4 Street, Helsinki, Uusimaa" -> "Helsinki"
function cityFromVenue(venue) {
  const parts = venue.split(',').map((part) => part.trim()).filter(Boolean);
  return parts.length >= 3 ? parts[parts.length - 2] : parts[parts.length - 1] || '';
}

async function main() {
  const config = JSON.parse(await fs.readFile(configFile, 'utf8'));
  const overrides = config.overrides || {};
  const now = new Date();
  const from = new Date(now); from.setMonth(from.getMonth() - monthsBack);
  const to = new Date(now); to.setMonth(to.getMonth() + monthsAhead);
  const search = new URL('/explore/events/search', config.base_url);
  search.search = new URLSearchParams({ community: config.community, view_mode: 'calendar', date_from: isoDate(from), date_to: isoDate(to) });

  const result = await get(search, 'application/json');
  if (result.truncated) console.warn('OCG truncated the results; narrow the date range to get every event.');

  const events = [];
  for (const item of result.events) {
    const group = config.groups[item.group_slug];
    if (!group) {
      console.warn(`Skipping "${item.name}": group ${item.group_slug} is not listed in data/ocg_groups.json`);
      continue;
    }
    const url = `${config.base_url}/${item.community_name}/group/${item.group_slug}/event/${item.slug}`;
    const details = parseEventPage(await get(url, 'text/html'));
    const override = overrides[item.slug] || {};
    let location = group.city || '';
    if (details.kind === 'online' && !group.city) location = 'Online';
    else if (!group.city && details.venue) location = [cityFromVenue(details.venue), details.country].filter(Boolean).join(', ');
    events.push({
      id: item.event_id,
      tab: group.tab,
      title: item.name,
      group: group.name,
      region: group.region || '',
      kind: details.kind,
      location,
      venue: details.venue,
      starts_at: new Date(item.starts_at * 1000).toISOString(),
      ends_at: new Date((item.ends_at || item.starts_at) * 1000).toISOString(),
      lat: item.latitude ?? details.lat ?? group.lat ?? null,
      lng: item.longitude ?? details.lng ?? group.lng ?? null,
      url,
      ...override,
    });
    await new Promise((resolve) => setTimeout(resolve, 250));
  }

  events.sort((a, b) => a.starts_at.localeCompare(b.starts_at));
  await fs.writeFile(outputFile, JSON.stringify({ source: `${config.base_url}/${config.community}`, events }, null, 2) + '\n');
  console.log(`Wrote ${events.length} events to ${path.relative(root, outputFile)}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
