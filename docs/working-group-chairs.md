# Working group chairs directory

The directory at `/about/working-group-chairs/` is backed by:

- `data/working_group_people.json`: names, LinkedIn profiles, Slack display names, initials, photo paths and original photo URLs.
- `data/working_group_leadership.json`: group membership and steering committee liaisons.
- `static/img/working-group-chairs/`: locally stored profile photos retrieved from the supplied public LinkedIn profiles.

Keep Slack values as display names without the leading `@`; the card adds it. Omit unknown names rather than guessing. Slack values are displayed as text because workspace member IDs have not been supplied.

## Review items

Dawn Foster, Annania Melaku and Alin Jerpelea now use direct images supplied and labeled by the page owner. Fernando Eugenio Correa and Ana Jiménez Santamaría also use direct images supplied by the page owner. Diego Mastroianni’s direct photo has also been supplied and added. Every leadership card now has a locally stored photo.

Slack display names remain missing for Ana Jiménez Santamaría, Fernando Eugenio Correa, Georg Kunz and Annania Melaku.

The roster covers the three working groups supplied for this update. OSPO Book leadership has not been supplied and is not guessed.

## Validation

Built with Hugo Extended 0.126.3, the version series declared by the repository. Desktop and 390px mobile layouts reviewed. All local destinations linked from the directory, including the navbar and footer, resolve in the generated site. The repository lockfile fails `npm ci` on macOS due to a non-optional Android Rollup package; validation used temporary PostCSS dependencies without changing the lockfile.

Swastik’s photo was replaced with the direct image supplied by the page owner. Ashley’s image was verified against the primary profile image, using its matching name and top-card element rather than unrelated recommendation images.
