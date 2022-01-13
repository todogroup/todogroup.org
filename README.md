# The TODO group website assets

This repo houses the assets used to build the website for the [TODO Group](https://todogroup.org/) at https://todogroup.org.

## 📝 Adding resources

### New OSPO Use Cases

The TODO OSPO Case Study initiative features real-world use cases and the impact OSPO Programs and open source are having on an organization. OSPO Use Cases build narratives around open source organization’s journey that includes Open Source Program Office highlighted activities, organizational structure, best practices, goals, and success stories, showcasing participating organizations as leaders in the OSPO field.

Please check the [OSPO Case Study Submission Guidelines](https://github.com/todogroup/todogroup.org/files/7862471/OSPO-casestudy-submission-guidelines.pdf) to get started.

Some OSPO Use Cases can be found at [TODO website](https://todogroup.org/guides/) or at the [OSPO Guide](https://landscape.todogroup.org/guide#ospos-in-practice)

### New TODO Guides

Please chech the [TODO Guides Contributing Guidelines.pdf](https://github.com/todogroup/todogroup.org/files/7862756/TODO.Guides.Contributing.Guidelines.pdf) to get started


## 🧩 Building the site

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

