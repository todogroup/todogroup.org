---
title: 管理开源项目的工具
---

开源项目工具的战略应用之路始于一个精心策划、组织有序、有实权的开源项目办公室，用以指导和管理其创建、分发和使用（开源项目）。但这只是第一步。要让这样的办公室运转顺畅，你需要正确的工具。这些至关重要的工具将用于跟踪目标和指标，涉及从工程和法务到执行领导、公关和市场营销，再到人力资源等部门，并为每个功能提供所需的所有资源，以收集数据、提供绩效快照，并管理公司内部对开源的日常使用

本指南提供了关于如何开始构建您的开源工具集的详细信息和场景，包括了解用于跟踪和管理您的开源项目的最重要工具的信息。许多工具是由Linux基金会和其他行业领先者创建并开源的，为您的项目提供了免费和便捷的访问。您还将找到一个示例仪表板设置，该设置将来自多个工具的信息汇总进行集中审查。

**Table of Contents**

- [为什么您需要特殊的工具来管理开源项目](#为什么您需要特殊的工具来管理开源项目)
- [如何选择和规划您的工具](#如何选择和规划您的工具)
  - [利用现有工具](#利用现有工具)
  - [创建仪表板](#创建仪表板)
- [基本工具集的要素](#基本工具集的要素)
  - [Automate processes](#automate-processes)
  - [自动化流程](#自动化流程)
  - [Manage critical tasks](#manage-critical-tasks)
  - [管理关键任务](#管理关键任务)
  - [Source code management](#source-code-management)
  - [源代码管理](#源代码管理)
  - [License compliance](#license-compliance)
  - [许可合规性](#许可合规性)
- [Tools for managing source code](#tools-for-managing-source-code)
- [管理源代码的工具](#管理源代码的工具)
  - [Bug and issue tracking](#bug-and-issue-tracking)
  - [错误和问题跟踪](#错误和问题跟踪)
  - [Archiving and release management](#archiving-and-release-management)
  - [归档和发布管理](#归档和发布管理)
- [Tools for tracking project health](#tools-for-tracking-project-health)
- [项目健康跟踪工具](#项目健康跟踪工具)
  - [For better code reviews:](#for-better-code-reviews)
  - [为了更好的代码审查：](#为了更好的代码审查)
  - [For Contributor License Agreements](#for-contributor-license-agreements)
  - [对于贡献者许可协议](#对于贡献者许可协议)
  - [GitHub Management at Corporate Scale](#github-management-at-corporate-scale)
  - [GitHub 在企业规模上的管理](#github-在企业规模上的管理)
  - [Project Quality](#project-quality)
  - [项目质量](#项目质量)
- [Tools for communications and collaboration](#tools-for-communications-and-collaboration)
- [通信与协作工具](#通信与协作工具)
- [Tools for corporate-scale GitHub management](#tools-for-corporate-scale-github-management)
- [企业规模 GitHub 管理工具](#企业规模-github-管理工具)
- [Final words](#final-words)
- [最后的话](#最后的话)
- [Acknowledgements](#acknowledgements)
- [致谢](#致谢)

## 为什么您需要特殊的工具来管理开源项目

一旦您的开源项目办公室开始运作，就该收集合适的软件工具，让您的开发团队能够管理、跟踪、指导和推进他们的开源项目、消费、贡献和发布。

这些工具至关重要，因为将开源用于业务战略需要其自己的方法论和流程，这与使用和发布专有软件时所需的方法截然不同。开源工具使公司能够完成各种任务：

* 提供协作和代码构建的工作场所。
* 管理项目健康状态。
* 自动化关键和可重复的任务，如代码审查、跟踪和许可证合规性。
* 生成数据以证明您的项目办公室和开源战略的投资回报率。
* 监督项目质量，并确保在出现问题时设置防护措施。
  
在开启您的开源之旅时拥有正确、针对性的工具也会让开发人员和其他员工的工作更轻松，为结果提供更好的洞察力，并成为公司开源项目成功合作和沟通的基础。

> “如果您有超过100个代码仓库或100名需要管理的人员，您真的不能再让人用电子表格手动管理了。虽然，人们仍然会这样做。但这开始变得临时和繁琐。这就是工具发挥作用的地方。它们让您能够扩展规模。” – [Jeff McAffer](https://twitter.com/jeffmcaffer)，微软开源项目办公室主任

## 如何选择和规划您的工具

公司对需要哪些开源工具的早期讨论大多取决于其业务、产品和服务以及它如何为客户和员工提供服务。随着其开源项目办公室制定规划过程和战略地图，工具可以被选择以整合公司的目标、流程和基础设施。

最终，了解您需要哪些工具的唯一方法是了解您想要通过开源做什么。

以下是为管理您的开源项目办公室选择所需工具的基本步骤：

1. 向开发人员和社区成员获取认可和选择偏好。为了实现这一目标，您需要与开发人员和社区成员进行详细讨论。他们可以描述哪些工具已经或可能最适合他们使用。认真对待这些建议和请求。倾听那些将带您达到目标的人的意见。他们很可能已经在使用许多这些工具了，所以要从他们的经验中受益。
2. 了解业务关键应用程序所需的软件依赖关系和集成。这意味着了解和知道您的业务依赖哪些开源软件，以便您能够及时了解安全问题并确保软件的连续性。
3. 研究现有工具，并决定您可以直接使用或根据需要进行构建的工具。不要为每个工具从头开始。看看您所在的开源社区中正在使用的工具，以及有关这些工具的建议和反馈。逗留于在线开发社区中，看看哪些工具有效，并寻求建议和意见。在开源会议上提问，在“兴趣小组”会议上与其他开发者交流，向已经在做您想做的事情的人学习。

一旦选择了工具，就必须进行实施，这还需要几个额外的步骤：

1. 创建内部基础设施以支持、管理和使用这些工具。通过您新成立的开源项目办公室，指定某人负责维护和构建内部基础设施，该基础设施将通过在线内部门户网站分发工具，并将其组织成任务和功能。在这个工具门户中，您可以将工具提供给所有开发人员，或通过根据他们的工作和要求的认证和权限来限制它们对特定用户的使用。
2. 为将使用这些工具的员工提供培训计划。仅仅获取工具是不够的。现在，你必须确保你的开发人员知道如何使用这些工具，并且正在掌握它们的功能。在这个阶段，无论是在线培训、课堂教学还是小型午间小组设置的培训项目，都将对充分利用这些工具带来重要影响。询问你的开发人员哪种学习方法最适合他们，并让他们选择他们想要的学习方式。
3. 确保这些工具在您的组织中得到中心化的展示。让开发人员能够轻松找到并使用它们，最好是集成到跟踪开发进度的任何现有开发者仪表板中。同样，内部工具门户将帮助您的公司组织和分发运营关键工具。
  
在选择工具时，考虑到实施也是有帮助的，因为这也可能影响您的决策。例如，一个学习曲线陡峭的工具可能需要更多的培训。

### 利用现有工具

一旦您对团队需要满足组织开源目标的工具有了清晰的想法，以及自身依赖和基础设施的可能限制，第一步就是探索并了解已经构建好并可供您使用的现有工具。由于大多数工具本身都是开源的，如果它们起初不符合您的确切需求，您的开发团队可以联系工具的构建者，看看他们是否可以合作并贡献，通过添加功能将工具引入新方向。

具有讽刺意味的是，许多开源项目办公室并不总是重用其他人开发的工具，或与其他公司合作共同开发管理其开源项目所需的工具。他们通常想这样做，但许多企业，包括Facebook和微软，在真正成为讨论话题之前就已经拥有现有的工具套件。因为他们已经有了自己的工具集，并已经做出了这些投资，所以似乎对采用其他公司的工具的欲望较小。

这就是刚开始构建自己开源项目的公司具有显著优势的地方。由于他们现在正在建立自己的开源项目办公室并深入开源，他们不必受到这些限制的困扰。

相反，他们可以明智地利用他人的经验和成功，并使用近年来由领先的公司创建的经过验证的工具来构建他们的开源工具箱。Linux基金会的开源行业组织，[TODO Group](http://todogroup.org/)（开放谈论，开放开发），在本文档中收集了这些工具的列表。

### 创建仪表板

除了合适的工具之外，公司还应该结合中央仪表板，允许他们实时监控和跟踪其开源项目和开发。许多公司可能已经有了这样的仪表板用于现有的开发工作和应用程序，并且可能将现有的仪表板与他们的开源工作集成起来。如果没有，他们应该创建或采用新的仪表板来改进他们的开源部署管理。

>“关于仪表板，有许多创建它们的方式，从公司想要如何显示与开发相关的信息的角度来看，这真的是一种艺术。有些人构建这些带有旋转仪表板的花哨屏幕，但关键是要有一个中心位置，最好与您现有的开发仪表板共同位置，人们可以前去了解更多关于开源项目健康状况、指标等信息。” – [Chris Aniszczyk](https://twitter.com/cra)，云原生计算基金会COO。

## 基本工具集的要素

用于管理和报告开源项目的工具的丰富可用性可能会很快变得令人不知所措。如果您的开源项目刚刚起步，将研究重点放在您需要启动和运行的几个基本工具上将会有所帮助。

然后，随着您的项目的发展和对这些工具的使用经验增加，您可以开始采用新的工具来帮助您根据需要自动化和简化流程。请记住，您希望选择的工具能够补充和支持您的内部文化和流程，而不是引导它们。

以下各节介绍了几乎所有开源项目日常使用的基本工具类别。这是组织您的研究的好方法。

### Automate processes

Tools which automate processes are among the most important you will select and use for your company’s open source program. The tasks for such tools are broad, including automating procedures for contributor license agreements (CLAs), which are legal documents stating that a developer created the code and didn’t copy it from anywhere else illegally. Traditionally these kinds of agreements were done manually by printing out the agreements and then signing and faxing them in to comply. But in a world of email and instant communications, that’s crazy today. Instead, the process can be automated using bots that request electronic signatures and then track and handle the submissions.

Other automation tools can tell you who exactly is contributing to your projects and can help remove procedural friction which slows down progress in projects as they get larger and scale to meet the needs of companies.

In Microsoft’s open source program office, where some 8,000 repositories are managed on GitHub involving some 11,000 contributors, about 40,000 internal requests came in to use open source in projects in 2016, according to the company. To manage those requests as well as the code that’s created and the code versions which are being updated,the company turns to tools which can automate the chaos. And because the code is likely being used in potentially hundreds of other projects, it must be tracked carefully so that if a security bug arises all software impacts can quickly be mapped out and fixed. At such a large scale, automation is critical and manual updates would be almost impossible.

![Microsoft’s Azure open source portal displays useful information such as the number of daily users on GitHub. Source: https://www.jeff.wilcox.name/2015/11/azure-on-github/](/img/guides/tools-for-managing-open-source-programs1.png)

### 自动化流程

自动化流程的工具是您公司开源项目中最重要的选择和使用的工具之一。这些工具的任务范围广泛，包括自动化贡献者许可协议（CLA）的程序，CLA是一种法律文件，声明开发人员创建了代码并未非法从其他地方复制。传统上，这些协议是通过打印协议，然后签署并传真来手动完成的。但在电子邮件和即时通讯的世界中，这种做法现在已经过时了。相反，该过程可以通过请求电子签名并随后跟踪和处理提交的机器人来自动化。

其他自动化工具可以告诉您确切是谁在为您的项目做出贡献，并有助于消除程序摩擦，从而减慢随着项目规模变大而需要满足公司需求的进展速度。

根据微软开源项目办公室的说法，该办公室管理着GitHub上的约8000个代码仓库，涉及约11000个贡献者，公司在2016年收到了约40000个内部请求，要求在项目中使用开源。为了管理这些请求以及创建的代码和正在更新的代码版本，公司依赖可以自动化混乱的工具。由于代码可能在可能涉及数百个其他项目中使用，因此必须仔细跟踪，以便如果出现安全漏洞，可以迅速绘制出所有软件影响并进行修复。在如此大规模的情况下，自动化是至关重要的，手动更新几乎是不可能的。

![微软的Azure开源门户显示了一些有用的信息，比如GitHub上每日用户的数量。来源：https://www.jeff.wilcox.name/2015/11/azure-on-github/](/img/guides/tools-for-managing-open-source-programs1.png)

### Manage critical tasks

Other important tools to be considered and acquired are those which help manage critical tasks, such as project management, tracking project health and ensuring clear and quick communications between developers, open source communities, and others inside a company.

### 管理关键任务

另一种需要考虑和获取的重要工具是那些帮助管理关键任务的工具，例如项目管理、跟踪项目健康状况，并确保开发人员、开源社区和公司内部之间清晰快速的沟通。

### Source code management

Most corporate software projects being developed through open source program offices use [GitHub](https://GitHub.com/about) as their centralized hosting and development platform.

GitHub is an online source code management site that allows open source developers to manage and house their code in a central “repository” or storage space where participants can collaborate and build their code together. Some 64 million open source coding projects are hosted within GitHub today, involving some 23 million developers.

GitHub users can add code, review submitted code, propose changes, get and offer feedback and provide project management using the service. GitHub uses the [Git Version Control System](https://git-scm.com/), the open source project developed by Linux creator Linus Torvalds which provides organization for the code and people who are collaborating on open source. Each “contributor” has their own copy of the project repository they are working on, where they can make changes on their own computer and then submit it back to the project for future inclusion. That “pull request,” ([example here](https://GitHub.com/GitHub/opensource.guide/pull/402/files)) or code contribution, is then reviewed, discussed, modified and approved or rejected by the project organizers.

### 源代码管理

大多数通过开源项目办公室开发的企业软件项目都使用GitHub作为它们的集中式托管和开发平台。

GitHub是一个在线源代码管理站点，允许开源开发人员将其代码管理和存储在一个中心的“仓库”或存储空间中，参与者可以在其中进行协作和共同构建代码。今天，有大约6400万个开源编码项目托管在GitHub上，涉及约2300万名开发人员。

GitHub用户可以添加代码，审查提交的代码，提出更改建议，获取和提供反馈，并使用该服务进行项目管理。GitHub使用 [Git版本控制系统](https://git-scm.com/)，这是由Linux创始人Linus Torvalds开发的开源项目，为正在协作的代码和人员提供组织。每个“贡献者”都有自己的项目仓库副本，他们可以在自己的计算机上进行更改，然后将其提交回项目以供将来包含。然后，项目组织者会审查、讨论、修改并批准或拒绝该“拉取请求”（此处有示例）(https://GitHub.com/GitHub/opensource.guide/pull/402/files)，或代码贡献。

### License compliance

Also important are code scanning and compliance tools, which help track code provenance and license requirements. It’s important for companies to watch over the open source code being brought into its own infrastructure, products, and services to ensure license requirements are met.

Your applications, for example, could include several thousand open source components. To protect your company from legal issues it’s critical to know these details. In scenarios that are high risk, users must dive into the code to deeply validate and verify that the licenses are what they say they are, depending on where your business is on a risk spectrum. (See our guide on using and distributing open source code.)

> “You must understand your risk profile, because in the end scanning is all about risk management. You can stick your head in the sand at one end then just trust and hope that you are OK. Or you could say ‘If I get sued, it’s going to devastate my business.’ You need to really be sure. So, you crack open the package and you look through all the lines of code and you find everything that could possibly be in there.” – [Jeff McAffer](https://twitter.com/jeffmcaffer), director of the Open Source Programs Office at Microsoft.

### 许可合规性

代码扫描和合规性工具同样重要，它们有助于跟踪代码来源和许可要求。对于公司来说，监控引入其自身基础设施、产品和服务的开源代码以确保符合许可要求至关重要。

例如，您的应用程序可能包含数千个开源组件。为了保护公司免受法律问题的困扰，了解这些细节至关重要。在高风险的情况下，用户必须深入代码以深入验证和确认许可证是否符合他们所说的内容，这取决于您的业务在风险光谱上的位置（请参阅我们关于使用和分发开源代码的指南）。

>“您必须了解您的风险概况，因为最终扫描的一切都是关于风险管理。您可以把头埋在沙子里，然后只是相信并希望自己没事。或者您可以说‘如果我被起诉，那将毁了我的生意。’您需要真正确定。所以，您打开软件包，然后查看所有代码行，并找到可能存在的所有内容。” – Jeff McAffer，微软开源项目办公室主任。

## Tools for managing source code

As we discussed earlier GitHub is the go-to source code management system for most open source program offices these days. But GitHub alone won’t meet all your program’s code management needs – especially as you scale up your efforts.

Some of the tools used in the world of open source are aimed at improving GitHub itself by adding features it lacks, such as support for checking Developer Certificate of Origin (DCO) statements to be sure that code can be legally licensed and used in an open source project.

GitHub also has some deficiencies when it comes to code reviews, so there are available tools that can automatically send questionable code back to the contributors who created it and ask them to review and make needed changes. GitHub doesn’t have a way to force someone to review their code, so these clever tools make that happen to improve workflows.

Other GitHub-specific tools expand on GitHub’s performance metrics capabilities, which tend to be very project specific rather than providing detailed information across whole organizations. For companies that maintain many open source code repositories across multiple GitHub projects, better tools are needed to organize and aggregate them to make sense of it all. A wide range of such tools are available from Amazon, Netflix, and Microsoft to help with those tasks.

Here are some of the most popular and useful source code management tools which can streamline and help your GitHub presence:

## 管理源代码的工具

正如我们之前讨论过的，GitHub是当今大多数开源项目办公室的首选源代码管理系统。但仅仅依靠GitHub可能无法满足您的所有项目的代码管理需求——特别是在您扩大努力的规模时。

一些用于开源世界的工具旨在通过添加它所缺少的功能来改进GitHub，例如支持检查开发者证书的工具，以确保代码可以在开源项目中合法许可和使用。

在代码审查方面，GitHub也存在一些不足，因此有一些可用的工具可以自动将问题代码发送回创建者，并要求他们进行审查和进行必要的更改。GitHub没有强制某人审查其代码的方法，因此这些巧妙的工具将使工作流程更加顺畅。

其他针对GitHub的特定工具扩展了GitHub的性能指标功能，这些功能往往非常特定于项目，而不是提供整个组织的详细信息。对于维护多个开源代码仓库并跨多个GitHub项目进行的公司，需要更好的工具来组织和汇总它们以理解其中的意义。来自Amazon、Netflix和微软的各种工具可帮助处理这些任务。

以下是一些最流行和最有用的源代码管理工具，它们可以简化和帮助您的GitHub存在：

**Source code scanning and license compliance**

[Black Duck Software Composition Analysis](https://www.synopsys.com/software-integrity/security-testing/software-composition-analysis.html) – Black Duck software composition analysis (SCA) by Synopsys helps teams manage the security, quality, and license compliance risks that come from the use of open source and third-party code in applications and containers.

[Copyright review tools](https://wiki.debian.org/CopyrightReviewTools) – This collection of open source command line tools help make initial copyright file construction and subsequent review and update easier.

[FlexNet Code Insight](https://www.revenera.com/protect/products/flexnet-code-insight.html) – Revenera offers FlexNet Code Insight to help automate corporate open source use among developers, legal teams and security staffers.

[FOSSA](http://fossa.io/) – This is a commercial tool that automatically performs code dependency tracking, license compliance scanning in the background.

[FOSSID](https://fossid.com) - FOSSID is a commercial tool for license and vulnerability scanning.  Rather than relying upon declared components and licenses, FOSSID uses a large database of projects and code fragments to scan for code snippets. This enables detection of copied/pasted code, or code where license declarations were not properly preserved. In particular, this is useful when auditing code received from a third party or when preparing to open source code that was originally developed for internal use only.

[FOSSology](https://www.fossology.org/) – A Linux Foundation project, FOSSology is an open source license compliance software toolkit which can run license, copyright and export control scans from the command line. A database and web UI are also available to create compliance workflows.

![The Linux Foundation’s FOSSology compliance tool](/img/guides/tools-for-managing-open-source-programs3.png)

[REUSE](https://reuse.software/) – A free software tool to help adopt and check the application of licenses in a code repository. It is based on best practices, including the SPDX specification. It offers a badge API service to market the compliance.

[scancode-toolkit](https://github.com/nexB/scancode-toolkit) – From nexB, the open source ScanCode suite of utilities scans code for licenses, copyright and dependencies to find, discover and inventory open source and third-party components used in your code.

[SPDX](https://spdx.dev/) – The Software Package Data Exchange (SPDX) specification is a standard format used to describe the components, licenses and copyrights associated with software packages. The SPDX standard aids compliance with free and open source software licenses by standardizing the way license information is shared between developers and companies. The SPDX specification is developed by the SPDX workgroup, which is hosted by The Linux Foundation. The group offers open source [tools](https://spdx.dev/tools) to help users of SPDX documents.

[Vigiles](https://timesys.com/solutions/vigiles-vulnerability-management/) – Vigiles is a commercial Software Composition Analysis (SCA) and CVE monitoring tool optimized for embedded Linux and usable for all open source software. It gives you the complete process to track, triage, remediate, and document CVEs affecting your device.

[WhiteSource](https://www.whitesourcesoftware.com/) – Provides licensing, security, code quality and reporting analysis for managing open source components in real-time by automatically and continuously scanning dozens of open source repositories on a commercial basis.

**源代码扫描和许可证合规性**

[Black Duck 软件构成分析](https://www.synopsys.com/software-integrity/security-testing/software-composition-analysis.html) – Synopsys 的 Black Duck 软件构成分析 (SCA) 帮助团队管理在应用程序和容器中使用开源和第三方代码所带来的安全、质量和许可证合规风险。

[版权审查工具](https://wiki.debian.org/CopyrightReviewTools) – 这一套开源命令行工具帮助简化初始版权文件的构建以及后续的审查和更新。

[FlexNet Code Insight](https://www.revenera.com/protect/products/flexnet-code-insight.html) – Revenera 提供的 FlexNet Code Insight 帮助开发人员、法律团队和安全人员自动化公司开源使用。

[FOSSA](http://fossa.io/) – 这是一款商业工具，可在后台自动执行代码依赖跟踪和许可证合规扫描。

[FOSSID](https://fossid.com) - FOSSID 是一款用于许可证和漏洞扫描的商业工具。FOSSID 不依赖声明的组件和许可证，而是使用大型项目和代码片段数据库来扫描代码片段。这可以检测复制/粘贴的代码，或者那些未正确保留许可证声明的代码。特别是在审核从第三方收到的代码或准备开源最初仅供内部使用的代码时，这非常有用。

[FOSSology](https://www.fossology.org/) – 一个 Linux 基金会项目，FOSSology 是一个开源许可证合规软件工具包，可以从命令行运行许可证、版权和出口控制扫描。还提供了数据库和网页用户界面来创建合规工作流。

![Linux 基金会的 FOSSology 合规工具](/img/guides/tools-for-managing-open-source-programs3.png)

[REUSE](https://reuse.software/) – 一个免费的软件工具，帮助在代码库中采用和检查许可证的应用。它基于最佳实践，包括 SPDX 规范。它提供一个徽章 API 服务来标记合规性。

[scancode-toolkit](https://github.com/nexB/scancode-toolkit) – 来自 nexB 的开源 ScanCode 工具套件，扫描代码中的许可证、版权和依赖项，以发现、探索和清点代码中使用的开源和第三方组件。

[SPDX](https://spdx.dev/) – 软件包数据交换 (SPDX) 规范是一种用于描述软件包的组件、许可证和版权的标准格式。SPDX 标准通过标准化开发者和公司之间共享许可证信息的方式来帮助遵守自由和开源软件许可证。SPDX 规范由 Linux 基金会主办的 SPDX 工作组开发。该小组提供开源[工具](https://spdx.dev/tools)来帮助使用 SPDX 文档的用户。

[Vigiles](https://timesys.com/solutions/vigiles-vulnerability-management/) – Vigiles 是一个商业软件构成分析 (SCA) 和 CVE 监控工具，优化用于嵌入式 Linux，并适用于所有开源软件。它提供了跟踪、分类、修复和记录影响设备的 CVE 的完整过程。

[WhiteSource](https://www.whitesourcesoftware.com/) – 提供许可、安全、代码质量和报告分析，通过自动和持续扫描数十个开源代码库来实时管理开源组件。

### Bug and issue tracking

[Bugzilla](https://www.bugzilla.org/) – Open source, server-based software featuring an advanced query tool that can remember searches, integrated email capabilities and a comprehensive permissions system. Bugzilla is used by [Mozilla](https://bugzilla.mozilla.org/) as its bug tracking system.

[GitHub Issues](https://help.github.com/articles/about-issues/) – GitHub’s own integrated feedback and bug tracker, GitHub Issues is available as part of GitHub’s project hosting.

[GitLab](https://about.gitlab.com/) – This bug tracking tool unifies issue tracking, code review, Git repository management, activity streams, wikis and more in a single UI to assist your open source projects. GitLab is available as a service or as a commercial software.

[JIRA](https://www.atlassian.com/software/jira) – From Atlassian, JIRA contains custom filters, developer tool integrations, customizable workflows and rich APIs to integrate JIRA with other applications. JIRA is available as a commercial software.

### 错误和问题跟踪

[Bugzilla](https://www.bugzilla.org/) – 开源、服务器端软件，具有高级查询工具，可以记住搜索结果，集成的电子邮件功能和全面的权限系统。Mozilla 将 Bugzilla 用作其错误跟踪系统。

[GitHub Issues](https://help.github.com/articles/about-issues/) – GitHub 自带的反馈和错误跟踪工具，GitHub Issues 是 GitHub 项目托管的一部分。

[GitLab](https://about.gitlab.com/) – 这个错误跟踪工具在单一用户界面中统一了问题跟踪、代码审查、Git 仓库管理、活动流、Wiki 等功能，以帮助您的开源项目。GitLab 可作为服务或商业软件使用。

[JIRA](https://www.atlassian.com/software/jira) – 来自 Atlassian 的 JIRA 包含自定义过滤器、开发者工具集成、可自定义的工作流和丰富的 API，以将 JIRA 与其他应用程序集成。JIRA 可作为商业软件使用。

### Archiving and release management

[Artifactory](https://www.jfrog.com/artifactory/) – Artifactory is a repository manager from JFrog which supports software packages created in any code language. It integrates with all major DevOps and continuous integration and continuous deployment tools. Artifactory is available as a commercial or as an open source tool.

[Docker Hub](https://hub.docker.com/) – A cloud-based registry service which allows users to link to code repositories and build and test their images. Docker Hub is a centralized resource for container image discovery, distribution and change management, collaboration and workflow automation throughout the development pipeline.

[github-release](https://github.com/github-release/github-release) – The open source, built in functionality part of GitHub which lets users [package and edit releases](https://help.github.com/articles/about-releases/) of projects on GitHub so they are available for use by other community members.

### 归档和发布管理

[Artifactory](https://www.jfrog.com/artifactory/) – Artifactory 是 JFrog 的一个仓库管理器，支持用任何编程语言创建的软件包。它与所有主要的 DevOps 和持续集成、持续部署工具集成。Artifactory 可作为商业或开源工具使用。

[Docker Hub](https://hub.docker.com/) – 一个基于云的注册服务，允许用户链接到代码仓库并构建和测试他们的镜像。Docker Hub 是一个集中资源，用于容器镜像的发现、分发和变更管理，以及开发管道中的协作和工作流自动化。

[github-release](https://github.com/github-release/github-release) – GitHub 的开源内置功能，让用户[打包和编辑项目的发布](https://help.github.com/articles/about-releases/)，使其他社区成员可以使用这些项目。

## Tools for tracking project health

Monitoring and tracking the overall health of open source projects as they grow and mature is a core task for an enterprise open source program. To accomplish it, you must gather tools which report on how individual open source projects are performing and being received by their communities – often across dozens, hundreds or even thousands of projects at once. The tools also must be able to roll the data into meaningful, useful, and actionable information about overall project performance across your entire open source portfolio.

![Amazon’s Open Source Program Dashboard can be used to view and monitor many GitHub organizations and/or users at one time. Source: https://github.com/amzn/oss-dashboard](/img/guides/tools-for-managing-open-source-programs4.png)

The bottom line here is it’s all about the critical and useful insights you can glean from the data – not about vanity metrics such as detailing how many “watcher” stars a project has logged, how many contributors have been part of the project since its start, or other metrics that lack important context.

The best project health tools must also help the project teams be responsive to the communities which support their efforts and encourage engagement and diversity with contributing developers. That means the tools help maintainers quickly respond to questions or feedback posted by community members so they remain enthusiastically engaged and don’t get bored and move on to other projects.

Some open source communities will have large groups of contributors, while others will have small niche groups of community members. The project health tools need to be able to work with projects of all sizes.

> “Regarding existing tools and systems, my hope is that we're quickly getting to a point where a company’s open source program office should not need to create any tools or technologies on their own. They should be able to find and use existing open source tools which can be used to manage their open source programs.” – [Jeff McAffer](https://twitter.com/jeffmcaffer), Director of the Open Source Programs Office at Microsoft

Here are some of the most popular and useful project statistics and project health tracking tools:

* [Gittagstats](https://github.com/mcharleb/gittagstats) – Gittagstats is an open source tool which generates statistics reports from a set of tags for a Git repository. The tool was created by Qualcomm.
* [GrimoireLab](https://chaoss.github.io/grimoirelab/) – GrimoireLab has a variety of open source tools to measure open source project statistics and visualize them, from git repositories, GitHub pull requests or Bugzilla tickets to mailing lists, Meetup groups or Slack channels. GrimoireLab is a project in [CHAOSS](https://chaoss.community), a collaborative group on open source development metrics.
* [OSS Tracker](https://github.com/Netflix/osstracker) – OSS Tracker, from Netflix, collects data about a GitHub organization and aggregates it across all projects within that organization in a single user interface. All repositories are listed and metrics are combined for an organization, but community managers can also organize projects into functional areas and appoint administrators to assign management and engineering leads.

> “The goal is to have the tools, along with transparent data and metrics-related information, which can be used to guide the organization.” – [Chris Aniszczyk](https://twitter.com/cra), COO of the Cloud Native Computing Foundation

The TODO Group also offers a [helpful list that adds other tools](https://GitHub.com/todogroup/awesome-oss-mgmt) as well:

## 项目健康跟踪工具

随着开源项目的成长和成熟，监控和跟踪其整体健康状况是企业开源项目的核心任务。为了实现这一目标，您必须收集工具，报告个别开源项目在其社区中的表现和接受程度 - 通常涵盖数十、数百甚至数千个项目。这些工具还必须能够将数据整合成有意义、有用且可操作的信息，以便全面了解整个开源项目组合的综合表现。

![Amazon 的开源项目仪表板可用于一次查看和监视多个 GitHub 组织和/或用户。来源: https://github.com/amzn/oss-dashboard](/img/guides/tools-for-managing-open-source-programs4.png)

关键在于，关键且有用的见解是您可以从数据中获得的 - 而不是关于虚荣指标，比如详细说明项目自开始以来有多少“关注者”星标，有多少贡献者参与了项目，或者其他缺乏重要背景的指标。

最好的项目健康工具还必须帮助项目团队对支持他们努力的社区做出响应，并鼓励贡献开发人员的参与和多样性。这意味着工具帮助维护者快速回应社区成员发布的问题或反馈，以便他们保持热情参与，不会感到无聊而转移到其他项目。

一些开源社区可能会有大量的贡献者，而其他社区可能只有一小部分特定群体的社区成员。项目健康工具需要能够处理各种规模的项目。

> “关于现有的工具和系统，我的希望是，我们很快就会达到这样一个观点：公司的开源项目办公室不应该再需要自己创建任何工具或技术。他们应该能够找到并使用现有的开源工具，用于管理他们的开源项目。” - [Jeff McAffer](https://twitter.com/jeffmcaffer)，微软开源项目办公室主任

以下是一些最受欢迎和最有用的项目统计和项目健康跟踪工具：

* [Gittagstats](https://github.com/mcharleb/gittagstats) – Gittagstats 是一个开源工具，用于从 Git 存储库的一组标签生成统计报告。该工具由高通公司创建。

* [GrimoireLab](https://chaoss.github.io/grimoirelab/) – GrimoireLab 有各种开源工具，用于测量和可视化开源项目的统计数据，从 Git 存储库、GitHub 拉取请求或 Bugzilla 票据到邮件列表、Meetup 群组或 Slack 频道。GrimoireLab 是 [CHAOSS](https://chaoss.community) 的一个项目，这是一个关于开源开发指标的协作组。

* [OSS Tracker](https://github.com/Netflix/osstracker) – 来自 Netflix 的 OSS Tracker 收集有关 GitHub 组织的数据，并将其汇总到该组织的所有项目中，以单一用户界面展示。所有存储库都列出来，指标被组合为一个组织，但社区管理员也可以将项目组织成功能区域，并指定管理员来分配管理和工程师的领导。 

> “目标是拥有工具，以及透明的数据和与指标相关的信息，可以用来指导组织。” - [Chris Aniszczyk](https://twitter.com/cra)，云原生计算基金会首席运营官

TODO Group 还提供了一个[有用的列表，添加了其他工具](https://GitHub.com/todogroup/awesome-oss-mgmt)。

### For better code reviews:

* [PullApprove](https://about.pullapprove.com/) – Brings more formalization to code contributions – or pull requests – by improving code quality through peer-review, enforcing style guidelines, catching errors and providing security checks on code.
* [sentinel](https://github.com/habitat-sh/sentinel) – A repository management bot which reviews and tests code contributions, builds a list of maintainers for the repository and communicates the status of a pull request with users.

### 为了更好的代码审查：

* [PullApprove](https://about.pullapprove.com/) – 通过改进同行审查、强制样式指南、捕获错误并对代码进行安全检查，使代码贡献（或拉取请求）更加正式化，从而提高代码质量。
* [sentinel](https://github.com/habitat-sh/sentinel) – 一个仓库管理机器人，用于审查和测试代码贡献，构建仓库的维护者列表，并与用户沟通拉取请求的状态。

### For Contributor License Agreements

[CLA Assistant](https://github.com/cla-assistant/cla-assistant) – Contributed by SAP, the CLA Assistant streamlines workflows by handling the legal side of contributions for users. The Assistant asks code contributors to sign CLAs as they make their code contributions and authenticates each contributor with his or her GitHub account. It also updates the status of a pull request when the contributor agrees to the CLA and automatically asks users to re-sign the CLA for each new pull request if changes are made to the CLA.

![SAP’s CLA Assistant tool](/img/guides/tools-for-managing-open-source-programs5.png)

[CLA Portal](https://github.com/vmware/claportal) – From VMware, CLA Portal adds a workflow to enable contributors to digitally sign a CLA for pull requests to your GitHub repositories. When a developer opens a pull request, they are prompted to sign the agreement if needed. Also included is an administrator interface for CLA authoring, CLA-to-project mapping, and agreement reviews.

[DCOB](https://github.com/chef/dcob) – A Developer Certificate of Origin Bot which helps to enforce developer certificate of origin sign-offs for each code change in a pull request. The DCOB sets the status for each accepted code change, as required by the [Developer Certificate of Origin](http://developercertificate.org/).

[EasyCLA](https://github.com/communitybridge/easycla) - By the Linux Foundation to streamline the CLA process. It focusses on Linux Foundation projects, but projects outside the Linux Foundation are considered on a case-by-case basis. In addition to the typical CLA tooling, it enables whitelisting of corporate contributers. It integrates with GitHub pull requests.

### 对于贡献者许可协议

[CLA Assistant](https://github.com/cla-assistant/cla-assistant) – 由 SAP 贡献，CLA Assistant 通过处理用户的法律贡献方面，简化了工作流程。该助手在用户进行代码贡献时要求代码贡献者签署 CLA，并使用其 GitHub 帐户对每个贡献者进行身份验证。如果对 CLA 进行更改，它还会自动更新拉取请求的状态，并在每个新的拉取请求中要求用户重新签署 CLA。

![SAP 的 CLA Assistant 工具](/img/guides/tools-for-managing-open-source-programs5.png)

[CLA Portal](https://github.com/vmware/claportal) – 来自 VMware，CLA Portal 添加了一个工作流程，使贡献者能够为向您的 GitHub 仓库的拉取请求签署数字 CLA。当开发人员打开拉取请求时，如有需要，他们将被提示签署协议。还包括一个管理员界面，用于 CLA 作者、CLA 与项目的映射和协议审查。

[DCOB](https://github.com/chef/dcob) – 一个开发人员原产地证书机器人，用于帮助对每个拉取请求中的代码更改进行开发者原产地证书签署。DCOB 根据[开发者原产地证书](http://developercertificate.org/)为每个接受的代码更改设置状态。

[EasyCLA](https://github.com/communitybridge/easycla) - 由 Linux Foundation 提供，用于简化 CLA 流程。它专注于 Linux Foundation 项目，但会根据情况考虑 Linux Foundation 之外的项目。除了典型的 CLA 工具之外，它还支持对企业贡献者进行白名单设置。它与 GitHub 拉取请求集成。

### GitHub Management at Corporate Scale

* [hubcommander](https://github.com/Netflix/hubcommander) - A Slack bot for GitHub organization management, HubCommander uses chat-ops – or conversation-driven development – to help manage GitHub projects. It creates a simple way to perform privileged GitHub organization management tasks without granting administrative or owner privileges to your GitHub organization members.
* [opensource-portal](https://github.com/Microsoft/opensource-portal) – From Microsoft, this tool is designed to help large organizations with their large-scale GitHub management operations, onboarding and more. This is one of a suite of tools provided by the Open Source Programs Office at Microsoft.
* [settings](https://github.com/bkeepers/github-configurer) – This app syncs repository settings defined in .github/settings.yml to GitHub, enabling pull requests for repositories.
* [zappr](https://github.com/zalando/zappr) - Zappr is a GitHub integration built to enhance project workflows. From Zalando, zappr helps developers to increase productivity and improve open-source project quality by removing bottlenecks around pull request approval and helping project owners halt “rogue” pull requests before they're merged into the project master branches.

### GitHub 在企业规模上的管理

* [hubcommander](https://github.com/Netflix/hubcommander) - 一个 Slack 机器人用于 GitHub 组织管理，HubCommander 使用 chat-ops，也就是基于对话的开发，来帮助管理 GitHub 项目。它提供了一种简单的方法来执行特权的 GitHub 组织管理任务，而不需要向 GitHub 组织成员授予管理员或所有者权限。
* [opensource-portal](https://github.com/Microsoft/opensource-portal) – 来自 Microsoft，这个工具旨在帮助大型组织进行大规模的 GitHub 管理操作，包括入职等。这是微软开源计划办公室提供的一套工具之一。
* [settings](https://github.com/bkeepers/github-configurer) – 这个应用程序将 .github/settings.yml 中定义的存储库设置同步到 GitHub，为存储库启用拉取请求。
* [zappr](https://github.com/zalando/zappr) - Zappr 是一个旨在增强项目工作流程的 GitHub 集成。来自 Zalando，zappr 帮助开发人员提高生产率，并通过消除拉取请求批准的瓶颈，以及帮助项目所有者在将“流氓”拉取请求合并到项目主分支之前停止它们，从而提高开源项目的质量。

### Project Quality

* [CII Best Practices Badging](https://bestpractices.coreinfrastructure.org/) – From The Linux Foundation, the Core Infrastructure Initiative (CII) Best Practices badge is a way for Free/Libre and Open Source Software (FLOSS) projects to show that they follow best practices. Projects can voluntarily self-certify for free by using this web application to explain how they follow each best practice.
* [CodeClimate](https://codeclimate.com/) – Code Climate empowers organizations to take control of their code quality by incorporating fully configurable test coverage and maintainability data throughout the development workflow. It’s free for open source projects!

### 项目质量

* [CII 最佳实践徽章](https://bestpractices.coreinfrastructure.org/) – 来自 Linux 基金会的核心基础设施倡议 (CII) 最佳实践徽章是自由/开源软件 (FLOSS) 项目展示他们遵循最佳实践的一种方式。项目可以通过使用此 Web 应用程序自愿免费进行自我认证，解释他们如何遵循每个最佳实践。
* [CodeClimate](https://codeclimate.com/) – Code Climate 让组织能够通过在开发工作流程中完全可配置的测试覆盖率和可维护性数据来控制他们的代码质量。它适用于开源项目，并且是免费的！

## Tools for communications and collaboration

Of course, open source development isn’t just about the code. It also requires healthy communications and collaborations between a diverse group of people who are working on the projects inside and outside of enterprises,as well as by staff members in a company’s Open Source Program Office.

For that developers can lean on tools they may already be using for other projects, including [Internet Relay Chat (IRC)](http://www.irc.org/links.html), where developers can post inquiries and get [quick responses to development-related topics](http://blog.andrewray.me/irc-the-secret-weapon-of-developers/). Another example is [TWiki,](http://twiki.org/) which is an open source enterprise Wiki and web collaboration platform where developers can discuss code and projects and related topics.

Communications can also be fostered through social media platforms, web portals, open source project repositories and other places where input, questions and discussions can be found and fostered.

Then there’s [Slack](https://slack.com/), which is an online team project management and communications platform where users can access and share messages and files, organize workflows, perform searches for information and more. Slack can be configured to receive notifications for support requests, code check-ins, error logs and other tasks as well.

And don’t forget your company’s public relations and marketing staff when it comes to shouting out your company’s participation and support of open source. Social media accounts with sites including Twitter, Reddit, Facebook, LinkedIn and others are important, as well as the use of internal and external blogs and websites. Customer Relationship Management (CRM) software, as well as email blasts and newsletters, can help companies keep customers and clients informed about their open source progress.

## 通信与协作工具

当然，开源开发不仅仅关乎代码。它还需要在企业内外工作在项目上的一群多样化的人之间进行健康的沟通和合作，以及公司开源项目办公室的员工。

为此，开发人员可以利用他们可能已经在其他项目中使用的工具，包括 [Internet Relay Chat (IRC)](http://www.irc.org/links.html)，开发人员可以在其中发布查询并获取与开发相关主题有关的[快速响应](http://blog.andrewray.me/irc-the-secret-weapon-of-developers/)。另一个例子是 [TWiki](http://twiki.org/)，它是一个开源企业 Wiki 和 web 协作平台，开发人员可以在其中讨论代码、项目和相关主题。

沟通也可以通过社交媒体平台、Web 门户、开源项目存储库以及其他可以找到和培育输入、问题和讨论的地方来促进。

然后是 [Slack](https://slack.com/)，它是一个在线团队项目管理和沟通平台，用户可以访问和共享消息和文件、组织工作流程、进行信息搜索等。Slack 可以配置为接收支持请求、代码提交、错误日志等任务的通知。

在宣传公司的参与和支持开源时，不要忘记您公司的公共关系和营销人员。社交媒体账号包括 Twitter、Reddit、Facebook、LinkedIn 等网站都很重要，还有内部和外部博客和网站的使用。客户关系管理 (CRM) 软件以及电子邮件群发和新闻通讯，可以帮助公司让客户和客户了解他们的开源进展。

## Tools for corporate-scale GitHub management

When it comes to the tools your company provides and uses for its corporate open source projects, the most important ones are arguably those which help companies manage their corporate-scale GitHub operations. GitHub is a perfect platform for many operations, but for large, complex companies such as Google, Microsoft, Facebook, Twitter, LinkedIn and others, there can be many limitations to using the standard GitHub offerings.

Large enterprises need many more capabilities, including things like identity management, settings and permissions management, security and two-factor authentication enforcement, as well as deeper means to understand and track code repositories.

That’s where specialized, automated tools often need to be built to handle tasks such as onboarding, offboarding, enforcing security policies and giving developers request access to repositories.

Microsoft responded to its own unique requirements by building its own tools to handle many such tasks to streamline and improve its open source program. Microsoft has a [healthy presence on GitHub,](https://github.com/Microsoft) with over 4,000 repositories and involving more than 4,500 developers to date.

> “That management of your GitHub presence is something that as you scale, it becomes important. You get a GitHub organization, which is a collection of repositories, and then you get members and you have teams. Managing all of that stuff becomes a little bit complicated, especially if it starts to scale out to hundreds of repositories, hundreds of people and multiple organizations on GitHub.” – [Jeff McAffer](https://twitter.com/jeffmcaffer), Director of the Open Source Programs Office at Microsoft

One of the things Microsoft created was a custom-built self-service [GitHub management and onboarding portal](http://www.jeff.wilcox.name/2015/11/azure-on-github/) for organizing its projects, repositories, and teams. On its simplest level, the web-based portal allows developers to map their Microsoft company ID to their GitHub ID, which bolsters system security and helps simplify the organization of large numbers of developers who are involved in large numbers of important projects.

The portal also lets employees authenticate with GitHub and Microsoft, which creates a “virtual link” of their identities so they can do their work while giving them needed permissions for tasks depending on their work roles. If employees leave the company, the system can be adjusted to remove or reclassify their access rights as needed.

The portal runs on one or more cloud servers and relies on a cache to help with sessions and reduce pressure on the GitHub API. The Microsoft portal, which averages about 1,000 unique users daily as a tool for its engineers, is part of the company’s growing open source efforts, which now includes more than 10,000 engineers who are using, contributing to and releasing open source code.

## 企业规模 GitHub 管理工具

在涉及到公司为其企业级开源项目提供和使用的工具时，最重要的工具可以说是那些帮助公司管理其企业级 GitHub 运营的工具。对于谷歌、微软、Facebook、Twitter、LinkedIn 等大型、复杂的公司来说，GitHub 是一个非常完美的平台，但是使用标准的 GitHub 功能可能存在许多限制。

大型企业需要更多的功能，包括身份管理、设置和权限管理、安全和两步验证强制执行，以及更深入地了解和跟踪代码存储库的方法。

这就是专门的自动化工具通常需要构建来处理任务的地方，例如入职、离职、强制执行安全策略以及给开发人员请求对存储库的访问权限。

微软根据自己独特的要求建立了自己的工具，以处理许多这样的任务，以简化和改进其开源计划。到目前为止，微软在 GitHub 上有着[强大的存在](https://github.com/Microsoft)，拥有超过 4000 个存储库，涉及超过 4500 名开发人员。

> “随着规模的扩大，管理您的 GitHub 存在变得越来越重要。您会得到一个 GitHub 组织，其中包含一系列存储库，然后您会有成员，还有团队。管理所有这些东西变得有点复杂，特别是如果开始扩展到数百个存储库、数百人和 GitHub 上的多个组织。” – [Jeff McAffer](https://twitter.com/jeffmcaffer)，微软开源项目办公室主任

微软创建的一个东西是一个定制的自助式[GitHub 管理和入职门户网站](http://www.jeff.wilcox.name/2015/11/azure-on-github/)，用于组织其项目、存储库和团队。在其最简单的级别上，这个基于 Web 的门户网站允许开发人员将他们的 Microsoft 公司 ID 映射到他们的 GitHub ID，这增强了系统的安全性，并有助于简化参与大量重要项目的大量开发人员的组织。

该门户网站还允许员工通过 GitHub 和 Microsoft 进行身份验证，从而创建其身份的“虚拟链接”，以便他们可以完成工作，并根据其工作角色为任务授予所需的权限。如果员工离开公司，系统可以根据需要调整其访问权限或重新分类其访问权限。

该门户网站运行在一个或多个云服务器上，并依赖缓存来帮助会话并减轻对 GitHub API 的压力。微软门户网站每天平均有大约 1000 个独立用户，作为其工程师的工具，它是该公司日益增长的开源努力的一部分，现在包括超过 10000 名工程师使用、贡献和发布开源代码。

## Final words

Hey, nobody said it was going to be simple to move your company into the world of open source. But plenty of other companies, including giants like Microsoft and Google have done this before you and have provided detailed road maps, code, suggestions, and more to make your own journey easier.

The creation of an open source program office and the selection of a package of critical tools to get your efforts started are within your grasp. And they are likely already inspiring great anticipation among your developers, many of whom are probably already contributing to open source projects on their own (or at work, under cover of darkness).

By collaborating on open source projects and inviting others to collaborate with you, your company can gain immeasurable benefits and drive its progress forward with energy and innovation.

Having the right tools is critical to empowering your company’s open innovation.

## 最后的话

嘿，没人说将你的公司引入开源世界会很简单。但是许多其他公司，包括像微软和谷歌这样的巨头，在你之前已经做到了这一点，并提供了详细的路线图、代码、建议等，以使你自己的旅程更加轻松。

建立一个开源项目办公室，并选择一套关键工具来启动你的努力，这些都在你的掌握之中。它们很可能已经在你的开发人员中间引发了极大的期待，其中许多人可能已经在自己的项目中（或在工作中，在黑暗中）为开源项目做出了贡献。

通过在开源项目上合作，并邀请其他人与你合作，你的公司可以获得无法估量的好处，并以活力和创新推动其进步。

拥有合适的工具对于赋予你公司开放式创新的能力至关重要。

## Acknowledgements

The affiliations of the contributors are from when the article was originally published in 2019:

* [Chris Aniszczyk](https://twitter.com/cra), COO of the Cloud Native Computing Foundation.
* [Jeff McAffer](https://twitter.com/jeffmcaffer), Director of the Open Source Programs Office at Microsoft.

## 致谢

贡献者的所属单位是根据文章最初发布时的情况：

* [Chris Aniszczyk](https://twitter.com/cra)，CNCF 的首席运营官。
* [Jeff McAffer](https://twitter.com/jeffmcaffer)，微软开源项目办公室主任。
