---
title: Participating in open source communities
---

---
参与开源社区
---

Open source has become the de facto way to build software – not only in tech, but across diverse industries. As companies use open source code to build their own commercial products and services, they also see the strategic value of contributing back to those projects.

开源，已经成为构建软件的默认方式——不限于科技领域，在各行各业中都是如此。随着企业利用开源代码来构建自己的商业产品和服务，他们也注意到了向这些开源项目贡献价值的战略意义。

However, diving in without an understanding of those projects, their communities, and how they operate can lead to frustrations for those companies as well as the open source communities. Approaching open source contributions without a strategy can tarnish a company’s reputation in the open source community and incur legal risks.

然而，如果在不了解这些项目、它们的社区以及它们如何运作的情况下就贸然参与其中，或许会给这些公司和开源社区造成影响。毫无章法地进行开源贡献，很可能损害企业在开源社区的声誉，甚至招惹法律风险。

This guide covers what it means to contribute to open source as an organization and how to become a good corporate citizen. Learn how open source projects are structured, how to contribute, why it’s important to devote internal developer resources to participation, and why it’s important to create a strategy for open source participation and management.

本指南阐述了组织为开源项目做出贡献的意义以及如何成为一个合格的社区成员。了解开源项目的构建、如何参与贡献、为什么一定要投入内部开发资源去参与，以及为什么需要制定一个参与及管理开源的策略等等，这些对于组织都具有重要的价值。

**Table of Contents**

- [Why contribute to open source?](#why-contribute-to-open-source)
- [How open source projects are managed](#how-open-source-projects-are-managed)
- [How contributions work](#how-contributions-work)
- [What it means for an organization to contribute](#what-it-means-for-an-organization-to-contribute)
- [How to be a good corporate citizen when participating in an open source project](#how-to-be-a-good-corporate-citizen-when-participating-in-an-open-source-project)
- [Best practices to contribute code upstream](#best-practices-to-contribute-code-upstream)
- [How to create your open source contribution strategy](#how-to-create-your-open-source-contribution-strategy)
- [11 tips for mastering open source contributions](#11-tips-for-mastering-open-source-contributions)
- [Final words](#final-words)


**目录**
- [为什么要为开源项目做贡献](#为什么要为开源项目做贡献)
- [如何管理开源项目](#如何管理开源项目)
- [如何做出贡献](#如何做出贡献)
- [对于一个组织来说，贡献意味着什么](#对于一个组织来说贡献意味着什么)
- [怎样以一名合格的社区成员身份去参与开源项目](#怎样以一名合格的社区成员身份去参与开源项目)
- [向上游贡献代码的最佳实践](#向上游贡献代码的最佳实践)
- [如何制定自己的开源贡献策略](#如何制定自己的开源贡献策略)
- [掌握开源贡献的11个技巧](#掌握开源贡献的11个技巧)
- [结束语](#结束语)

## Why contribute to open source?

## 为什么要为开源项目做贡献？

It might be impossible to find an organization today that doesn’t benefit in some way from open source software. Some companies, like Intel, IBM, and Samsung, have entire open source programs devoted to contributing to open source communities. Other companies become consumers of open source almost accidentally when the software is brought in by system administrators or developers.

到如今，几乎不可能找到一个没有从开源软件中获益的组织。一些企业在致力于为开源社区做出贡献的活动中拥有完整的开源计划，如英特尔、IBM和三星。很多公司是在系统管理员或开发人员引入开源软件时，悄然间成为开源用户。

Many companies are commercially dependent on open source software that is critical to the success of the company, so it becomes advantageous (and necessary) to contribute to open source software projects. Since 2005, more than 13,500 developers from more than 1,300 different companies have contributed to the Linux kernel, and it is just a single project!

许多公司对开源软件具有依赖性，因为这些软件对它们的成功至关重要，因此它们为开源软件项目做出贡献是趋利的（并且是必要的）。自2005年以来，已有来自1300多家不同公司的超过13500名开发者为Linux内核做出了贡献，而这只是一个单独的项目！

> “For many larger projects, we know that most of our contributors are going to be people who work at companies that need to use projects like Ceph and Gluster. We have customers, and customers often contribute to software because they're using it. We consider both the individual participation and the company participation as success stories.” [Stormy Peters](https://twitter.com/storming) – Senior Manager, Community Leads at Red Hat

> “对于许多大型项目来说，我们知道大多数贡献者来自那些在需要使用像Ceph和Gluster等项目的公司。我们的客户往往会在使用软件过程中对代码做出贡献。无论是个人参与或是企业参与，我们都将其视作成功案例。” ——[Stormy Peters](https://twitter.com/storming) ，Red Hat社区领导、高级经理

While some of these contributions may come from organizations that just want to give back to the community, there are plenty of strong business reasons to contribute to the open source software projects used within your organization. Here are just a few of the benefits of contributing:

虽然其中一些贡献可能来自那些只想回馈社区的组织，但仍有很多强有力的商业理由促使您为组织内使用的开源软件项目做出贡献。以下是参与贡献的一些激励：

* **Attract talent.** When you rely on open source software, the best place to find people who know the project inside and out is in the community for that project. By working publicly in the community, you can attract people who see that they can get paid to work on their favorite open source project. When your employees are working side by side with these people every day, they can help you identify good fits for your company. (See also: our guide on Recruiting Developers.)

* **吸纳人才。** 当你需要部署开源软件，对该项目最熟悉的人显然会出现在项目所属的社区。通过在社区中的公开信息，你可以吸引那些得知可以从事他们最喜欢的开源项目并获得报酬的人。当你的员工每天与这些人一起工作时，他们也可以帮助公司找到合适的人才。（参见：开发者招聘指南）
  
* **Lower maintenance costs.** Companies that start fixing bugs or adding new features and functionality to an open source project without contributing them back into the upstream project quickly learn that upgrading later to add new features or apply security fixes can be a nightmare that drives maintenance costs through the roof. Contributing your changes back into the upstream project means that they will automatically be included in future updates without incurring additional maintenance costs.

* **降低成本。** 如果在给开源项目修复bug或添加新功能和特性时，组织并没有将其贡献给上游项目，那么他们很快就会发现，未来在关于添加新特性或应用安全修复的升级时将遭遇一场噩梦，这会导致维护成本飙升。如果将您的修改工作贡献给上游项目，意味着它们将自动包含在未来的更新中，而不会再产生额外的维护成本。
  
* **Influence the direction.** In an open source project, new features and functionality come from contributions that inevitably influence the project’s direction. If you want a project to offer functionality important to your organization, then you need to have active contributors who can any implement potential changes. Through your contributions, you can influence the project’s direction (assuming that your changes align with the project’s goals).

* **影响方向。** 在开源项目中，新特性和功能的贡献必然将会影响到项目的发展方向。如果您希望某个项目提供对您的组织很重要的功能，那么您需要有活跃的贡献者去实现任何可能的更新。通过贡献，您可以影响项目的方向（假设您的变更与项目的目标一致）。

However, you need to be a bit careful about how you engage these communities to avoid perception problems or other issues with your contributions. Every open source project has slightly different norms, expectations, and processes that need to be thoroughly understood before your organization should begin contributing. This can be achieved by having someone join the community and spend some time observing, or you can hire someone who already has a proven track record of participation in the community.

然而，你需要在参与这些社区时保持谨慎，以避免您的贡献出现认知性的错误或或其他问题。每个开源项目都有略微不同的规范、期望和流程，在您的组织开始贡献之前，需要彻底吃透它们。这可以通过让某人加入社区并花一定时间观察来实现，也可以雇佣一名具有社区参与经历的人员。

## How open source projects are managed

## 如何管理开源项目

At first glance, open source projects may look chaotic. People who are completely new to open source software often wonder how a group of random people can throw code together and end up with a stable product used by millions of people. It doesn’t take long to realize that this isn’t how open source software works. Almost every open source project has some structure, and the best projects will have the structure and project governance clearly described on the project website or in the documentation. (GitHub’s guides for contributors have a great overview of project anatomy.)

开源项目给人的第一印象可能是毫无头绪。对开源软件完全陌生的人经常很疑惑，这群不固定的人是如何把代码聚合在一起，并最终编写出一个被数百万人使用的稳定产品。但你很快就会意识到，这并不是开源软件的工作模式。几乎每个开源项目都有特定的框架结构，优秀的项目会在网站或文档中清晰地描述其结构和项目治理。(GitHub的贡献者指南中对项目结构做出了很好的概述。)

While the exact governance model varies widely across projects, there are some commonalities:

虽然不同的项目中的具体治理模型千差万别，但仍然具有一些共性:

* **Leader:** At a minimum, there should be someone responsible for making final decisions about features, releases, and other activities. In some cases this is a single person – for example, Linus Torvalds is the original author of the Linux kernel and has the final say on anything related to its evolution. In other projects, there may be one or more committees responsible for various aspects of a project, like the Core Technical Committee that governs the Node.js project.

* **领导者：** 应当至少有一个人负责对功能、发布和其他活动做出最终决策。在某些情况下，这是一个具体的人——例如，Linus Torvalds是Linux内核的原始作者，并对与其演变相关的任何事情拥有最终决定权。在其他项目中，可能有一个或多个委员会负责项目的各个维度，比如负责治理Node.js项目的核心技术委员会。

* **Maintainers:** Most leaders delegate some of the decisions to people who are responsible for maintaining specific parts of the project. In large projects, these maintainers may also delegate to people who are responsible for subcomponents of their portion. For example, Linus Torvalds delegates Linux kernel documentation decisions to Jonathan Corbet.

* **维护者：** 大多数领导者会将一些决策权委派给负责维护项目的部分特定人员。在大型项目中，这些维护者可能还会将职责委派给负责其分系统组件的人员。例如，Linus Torvalds 将 Linux 内核文档的决策权委托给了 Jonathan Corbet。

* **Committers:** Some projects also have groups of people who have contributed to the project and are considered reliable and responsible enough to be allowed to commit directly to all or some parts of the project, rather than having to submit to a maintainer for review. Contributions from committers are still subject to review by maintainers or project leaders and may be reverted if there are any concerns.

* **提交者：** 有的项目还拥有一类特定的角色，这部分人是对项目具有一定的贡献，并被认为是可靠和有明确责任的，因此被允许直接对项目的全部或部分内容进行提交（commit），而不必提交给维护者去审查（review）。提交者的贡献仍然受到维护者或项目负责人的审查约束，如果出现任何问题，都可能会被退回。

* **Contributors:** Many people contribute to open source projects with code, documentation and other enhancements. These contributions are usually subject to a review from an experienced committer and/or maintainer before they are included.

* **贡献者：** 许多人通过代码、文档和其他附加功能为开源项目做出贡献。这些贡献在被包含（include）之前，通常需要经过有经验的提交者和/或维护者的审查（review）。

* **Users:** Arguably the group most important to an open source project’s growth and development. Users give the project a purpose and help it evolve. These valuable members of the community can provide feedback about features, bug reports and more.

* **用户：** 这应该是开源项目增长和发展中最重要的群体。用户赋予项目以发展方向并助力其成长。在社区中，这些宝贵的成员可以提供关于功能、错误（bug）报告等方面的反馈。

Community can make or break an open source project. Having a strong, vibrant, and diverse open source community is important to a project’s success. All of the people in the roles listed above are part of this community, along with people filling other critical roles in the project for documentation, marketing, user support, and so much more.

一个开源项目成也社区，败也社区。拥有一个强大的、充满活力和多样化的开源社区对于项目的成功至关重要。上述角色的所有人员都是这个社区的一份子，同时也离不开其他关键角色，例如负责文档、运营、用户支持等工作的人员。

## How contributions work

## 如何做出贡献

The contribution process varies depending on the open source project. For example:

贡献的过程因具体的开源项目而各有不同。例如：

* Projects have different guidelines with information about coding style, language, formatting, bug/ticket numbers, release timing, and more.
* Some projects require signed contributor agreements, while others have signed-off-by or other processes.
* Projects may require patches to be posted to the mailing list, but others will ask for pull requests.

* 针对编码风格、语言、格式、bug /任务单编号、发布时间等信息，每个项目会提供不同的指南。
* 有些项目需要签署贡献者协议，而另一部分项目则采用签名或其他流程。
* 有些项目可能要求通过邮件列表发送补丁，也有的项目会要求拉取请求（PR）。

These are just a few ways that the contribution style might differ, so it’s important to start by reading the documentation about how to contribute. Many projects will include this documentation as a CONTRIBUTING or README file in the home directory of the code repository. Otherwise, you may need to dig into the documentation or community section of the website to find it. It’s also a good idea to read some of the other documentation, community guidelines, and code of conduct if they are available to make sure that you understand exactly what behavior is expected within a particular project.

上述这些只列举了可能存在的几种不同贡献类型，所以我们很有必要优先阅读有关如何贡献的文档。许多项目都会将这份文档作为贡献文档或README文档，包含在代码存储库的主目录中。不然的话，您可能需要深入查阅网站文档或在社区部分才能找到它。发现并阅读一些具有使用价值的其他文档、社区指南和行为准则也是一个好办法，这能确保您准确地理解特定项目所期望的行为。

If you are a first-time contributor to a project, you might consider finding a mentor or an experienced project member who can review your work and provide you with some feedback as you prepare your first couple of contributions.

如果是第一次为某个项目做贡献，您可以考虑找一个导师或经验丰富的项目成员来 review 您的成果，并在您开始准备首次贡献时提供一些指导意见。

After submitting a contribution using the process described in the documentation, you must remain available to respond to feedback. Common feedback would include questions about how something works or why you chose a particular approach, along with suggestions for improvements or requests for changes. This feedback can be tough sometimes, so it helps to assume that the feedback is in the spirit of making your contribution better. Avoid getting defensive. You may need to go through several rounds of resubmission and additional feedback before your code is accepted, and in some cases it may be rejected. There are many valid reasons why something might not be accepted, so don’t take it personally if your code is rejected. If possible, try to learn more about why your contribution was not accepted to help increase the chances of getting your next contribution included.

按照文档所描述的过程提交贡献后，您应当对反馈的信息及时做出响应。常见的反馈可能是关于某些任务是如何执行的或者为何选择某个特定方法，以及关于完善或改进请求的建议。这些反馈有时会很严苛，所以应假设它们是为了帮助你将贡献进一步完善，以免产生抵触心理。在代码被接受之前，您可能需要经历几番重新提交和补充反馈；有的时候还可能会被拒绝。拒绝某个东西的理由可能有一万种，因此如果你的代码被拒绝了，要知道这只是对事不对人。如果有机会，尽可能去了解更多关于你的贡献为什么没有被接受的信息，以增加下次贡献被接收的机会。

Keep in mind that if your contribution was accepted, you may be expected to maintain it over the long-term. This is especially true for large contributions, new features, or standalone code, like a driver for a specific piece of hardware. For small contributions and bug fixes, it is unlikely that there will be any long-term maintenance expected.

请牢记一件事：如果您的贡献被接受，您可能需要长期去维护它。对于大型贡献、新功能或独立代码（如特定硬件的驱动程序）尤其如此。对于小规模贡献和bug修复，则不太可能抱有任何长期维护的期望。

## What it means for an organization to contribute

## 对于一个组织来说，贡献意味着什么？

Over the years, the relationship between some open source projects and the companies or other organizations that use or contribute to those projects has been a bit rocky. Organizations are often accustomed to forming business relationships in ways that don’t usually work for open source projects, so some organizations struggle to understand how to contribute productively.

多年以来，一些开源项目与使用或贡献这些项目的公司或其他组织之间的关系一直不大稳定。很多组织所习惯的商业关系模式通常并不适用于开源项目，因此有些组织需要花费很大精力去理解如何有效地做出贡献。

Another challenge is that an organization can seem self-serving or troublesome if its needs aren’t aligned with the needs of the open source project. This can cause an open source community to become suspicious of the motives behind an organization’s contributions. In the past, some organizations have tried to make huge contributions that weren’t aligned with the goals of the project, and in certain projects, this history may make it harder for the community to trust organizations.

还有一个考验，如果一个组织的诉求与开源项目的目标不一致，它可能会被视为自私自利或者是来踢场子的。这可能导致开源社区对组织贡献背后的动机产生怀疑。如果有些组织曾经试图做出与项目预期所背离的巨大贡献，那么在某些项目中，这段历史可能使得它更加难以获得社区的信任。

However, there are also many success stories. One is the Linux kernel, where organizations contribute in meaningful ways. The most common and easiest way for an organization to contribute to an open source project is to pay employees who have a significant amount of time devoted to participation in open source projects. In order for this to be successful, those employees need to understand the contribution processes and norms within that project to increase the chances that their contributions will be accepted. If your organization is new to a project or new to open source, consider hiring someone who has already contributed and is known within the open source project you want to contribute to; they can provide guidance on contributing successfully. Experienced contributors might be willing to mentor your employees as they pursue an open source career path. (See our guide on Recruiting Open Source Developers.)

当然，成功的案例也是数不胜数。其中一个典型就是Linux内核，无数组织通过各种有意义的方式为其做出贡献。对于一个组织来说，为开源项目做出贡献的最常见和最简单的举措，就是向那些投入大量时间参与开源项目的员工支付报酬。为了取得成功，这些员工需要详细了解项目的贡献流程和规范，以增加其贡献被接受的机会。如果您的组织刚刚接触一个新项目或者第一次接触开源，可以考虑雇用已经做出过贡献并在您意向的的开源项目中有一定名气的人；他们能够在成功贡献方面提供专家支持。经验丰富的贡献者可能愿意指导您的员工，因为他们所致力于的开源职业路线。（参见：开源开发者招聘指南。)

![](https://www.linuxfoundation.org/wp-content/uploads/2017/08/Kubernetes-contributors-pie-chart.png)

Most projects offer other ways for organizations to participate, but these are likely to vary by project. Open source projects and the foundations that support them often need resources that organizations can provide, including infrastructure, funding, marketing, legal services, and much more. Many projects allow companies to sponsor or join a project more formally by contributing funding and/or people in exchange for some advisory role in the project or enhanced visibility.

大多数项目可以为组织提供多种参与方式，但这些方式在不同的项目中也可能有所差别。开源项目及其背后的基金会通常需要组织提供诸如基础设施、经费、市场营销、法务等资源。许多项目允许公司通过提供资金和/或人力资源来赞助或更正式地加入到项目中，以换取项目中专家资源或提高知名度。

For example, the Node.js Foundation Board of Directors consists of representatives from corporate members, a representative of the Technical Steering Committee, and representatives elected by the individual membership class. The corporate members comprising a portion of the board pay anywhere from $5,000 for a small organization to $250,000. While each project has a slightly different approach to sponsorship or membership, funding an open source project helps cover expenses and fund its continued success.

例如，Node.js基金会董事会由企业成员的代表、技术指导委员会的代表以及个人会员选举的代表所组成。董事会中的企业会员将根据规模大小提供从5000美元到25万美元不等的赞助。虽然每个项目对赞助或会员资格的规定略有不同，但为开源项目提供经费支持可以有助于它覆盖开支并持续成功运行。

## How to be a good corporate citizen when participating in an open source project

## 怎样以一名合格的社区成员身份去参与开源项目

If there is an underlying theme for this guide and for open source in general, it’s that every project is different. Every time you join an open source project, you’ll need to spend some time finding your way around and learning how it works.

如果本指南和大多数开源项目之间存在一个共识，那就是每个项目都是独特的。每每加入一个新的开源项目，您都需要花费一定时间去熟悉其运行模式并探索适合的参与方式。

For organizations participating in an open source project, each employee will need to go through this learning process for each project they participate in. Here are a few things that can help you get started off on the right foot.

如果组织参与到开源项目中，那么涉及到这些项目的每个员工都需要经历这个学习过程。以下建议可以帮助大家有个好的开端。

* **Join the community.** Each community has slightly different participation modes and channels. Read the documentation to find out about the community, and join the key communication channels, which may include mailing lists, forums, IRC, Slack, bug trackers, source code repositories, and more.

* **加入社区。** 各个社区的参与方式和渠道有所不同。请通过阅读文档来了解有关该社区的信息，并加入主要沟通渠道，这里可能包括邮件列表、论坛、IRC、Slack、bug跟踪器、源代码库等。

* **Lurk first.** After you've joined the community, spend a significant amount of time lurking and reading the archives to soak up the culture before you start contributing. You’ll want to understand the norms and expectations of this community before you participate. The more time you spend reading and listening, the more likely it is that your first contribution will be well received.

* **潜心学习。** 加入社区后不要急于做出贡献，首先要沉下心来，花费大量时间去阅读存档以吸取其中的文化。在参与项目前，要理解这个社区的规则和愿景。在阅读和倾听上花费的时间越多，您的第一个贡献被接受的可能性就越大。

* **Understand the governance.** Read the documentation or website sections about project governance and leadership before contributing. You’ll want to know who makes decisions about different types of contributions, and how.

* **了解治理结构。** 在做出贡献之前，阅读关于项目治理和管理的文档或网页资源。您应当明白是哪些人负责对不同类型的贡献做出决策，以及如何决策。

* **Start small.** Tackle a simple bug or documentation fix to start. It will be easier to learn the process and correct mistakes on a small contribution that isn’t critical to your organization’s needs. Make your mistakes on small and less significant contributions as you work up to the more complex contributions that your organization needs.

* **从小处着手。** 从解决一个简单的bug或进行文档修复开始。通过在一个无伤大雅的小贡献来学习流程并纠正错误习惯会更加容易。这对贵组织的诉求至关重要。在处理更复杂的贡献时，在不太重要的微小贡献方面出现错误，应当如同进行更复杂的贡献一样如履薄冰。

Now that your organization has figured out how to make those first small contributions, you’ll need to build on those contributions to begin making larger contributions and having a bigger impact in the project.

现在贵组织已经明晰了如何做出最初的小型贡献，您需要在此基础上继续做出更大的贡献，并在项目中产生更大的影响。

* **Build relationships at events.** Relationships on a personal and organizational level are an important aspect of participating in an open source community. One of the best ways to build lasting relationships with other project members is by attending events. There is nothing quite like meeting someone in person to better understand them as a human being on the other side of their email address or online handle. These events attract a varied mix of people, from project leaders and passionate users to organizations that support projects through sponsorships, booths, and demos. Most of these events would not be possible without financial support from sponsoring organizations that allow us to get together and learn from each other while helping to achieve the goals of the project.

* **在活动中建立社交。** 个人和集体的关系是参与开源社区的一个重要维度。如果想与项目的其他成员建立持久的联系，最好的选择就是参加活动。面对面沟通最能让大家互相全面的理解对方，通过这个方式您可以更好的了解电子邮件或者鼠标背后的那个人。这些活动可以吸引不同身份的人，从项目领导者、热心用户，到通过赞助、展位和演示来对项目提供支持的组织。如果没有赞助者的资金支持，大多数活动是不可能落地的。这些组织的支持让我们能够聚到一起，互相学习，共同促进项目目标的实现。

* **Include the community early and often.** Some organizations make the mistake of developing big chunks of code in house and then dumping them into the open source project, which is almost never seen as a positive way to engage with the community. The reality is that open source projects can be complex, and what seems like an obvious change might have far reaching side effects in other parts of the project. Any significant change is likely to require some community discussion before it moves to implementation to make sure that there are no side effects and that the solution is aligned with the broader goals for the project. While you discuss it with the community, it can help to focus on the problem, rather than a specific solution, before you invest too much time in the creation of a body of code. (See Jon Corbet’s guide on [How to Participate in the Linux Kernel Community](https://www.linux.com/publications/how-participate-linux-community).)

* **尽早融入社区并保持活跃度。** 有些组织容易犯一个错误，就是先自行开发大段代码，然后直接将其丢进开源项目中，这个行为几乎从未被社区视为一种积极互动的方式。实际上，开源项目可能非常复杂，看似明显的改动可能会给项目的其他部分造成深远的影响。一般来说，任何重大变更都需要在实施前进行社区讨论，确保没有副作用，并且确认该解决方案与项目的更长远的发展目标保持一致。在您投入大量精力来创建代码库之前，在社区展开针对具体问题而非解决方案的讨论，可以对您的工作有所帮助。（参见： [Jon Corbet的Linux内核社区参与指南](https://www.linux.com/publications/how-participate-linux-community) 。）

* **Contribute upstream.** This refers to the practice of sending any changes you make to an open source project back to the original maintainers for inclusion into an upcoming release of the software. If your organization is new to open source, you may need to spend some time educating your employees about the importance of upstreaming contributions. In some cases, people may think it will be easier to do a quick and dirty patch to get something working in your infrastructure and not bother with cleaning it up and going through the process of getting it accepted into the upstream project.

* **向上游贡献。** 即将您对开源项目所做的任何更改都发送到原始维护者那里，以期他们便将其纳入到即将发布的软件版本中。如果贵司是开源新兵，您可能需要花一些时间去指导员工，让他们了解向上游贡献的重要性。有时候，人们倾向于通过一个简易且杂乱的补丁让基础架构中的工作更加便利，但并愿意去清理它并按照严格流程使其被上游项目所接受。

However, over the long-term, the quick patch that needs to be tested, updated and reapplied during every upgrade cycle is almost always going to take more time and effort than upstreaming it. This behavior can also be perceived as selfish within the community, since others might also benefit from your fixes, so it could also harm your organization’s reputation in open source communities.

然而，从长远来看，在每个升级周期中所需要的测试、更新和重新应用的简易补丁几乎总是比将其直接上游化更加耗时耗力。在社区中，这种行为会被认为是自私的，因为其他人也将受益于您的修复工作，所以这也可能损害您的组织在开源社区中的声誉。

### Best Practices to Contribute Code Upstream

### 向上游贡献代码的最佳实践

#### Internal to your organization

#### 组织内部

1. Decide to upstream for the right reasons.
2. Design and implement code with upstreaming in mind.
3. Adopt an “upstream first” policy. Submit patches upstream first, and consume in your own products downstream.
4. Keep your developers involved in the open source project, even if it is just a soft involvement.

1.出于适当的原因，决定向上游贡献。
2.在设计和运行代码时要考虑到上游项目。
3.采用“上游优先”策略。即先向上游提交补丁，然后在自己的下游产品中使用。
4.让您的开发人员参与到开源项目中，哪怕只是软介入。

#### Externally/toward the project

#### 组织外部/面向项目

1. Ensure that your contributions are useful to others.
2. Follow proper coding style.
3. Work within the submission processes of the project.
4. Provide documentation and explanation around your contributions.
5. Listen to feedback and act upon it.
6. Be patient and continue to rework the code until acceptance.

1.要确保你的贡献对他人有用。

2.要遵循恰当的代码编写规范。

3.工作应与项目提交过程并行。

4.为你的贡献提供文档和说明。

5.倾听反馈并以实际行动处理。

6.静下心来反复修改直至合格。


One of the most challenging things for organizations is understanding how influence is earned within open source projects. Just because your organization is a big deal, doesn’t mean that you should expect to be treated like one without earning the respect of the open source community. Influence comes from participation. Some of the people contributing to an open source project will eventually earn positions of greater influence and leadership over time after they prove that they are reliable and responsible.

对于组织来说最具有挑战性的事情之一，就是懂得如何在开源项目中获得影响力。如果仅仅因为您的组织是一家大型公司，但尚未赢得开源社区尊重的情况下，请不要期望被当作重要角色来对待。影响力来自于参与度。为开源项目做出贡献的人终将随着他们的信任度和责任心得到证明后，随着时间的推移而获得越来越大的影响力和领导地位。

You should also expect some conflict and be ready to handle it professionally. The review process can get quite heated as people disagree with decisions, approaches or styles of contributions. It’s important to remain calm and professional while making sure that the feedback stays focused on the contribution rather than becoming personal. Keep in mind that your participation in an open source project is public and could remain on the internet forever, and one heated discussion that gets out of hand can come back to haunt you as an organization or an individual at a later date. Because all of this participation is very public, offering some training about handling difficult people and resolving conflict for your employees might be a good idea.

我们还应预想到一些冲突，并做好专业的应对准备。考虑到不同的人对于决策、贡献方式或风格会产生分歧，Review的过程可能会相当激烈。要保持冷静和专业性，确信这些反馈并不是针对个人，而是聚焦在贡献上。请记住，您在开源项目中的参与行为是公开的，并且可能永远在互联网上留痕，一次失控的激烈辩论可能会在后续的日子里对您的组织或您本人造成困扰。因为所有这类参与都公开化的，建议为员工提供一些针对性培训，告诉他们如何与难缠的人打交道和解决冲突

## How to create your open source contribution strategy

## 如何制定自己的开源贡献策略

Having a deliberate and thoughtful open source contribution strategy not only helps guide your employees when participating in open source projects, but it can also help justify this participation to senior management within your organization. It’s important to start by looking at your organization’s overall business goals to figure out how your open source efforts fit into your broader strategies. (See our guide on Creating an Open Source Business Strategy.) By clearly tying your open source contribution strategy to the organization’s strategic efforts, you can show senior management why the work is important and help your employees understand the impact of their contributions.

一套成熟的开源贡献策略不仅有助于指导您的员工参与开源项目，而且还可以向组织内的管理层证明这种参与的重要性。首先要站在组织的整体业务愿景角度，清晰论证如何将开源工作融入到自己更广泛的战略之中。（参见：创建开源商业策略指南。）通过将开源贡献策略与组织的战略目标建立明确的联系，您可以向高级管理层展示这项工作的价值，并帮助员工了解他们所做贡献的影响。

> “Support from leadership and acknowledgement that open source is a business critical part of your strategy is so important. You should really understand the company’s objectives and how to enable them in your open source strategy.” [Nithya Ruff](https://twitter.com/nithyaruff) – Senior Director, Open Source Practice at Comcast

> “来自领导层的支持以及对开源在战略中所起关键作用的认知是非常重要的。我们应当真正去理解公司的目标，并意识到如何在自己的开源战略中实现它们。”—— [Nithya Ruff](https://twitter.com/nithyaruff) ，Comcast开源实践高级总监

Once you've developed some goals and strategies that are aligned with the business goals, you’ll need to develop an implementation plan. These questions will help you think about some of the things that might need to be addressed in your plan:

一旦制定了与业务愿景一致的目标和策略，我们还需要制定一个实施计划。下面这些问题将帮助你思考该计划可能需要解决的一些事情：

* **Why are these contributions important?** It’s easy to jump in and start talking about all of the great things you plan to do, so don’t forget to include compelling arguments for why this work is important and strategic to the organization.

* **这些贡献为什么很重要？** 空谈自己的伟大理想是很容易的，要拿出能说服大家的论据来解释这项工作为什么对组织很重要，具有什么样的战略意义。

* **Which open source projects do we use within the organization?** Take some time to assess which open source projects are already in use across the entire organization to determine which ones are strategic to your business. A few places you might want to focus your assessment: critical business infrastructure (operations), development and deployment tools that impact your ability to release products, and software that is important for customer-facing products or services.

* **我们组织内部使用了哪些开源项目？** 耗费一些时间去评估整个组织中已经使用的开源项目，以确定哪些对您的业务具有战略意义。您可能希望重点关注以下几个方面：关键业务基础设施（运营），影响产品发布能力的开发和部署工具，以及面向客户的产品或服务的重要软件。

* **Which projects should we target for contribution?** Most organizations use many open source projects, so it’s important to make sure that your plan focuses on just the most important ones. Just because a project isn’t on the target list doesn’t mean that people can’t contribute to that project; it just means that it isn’t a critical focus for your organization. If an open source project is critical to your business and has the potential to cause significant downtime or disruption to your ability to serve your customers, it’s probably a good candidate for contributions.

* **我们应该对哪些项目做出贡献？** 大多数组织所利用的开源项目有很多，只需确保您的计划所关注的是最重要的项目，这一点非常重要。某个项目不在目标列表上，不代表着我们不能为该项目做出贡献；这仅仅意味着它不是您组织的重点关注对象。如果一个开源项目对您的业务至关重要，并且有可能导致严重的停机时间或中断您为客户服务响应的能力，那么它可能是一个很好的候选贡献对象。

* **What are the contributions we are already making?** In some cases, you might already have people making changes to open source projects. They may be creating patches that are used internally, or they could already be contributing those patches back to the upstream project to avoid maintaining them. Spend some time talking to your internal teams to find potential contributions that you can build on while assessing whether or not you already have people on staff who might have the skills and interest to contribute.

* **我们已经做出了哪些贡献？** 有时候，您的员工或许已经对开源项目进行了更改。他们可能会创建内部使用的补丁，或者已经将这些补丁贡献给上游项目以避免自行维护。花点时间和内部团队进行交流，找出可以做出贡献的潜在因素，同时评估一下这些员工是否已经有人具备做出贡献的技能和兴趣。

* **Do we already have the relevant expertise, or do we need to hire for it?** As discussed previously in this guide, it’s important to find people who have both the skills to create the contribution along with the people skills to work with the community to have the contribution accepted. If you already have people contributing to some of these projects, you might be able to use existing staff. If not, you should consider hiring someone who is already making successful contributions to the project. As with any plan, you need to make sure that you have the resources and hiring budget required for it to be a success.

* **我们是否具备相关专业知识，是否需要人才引进？** 正如本指南前面讨论的，重要的是找到那些既有创建贡献的能力、又有与社区合作并让贡献被接受的社交能力的人才。如果您已经有一些员工为这些项目做出贡献，那么可以考虑利用现有员工。如果没有，你则应该考虑聘用一个已经在项目中成功完成贡献的人。就像其他任何计划一样，你还需要确保自己有实现目标所需的资源和招聘预算。

* **What funding do we need for project sponsorships/corporate memberships?** Look at the governance models for the projects you've selected to determine whether there is an option for corporate membership or sponsorship for the project or the foundation responsible for it. This provides funding to help the project be successful, and in some cases, it can help your organization get more involved in an advisory role or provide some influence into the project. In addition to funding projects directly, consider sponsoring related conferences. These can be great for getting the word out about your work and for meeting people who you might want to recruit.

* **项目资助/会员资格需要多少经费？** 查阅您所选择项目治理模式，以确定是否有针对项目或项目所在基金会的企业会员资格或赞助选项。这可以为促进项目成功提供所需资金，有时也可以帮助您的组织更深入地参与其中，例如担任专家顾问，或者对项目产生一定的影响力。除了直接资助之外，还可以考虑赞助相关的会议。这些活动有益于展示您的工作，并帮助您结识潜在的雇员。

* **How should we promote our open source efforts?** Depending on your organization, marketing or promoting your open source contributions can be tricky. Therefore, it’s important to include this in your implementation plan to make sure that everyone knows how you discuss your contributions in public. Sponsorships and giving talks at the project’s conference or other events can be a good way to promote the work that you are doing and recruit contributors. In particular, don’t overlook your participation in local user groups where you have employees. Sponsoring those local groups and sending contributors to give talks can be a great way to recruit local people who are passionate about particular open source projects.

* **如何推广我们的开源成果？** 依赖组织去营销或推广您对开源的贡献可能并不顺畅。因此，有必要将这件工作纳入到实施计划中，以确保大家都知悉您将如何在公共场合分享成果。赞助、在项目会议或其他活动上发言，都是宣传您所做工作和招募贡献者的有效方式。尤其不要忽视员工所在地区用户组的参与。对本地团体施以资助并委派贡献者去讲座，有利于在当地招募到热衷于某个特定开源项目的人。

* **What contribution guidelines or processes do we need?** These guidelines and processes should be less about rules and regulations and more about helping people be successful in making contributions to open source projects. It can help if people have guidelines and checklists to make sure that they have everything they need to make a successful contribution without running into licensing or confidentiality issues. Especially for new contributors, it can also help to have an internal review process available as a safe place to get feedback before making a contribution.

* **我们需要哪些贡献指南或流程？** 这类指南流程应该尽可能少的罗列规则和规定，而更多地关注于引导人们成功地为开源项目做出贡献。如果大家可以通过行为指南和检查清单来确保自己做好了成功贡献所需的一切准备，而不会遇到许可或保密的问题，这才是最有效果的。这也更加有助于为新手在作出贡献之前以内审方式提供一个获取反馈的安全缓冲。

* **What kinds of training must we provide?** Training on best practices for making contributions, along with some general training about open source licenses, governance, and norms associated with participation in open source communities, can be very useful. Training on conflict resolution, dealing with difficult people, and other people skills can also help avoid issues later. To scale your efforts over time, include in your training plan some programming that provides experienced open source contributors as mentors for new contributors.

* **哪些培训是必要的？** 关于如何做出贡献的最佳实践训练，以及关于开源许可证、治理和参与开源社区相关规范的常态化培训，都是非常有价值的。关于冲突解决、应对难缠的人和其他社交技巧的培训也有助于防止未来发生问题。为了让这项工作拥有持久生命力，可以培训计划中添加一些程序，让有经验的开源工作者对新手进行“导师型”教学。

* **How will we determine whether the plan is successful**? Every plan should include success criteria and a plan for measuring whether you achieved your goals. This should come directly out of your strategies to make sure that you are tracking those activities that are the most important for your organization, rather than the ones that are the easiest to measure. The open source [GrimoireLab](http://grimoirelab.github.io/) project is a good place to start if you need measurement and metrics tools. (See our guide on How to Measure Open Source Program Success.)

* **如何判断计划是否成功？**每个计划都应该包括成功标准和监督计划。这些应该可以从策略中直接导出，以确保你正在跟踪的是对组织至关重要的活动，而非最容易衡量的活动。如果您需要进行评估或者需要度量工具，使用开源的 [GrimoireLab](http://grimoirelab.github.io/) 项目将是一个很好的开始。(参见：开源项目成功的衡量指南。)

* **Do we need an open source office to manage all of these efforts?** Having an open source program office or dedicated staff who are responsible for implementing the plan can help you navigate this terrain. At a minimum, you’ll want to have someone responsible putting processes and training in place, providing licensing guidance, answering questions from senior management or contributors, and communicating updates throughout the organization. (See our guide on Creating an Open Source Program Office.)

* **是否需要设立开源办公室?** 设置一个开源项目办公室或负责实施计划的专职人员可以帮助您应对这些事务。至少，您希望有人负责将流程和培训落实到位、提供许可指导、回答高级管理层或贡献者的问题，并在整个组织内传达更新信息。(参见：开源项目办公室创建指南。)


## 11 Tips for Mastering Open Source Contributions

## 掌握开源贡献的11个技巧

How to build a healthy environment for open source contributions in your organization:

如何在组织中为开源贡献构建一个健康的环境:

1. Establish a policy and process to guide open source contributions
2. Set up a team to oversee approvals for all open source contributions
3. Focus contributions in the areas that will enable your technologies
4. Provide the needed IT infrastructure and tooling for contributors
5. Offer training to your staff on contribution best practices
6. Track contributions, measure impact, improve, and communicate
7. Establish a mentorship program to train less experienced developers
8. Provide contribution guidelines, how-tos, do’s and don’ts
9. Make open source legal support accessible to developers
10. Hire from the open source communities you value the most
11. Always follow the community processes and practices specific to each project


1、制定一套政策和流程来指导开源贡献

2、设立一个团队来监督所有开源贡献的审批

3、将贡献集中在对您的技术提供支持的领域

4、为贡献者提供所需要的IT基础设施和工具

5、为员工提供关于最佳贡献实践的培训

6、跟踪贡献、评估影响、改进和沟通

7、制定一个指导计划来培养经验不足的开发人员

8、提供贡献指南、如何做、做什么和不该做什么

9、确保开发者能够获得开源法规支持

10、从你最重视的开源社区中招聘人才

11、始终遵循各个项目所特有的社区流程和做法



## Final Words

## 结束语

Open source projects are here to stay, and they play a critical role in the ability for most organizations to deliver products and services to customers. If your organization wants to influence the open source projects that drive your success, you need to participate. Having a solid contribution strategy and implementation plan puts you on the path towards being a good corporate open source citizen. Good luck!

开源万岁！
在大多数组织向客户提供产品和服务能力的过程中，开源项目都扮演着至关重要的角色。如果组织希望对那些帮助你们成功的开源项目施加影响，则需要您需要参与到其中。拥有一个可靠的贡献策略和实施计划可以祝您走上优秀企业级开源公民的成长之路。
祝大家好运！

## Acknowledgements

###         此致

### 敬礼！

Contributors:

![](https://www.linuxfoundation.org/wp-content/uploads/2017/08/stormy_thumb.png)
Stormy Peters
Senior Manager, Community Leads
Red Hat

![](https://www.linuxfoundation.org/wp-content/uploads/2017/08/Nithya_thumb.png)
Nithya Ruff
Senior Director, Open Source Practice
Comcast

贡献者：

![](https://www.linuxfoundation.org/wp-content/uploads/2017/08/stormy_thumb.png)
Stormy Peters
Senior Manager, Community Leads
Red Hat

![](https://www.linuxfoundation.org/wp-content/uploads/2017/08/Nithya_thumb.png)
Nithya Ruff
Senior Director, Open Source Practice
Comcast
