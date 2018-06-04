---
title: "TODO Tools Hackathon June 2017"
author: todogroup
date: 2017-06-26
---

We recently held a TODO Tools Working Group hackathon at Microsoft. There were about a dozen people from half a dozen different organizations. We ended up with three groupings of hacking around: repository linting, GitHub portal and GitHub data/crawling. Below is a summary of the work that was done and some next steps.

### Repo Linter ([https://github.com/todogroup/repolinter](https://github.com/todogroup/repolinter))

Repo Linter is a a simple linter to check for open source quality: [https://github.com/todogroup/repolinter](https://github.com/todogroup/repolinter). We initially evaluated using [https://github.com/basicallydan/forkability](https://github.com/basicallydan/forkability) but it wasn’t designed for extensibility and isn’t being actively maintained.

Rules:

* Most rules boiled down to file existence (e.g. README, LICENSE, etc.) or file contents (e.g. source files contain license header).

* Language-specific rules (requires linguist) such as verifying that NodeJS projects have a package.json file.

Next steps:

* Performance improvements.

* More structure around rule config and results (e.g. provide advice on how to fix, warnings vs errors vs suggestions).

### Ghcrawler ([https://github.com/Microsoft/ghcrawler](https://github.com/Microsoft/ghcrawler))

The Crawler team spent some time looking at the overall structure and operation of Crawler.  Out of the discussion came a set of topics

* Different store implementations (in particular Elastic Search and Postgres)

* Refactoring the CrawlerFactory to be more extensible and understandable

* A simplified mechanism for transforming the JSON responses from GitHub into tabular rows for storage in table oriented stores

* Testing the crawler on GitHub Enterprise

There was work on a ElasticSearch store implementation (see this [fork](https://github.com/craigez/ghcrawler)). We eventually got something running and after some refinement that should get merged into the upstream repo quickly! We also did an experiment to get onto Cassandra as a data store.  We eventually decided that Cassandra was not the best technology for the task.

We also took a look at the CrawlerFactory (main code that composes and configures the crawler) and (rightly) gasped (not in a good way).  We spent quite a bit of time talking about refactoring that for composability and understanding.

We’re also looking at how to get Postgres in as a store to enable better querying.  We decided to head towards using a "delta store" (simplified wrapper for normal stores).  We further broke down that work into converting JSON to tabular rows, and the row storage.  Mostly this was thought and discussion, laying some groundwork.  The refactoring of a JSON to table converter would be useful in other places as well.

Next steps:

* Get the prototyped stores hardened and contributed into the repo

* Iterate on the refactoring of the CrawlerFactory

* Prototype the mechanism for projecting JSON onto tabular rows (there must be an NPM for that)

* Initial tests on GitHub Enterprise were promising.  There did turn out to be at least one issue that is being investigated by one of the team.

### GitHub Portal ([https://github.com/microsoft/opensource-portal/)](https://github.com/microsoft/opensource-portal/)

The GitHub management portal team took a look at what it would mean to expand the usefulness of the technology to additional authentication and data systems.

While the portal implementation builds around the common ‘passport’ family of authentication libraries for Node.js, it was very much designed and tightly coupled to both Microsoft’s Azure Active Directory and GitHub authentication. The team hacked on two different approaches by adapting the system to work as a proof-of-concept with a reverse proxy auth passport library and also a more standard OAuth2 library, allowing in this case integration of auth for Salesforce (David) and Dropbox (Luke). Jeff W (Microsoft) also validated an approach with GSuite/Google auth.

The outcome of this work was an initial thinking around making these components more approachable and pluggable, and then also a desire to use Postgres as a data store option - this will require a provider model and will be a focus going forward to enable this choice.

You can find a number of issues around refactoring and other conversations being created within the public GitHub repository here: [https://github.com/microsoft/opensource-portal/issues](https://github.com/microsoft/opensource-portal/issues)

It was great having some participation in looking at the management portal as an early attempt to get more TODO members involved. From here there will also be some thinking put into refactoring and componentization that would enable value-add components (such as invitation expiration, digest generation, cache helpers, automatic team permissions, linking) to be individual opt-in components in a larger suite of GitHub management and open source tools, without needing to adopt a monolith. Members interested in participating should reach out to the hackathon group’s members or open an issue and start a conversation.

###

If you're interested in hacking on these type of tools, please check out the respective repositories for contribution ideas and if you want to hack F2F with us next time, please consider [joining the TODO Group as a member](mailto:info@todogroup.org).
