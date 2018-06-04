# The TODO group website assets

This repo houses the assets used to build the website for the [TODO Group](https://todogroup.org/) at https://todogroup.org.

## Building the site

This site is built using the [Hugo](https://gohugo.io) static site generator and hosted on [GitHub Pages](https://pages.github.com/). In order to build the site, you'll need to install Hugo:

```bash
# macOS
$ brew install hugo
```

## Running the site locally

If you want to edit the content of the site locally:

```bash
$ hugo server --disableFastRender --ignoreCache
```

This will run the site on `localhost:1313`. Just navigate to http://localhost:1313 in your browser and you should see the site running.

## Developing the site's CSS

Things work a bit differently if you want to develop the site's CSS. In that case, you'll also need to have [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) installed (as well as Hugo). First, install all Node.js-related assets:

```bash
$ npm install
```

Once those have been installed:

```bash
$ node_modules/.bin/concurrently "make develop-assets" "make develop-site-content"
```

This will run both Hugo *and* a [GulpJS](https://gulpjs.com/) build pipeline that builds the site's Sass files into CSS. You can then modify the `.scss` files in [`source/scss`](source/scss) to modify the site's CSS.
