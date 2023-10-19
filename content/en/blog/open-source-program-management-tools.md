---
title: "Open Source Program Management Tools"
author: todogroup
date: 2016-03-29
---

No matter the size of the organization, running an Open Source Programs Office requires staying on top of several things at once. While the processes between organizations might vary, many of run into a common set of needs and have subsequently developed a set of tools to manage corporate scale open source needs. As part of the TODO Group, we have started sharing those tools with each other and the open source community at large.

## Corporate Scale GitHub Management

Managing a company's presence on GitHub is a deceptively complex challenge -- maintaining proper permissions, tracking team members, and understanding the many (potentially thousands) repositories.  Something as simple as understanding who's who is hard.  If an employee is going to be working on open source, then you need to map their corporate identity to their external Github account. This mapping is important for several reasons. Using two-factor authentication (2FA) is a best practice for everyone and a requirement for many companies.  Knowing the id mapping enables 2FA tooling and auditing.  If an employee has administrative rights over company teams or orgs, and that employee leaves the company, they may need to have their rights adjusted. If a company has multiple orgs on GitHub (not uncommon when companies acquire each other over time), knowing an employee's public id quickly resolves any questions about code provenance and removes the need for them to sign a Contributor License Agreement or CLA.

Similar topics show up in org/repo/team creation and management where issues of security, compliance and scale come to play.  Who can create teams?  What licenses are used?  Can they be marked public? How do you search across dozens of orgs and thousands of repos?  How are settings and permissions managed across many repos and orgs?  These are all reasonably easy for a few dozen users/teams/repos.  But when you scale to dozens of orgs, hundreds of teams and thousands of repos and users, the challenge quickly gets out of hand.

The Azure team from Microsoft has [released an open source portal](http://www.jeff.wilcox.name/2015/11/azure-on-github/) that addresses many of these issues. The portal on-boards employees through a workflow that creates the mapping between their corporate ID and their GitHub.com id, configures two-factor authentication, and adds them to a base set of orgs and teams.  The portal also suggests teams and projects that the user might want to join, provides the capability to audit 2fa use, facilitates identifying and removing employees who are no longer with the company, and more. This portal is in use today across all of Azure (3 orgs, hundreds of repos, 2000 users) and is being rolled out to all of Microsoft (40+ orgs, 4-5,000 repos and up to 50,000 users).

### Mention Bot

Employees will often develop more focused tools to assist in the development process, often in the form of a bot for GitHub or Slack. An example of this is the [Mention Bot](https://github.com/facebook/mention-bot)
recently released by Facebook. Whenever a pull request is submitted, this bot evaluates the blame information and tags the developers who are most likely to be most qualified to perform a code review based on who most recently touched the relevant parts of the code.

## Project Statistics and GitHub Data

Open Source Programs Offices also need to report on how individual open source projects are performing or being received. It's easy to look at a project on GitHub and evaluate its health based on number and age of issues, the status of pull requests, how recently the project was updated, stars, forks, and other activity. While this process is easy for a single project, it becomes time consuming when a company has several pages of projects.

Amazon has [released the dashboard](https://github.com/amznlabs/oss-dashboard) they use to track this information. Using the tool, one can quickly see if projects are seeing activity or not, how popular projects are, identify if projects need some guidance or additional work, and provides the capability to plug in custom reports. The dashboard also provides some auditing capability for user accounts and 2fa.

Netflix's open source program spans multiple years shaping the architecture of public cloud.  Recently, Netflix open source has been evolving to focus their efforts on improving the community health of their open source offerings.  They have updated their [website](https://netflix.github.io) to organize projects into consistent areas that align well with their internal engineering organizations.  Each of these areas have shepherds that focus on the health of the area using a tool they open sourced - [Netflix OSS Tracker](https://github.com/Netflix/osstracker) - which displays ownership and health metrics across an entire Github organization.  To power this tool, tags were introduced across their open source repositories that clearly indicate the lifecycle of any project (active vs. maintenance vs. archived).  For more information, see their recent OSS Meetup [video](https://www.youtube.com/watch?v=5s-SS_aXoi0) presentation.

Also, PayPal released a proof of concept tool called [Gander](https://github.com/paypal/Gander)
that provides and open source metrics dashboard. On top of the basics metrics, the tool allows the ability to sort by number of open issues and pull requests. If pull requests or issues are accumulating, it can be an indicator that project ownership has fallen by the wayside.

### GHTorrent
Insights into the behavior and state of open source projects is critically important for both project teams and potential consumers.  Open Source Programs Offices often spend tremendous effort promoting best practices and effectiveness within the projects their company drives.  Similarly, taking a dependency on an open source project can have very deep implications for a company (legal, security, support). Operating confidently in open source requires insights.

[GHTorrent](http://ghtorrent.org) is an open source research project run by Georgios Gousios ([@gousiosg](https://github.com/gousiosg)) that archives all public GitHub events, all entities referenced from those events (transitively), and a set of links derived from these events and entities.  The data is stored in a combination of MySQL and MongoDB and goes back in time to 2012.  This is phenomenal resource for open source communities.  It is easy to get raw data on GitHub usage as @ghtorrent tweeted recently:

{{< tweet user="ghtorrent" id="692226721836306432" >}}

The data enables deeper insights such as the [interactive programming language usage site](http://langpop.corger.nl/) shown below.

![](/img/blog/ght1.png)

Microsoft has started working with the GHTorrent team to enable the use of this data more broadly. The first step was to ensure the [GHTorrent.org](http://ghtorrent.org) infrastructure is on solid ground.  It is now running on Azure sponsored machines with enough power to ensure smooth operation.  The next step, underway now, is to make the data widely available and consumable.  In addition to the current daily database dumps, they are working to both make all of the data immediately available as it arrives, and pump it all into [Azure Data Lake](https://azure.microsoft.com/en-us/solutions/data-lake/).  With the info in Data Lake, users can apply big data technology like Hadoop, HDFS, Spark, HBase and so on to develop the insights they need without having to make and manage their own copy of the ~10TB of data.  The team is also looking at enabling personal GHTorrents for more focused use on private repositories.

## Other Tools
Outside of what the members within the TODO Group have developed, there are other tools that Open Source Programs Offices may learn from or find valuable.

### Zalando
Zalando has [released a tool](https://github.com/zalando/catwatch) that provides an open source metrics dashboard called CatWatch. This dashboard gives the company the ability to view which projects are popular on GitHub. The projects must self-identify to be shown on the list, you can see it in action at https://zalando.github.io

### Bitergia
Bitergia have released several tools in this area. The first tool is a pairing of [MetricsGrimoire](https://github.com/MetricsGrimoire) toolkit and [VizGrimoire](https://github.com/VizGrimoire) that can be used to generate metrics and insights into project health. These tools can include data from source control systems other than GitHub, issue tracking systems like bugzilla, JIRA, mailing lists and other data sources related with Open Source and Inner Source development.

They are updating Metrics Grimoire to a new toolkit ([GrimoireLab](http://grimoirelab.github.io)) and you can follow its progress in [their blog](http://blog.bitergia.com). It provides actionable metrics dashboards through a customized Kibana dashboard, but data can be plugged to regular Kibana or other BI tools.

These solutions are best suited for projects with a lot of different data sources repositories. They recently released a GitHub focused service running from [biterg.io](http://biterg.io) that is free for a small number of projects.

### Join Us

This certainly isn't a comprehensive list of the tools available. We're putting a list of the tools we know about on GitHub. If you see a tool missing, submit a pull request against our list to get your tool added.

If you're interested in corporate scale open source tooling and collaborating with other companies who are building open source programs, consider [joining](http://todogroup.org/join/) the TODO Group. We look forward to collaborating with you!
