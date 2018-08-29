# The TODO group website assets

This repo houses the assets used to build the website for the [TODO Group](https://todogroup.org/) at https://todogroup.org.

## Building the site

This site is built using the [Hugo](https://gohugo.io) static site generator and hosted on [Netlify](https://netlify.com). In order to build the site, you'll need to install Hugo:

```bash
# macOS
brew install hugo
```

## Running the site locally

If you want to edit the content of the site locally:

```bash
hugo server \
  --disableFastRender \
  --buildDrafts \
  --buildFuture \
  --ignoreCache
```

This will run the site on `localhost:1313`. Just navigate to http://localhost:1313 in your browser and you should see the site running.
