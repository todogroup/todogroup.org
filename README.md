[![Netlify Status](https://api.netlify.com/api/v1/badges/2fe3c42f-494a-4377-9088-8a2d4aad9556/deploy-status)](https://app.netlify.com/sites/todogroup/deploys)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Site](https://img.shields.io/badge/Static%20site-HUGO-%23FF00FF)](https://gohugo.io/)

# The TODO group website assets

This repo houses the assets used to build the website for the [TODO Group](https://todogroup.org/) at https://todogroup.org.

## 📝 Adding resources

### New OSPO Use Cases

The TODO OSPO Case Study initiative features real-world use cases and the impact OSPO Programs and open source are having on an organization. OSPO Use Cases build narratives around open source organization’s journey that includes Open Source Program Office highlighted activities, organizational structure, best practices, goals, and success stories, showcasing participating organizations as leaders in the OSPO field.

Please check the [OSPO Case Study Submission Guidelines](https://todogroup.org/guides/casestudies/todo-contribution-guidelines/) to get started.

Some OSPO Use Cases can be found at [TODO website](https://todogroup.org/guides/) or at the [OSPO Guide](https://landscape.todogroup.org/guide#ospos-in-practice)

### New TODO Guides

Please check the [TODO Guides Contributing Guidelines](https://todogroup.org/guides/todo-guides-contribution-guidelines/) to get started

### New Whitepapers

Please check the [TODO Whitepaper Guidelines](https://todogroup.org/guides/whitepaper-guidelines/)

## 🧩 Building the site

This site is built using the [Hugo](https://gohugo.io) static site generator and hosted on [Netlify](https://netlify.com). In order to build the site, you'll need to install Hugo:

```bash
# macOS
brew install hugo
```

You'll also need to pull in the theme:
```
git submodule update --init --recursive
```

- which theme is used
- how to update the theme
- what files you should edit to customise the look

## Running the site locally

TODO: Requires update as of 15th August 2023

If you want to edit the content of the site locally:

```bash
hugo server \
  --disableFastRender \
  --buildDrafts \
  --buildFuture \
  --ignoreCache
```

This will run the site on `localhost:1313`. Just navigate to http://localhost:1313 in your browser and you should see the site running.

