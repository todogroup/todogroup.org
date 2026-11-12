# AGENTS.md for todogroup.org

Instructions for AI coding agents working on this repo.

## Run the site locally

Requirements: git and Node.js 22 (the version Netlify production uses).
You do **not** need to install Hugo yourself: `npm install` provides
Hugo **extended** 0.126.x through the `hugo-extended` npm package.

```sh
git clone https://github.com/todogroup/todogroup.org.git
cd todogroup.org
git submodule update --init --recursive
npm install
npm run start
```

Then open http://localhost:1313. The theme is a git submodule, so the
`git submodule` step is required.

`npm run start` builds drafts and future posts and reloads on save.
A first build takes a few seconds.

If `hugo` is not found after `npm install`, npm may have skipped the
`hugo-extended` install script. Run `npm install-scripts approve hugo-extended`,
then `npm install` again.

## Check a full build

```sh
npm run build
```

## Things that look wrong but are expected

- Warnings like `i18n|MISSING_TRANSLATION` and `Template ... is unused` are normal.
- `package.json` is named `dot-org-hugo-theme`: it was copied from the theme. It is still this site's package file.

## Build paths

- Local development: the npm scripts above.
- Netlify (production and previews): `make production-build` / `make preview-build`, see `netlify.toml` and `Makefile`.

## Where things are

- Content: `content/en/`, `content/ja/` and `content/zh-CN/`.
- Blog posts: `content/en/blog/`. Blog images: `static/images/blog/`, referenced as `/images/blog/...`.
- Site config: `config/`.
- Theme: `themes/dot-org-hugo-theme` (submodule of `cncf/dot-org-hugo-theme`). Don't edit it; override files in the repo root instead.
- Contribution rules: `CONTRIBUTING.md`.
