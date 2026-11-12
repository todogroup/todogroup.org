[![Netlify Status](https://api.netlify.com/api/v1/badges/2fe3c42f-494a-4377-9088-8a2d4aad9556/deploy-status)](https://app.netlify.com/sites/todogroup/deploys)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Site](https://img.shields.io/badge/Static%20site-HUGO-%23FF00FF)](https://gohugo.io/)

# The TODO Group website

The [TODO Group](https://todogroup.org/) website serves as the central hub for our community, hosting resources, blog content, guides, and information about OSPOs (Open Source Program Offices). All contributions should align with our mission to provide vendor-neutral, practical resources that help organizations run effective open source programs.

## Contributing 

Please read our [contributing guidelines](https://github.com/todogroup/todogroup.org/blob/main/CONTRIBUTING.md) to get started

## Development Setup

This site is built using the [Hugo](https://gohugo.io) static site generator and hosted on [Netlify](https://netlify.com). The site uses the [Dot-Org Theme for Hugo](https://github.com/cncf/dot-org-hugo-theme) as a base and then has its own customisations.

To build or locally develop the website, you need [git](https://git-scm.com) and [Node.js](https://nodejs.org/en) 22, the version Netlify uses in production.

You don't need to install Hugo yourself. `npm install` installs Hugo **extended** 0.126.x through the [`hugo-extended`](https://www.npmjs.com/package/hugo-extended) npm package, and the npm scripts use it.

If you don't have Node.js installed, you can install it with [brew.sh](https://brew.sh) on macOS:

```bash
brew install node
```

Then follow these instructions:

1. Fork this repo, then clone your fork to a local directory on your computer.

2. Go to the new directory and pull in the theme:

```bash
git submodule update --init --recursive
```

3. Install dependencies:

```bash
npm install
```

4. Start the local server with live reload:

```bash
npm run start
```

Then open http://localhost:1313. The local server also shows drafts and posts with a future date.

To check a full build, run:

```bash
npm run build
```

### Other npm commands for working with a local instance

- `npm run dev:start` - Same as `npm run start`
- `npm run dev:start:with-pagefind` - Builds the site and the Pagefind search index, then starts the local server, so site search works locally
- `npm run dev:build` - Same as `npm run build`
- `npm run sync:events` - Refreshes `data/ocg_events.json`, the OSPOlogy events and meetups listed on [/community/events/](https://todogroup.org/community/events/), from [TODO Group on OCG](https://ocgroups.dev/todo). Which tab each OCG group appears under is set in `data/ocg_groups.json`. Official events that are not on OCG go in `data/ospology_events.json`.

### Netlify builds

Netlify builds production with `make production-build` and deploy previews with `make preview-build`. See `netlify.toml` and the `Makefile`. `make serve` is another way to start a local server, but it uses the Hugo installed on your system, not the one from npm.

#### To run in docker

As mentioned above, fork and clone this repository, run `git submodule update --init --recursive`, then run following:

```bash
./run-hugo-in-docker.sh
```

This command should give an address you can visit on your local machine to see the local copy of your site. Typically this is `localhost:1313`. Just navigate to http://localhost:1313 in your browser and you should see the site running.

If modifying the theme files, you should never edit the theme that is imported via Git Submodule, as otherwise the changes will be overwritten or lost the next time the theme is updated. Changes should be made in override files inside the root directory as this will override the theme directory. [Read docs](https://gohugo.io/getting-started/directory-structure/).

### Updating the theme

Some brief notes on how to update the theme:

From the site root:

```
git submodule init
git submodule update
cd themes/dot-org-hugo-theme
git fetch
git checkout main
git pull origin main
cd ../..
git add themes/dot-org-hugo-theme
git commit -m "Updated submodule to the latest version of dot-org-hugo-theme" -s
```
