---
title: National Instruments
---

In 2013, National Instruments grew its open source footprint in a big way, shipping its first real-time Linux device. That release initiated a steady stream of open source involvement across multiple company products and organizations. With each successive open source success, we have learned more about how best to work with open source, continuing a virtuous cycle of open source activity. Most recently, we have established an open source “guild” to increase open source awareness. This post walks you through a few open source successes, and how we continuously apply what we are learning in multiple projects and teams.

## Starting the Virtuous Cycle: Adopting Real-Time Linux

Before moving to Linux, NI’s real-time devices ran proprietary real-time OSs. As hardware capabilities and customer needs increased, it became increasingly difficult and costly to deliver real-time OS support for new devices. Adding real-time OS support for a new architecture or bus is often extremely costly and time consuming.

After thoroughly reevaluating our options in the real-time OS space, we concluded that Linux with PREEMPT\_RT (the real-time patchset) would be well-suited to our customers’ needs. This solution provides extensive device and peripheral support, real-time behavior, and access to a massive developer ecosystem of applications, tools, and libraries. Using several excellent open source projects (Yocto, OpenEmbedded, PREEMPT\_RT, and U-Boot), we built a custom Linux distribution for our ARM-based devices and named it “NI Linux Real-Time”. 

Due to the maturity of the open source projects in this space, we quickly followed the initial ARM-based release by updating NI Linux Real-Time with support for our x64 devices, and added a graphical user interface — a first for a real-time device from NI.

Shortly after shipping the first NI Linux Real-Time device, we received some [troubling news](https://lwn.net/Articles/572740/): The future of real-time on Linux was unclear. At that time, the real-time patch set was widely used, but lacked sufficient investment to continue maintaining it. We were new to the real-time Linux community, so we weren’t sure how to get involved. We started by reaching out to the Linux Foundation for guidance and assistance. They connected us to the right people in the kernel community and in other companies who shared our interest in solving this problem. 

In 2015, [the Real-Time Linux Collaborative Project was established](https://www.linux.com/news/new-collaborative-group-speed-real-time-linux), with NI as a founding member. In addition to contributing funding, engineers from NI have been involved in the RT community, providing stable release maintenance and [conference presentations](https://www.linux.com/BLOG/ELC/2018/4/DEVELOPERS-PREPARE-YOUR-DRIVERS-REAL-TIME-LINUX).

![](/img/guides/casestudies/rtlogo.png)


The Real-Time Linux Collaborative Project has been incredibly successful. Recently, [Linus Torvalds accepted a change into the kernel](https://wiki.linuxfoundation.org/realtime/rtl/blog#the_jury_has_spoken/) signaling that real-time will become a first class citizen of Linux. 

Because of this experience, we learned not to be timid about reaching out to business and technology leaders in the open source community. There’s a strong culture of finding ways to work together to solve common problems.

## Continuing the Virtuous Cycle: Adopting Salt

Around the same time that we were adopting Linux, another team at NI was investing in adding systems management capabilities to our software offerings. They were planning to write a systems management backend from scratch, but some engineers familiar with open source recommended that we evaluate the open source options. After investigating, we selected [Salt](https://www.saltstack.com) as a foundational systems management platform element.

Salt satisfied most of our requirements, but it was missing some necessary capabilities. Based on what we learned from our experience with Real-Time Linux, we engaged with the community, shared with them how we planned to use Salt, and proposed improvements. Our contributions were met with [very positive responses](https://github.com/saltstack/salt/pull/21825) from the Salt community.

NI developers have made improvements to Salt’s cross-platform support, package manager support, and core network protocol support. To date, we’ve made hundreds of improvements to Salt. Recently, the project’s leadership invited us to join a working group, where we can have greater influence on upcoming releases.

One of the lessons we learned from adopting Salt is not to reject an open source project just because it doesn’t do everything you need it to. If your goals are aligned with a project, and the project does most of what you need, you’re far better-off improving the project to meet your needs than trying to create your own independent solution.

A second lesson we learned from Salt is not to reject an open source project just because it was designed with a different use case in mind. Salt was primarily designed to meet the needs of IT and cloud infrastructure management, not industrial device management. Even though the environments differ, there is substantial overlap in the problems being solved, making it an effective solution for a use case that the project's creators may never have envisioned.

## Sustaining the Virtuous Cycle: The Open Source Guild

The experience with Salt got us thinking: There are many more open source projects that, though perhaps not built with our needs in mind, could nevertheless solve problems in our application space. Over the past several years, an incredible number of projects have cropped up in cloud technologies, artificial intelligence, machine learning, and analytics. NI is in a great position to benefit from these projects, given our customers’ desire to analyze large amounts of measurement data being acquired from automated test and measurement systems.

To continue to take full advantage of open source projects that are a good fit for our needs, NI established an internal Open Source Guild, made up of open source practitioners from across the company. The primary purpose of the Open Source Guild is to explore relevant open source technologies, to spread knowledge of the open source landscape internally, and to make recommendations for further adoption of open source. We meet regularly to discuss potentially promising open source opportunities and initiate research. This assists our development teams in engaging with open source communities that are healthy and aligned with our needs. Members of the guild curate our open source presence on sites such as [GitHub](https://github.com/ni) and [PyPI](https://pypi.org/user/opensource_ni/), and assist our developers in publishing new open source projects.

## Conclusion

The virtuous cycle of open source involvement goes something like this:

1. See an opportunity in which open source can help you meet a customer need.
2. Deliver the benefit of an open source technology and engage the upstream community. Use this experience to raise your open source IQ, helping you to see more places where open source can add value.
3. Repeat!

There are many more things we’ve learned and adopted from open source, such as inner source practices for code review and branching, and the advantages of keeping up with upstream projects. We have benefited greatly from taking the time to continue learning from open source with each community we meet.
