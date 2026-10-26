# Calendar synchronization draft

The website reads the public TODO LFX feed and the OSPO Metrics subcalendar published by CHAOSS. Its calendar view refreshes every five minutes while visible. The combined subscription feed is `/calendar-feeds/all.ics`; the same endpoint with `?format=json` supplies expanded occurrences for Google Apps Script.

`TodoCalendarSync.gs` is a separate addition for the existing reminder project. It has not been installed or run against a Google calendar. The existing reminder function and its trigger should remain in place.

## Review before activation

1. Publish and check the feed endpoint after approving the local website draft.
2. Open the Apps Script project that owns the existing 30-minute reminder. Add the new file without replacing existing code.
3. Enable the Google Calendar advanced service in that project.
4. Set the script property `TODO_SYNC_CALENDAR_ID` to the writable calendar already read by the reminder. Optionally set `TODO_SYNC_FEED_URL` to the published combined feed URL.
5. Run `previewTodoCalendarSync`. It reports creates, updates, removals, and possible manual duplicates without writing calendar events.
6. Review existing manually copied future meetings. Matching unmanaged events are reported and skipped; the sync does not adopt, edit, or remove them.
7. Once the preview is approved, run `syncTodoCalendar` and verify the reminder script sees its events. A time-driven trigger every 15 minutes can then call this function. Keep the reminder trigger at its current cadence.

Only events created by this sync are updated or removed. The source UID and original recurrence occurrence identify each event, including moved meetings. The sync stops without making changes when either source cannot be read. It writes the coming 90 days, sends no attendee update emails, and does not post to Slack itself. Source and cache refresh intervals mean changes are not instantaneous.

Subscribing to the feed in a personal Google calendar does not copy meetings into the calendar used by the bot. The sync above is what removes that copying step.

## Local calendar preview

Install the locked project dependencies and build Hugo into a local output directory. Then run:

```
node scripts/preview-calendar.cjs /absolute/path/to/output 1315
```

This serves the site and the same read-only feed handler used by Netlify. It only fetches the two configured public source calendars. It does not contact Google Calendar or Slack.

## Optional reminder improvement

The current `checkUpcomingEvents` reads the Google calendar and marks events notified by their event ID. Recurring instances can share that ID. Its message always links to LFX, where the CHAOSS meeting is absent.

`MeetingReminders.gs` is an optional replacement draft. It keys each reminder by event ID and occurrence start, ignores meetings already in progress, records a notification only after Slack accepts it, and links to the unified website calendar. `previewTodoMeetingReminders` only reads events and reports what would be sent.

Keep the existing function and trigger active during review. After the unified calendar is published, store the existing webhook in the script property `TODO_SLACK_WEBHOOK` without committing it to the website repository. Test the preview before explicitly switching the reminder trigger to `checkUpcomingEventsV2`; do not run both reminder functions in parallel. No script changes or trigger changes have been applied to the live project.

## Netlify preview checks

The repository configures the functions directory, esbuild bundling, and the `/calendar-feeds/*` rewrite in `netlify.toml`. The website function only reads the two public feeds and needs no credentials or environment variables. Node.js 22 is selected for the build.

Before merging, open the Netlify Deploy Preview and verify the following:

1. `/calendar-feeds/lfx.ics` and `/calendar-feeds/chaoss.ics` return valid calendars.
2. `/calendar-feeds/all.ics?format=json` returns `complete: true` and both sources.
3. `/community/meetings/` loads both sources, filters them independently, and opens meeting details.
4. Local time and UTC display correctly, and month, week, and list views work on desktop and mobile.
5. The English and Japanese About, Jobs, and Get started pages render correctly.

If the preview build is waiting for approval, an existing site maintainer must approve that build in Netlify. Check the deploy log for the `community-calendar` function. Merging publishes the website only when production auto-publishing is enabled. Google Apps Script installation and trigger activation remain separate manual steps.
