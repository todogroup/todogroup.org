---
title: Why we run an open source program - Walmart Labs
author: dalmaer
date: 2015-02-24
---

_Over the coming weeks, we are publishing a series of blog posts from TODO Group members, explaining why each company has decided to run programs to publish, use, and improve open source software - and the benefits that result. First up, Dion Almaer ([@dalmaer](https://twitter.com/dalmaer)) with [Walmart Labs](https://github.com/walmartlabs)' perspective._

## Why would a company spend resources on an open source program, and why is it really needed?

These are great questions, and my point of view has probably changed in some ways over time. I have been involved in open source since the start of my engineering career, participating with great open source foundations such as Apache, and then seeing a prototypical example when I got to join [Chris DiBona](https://twitter.com/cdibona)'s open source program office at Google. This is truly learning from the master. Not only is Chris on the list of "I would work for that guy again in a heart beat!" but he was fantastic at providing the frameworks that allowed engineers to get the most out of open source, while also helping the business.

Back then, the tooling and pervasiveness of open source wasn't quite where it is today, hence [Google Code](https://code.google.com/) and other solutions coming out of the open source group.

Let's fast forward to today.

## Your company is in a fight for great engineers

There are great engineers all over the world, and your company is probably fighting to get as many of them as possible. The supply doesn't meet demand, so it is important to do everything you can to help attract, and retain talent.

The majority of great engineers have GitHub profiles and have been working on projects there (open source and otherwise). The stack has become ubiquitous, and the majority of engineers either like it, or are "happy" enough with it. There are a few grey beards that rant on about Perforce or something else... but that is pretty rare :)

>One quick anecdote: a great engineer that I know well was recruited to work for a top class company. They basically lost him when he was told that he would be working with an old Java stack and his workflow would not be git based. The tools matter.

Your use and creation of open source are recruiting tools. If you are using React, then you have a pool of developers who are probably looking to work on projects using that technology. If you created React, then you will have a great opportunity finding people to work on that core team!

At Walmart Labs we had a similar situation. I joined to create the mobile arm of Walmart Labs. We needed to build an orchestration services layer because the current backend didn't grok mobile at all. What stack should we use?

We decided upon [node](http://nodejs.org/) because not only was it a good technical fit, but we could bring in a world class team of engineers who were desperate to build very large scale node services.

Compare the following:

> Hey, would you want to build node services that need to handle the traffic of a Walmart Black Friday and prove to the world that node is ready?

vs.:

> Hey, would you like to build another Java services implementation that routes some stuff?

The green field enabled the team to do great work and I am so incredibly proud of the end to end workflow they have created.

This was several years ago though, and node was very bleeding edge. We found bugs in node itself (sometimes it really *is* a `s/compiler/VM/` bug) and the frameworks weren't ready for our use cases. This is why the [hapi](http://hapijs.com/) node framework was born and the variety of modules that have spun up around it.

We needed to build out that team, so now we got to find people, but had the advantages that:

- We had a lot of developers in the hapi community to draw from
- A lot of the work was the magical balance of open source but also used to solve real problems and deliver business value

The benefits of open source shine through here. When you are recruiting talent you need a process to filter the people who will work well (and for them to filter you out too!).

An interview process is dating. It is hard to know if you want to marry after a date or two. The best way that I have found to know if the match will last, and be fulfilling, is to date for longer and get a better feel for how marriage will be!

When you interview with a team that has open source at its core, you can hack together on issues in the queue and really get a feel for things. It is a fantastic advantage.

## Engineers are the artists of our generation

When you think of IT shops I doubt you then correlate that though to "quality software product development". If you are building a culture of great software engineering, you need to have a way to enable great engineers to thrive. To me this means autonomy with the right guidelines to be freeing constraints.

If the open source program office is doing its job right, it fits this mold. The bad ones are run solely by lawyers and are just about licensing and liability. Those are important topics and you shouldn't ignore them, but how can you help your engineers not have to spend time in that world and instead be building solutions?

A great open source process will have checklists that can quickly be zipped through and free any engineer in the company to go from A to B. We are talking about how to consume open source software, and how to create it and maintain it.

The open source group can have a lot of leverage as it develops tools that the individual product groups shouldn't have to spend cycles on such as:

- How to know what open source is being used
- Flag any issues
- Give feedback to the teams "that version isn't recommended due to X"
- Help market projects (online, events, etc)
- Give leads a few of the health of their project
- Help leads understand the community around their project
- Defaults and simple processes for how people contribute and participate

GitHub has some of these tools, but only a subset.

## Remote working

The community is having a great discussion around "remote work". You see the dichotomy of companies such as Slack who build products that happen to enable better remote communication, but who hire people to co-located buildings.

As soon as you get beyond a few people, you are working "remotely". If you aren't in the same room you will have your main workflow happening through tooling. Yes, you can get together to meet face to face on topics, but that isn't your general workflow.

Isn't it interesting that the companies that are so bullish on remote working come from open source roots (e.g. [DHH](https://twitter.com/dhh) with Basecamp and Rails, [Matt](https://twitter.com/photomatt) with Automatic and Wordpress)? Open source projects have been living the remote dream for donkey's years and have the first huge successes. It is so natural for them to then embrace that working style in corporate life. Either they just know how to make it work (and know the advantages too), or they are building on open source software so the best engineers for the job are already geographically diverse!

I personally think that remote working is only going to grow in scope, and open source can help pave the way.

In general it can bring in new tools and process to your company. Diversity is crucial, and a well run open source effort can help the company experiment with technology, processes, and tools.

## Leverage

There are a slew of areas of leverage that you get with open source. Take hapi again as an example: we have many large companies testing and running the framework in the wild. They also know that hapi is running in production for Walmart Labs.

We all get to benefit from bugs and feature development that happens through the community. A great synergy.

## Paying back: It is the right thing to do

We are all standing on the shoulders of giants. Thanks to the great people who worked on Linux and Apache and Node and JavaScript and PostgreSQL and (insert a freaking long list here!).

I feel like it is my duty to pay it forward. It doesn't feel right to me to grab that work and then hide away everything that I am doing. It isn't that you are doing anything wrong (depending on licensing etc ;) but it just doesn't feel right to me.

This is why I am bullish on open sourcing anything that is not proprietary, and which is generally useful.

But before you open source anything, you have to remember that it is far from "free". If a team is going to throw some software over the wall, then it isn't for me. In my mind you are stepping up to the community to say that you are there to support it in some way. You had better have good documentation. You had better have a process for contribution. Be a good citizen.

It takes time and resources to build a great open source team, so you shouldn't take it on lightly, but I believe that in this day and age I don't know if you could build out a matrix and conclude "we can afford not to".
