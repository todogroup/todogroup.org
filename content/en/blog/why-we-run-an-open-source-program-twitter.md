---
title: Why we run an open source program - Twitter
author: caniszczyk
date: 2015-03-24
---

_This is the fifth in a series of blog posts from TODO Group members, explaining why each company is committed to open source software. This week, we feature Chris Aniszczyk ([@cra](https://twitter.com/cra)), who's in charge of open source at [Twitter](https://twitter.com/twitteross)._

Since Twitter’s early days, [open source has been a pervasive part of our engineering culture](https://blog.twitter.com/2009/building-open-source). Every Tweet you send and receive touches a plethora of [open source software](https://engineering.twitter.com/opensource) on its journey from our Linux-based infrastructure to your device.

At our scale, it’s simply a no-brainer to use open source software. It allows us to customize code to meet our fast-paced engineering needs as our service and community grow. In the past, it’s helped us move from a monolithic Ruby on Rails stack to a more [modern service oriented stack built on the JVM](https://blog.twitter.com/2013/new-tweets-per-second-record-and-how). You can simply move faster when you have access to the source code and you’re not beholden to a proprietary vendor potentially trying to lock you into their closed ecosystem. It’s also usually [higher quality](http://www.zdnet.com/article/coverity-finds-open-source-software-quality-better-than-proprietary-code/) than proprietary software.

Furthermore, I’m a strong believer in that innovation happens through collaborating in the open and to quote Tim O'Reilly ([@timoreilly](https://twitter.com/timoreilly)):  "...empowerment of individuals is a key part of what makes open source work, since in the end, innovations tend to come from small groups, not from large, structured efforts."

**So why run an open source program?**

Four years ago, I had a fantastic opportunity to join Twitter to create an open source program ([@TwitterOSS](https://twitter.com/twitteross)) from scratch. One of our main goals was to ensure that, as a company, we were good open source citizens: from the basics of respecting open source licenses to making it easier for engineers to open source code and ensuring we’re giving back to the open source projects we depend on. Furthermore, we also wanted to be diligent in investing engineering time to open source projects that were important to us.

It can be argued that open source software is just free for consumption. While that may be true on some level, there is always a hidden cost. When you use an open source project, you will likely need to change (or fork) that piece of software to meet your needs. In order to not suffer the expensive consequences of maintaining a long term fork internally, it’s usually in your best interest to push changes upstream. Working with upstream can help minimize long term maintenance costs and keep you up to date with any security fixes. It’s not only the right thing to do, it’s the smart thing to do as it makes business sense in the long run.

Having an open source program office at your company can help you build the relationships to make it easier to upstream code to projects on top of ensuring code keeps flowing upstream. From my experience, many companies are reluctant to push changes upstream because the engineering organization is too busy focusing on internal issues or suffers from an over protective legal organization.

**Community doesn’t come for free**

There’s a common belief that if you open source something, people will show up and contribute magical patches to your open source project. While I wish that were true, the mantra of *"if you build it, they will come"* doesn’t really apply to open source projects, you have to put in the hard work of community building to see growth over the long term.

You can think of open source community management as tending a garden. For your garden to continue to grow, you have to water it and ensure there is enough sunlight. In the open source context, that means you have to invest in things like hosting events, speaking at conferences, reaching out to contributors, writing documentation to lower the barrier of entry to new contributors. There are times when you may have to pull out some proverbial weeds as not all community growth is a good thing, you can have bad seeds (see the excellent @dberkholz [presentation](http://www.slideshare.net/dberkholz/assholes-are-killing-your-project-fosdem) on this topic).

At Twitter, our open source program has a team of developer advocates focused on growing open source ecosystems which are important for us to ensure they thrive and evolve to our benefit. This includes making it easier to contribute and ensuring contributors feel welcome. In the end, happier contributors will contribute more.

**Diversity is the spice of life**

Another aspect of community growth is promoting the diversity of committers. While growing the community is great, having diverse set of committers from different backgrounds and companies helps set you up for long term success. In biology, there is a concept of the [diversity-stability hypothesis](http://en.wikipedia.org/wiki/Ecological_effects_of_biodiversity) where in simple terms, the more diverse a community is, the more stable and productive it is. A great example of this in nature are coral reef ecosystems where biodiversity and [productivity thrive](http://en.wikipedia.org/wiki/Coral_reef#Biodiversity). On top of that, [research](http://www.scientificamerican.com/article/how-diversity-makes-us-smarter/) shows that diversity makes us more creative, diligent and innovative in our pursuits.

At the end of the day, community development should be part of your open source project’s regular duties and in my opinion, it’s as important as writing code. While every developer should be doing it, having developer advocates dedicated to this community development art form will benefit you in the long run.

**Hiring the best talent and scaling engineering teams**

It’s always a challenge to hire great people. One benefit of working in the open is that you’re able to scale your engineering efforts outside the company via wider testing and contributions that you wouldn’t be able to make on your own. While not everyone may want to join your company, they may have a need to use and contribute to a project you have developed or need.

By working in the open, you can potentially hire folks who contribute to your open source projects or the projects you depend on. For example, at Twitter we are a large consumer of [Scala](http://scala-lang.org/) for our backend infrastructure services and do our best to share our experiences with the language. We have not only [open sourced Scala-based projects](https://blog.twitter.com/2011/finagle-a-protocol-agnostic-rpc-system), but we have open sourced guides on how to effectively write code in the language (see [Effective Scala](http://twitter.github.io/effectivescala/)) and open sourced training materials (see [Scala School](https://twitter.github.io/scala_school/)) as well. Any contributor to our open source projects is already familiar with a bit of software that we use internally and would require less training if they joined the company.

**Standing on the shoulders of open source giants**

Many of our companies are standing on the shoulders of open source giants, from Linux to OpenSSL to MySQL and countless other projects. All these open source projects are a limited resource, especially if the majority of users don’t give back. We saw what happens first hand when companies don’t invest enough in open source with the [heartbleed OpenSSL issue](http://www.wired.com/2014/04/heartbleedslesson/).

While it’s easy to just use without giving back, it’s really in your best interests to pay it forward to ensure that these projects continue to improve and stay healthy. If you’re at a company that you believe isn’t utilizing open source effectively or giving enough back, I highly encourage you to petition them to start an open source program. It will not only help your company in the long run, it will help all of us build a sustainable community.

