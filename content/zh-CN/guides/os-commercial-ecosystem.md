---
title: Creating an Open Source Commercial Ecosystem
---

One way for an open source project to be successful is to have a thriving ecosystem of companies and products built around it.  So what exactly is an open source commercial ecosystem and how can organizations help create and support sustainable open source projects? There are concrete ways to create confidence in a project’s long-term viability, encourage companies to create commercial products and services on top of open source projects, and re-invest in them with contributions, content, and other resources. These practices for enabling ecosystem development help set your projects up for success.

**Table of Contents**

* [Defining and creating a sustainable open source commercial ecosystem](#defining-and-creating-a-sustainable-open-source-commercial-ecosystem)
* [Ingredients of open source ecosystem success](#ingredients-of-open-source-ecosystem-success)
  * [Building community/ growing contributions](#building-community-growing-contributions)
  * [Instill confidence for commercial adoption](#instill-confidence-for-commercial-adoption)
  * [Adherence to open source culture](#adherence-to-open-source-culture)
* [How to build an open source ecosystem](#how-to-build-an-open-source-ecosystem)
  * [1. Establish a healthy governance system](#1-establish-a-healthy-governance-system)
  * [2. Evaluate resources](#2-evaluate-resources)
  * [3. Track progress and make adjustments](#3-track-progress-and-make-adjustments)
* [Example: Google Open Source Office](#example-google-open-source-office)
  * [Acknowledgements](#acknowledgements)

## Defining and creating a sustainable open source commercial ecosystem

Open Source Program Offices can interact with open source in two different ways:

* Outbound processes: contributing to existing or releasing new open source projects
* Inbound processes: consuming open source projects

A critical element of any business or product strategy that includes the use of open source software is the reinvestment of resources into the projects on which that strategy relies. This can lead to the creation of open source commercial ecosystems, which contribute to the viability and long-term sustainability for those projects. However, before a company will invest resources it must first have confidence in a project's future prospects such that they're willing to build commercial dependencies upon it.

While there are no guarantees that an open source project will be successful, there are ways to set it up for success through practices that help build commercial ecosystems around it. If you can accelerate this process, it speeds innovation, products get to market faster, and projects see faster adoption and use. It becomes a virtuous cycle as [described by Accel Partners investor Ping Li](https://www.slideshare.net/AccelPartners/the-rise-of-open-adoption-software-oas).

Li has identified three phases of sustainability to focus on Project, Product, and Profit.

* **Project.** Creating a truly useful, purpose-driven project with a strong community, is step number one in creating a thriving ecosystem.  This can be achieved by creating a great invention from the ground up, by forking an existing invention, or by repurposing an existing project. Did you know that the wildly popular OpenStack cloud platform was originally an in-house open source creation that NASA used? Likewise, the hugely popular Kubernetes orchestration tool evolved from an in-house open source project at Google. Creating, forking, and repurposing can all lead to strong demand for projects.

* **Product.** Only a few years ago, the open source arena included many purists who looked down on any talk of productizing and commercializing open source creations. That has changed, big time. Companies like Red Hat have built billion dollar businesses by complementing open source software with hardened support, and platforms like OpenStack have given birth to powerful companies like Mirantis. It has become a norm for many open source projects to be offered in one community edition that is complemented by a fully supported commercial edition. Think of this as going from project to product.

* **Profit.** Profit is the brass ring for businesses everywhere, and an open source creation can complete the virtuous cycle of sustainability by advancing from Project to Product to Profit. Building a profit model for an open source invention can require creativity. Does the most profitable path lie in providing mission-critical support, as Red Hat does for its Enterprise Linux and many other open source offerings? Does it lie in seeking licensing fees or profit models based on working with hardware manufacturers, as seen in the Android ecosystem? Can an acquisition provide a profitable business model for an invention? Other profit models for open source are built around charging fees for services but not software, donation-based funding, and crowdsourced donations.

Once an open source creation has progressed through the three phases above, the virtuous cycle, driven by commercial dependency and reinvestment, is completed. At this point, the project has reached a steady-state of robust community development, bug fixes, and security updates are optimized through the many eyeballs on a project, lucrative partnerships can be formed, and much more.

Commercial dependency results in users, users buy solutions that generate profit, and profits increase resources to invest back in the community. A healthy community can also encourage partnerships and cross-pollination between projects that improve quality.

## Ingredients of open source ecosystem success

Creating unique code that solves a problem is job number one in pursuing the optimal ecosystem for an open source creation. For example, OpenStack has helped countless organizations centralize resources in the cloud, resulting in cost reductions for in-house storage and compute resources. Likewise, Network Function Virtualization (NFV) technology is helping telecommunications companies reduce their reliance on costly proprietary components in their technology stacks.

Once the problem-solving creation exists, focus can be placed on building community and contributions, instilling confidence for commercial adoption, and adherence to open source culture.

### Building community/ growing contributions

To build a healthy community around an open source project, developer training and recruitment are key, as are [defining guidelines for inbound contributions](https://opensource.guide/how-to-contribute/), and disciplined development practices such as version management, build and test automation, documentation, on-ramps for contribution, and tracking issues and revisions.

> You need to give people ways to get involved with your projects that don't require them to have a Ph.D. or to have been working in a similar area for 25 years. You need ways for them to get involved quickly. That means that you need really good setup documentation, and it also means having active and healthy forums and responsive maintainers.
> – Ian Varley, Software Architect, SalesForce.

The [Contributor Covenant](http://contributor-covenant.org/) is a rock solid code of conduct and contributor guidelines document that is used by [over 40,000 open source projects](http://contributor-covenant.org/adopters/), including Kubernetes, Rails, and Swift. Likewise, organizations such as TODO Group at The Linux Foundation have extensive experience with setting inbound contribution guidelines.

Cloud Foundry’s [Code of Conduct](https://www.cloudfoundry.org/code-of-conduct/) provides a strong example of how you can set out official guidelines for community members to follow. It specifies how community members can report incidents, what constitutes unacceptable behavior, and much more.

### Instill confidence for commercial adoption

As an open source software project grows, [a study shows](http://www.ifosslr.org/ifosslr/article/view/64) it reaches an inflection point at which corporations want to participate, but aren’t necessarily comfortable with the intellectual property regime (or lack thereof) in the open source project. These practices help instill confidence in companies that may be hanging out on the fringes, waiting to commit to the project.

* **IP and trademark management.** Open source licenses and policies, along with trademarks, can have a huge impact on whether a project achieves commercial adoption. There are many [free resources](https://www.linux.com/news/free-tools-driving-open-source-project-success) available for managing these.

* **Independent governance.** For projects at a certain stage of growth, it becomes critically important to establish independent governance and neutral project assets. Remember that it is critical to involve people who are qualified to supply business and legal governance of projects as well as people who can supply technical governance. For example, a person with technical skills may have an understanding of Inbound Contribution Guidelines, while a person with business credentials might be qualified to set policies regarding trademarks.

  > “In fostering a healthy commercial ecosystem, have a clear vision of how your project is governed, specifying what is and isn't a part of the particular project. Have a clear set of interfaces functioning as places where your commercial ecosystem can plug in, or attach to the project. As you start developing an ecosystem, you want companies to feel safe in the work that they are doing with you.
  > – Sarah Novotny, FOSS strategy Azure

* **Supported, secure, and reliable code and infrastructure.** How much benefit has Red Hat derived from offering hardened support for open source software? A huge amount. In addition to auditing your code for reliability and security, focus on offering support and leverage community support options such as forums. Many firms, such as Black Duck, also offer open source security and reliability audits.

* PR and marketing support. Does your project have a blog and is there a plan surrounding it for marketing and public relations? Creating your own content around your project and complementing that effort with presentations at open source events as well as outreach to the media along with marketing can get your project talked about, and adopted. Many commercial open source projects experience conversion ratios (as measured by the percentage of downloaders who buy something) that are not high when compared to proprietary software products, so low-cost and very scalable marketing functions are key to profitability.

* Create strong customer feedback loops. Ask successful business people how they view customers and they will say that the customer comes first. That’s a business tenet that may or may not be emphasized in a technical culture. Ensure that you offer direct ways to get customer feedback and encourage it. Forums can provide rich customer feedback. Answer customers across every channel you can, ranging from forums to telephone support.

### Adherence to open source culture

A downstream project with no ecosystem and community is not really leveraging the value of open source. An adherence to an open source culture is needed to succeed.

  > One of the most important things when building an open source community is making sure that your own processes are open. The more transparent you can make your decision-making processes, the more of a sense of ownership your community will have. You also want to make sure that your process doesn't become a blocker. If your open source process for either inbound or outbound contributions is onerous, people will look to bypass the process or simply decide that contributing is too difficult.
  > – Luke Faraone, Software Engineer, Dropbox

* **Balance control and openness.** Open source software is widely preferred by many users over proprietary offerings simply because proprietary software has traditionally carried with it costs and controls. In creating a commercial strategy surrounding an open source project, you must balance the value of controlling certain aspects of your offering (for example, how much support comes with it), with openness (such as whether you offer a free community edition that can serve as an on-ramp to a commercial edition). Also, keep in mind that project founders can exert much less control over their project over time than they did at the start.

  > As open source projects grow, you need to find a way to actually have a circle of trust that lets you delegate to other people, trusting them to make decisions. That ends up being a difficult transition. At first, you have a small project where the founders understand everything that's going on and have, to some degree, total control. Then, the project becomes community-driven and there's no single person or group that has total control.
  > – Joe Beda, Co-Founder of Kubernetes, Co-Founder and CTO of Heptio

* **Transparency.** The concept of transparency has long been central to open source culture. After all, doesn’t being able to dive directly into a code repository require openness and transparency? However, transparency is not necessarily a central tenet for most businesses. In fact, some businesses go to great lengths to keep internal information and assets strictly internal. Evaluate the benefits of transparency as you craft a strategy for commercial success based on open source. Many people will appreciate business-focused transparency just as they appreciate code transparency.

  > There are open source projects where external contributions are welcome, but the road maps and the governance of the projects are very much in the hands of a single company. Then there is truly community-driven open source. Which kind of projects are you working with?
  > – Joe Beda, Co-Founder Kubernetes, Co-Founder and CTO, Heptio

* **Foundations.** Foundations have had an enormous impact on the world of open source in recent years. Your organization can benefit from working with foundations ranging from The Linux Foundation to the Apache Software Foundation, and you may benefit from launching an open source-focused foundation. Understanding the role of open source foundations in fostering sustainable open source projects, and considering when and how to involve them, will help set you up for success.

  > Foundations provide a lot of value. Without them it has historically been hard for a lot of very critical projects to get the funding they need to be well maintained. They help ensure a level playing field and they provide mechanisms for organizations to give back to open source projects without contributing developers directly.
  > — Luke Faraone, Software Engineer, Dropbox

## How to build an open source ecosystem

To build out open source ecosystems around your projects, you must focus on the following: governance; resources needed to use an OS project as a commercial dependency; tracking progress and making adjustments. Let’s look into each of these and the value they can bring to your commercial ecosystem strategy.

### 1. Establish a healthy governance system

It is essential to create a neutral structure that makes it easy for competitors to participate, and you should also consider whether external stakeholders should participate in the governance process. Your ecosystem is at its healthiest when governance is independent and receiving diverse contributions.

If you oversee the technical governance of your project, you may be far less qualified to make decisions regarding support, trademarking, or licensing. Likewise, you must separate technical and financial decision-making. Some of the best technical advancements take place in environments where moonshots are encouraged. Encourage technical contributors to aim for moonshots, and separate decision-makers can evaluate whether they are financially feasible.

> One of the things that we've tried to engender in the Kubernetes community is the idea of a project over people or company. What's good for the project is a separate question from what's good for the companies that are involved with the project. When you end up with open source projects that are too tightly tied to a single company, really sticky issues can arise.
> – Joe Beda, Co-Founder of Kubernetes, and Co-Founder and CTO of Heptio

### 2. Evaluate resources

When partners or customers are deciding whether to utilize open source projects in their businesses, there are certain different resources they might evaluate or consider:

* **Security policies:** Vulnerability management is a key concern customers or partners may have. You will need to ensure you have all the necessary infrastructure and a policy on [how to respond when vulnerabilities are found across both any commercial version or open source product](https://opensource.googleblog.com/2021/02/a-new-resource-for-coordinated-vulnerability-disclosure-in-open-source-projects.html). Open source cannot be second on security to paid customers, it is not a way to differentiate your commercial offering.

* **Legal policies:** The costs for legal resources pertaining to open source projects can be high, but it is also worth keeping in mind that free legal resources exist. The Software Freedom Law Center (SFLC) has a set of very good online resources on how open source licenses and copyrights work, and much more. The SFLC authors are attorneys who were part of creating popular open source licenses and more. Don’t make the mistake of assuming that a free edition of a project needs no legal protections or forethought regarding licensing.

* **Community management:** The community is often the strongest asset a successful open source project can have, and investing resources in growing a healthy community is a best practice. Often, an enthusiastic community grows from a beloved, free edition of a project, and therefore it is a mistake to invest only in community growth for a commercial edition.

> Look at how your community is interacting with itself, how new leadership is being grown and mentored, and how any pain points are evolving. As an example, Kubernetes right now has a pain point of very long review times on pull requests, so we're getting started building out a mentoring program to help mentor new reviewers. Through the mentoring program, we'll be able to track measurements and ideally see a decrease in the amount of time the review process takes.
> – Sarah Novotny, FOSS strategy at Azure

* **Access to test infrastructure/environments:** Some open source applications require dedicated servers, specialist tools, automated quality control and/or security hardening. Dedicating resources to a paid and supported edition while starving resources for a free, community edition is a poor strategy, because free community editions often facilitate the first steps that potential customers will take. Ensure open source versions and any open source developers have access to the same tools, checks and automation that your staff developers or paid versions are run on. Parity across different versions and collaborators is key.

* **Invest wisely in education:** open source education is critical to know where and how to interact with the open source ecosystem in a healthy way.

  * Training – Education and training offerings serve a virtuous cycle, where trained users advance the cause of your open source inventions.

  * Certifications – Certification programs help users advertise their skillsets surrounding your inventions and boost their market value and your market value. Remember that you don’t just have to certify people with skillsets, either. Consider The Linux Foundation’s Core Infrastructure Initiative (CII) Badge Program. It includes a Best Practices Badge that can showcase an open source project's commitment to security, fostering trust.

  * Mentorships and internships – Through mentorships and internships, you can foster a wider knowledge base surrounding your open source offerings, and you can create opportunities.

  * Hold events – An open source project has a great chance of growing its successful ecosystem if the whole community around it takes an active role. Events are fantastic ways to foster group participation.

* **Give back:** There are substantial benefits to participating in the projects you use in your products and contributing upstream. If an open source project has made a positive difference for you and your organization, you can likely make a positive difference for it by contributing. This kind of give-and-take is an established practice throughout the open source arena. Just look at Red Hat and IBM, both of which are top contributors to Linux.

### 3. Track progress and make adjustments

Of course, your effort to create a healthy, commercial ecosystem around open source is a moving target. You must keep the people overseeing your governance structure involved, and keep your community providing feedback. “Listen, measure and adjust,” is good advice on this front. The members of your community can provide extraordinarily good feedback on how to make needed improvements and reach more people. Remember that each community is different.

> Find metrics for each community that you're working with. I tend to find metrics based on what a specific community is feeling as pain, and try to change those metrics for the better. There is no one magic assessment where if you look at six metrics, ranging from pull requests to contributor numbers, you can suddenly pronounce your community and ecosystem healthy. You could have a very small project that is extraordinarily healthy because it has half a dozen core contributors and a dozen people who are active but not maintainers. There might be healthy discussions, and pull requests might be handled in a speedy manner, and that might be an incredibly healthy community even though it's not going to have a million stars or forks on GitHub.
> – Sarah Novotny, Open Source Wonk, Azure Office of the CTO

## Example: Google Open Source Office

Many companies have built out successful open source program offices. The trend started in the technology industry as big players like IBM and Oracle realized that open source was seriously influencing the software ecosystem, but now companies of all stripes run open source programs. For example, Walmart Labs and Netflix have flourishing,[highly structured open source programs](https://www.linux.com/blog/learn/chapter/open-source-management/2017/5/enterprise-open-source-programs-concept-reality) and regularly contribute projects to the community. Open source programs are ubiquitous because open source is ubiquitous. In fact, according to the [Future of Open Source Survey](https://www.blackducksoftware.com/2016-future-of-open-source) from Black Duck and North Bridge, a mere three percent of respondents, most of them from enterprises, said they don't use any open source tools or platforms.

Among open source programs, Google’s is perhaps the most widely imitated of all. Google releases a lot of open source contributions, and company leaders are very frank about saying that the company gets business benefits from the ensuing community participation. Just witness the momentum that Android and Kubernetes have gained through community development and contributions. [In a story on open source programs](https://opensource.com/business/16/9/google-open-source-program-office), John Mark Walker, the Director of Capital One's Open Source Program Office, noted the following:

> Technology vendors have no choice—collaborate or die. They can willfully disregard trends as long as they want, but ultimately it's to their detriment. They would do well to borrow a few pages from Google and other [TODO Group](http://todogroup.org) participants and take a holistic approach to open source ecosystems: Which ones are of strategic importance, and how can participation help go to market more quickly with new products and services? And for an extra dash of magic, Google has shown that embracing a mission outside of a company's primary product focus yields results as well.

That couldn’t be more true, and this advice extends beyond just technology vendors. All companies could learn valuable lessons from Google’s open source program. Recently, Google [launched a new home](https://opensource.google.com) for its open source projects, processes, and initiatives. The site runs deep and has several avenues that are worth observing for anyone who wants to create a commercial ecosystem around open source.

The Google site features a directory of open source projects and a Community section that provides a good look at how training, events, and other efforts can harness energy from an open source community. However, the real crown jewel if you want to create a commercial ecosystem around open source projects is a section called [Docs](https://opensource.google.com/docs/), which is billed as “our internal documentation for how we do open source at Google." From open source contributors and developers to companies implementing open source programs, this section of Google’s site has a motherlode of tested and hardened information. There are three primary sections of Docs:

* Creating covers how Google developers release code that they've written, either in the form of a new project or as a patch to an external project.
* Using explains how Google brings open source code into the company and uses it. It delves into maintaining license compliance, and more.
* Growing describes some of the programs Google runs inside and outside the company to support open source communities.

According to Will Norris, former software engineer at Google's Open Source Programs Office: "These docs explain [the process we followed for releasing](https://opensource.google.com/docs/releasing/) new open-source projects, [submitting patches](https://opensource.google.com/docs/patching/) to others' projects, and [how we manage the open-source code that we bring into the company](https://opensource.google.com/docs/thirdparty/) and use ourselves. But in addition to the how, it outlines [why we do things the way we do, such as why we only use code under certain licenses](https://opensource.google.com/docs/using/license/) or why [we require contributor license agreements](https://opensource.google.com/docs/cla/policy/) for all patches we receive."

> Google has released excellent open source process documentation, essentially laying out their internal policies and procedures. Their description of their internal ownership model is definitely instructive. I also highly recommend Karl Fogel's Producing Open-Source Software book, available online under a Creative Commons license.
> – Luke Faraone, Software Engineer, Dropbox

A close look at how Google’s Open Source Programs Office works show that the company places substantial emphasis on community diversity and diverse programs that advance its open source communities. The concept of community is very much worth focusing on as you seek to build a healthy commercial ecosystem around open source.

> An open source project has the best chance of growing into a successful ecosystem if the entire community around it takes an active role. This includes everyone from code committers, users, documentation writers, software vendors, platform vendors, and integrators.
> – Abby Kearns, Chief Technology Officer at Puppet

### Acknowledgements

Contributors to this guide:

* Craig Northway
* Ana Jimenez
* Gergely Csatari
* Georg Kunz
* Bill Mulligan
