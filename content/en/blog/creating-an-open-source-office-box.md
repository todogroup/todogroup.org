---
title: Creating an Open Source Office at Box
author: bvanevery
date: 2015-07-15
---

_This time around we feature Benjamin VanEvery ([@bvanevery](https://twitter.com/bvanevery)) from [Box](http://opensource.box.com) on how a company new to open source gets started developing an Open Source Office. The goal of this post is to shed some light on starting up an Open Source Office by sharing experiences at Box._

Several past blog articles have focused on why each of our companies got involved in open source. Each has been enlightening to read through and get a glimpse of what open source means to the individual companies how it impacts their cultures. An important topic that hasn't gotten much attention is how a company new to Open Source gets started.

# Getting Off the Ground

For open source to be successful in any company, it needs to have advocates. At Box, our first step was establishing an open source committee made up of engineers passionate about the open source community and giving back. This accomplished two things. First, it gave the engineering org a single place to look for answers, guidance, or brainstorming support. Second and more importantly it gave legitimacy to the program.

The committee's first order of business was to define our presence on the web. At that point, our web presence consisted of a scattering of projects hosted on GitHub, each with varying degrees of activity, documentation, and ease of adoption. We began an effort to clean out stale repositories and simultaneously kicked off a project to build the opensource.box.com microsite (hosted by gitub.io).

The microsite established a landing page for our open source efforts. We could highlight our flagship projects. Unrestricted by the GitHub UI, we could tap the creativity of our designers and programmers to create an experience unique to us.

# Building Momentum

With all that effort invested in cleaning up our presence, we didn't want things to slide back into disrepair. So, we locked down access to create new repositories to just the OSS committee. We then defined a set of requirements for all new open source projects, which is still in use today. No new project can be open sourced without satisfying the following:

* Have the proper license files and copyright
* Have a defined owner who will maintain the project and respond to Issues and Pull Requests
* Have documentation
* Have passing unit tests
* Have easy to follow installation instructions accompanied by how to run the unit tests
* Follow language best practices and conventions
* Not expose any security threats
* Get approval from our legal team and business owners

Since we're obsessed with process & automation, we created a workflow within JIRA to facilitate the approval process. Any engineer who wants to open source a project will create a JIRA ticket, which is then ushered through the workflow by the OSS committee. The ticket must specify the group of engineers responsible for owning the project. At each stage of the JIRA workflow, the ticket is reviewed by the relevant teams for each of the requirements above.

So far this process has served us well. We had some bumps in the beginning and had to assign an SLA to the open source committee so that tickets wouldn't get dropped. It has given us visibility, auditing, and confidence.

After a project goes live, we trust our engineers to maintain it and respond to issues and pull requests accordingly.

Every project starts out healthy and growing. As time goes by a project matures and may plateau or no longer be relevant. We implemented a straightforward badging convention for each of our projects to help communicate this to project consumers.

# Accepting Changes from External Contributors

The two major things that we consider critical with Pull Requests are legal protections and passing the build. We wanted to make both of these things easy for both external contributors and our engineers.

We maintain legal protections for users of our projects by requiring that each contributor to a Box open source project sign our Contributor License Agreement. It quickly became clear to us that manually enforcing this was going to be a headache. We wrote a bot that uses GitHub webhooks and verifies that each pull request author has signed the CLA. We haven't open sourced this yet, but we do plan to. Next, we configured Travis CI to confirm that each pull request will pass the build.

These two automation steps give pull requests owners immediate feedback on any obvious red flags, saving both them and the project maintainers precious time.

# Building an Open Source Culture

We've come a long way, but there's further to go. When we launched the program, there was a surge of interest, but the unseen challenge was in shifting how we prioritized and measured the value of our work. All sorts of people wanted to get involved or open source a small tool, but few of them were able to shift their workload in order to do so. Getting the support of engineering leadership has been a critical element.

We're excited about what we've been able to accomplish and we look forward to seeing the projects emerging from other businesses in situations similar to ours. Being a part of the open source community is a rewarding experience and is totally achievable by companies working in enterprise capacities. If you have ideas to contribute or questions, I'd love to hear from you! You can find me on Twitter at [@bvanevery](https://twitter.com/bvanevery).



