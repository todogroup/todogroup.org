---
title: A Guide to Outbound Open Source Software
---

---
对外开源指南
---

People can also download version 1.0 Guide as PDF [here](https://github.com/todogroup/todogroup.org/files/9560697/TODO_OutboundOSS_Report_v6.pdf)

人们也可从[这里](https://github.com/todogroup/todogroup.org/files/9560697/TODO_OutboundOSS_Report_v6.pdf)下载 1.0 版本指南的 PDF。

The TODO Community is grateful to receive corrections and suggestions for improvements via [this repo](https://github.com/todogroup/outbound-oss), which contains TODO guide’s updated documentation with the most recent version

TODO 社区对通过这个[仓库](https://github.com/todogroup/outbound-oss)收到用于改进的修正和建议表示感谢，它包含有 TODO 指南的最新版本的文档。

- [Introduction](#introduction)
- [简介](#简介)
  - [Goal and target audience](#goal-and-target-audience)
  - [目标与受众](#目标与受众)
  - [Maturity levels](#maturity-levels)
  - [成熟度级别](#成熟度级别)
  - [How companies manage open source: Open Source Program Offices](#how-companies-manage-open-source-open-source-program-offices)
  - [公司如何管理开源：开源项目办公室](#公司如何管理开源开源项目办公室)
  - [Motivation for open source contribution](#motivation-for-open-source-contribution)
  - [开源贡献的动机](#开源贡献的动机)
    - [Build software faster and better](#build-software-faster-and-better)
  - [高效和高质量的构建软件](#高效和高质量的构建软件)
    - [Exercise strategic influence](#exercise-strategic-influence)
    - [实施战略影响](#实施战略影响)
    - [Attract, grow and retain talents](#attract-grow-and-retain-talents)
    - [吸引，培养并留住人才](#吸引培养并留住人才)
    - [Give back and keep open source sustainable](#give-back-and-keep-open-source-sustainable)
    - [回馈并维持开源的可持续性](#回馈并维持开源的可持续性)
- [How to contribute to OSS projects](#how-to-contribute-to-oss-projects)
- [如何为开源软件(OSS)做贡献](#如何为开源软件oss做贡献)
  - [Define your open source goal and strategy](#define-your-open-source-goal-and-strategy)
  - [明确你的开源目标和战略](#明确你的开源目标和战略)
  - [Establish open source guiding principles and processes](#establish-open-source-guiding-principles-and-processes)
  - [建立开源指导原则与流程](#建立开源指导原则与流程)
    - [Guiding principles](#guiding-principles)
    - [指导原则](#指导原则)
    - [Responsibility: decision rests with unit](#responsibility-decision-rests-with-unit)
    - [责任：决策权在于部门](#责任决策权在于部门)
    - [General structure and scope of the process](#general-structure-and-scope-of-the-process)
    - [流程的一般结构和范围](#流程的一般结构和范围)
      - [Lean procedure](#lean-procedure)
      - [精简流程](#精简流程)
      - [Boundary conditions](#boundary-conditions)
      - [边界条件](#边界条件)
    - [Process for expressing company approval for contributions](#process-for-expressing-company-approval-for-contributions)
    - [公司审批贡献流程](#公司审批贡献流程)
      - [Why is it needed?](#why-is-it-needed)
      - [为何需要审批流程？](#为何需要审批流程)
      - [Outbound CLA](#outbound-cla)
      - [对外贡献者许可协议（CLA）](#对外贡献者许可协议cla)
  - [Procedure for contributions to existing projects](#procedure-for-contributions-to-existing-projects)
  - [向现有项目贡献的流程](#向现有项目贡献的流程)
    - [Contribution models](#contribution-models)
    - [贡献模式](#贡献模式)
      - [Small contributions model or trivial contributions](#small-contributions-model-or-trivial-contributions)
      - [小型贡献模式或者微贡献模式](#小型贡献模式或者微贡献模式)
      - [Major to major release model](#major-to-major-release-model)
      - [主要版本到主要版本的发布模式](#主要版本到主要版本的发布模式)
      - [Full trust model](#full-trust-model)
      - [完全信任模式](#完全信任模式)
    - [Approving projects for contributions](#approving-projects-for-contributions)
    - [批准项目贡献](#批准项目贡献)
    - [Spare-time contributions -  also known as "moonlighting"](#spare-time-contributions----also-known-as-moonlighting)
    - [业余时间贡献——也称为“兼职”](#业余时间贡献也称为兼职)
  - [Trainings](#trainings)
  - [培训](#培训)
- [Starting open source projects](#starting-open-source-projects)
- [启动开源项目](#启动开源项目)
  - [Motivation](#motivation)
  - [动机](#动机)
  - [Project life cycle](#project-life-cycle)
  - [项目生命周期](#项目生命周期)
    - [Planning or Concept Phase](#planning-or-concept-phase)
    - [规划或者构思阶段](#规划或者构思阶段)
    - [Active or Development Phase](#active-or-development-phase)
    - [活跃或开发阶段](#活跃或开发阶段)
    - [Mature or Maintenance Phase](#mature-or-maintenance-phase)
    - [成熟或者维护阶段](#成熟或者维护阶段)
    - [Obsolete or End of Life Phase](#obsolete-or-end-of-life-phase)
    - [废弃或者生命周期结束阶段](#废弃或者生命周期结束阶段)
  - [Legal and governance considerations](#legal-and-governance-considerations)
  - [法律与治理考量](#法律与治理考量)
    - [Which license to select](#which-license-to-select)
    - [选择哪个许可证](#选择哪个许可证)
    - [Contributor License Agreement (CLA), Developer Certificate of Origin (DCO)](#contributor-license-agreement-cla-developer-certificate-of-origin-dco)
    - [贡献者许可证协议（CLA)，开发者原创证书 （DCO）](#贡献者许可证协议cla开发者原创证书-dco)
    - [Project governance](#project-governance)
    - [项目治理](#项目治理)
    - [Different Project Levels](#different-project-levels)
    - [不同的项目级别](#不同的项目级别)
  - [Community management](#community-management)
  - [社区管理](#社区管理)
    - [Code of conduct](#code-of-conduct)
    - [行为准则](#行为准则)
  - [Technical considerations, tooling and best practices](#technical-considerations-tooling-and-best-practices)
  - [技术考量、工具与最佳实践](#技术考量工具与最佳实践)
    - [User management](#user-management)
    - [用户管理](#用户管理)
    - [Setting up a repository](#setting-up-a-repository)
    - [设置仓库](#设置仓库)
    - [Providing license and copyright information](#providing-license-and-copyright-information)
    - [提供许可证和版权信息](#提供许可证和版权信息)
    - [CLA/DCO Management](#cladco-management)
    - [CLA/DCO 管理](#cladco-管理)
    - [Credential scanning](#credential-scanning)
    - [凭据扫描](#凭据扫描)
    - [Quality criteria / CII Best Practices Badge Program](#quality-criteria--cii-best-practices-badge-program)
    - [质量标准/CII最佳实践徽章计划](#质量标准cii最佳实践徽章计划)
    - [Repository Linting](#repository-linting)
    - [代码仓库审查](#代码仓库审查)
  - [Build an open source metrics strategy when releasing to open source projects](#build-an-open-source-metrics-strategy-when-releasing-to-open-source-projects)
  - [在发布开源项目时构建开源指标策略](#在发布开源项目时构建开源指标策略)
- [References and Abbreviations](#references-and-abbreviations)
- [参考文献与缩写](#参考文献与缩写)
  - [Abbreviations](#abbreviations)
  - [缩写](#缩写)
  - [References](#references)
  - [参考文献](#参考文献)
- [Appendix](#appendix)
- [附录](#附录)
  - [Managing work vs personal emails in git](#managing-work-vs-personal-emails-in-git)
  - [在 git 中管理工作与个人电子邮件](#在-git-中管理工作与个人电子邮件)

# Introduction

# 简介

## Goal and target audience

## 目标与受众

This guide is about how to contribute to or to launch an open source project (also called "outbound open source") as a company. It aims to describe a complete and lean process, that can be implemented in companies of any size (large but also small or medium sized organizations). Companies can tailor the proposed procedure to their needs. I.e., depending on the size and situation of the company not all steps need to be implemented.

本指南旨在指导公司如何为开源项目做出贡献或者发起一个开源项目（也叫做“对外开源”)。它旨在描述一个完整且精简的流程，该流程能够被任何规模（包括大型、小型或者中型）实施。公司可以根据自己的需求调整所提议的程序。例如，根据公司的规模和情况，并非所有的步骤都需要实施。

## Maturity levels

## 成熟度级别

Corporate adoption of open source software (OSS) can typically be classified with a model of maturity levels. These levels describe how OSS is used in an increasingly effective fashion to drive value and address business needs. One of the distinguishing factors for the different maturity levels is how outbound open source is handled in an organization. The insight that influencing the open source ecosystem is mainly done by participation in and contributing to open source projects is seen as a critical factor.

开源软件（OSS）的企业采纳情况通常可以根据成熟度模型进行分类。这些层级描述了 OSS 是如何以一种越来越有效地方式创造价值和满足业务需求。区分不同成熟度层级的一个显著因素是组织如何处理外向型开源软件。一个关键的认知是，对开源生态系统的影响主要是通过参与和贡献开源项目来实现的。

A typical maturity model of corporate open source adoption looks like this (see for example [Haddad: Open Source Program Offices](https://www.linkedin.com/pulse/open-source-program-offices-primer-organizational-roles-haddad)):

公司开源采纳的一个典型的成熟度模型如下（例如，参见 [Haddad：开源项目办公室](https://www.linkedin.com/pulse/open-source-program-offices-primer-organizational-roles-haddad)）:

0. Denial - No or unconscious use of open source
1. Consumption - Passive use of open source software
2. Participation - Engagement with open source communities
3. Contribution - Pragmatic contributions to open source projects
4. Leadership - Strategic involvement with open source to drive business value   

<br/>

1. 拒绝-没有或者没有使用开源软件的意识
2. 消费-被动的使用开源软件
3. 参与-加入开源社区
4. 贡献-务实的为开源项目做贡献
5. 领导层-战略性参与开源以推动业务价值

To advance from one level to another, certain initiatives and structural and organizational elements are required.

要想从一个级别提升到另一个级别，需要采取一定的措施，并具备相应的结构和组织要素。

Going from consumption to participation, for example, will start with informal engagement and low-effort activities such as reporting bugs in upstream projects, which typically is driven by technical needs. On that level, decisions about open source contributions will normally be ad-hoc and be taken for individual cases only.

从单纯的使用转变为积极参与的过程需要循序渐进。初期可以从非正式的、投入较少的活动开始，例如报告上游项目的漏洞。这类活动往往出于解决技术需求的考虑。在这个阶段，有关开源软件贡献的决策通常是临时性的，仅针对个别情况做出。

Establishing dedicated decision making processes and formalizing contribution policies will lead to the next level. A typical step on this level is to establish an Open Source Program Office to support open source engagement and maintain an open source strategy and processes.

确立专门的决策流程和正式的贡献政策将引领开源迈向下一个层级。这一级别的一个典型的步骤是建立开源项目办公室 (Open Source Program Office)，以支持开源参与并维护开源战略和流程。

On the leadership level, contribution processes are mature and scale. Corresponding tool chains are implemented. Own projects with the goal to create new open source communities are started if that's required and appropriate. This will typically come with leveraging open source foundations to enable cross-company collaboration to strategically use open source to accelerate creating business value.

在领导层级别，开源贡献的流程已经成熟且具备可扩展性。相应的工具链也已经到位。如果有必要且合适，将启动旨在创建新的开源社区的自有项目。这通常会伴随着利用开源基金会来推动跨公司协作，并战略性地利用开源来加速创造商业价值。

A company may decide to not progress to levels which are based on more contributions, and it's of course possible to build mature processes to consume open source software without contributing. In most cases, there will be some pressure to contribute back, though. This can arise from practical technical needs (missing functionalities or required bug fixes are typical reasons for contributing to open source projects), from the expectation to take responsibility in the open source ecosystem, or from the desire to reap the full benefits of the open source model.

公司可能决定不升级到基于更多贡献的级别，当然，即使不贡献，也可以建立成熟的流程来使用开源软件。然而，大多数情况下，公司都会感受到一些回馈压力。这种压力可能来源于实际的技术需求（例如，缺少功能或者需要漏洞修复是向开源项目贡献的典型原因），或来自于在开源生态系统中承担责任的期望，或来自于从开原模型中获益的渴望。

## How companies manage open source: Open Source Program Offices

## 公司如何管理开源：开源项目办公室

An increasing number of organizations realized the tasks of managing open source in an enterprise and complex relationships that are inherent to the open source ecosystem when they are advancing in their engagement in open source. For this reason, many of them started Open Source Program Offices (OSPOs), something called differently, for example Open Source Technology Centers, Open Source Community Development Team etc. OSPOs are a designated place where open source is supported, nurtured, shared, explained, and grown inside an organization. With such an office in place, businesses can establish and execute on their open source strategies in clear terms and responsibilities, giving their leaders, developers, marketers, and other staff the processes and tools they need to make open source a success within their operations.

随着参与开源软件的程度加深，越来越多的组织意识到企业内部开源管理以及开源生态系统固有复杂关系带来的挑战。因此，有许多组织开始成立开源项目办公室（Open Source Program Offices，OSPOs），或者叫一些其他名称，例如开源技术中心，开源社区发展团队等。OSPOs 是组织内部专门负责支持、培育、分享、解释和推动开源发展的地方。有了这样的办公室，企业可以以明确地条款和职责来制定和执行其开源战略，为领导者、开发人员、营销人员和其他员工提供所需的流程和工具，帮助他们在运营中成功运用开源。

The TODO Group offers a [set of guides](https://todogroup.org/guides/) on how to get started with an OSPO. Companies that are new to this topic, might want to first take a look at [**How to create an open source program**](https://todogroup.org/guides/create-program/)

针对如何启动开源项目办公室（OSPO），TODO Group 提供了一[系列指南](https://todogroup.org/guides/)。对于刚接触该主题的公司而言，可以优先查看[**如何创建一个开源项目**](https://todogroup.org/guides/create-program/)指南。

## Motivation for open source contribution

## 开源贡献的动机

There is a broad spectrum of motivations for contributing to open source projects or starting new projects. Here, we can only list some examples.

投身开源项目或者发起新项目的动机多种多样。这里，我们仅列举部分示例.

### Build software faster and better

## 高效和高质量的构建软件

Consuming open source software typically increases the development speed and decreases development costs since one builds upon existing code and a working and tested functionality. One risk however is that required features or bug fixes are not provided by the community as quickly as needed. To mitigate that risk, it might make sense to build up the required skills and create these bug fixes and/or features yourself. Contributing them back to the upstream projects has important benefits:

使用开源软件通常可以加快开发的速度并降低开发的成本，因为您可以利用现有的经过功能测试的代码进行构建。然而，一个存在的风险是社区可能无法迅速地提供所需的功能或者漏洞修复。为了缓解这一风险，培养必要的技能并自行创建这些漏洞修复和/或功能可能是有意义的。将它们回馈给上游项目具有重要的好处：

* Integrating "own" features into upstream projects makes maintenance a lot easier
* 将“自有”功能集成到上游项目会使维护工作变得更加容易
* Upstream versions can be directly used in own products and services
* 可以直接在自己的产品和服务中直接使用上游版本
* More features are obtained in shorter period of time
* 在更短的时间周期内使用更多的功能
* Higher quality is achieved in shorter period of time
* 在更短的时间周期内实现更高的质量
* Support available from core experts
* 获得核心专家支持

### Exercise strategic influence

### 实施战略影响

In addition to the benefits of open source software wrt. development velocity and quality mentioned above, contributing to open source projects can also be important from a strategic point of view. In the open source world, reputation and the ability to influence is typically build up by engaging in the community and by contributing. Thus, contributions to open source projects can help to ...

除了上面提到的开源软件在开发速度和质量的优势外，为开源项目做贡献在战略层面也很重要。在开源世界中，声誉和影响力通常是通过参与社区和贡献来建立的。因此，对开源项目的贡献有助于...

* influence the direction of upstream open source projects
* 影响上游开源项目的发展方向
* gain (co)copyright on open source software packages
* 获得开源软件包（共同）的版权
* access to the creativity of everyone interested in software
* 获取所有对软件感兴趣的人的创造力

Companies sometimes have the tendency to use money to exert influence. With open source projects this is not the most effective method. The currency of influence is contributions, because open source projects are usually much more driven by the work of individuals than the decisions of committees. So contributions work much more directly and effectively than being a member in an organization or paying for support or other services.

有时，公司倾向于使用金钱来施加影响。但在开源项目中这并不是最有效的方法。影响力的“货币”是贡献，因为开源项目通常更多地由个人的工作驱动，而不是委员会的决策。因此，与单纯成为某个组织的成员或者支付支持费或其他服务相比，贡献代码更加直接、更有效。

Open source communities (particularly those run by the big open source foundations) provide a neutral place for collaboration between companies and other organizations. Thus, an open source approach could offer new ways of collaboration with suppliers, customers, partner and even competitors, just to mention industry- or domain-specific projects such as [Linux Foundation Energy](https://www.lfenergy.org/) or [Eclipse Tractus-X](https://projects.eclipse.org/proposals/eclipse-tractus-x). Establishing open source communities can also be a powerful means to create and maintain ecosystems and to establish de facto standards.

开源社区（尤其是那些由大的开源基金会运营的）为公司和其他组织之间的合作提供了一个中立的场所。因此，开源方式可以为公司提供与供应商、客户、合作伙伴甚至竞争对手合作的新途径，仅举一些行业或领域特定的项目为例，如 [Linux Foundation Energy](https://www.lfenergy.org/) 或 [Eclipse Tractus-X](https://projects.eclipse.org/proposals/eclipse-tractus-x)。建立开源社区也是创建和维护生态系统以及建立事实标准的有力手段。

### Attract, grow and retain talents

### 吸引，培养并留住人才

Software (and therefore also open source software) becomes more and more ubiquitous in many products and areas. Thus, for many companies it is crucial to have a skilled and motivated software development workforce. This is not only true for software or cloud companies, but also for companies from other segments, such as traditional hardware producers who integrate software into their products more and more, or any other company which is becoming more dependent on software due to accelerating digital transformation. An open source strategy including open source contributions and community engagements supports this:

软件（因此也包括开源软件）在许多的产品和领域变得越来越普遍。因此，对于许多公司来说，拥有一个技术成熟且积极进取的软件开发团队至关重要。这不仅适用于软件或者云计算公司，也适用于其他行业的公司，例如将软件越来越多地集成到产品中的传统硬件制造商，或者因数字化转型而越来越依赖软件的其他公司。一项包含开源贡献和社区参与的开源战略可以起到一下支持作用：

* increase developer satisfaction
* 提高开发者的满意度
* improve quality and boosts developer skills by peer review of each contribution by core experts
* 通过核心专家对每项贡献进行同行评审，提高软件质量和提升开发者的技能
* make company visible as an attractive employer
* 将公司塑造成有吸引力的主顾
* improve company's reputation, and with it the standing of developers in their communities
* 提高公司声誉，从而提高开发者在其社区中的地位。

### Give back and keep open source sustainable

### 回馈并维持开源的可持续性

Open source software development is living from its communities. As mentioned above, the consumption of open source software helps to decrease costs and speed up development, but that's only possible because there is the community behind these projects maintaining the software. To keep the open source development model sustainable, each consumer of open source software has therefore the responsibility to think about ways how to support these projects. These are some ways of engagement and support:

开源软件的发展依赖于其社区。如上所述，开源软件的使用有助于降低成本并且加速开发，但这唯一的可能是因为项目背后拥有维护软件的社区。为了保持开源软件开发模式的可持续性，每个开源软件的使用者都有责任思考如何支持这些项目。以下是一些参与和支持的方式：

* contributions in terms of code, documentation, time (by testing software, for example)
* 在代码，文档，时间（例如通过软件测试）方面的贡献
* monetary support (some important projects are maintained by developers who do this in their spare time and thus can only invest limited time in the project)
* 资金支持（一些重要项目是由开发者在业余时间维护的，因此只能为项目投入有限的时间）
* executing and supporting hackathons
* 举办并支持编程马拉松活动

It is important to understand that though open source software has no license costs when consuming it, it is not available for free. To keep these projects attractive for its consumers, steady engagement and support is required. That's why it is important to have a strategy for open source contributions in place.

需要理解的是，虽然使用开源软件无需支付许可费用，但它并非免费可用。为保持这些项目对用户的吸引力，需要稳定的参与和支持。因此，制定适宜的开源贡献战略至关重要。

# How to contribute to OSS projects

# 如何为开源软件(OSS)做贡献

Building better relationships with the open source ecosystem has its own set of challenges, but it becomes easier if you have a clear plan to follow. Here are some guidelines to a number of practices that organizations can adopt.

与开源软件生态系统构建良好的关系具有其自身的一系列挑战，但是如果你有一个清晰地计划可供遵循，这会变得更容易。这里给出一些组织可以采纳的多种实践指南。

## Define your open source goal and strategy

## 明确你的开源目标和战略

Your open source strategy connects the plans for managing, participating in, and creating open source software with the business objectives that the plans serve. This can open up many opportunities and catalyze innovation. The TODO Group offers a dedicated guide to [Setting an Open Source Strategy](https://todogroup.org/guides/strategy/)

你的开源战略将管理、参与和创建开源软件的计划与这些计划服务的业务目标相结合。这可以带来许多机会并促进创新。TODO Group 提供了一份关于[制定开源战略](https://todogroup.org/guides/strategy/)
的专门指南。

## Establish open source guiding principles and processes

## 建立开源指导原则与流程

### Guiding principles

### 指导原则

The procedure described in the following is designed to ensure that the company interests and its employees are protected. We also need to make sure that contributions are in line with copyright law, export regulations, data protection regulations and open source development best practices. On the other hand, the procedural burden for all to be involved stakeholders shall be low and the approval procedure should not take too much time.

以下描述的流程旨在确保公司利益及其员工得到保护。我们还需要确保所做的贡献符合版权法、出口规定、数据保护规定和开源开发的最佳实践。另一方面，对于所有涉及的利益相关者来说，流程负担应尽可能低，审批流程也不应该花费太多时间。

### Responsibility: decision rests with unit

### 责任：决策权在于部门

* The approval procedure is the responsibility of the organization that financed the development of the code in question
* 审批流程由资助相关代码开发的组织负责
* If the affected code/IP is used, co-developed or co-financed by other units, involve them as stakeholders in the release decision
* 如果受影响的代码/知识产权（IP）由其他部门使用、共同开发或共同资助，则应将其作为发布决策的利益相关者参与进来

### General structure and scope of the process

### 流程的一般结构和范围

#### Lean procedure

#### 精简流程

* The tasks to be carried out by the developer should be clear, simple, and cause as little effort as possible
* 开发者需要执行的任务应清晰、简单，并尽可能减少工作量
* The potential complexity of the “backend tasks” should not be visible to the developer. The current status of the request shall be visible to the developer
* “后端任务”潜在的复杂性不应该让开发者看到。要求的当前状态应该对开发者可见

#### Boundary conditions

#### 边界条件

* Protect our employees and our business interests
* 保护我们的员工和商业利益
* Act in compliance with law as well as with internal and external regulations
* 遵守法律以及内部和外部的规定。
* Provide transparency to the decision makers on what and how much of the companies' code and IP will be affected by the publication
* 向决策者提供提供透明度，说明公司的那些代码和知识产权将受到发布的影响，以及影响程度
* All the contributions shall be made with the “company”-email (similar for the GitHub activity) so that all contributions of the company can be identified easily
* 所有贡献应该使用“公司”邮箱进行（ GitHub 活动也类似），以便轻松识别公司的所有贡献
* Respect the rules and customs of the OSS ecosystem and of the target OSS project
* 尊重开源生态系统和目标开源项目的规则和惯例

### Process for expressing company approval for contributions

### 公司审批贡献流程

#### Why is it needed?

#### 为何需要审批流程？

Why is there a need for a certain procedure at all?

为何需要遵循特定的程序？

First of all, the copyright law requires it.

首先，版权发有明确规定。

For example, the German copyright act states in Section 69b:
Authors in employment or service relationships
(1) Where a computer program is created by an employee in the execution of his duties or following the instructions of his employer, the employer exclusively shall be entitled to exercise all economic rights in the computer program, unless otherwise agreed.

例如，《德国版权法》第 69b 条规定：受雇于某人或为某人服务的作者（1）若计算机程序是雇员在其职责范围内或按照雇主的指示创作的，则雇主应独家享有对该计算机程序的所有经济权利，另有约定的除外。

Source: [German Copyright Act](https://dejure.org/gesetze/UrhG/69b.html)

来源：《[德国版权法](https://dejure.org/gesetze/UrhG/69b.html)》

This means that all the software developed in this context is the property of the employer - i.e., the company the developer is working for. At least the German copyright act does not limit the proprietorship to code developed during working hours or within the company IT infrastructure, it only scopes the context.

这意味着，在此背景下开发的所有软件均属于雇主的财产，即开发人员工作的公司所有。《德国版权法》至少没有将所有权限定于工作时间或公司IT基础设施内开发的代码，它只界定了背景范围。

Secondly, a procedure is required to protect the company’s business interests as well as to protect the employee. Finally public code is like the business card of a company as well as of the developer who has written the code.

其次，需要遵循一定的程序来确保公司的商业利益以及保护员工。最后，公开代码既是公司的商业名片，也是编写该代码的开发者的名片。

#### Outbound CLA

#### 对外贡献者许可协议（CLA）

Some OSS projects as well as some OSS Foundations require a Contributor License Agreement (CLA) before they accept contributions. We know at least two different types of CLAs:

一些开源软件项目以及开源软件基金会，在接受贡献之前，会要求签署贡献者许可协议（CLA）。我们至少知道两种不同类型的 CLA：

* Corporate Contributor License Agreement (CCLA)
* 企业贡献者许可协议（CCLA）
* Individual Contributor License Agreement (ICLA)
* 个人贡献者许可协议（ICLA）

Whether none, one or both are required for contributions is usually described in files like `CONTRIBUTING.md` in the project repositories. The [CCLA](https://www.apache.org/licenses/cla-corporate.pdf) and the [ICLA](https://www.apache.org/licenses/icla.pdf) authored by the Apache Foundation are the de facto standard of CLAs and many OSS projects have adopted either one or both.

项目是否不需要，或者需要其中一种或两种 CLA，通常会在项目仓库中的 CONTRIBUTING.md 等文件中说明。APache 基金会制定的 CCLA 和 ICLA 是 CLA 的实际标准，许多开源软件项目已经采用其中的一种或者两种。

The purpose of a CLA is to provide confidence to the OSS project that the contributor is entitled to submit the contribution. A Developer Certificate of Origin (DCO) is a an alternative approach and more lightweight compared to a CLA.

贡献者协议（CLA）的目的是给开源软件（OSS）项目提供信心，即贡献者有权提交其贡献。开发者原创证书（DCO）是一种替代方法，与CLA相比更加轻量级。

Some CLAs also require to transfer additional rights to the project such as the right to release the code under an additional, often proprietary license. This is an asymmetric setup which puts contributors at a disadvantage. Therefore most companies will not contribute to these kind of projects.

一些贡献者协议（CLA）还会要求将额外的权利转移给项目，例如以额外的、通常是专有许可证发布代码的权利。这是一种不对等的设置，不利于贡献者。因此大多数公司将不会向此类项目贡献代码。

The price of improved confidence for the OSS project is more overhead in the organization the contributor is working for. Especially in case of large corporations with several affiliates the effort of evaluating, signing and maintaining a CCLA shall not be underestimated.

开源软件项目提升信心的代价是贡献者所在的组织需要承担更多的额外工作。尤其是在拥有多家附属公司的大型企业中，评估、签署和维护企业贡献者许可协议（CCLA）所需的工作量不容小觑。

Why is a CCLA causing additional effort in large organizations? Let's briefly look at the CCLA of the Apache Foundation as an example:

为什么大型组织使用企业贡献者协议（CCLA）会带来额外的工作量？让我们以 Apache 基金会的 CCLA 为例来简单的看一下为什么造成这种情况:

* The CCLA is a contract - in many organizations the "four eyes principle" is implemented - a contract has to be signed by two persons, who have the right to sign contracts in the name of the organization - the required involvement of probably two more stakeholders requires additional effort in briefing them
* CCLA 是一个合同——在许多组织中，都实行“四眼原则”——合同必须由两名有权代表组织签署合同的人员签署——可能需要另外两名利益相关者的参与，这需要在像他们进行情况介绍方面付出额外的努力。
* Usually a CCLA covers not only the specific legal entity the contributor is working for, it also covers all affiliates:
* 通常 CCLA 不仅覆盖贡献者所工作的特定法律实体，还覆盖其所有附属公司：
    * For legal entities, the entity making a Contribution and all other entities that control, are controlled by, or are under common control with that entity are considered to be a single Contributor. For the purposes of this definition, "control" means (i) the power, direct or indirect, to cause the direction or management of such entity, whether by contract or otherwise, or (ii) ownership of fifty percent (50%) or more of the outstanding shares, or (iii) beneficial ownership of such entity
    * 对于法律实体而言，做出贡献的实体以及控制的实体、被该实体控制或与该实体处于共同控制之下的所有其他实体都被视为单个贡献者。在本定义中，“控制”是指 (i) 直接或间接拥有导致该实体方向或管理发生变化的权力，无论是通过合同还是其他方式。(ii) 拥有该实体已发行股份的百分之五十（50%）或更多，或 (iii) 对该实体享有受益所有权。
* The CCLA includes besides the copyright grant a patent grant. This is fine, nevertheless inside the organization the "IP department" needs to be involved in the evaluation process of the CCLA and for the specific contribution the "IP department" need to sync with all affiliates
* CCLA 除了包括版权授权外，还包括专利授予。这没什么问题，不过，组织内部的“知识产权部门”需要参与 CCLA 的评估过程，并针对具体的贡献，“知识产权部门”还需要与所有附属公司进行同步。
* The CCLA needs to be analyzed by the "Legal department" of the organization.
* CCLA 需要被组织的“法律部门”分析。


Some CCLAs require that the copyright of the contributions are assigned to the OSS project/Foundation. Copyright assignment is a topic which causes even more effort and might not be accepted at all.

一些 CCLA 要求将贡献的版权转让给 OSS 项目/基金会。版权转让是一个需要付出更多努力的话题，并且可能根本不会被接受。

Besides the above-mentioned additional effort the CCLA adds additional "maintenance effort" to the organization, because it requires that the organization nominates all entitled contributors by name to the CCLA requiring party.

除了上面提及的额外工作，CCLA 还给组织增加了额外的“维护工作”，因为它要求组织提名所有有资格的贡献者的姓名给 CCLA 要求方。

It is your responsibility to notify the Foundation when any change is required to the list of designated employees authorized to submit Contributions on behalf of the Corporation, or to the Corporation's Point of Contact with the Foundation.

您有责任在需要变更代表公司提交贡献的指定员工名单或公司与基金会之间的联系人时，及时通知基金会。

* The signed CCLA has to be made available inside the organization - This can be done via publishing the CCLA on the OSPOs website at a location which can be found easily be the employees (e.g., it might be useful to have a "top level page" named CCLAs, this page then contains a list of "signed CCLAs", a list of "CCLAs under evaluation", and a list of "denied CCLAs".)
* 签署的 CCLA 必须在公司内部公开——这可以通过在 OSPOs 网站上易于员工发现的位置上发布 CCLA 实现（例如，设立一个名为 CCLAs 的“顶层页面”可能很有用，该页面包含“已签署 CCLAs”列表，“正在评估的 CCLAs”列表，以及“已经拒绝的 CCLAs”列表。

* All affiliates need to be informed and a procedure needs to be defined how the affiliates can nominate/de-nominate contributors working for them. This becomes even more challenging in case an affiliate has no access to the intranet of the signing entity. In this case the signed CCLA or the information about the signed CCLA needs to be sent to the OSPOs of all affiliates, in case an affiliate has no OSPO set up, the information must be routed to the function, which is in charge of software development. All affiliates need to provide the names of nominated contributors or former contributors, who shall not be entitled anymore to do contributions to the OSPO of the signing entity, which then must inform the Foundation/project about the change of the list of contributors.
* 所有附属公司都需要得到通知，并需要确定一个流程，以明确附属公司如何提名或取消提名为他们工作的贡献者。如果附属公司无法访问签署实体的内部网络，情况将变得更加复杂。在这种情况下，需要将已签署的 CCLA 或关于已签署   CCLA 的信息发送给所有附属公司的 OSPO。如果附属公司没有设立 OSPO，则必须将信息转发给负责软件开发的相关部门。所有附属公司需要提供已提名贡献者或前贡献者的姓名，这些贡献者将不再有权向签署实体的 OSPO 做出贡献，然后 OSPO 必须向基金会/项目通报贡献者名单的变更情况。
* Publishing the list of contributors inside the organization and disclosing it to the Foundation/project might also require the approval of the data protection officers of the involved entities
* 在组织内部公布贡献者名单并向基金会/项目披露名单，可能还需要相关实体的数据保护官的批准。

This additional effort may hold organizations off to contribute small bug fixes or patches or even new features to the upstream OSS projects and puts them to risk of private forks and thus a lot of additional development effort in the long run. Thus the decision not to contribute needs to be taken very carefully.

这些额外的努力可能阻止组织向上游的开源软件（OSS）贡献小的漏洞修复、补丁甚至是新的功能，从而使他们面临私有分叉的风险，最终在长远来看带来大量额外的开发工作。因此，关于是否进行贡献的决策需要非常谨慎地做出。

A DCO in contrast to a CLA is a much more lightweight procedure. It was introduced to enhance the confidence that contributions to the Linux kernel are made "legally correct" by the contributors. The [DCO version 1.1](https://developercertificate.org/) is used by many OSS projects.

与 CLA 相比，DCO 是一个更轻量级的过程。它被引入是为了增强人们对 Linux 内核贡献者所做贡献是“合法正确”的信心。许多开源项目都使用 [DCO 1.1 版本](https://developercertificate.org/)。

The main difference of a DCO compared to a CLA is, that a DCO is not a contract, it is a kind of attestation of the specific contributor that they are entitled to submit a concrete contribution. All the effort which has to be spent to get a CLA signed and maintained is not needed. The only tasks which have to be carried out are:

DCO 与 CLA 相比主要的区别在于，DCA 不是一份合同，而是一种来自特定贡献者的证明，表明他们有权提交具体的贡献代码。因此，签署和维护 CLA 所花费的精力在 DCO 中是不需要的。需要执行的任务仅有：

* Evaluation of the DCO by the "Legal department"
* “法务部门”对 DCO 进行评估
* Evaluation by the "IP department"
* “知识产权部门”进行评估。
* Evaluation by the specific contributor, whether it is acceptable for them
* 特定贡献者进行评估，判断其是否可接受。

Since the DCO version 1.1 is the "standard" the "Legal"- and "IP department" only have very little effort to spend.

因为 DCO 1.1 版本是“标准”，因此“法务部门”和“知识产权部门”仅需要花费很少的精力。

## Procedure for contributions to existing projects

## 向现有项目贡献的流程

The more complex the business environment in which the code to publish was developed, the more stakeholders need to be involved. The picture below shows a procedure that involves all functions, even in a complex setup.

发布已开发的代码所处的业务环境越复杂，涉及的利益相关者就越多。下图展示了一个涉及所有职能的程序，即使在复杂的情况下也能适用。

![contributions](/static/img/guides/outbound-oss1.png)

![contributions](/static/img/guides/outbound-oss1-t.png)

Abbreviations used:

使用的缩写

* CLA = Contributor License Agreement
* CLA = 贡献者许可协议
* DCO = Developers Certificate of Origin
* DCO = 开发者起源证书
* ECC = Export Control and Customs
* ECC = 出口管制与海关
* IP  = Intellectual Property
* IP = 知识产权

The procedure shown above is not suited for frequent contributors and/or contributors who are working “upstream” in their daily work. For these developers different procedures need to be established in order to avoid loading them with “unproductive” work. Different contribution models can be established in an organization to serve different needs.

上述过程不适合频繁贡献者和/或在日常工作中“上游”工作的贡献者。对于这些开发者，需要建立不同的流程，以避免给他们承担“非生产性”工作负担。组织中可以建立不同的共享模型，以满足不同的需求。

### Contribution models

### 贡献模式

The following approaches are suited for such developers:

以下方法适合这类开发者：

* Small contributions model
* 小型贡献模式
* Major to major release model
* 主要版本到主要版本的发布模式
* Full trust model
* 完全信任模式

![small-contributions](/static/img/guides/outbound-oss2.png)

![small-contributions](/static/img/guides/outbound-oss2-t.png)

#### Small contributions model or trivial contributions

#### 小型贡献模式或者微贡献模式

A small or trivial contribution is a rather small and simple change to already existing open source software. Typical cases found in this category are bug fixes with no or low Intellectual Property value.

小型或者微型贡献是指对现有开源软件进行一些较小且简单的改动。这类贡献的典型例子包括漏洞修复，但这些漏洞的知识产权价值通常较低或者没有。

A change is not trivial if:

以下情况不属于微型更改：

* Functionality is added or changed. 
* 功能的添加或改动
* The interface of the open source software component is changed.
* 开源软件组件的接口更改
* It is an optimization that more than insignificantly increases performance.
* 显著提升性能的优化
* It contains a design or an algorithm that wouldn’t be obvious for a software engineer.
* 包含对软件工程师而言并非显而易见的设计或算法

This procedure scopes small contributions. It can be implemented for small or trivial contributions following the initial contribution to a particular OSS project or component. The initial contribution has to undergo the entire procedure described above, because CLAs/DCOs etc. have to be checked  and signed in case the particular project requires them.
After the initial contribution all subsequent small contributions can be contributed directly to the OSS project without the need to follow the defined process no matter which version of the OSS project.

该程序适用于小贡献。在首次向特定开源开源软件项目或组件贡献代码后，可以对小贡献或微型贡献采用该程序。首次贡献必须经过完整流程（如上所述），因为该项目可能需要检查并签署贡献者协议（CLA）/开发者证书（DCO）等文件。在首次贡献代码后，所有后续的小型贡献都可以直接提交给该开源软件项目，无需再遵循既定程序，也不管该项目处于哪个版本。

#### Major to major release model

#### 主要版本到主要版本的发布模式

This procedure scopes the release cycle of the OSS project to which contributions shall be made. It has the same “starting point” like any other contribution - the initial contribution must implement the entire procedure in order to check CLAs/DCOs and to have the documented permission to contribute to a specific project. After the initial contribution all subsequent contributions during the development of a new major release can be contributed to the OSS project without the need to go through the approval process. There is no size limitation for contributions. The contributions can range from a trivial bug fix to adding new features, changing interfaces, refactoring and so on. After the release of a major version of the project a new approval procedure has to be kicked off for the first contribution after the major release.

该过程规定了向开源软件项目提交贡献的发布周期。它与其他任何贡献具有相同的“起点”——首次贡献必须遵循完整流程，以便确认贡献者协议（CLA）/开发者证书（DCO）等事宜，并获得对特定项目的贡献许可。在首次贡献之后，在新主要版本的开发期间，所有后续贡献都可以直接贡献给开源软件项目，而无需经过审批流程。对贡献的大小没有限制。贡献可以是从简单的错误修复到添加新功能、更改接口、重构等。在项目主要版本发布后，针对主要版本发布后的首次贡献，必须启动新的审批程序。

#### Full trust model

#### 完全信任模式

The full trust model can be applied to developers who have already successfully worked under the major to major release model. It is an incentive for the employee and a sign of trust of the employer towards the employee. Basically it is the permission for the developer to work “upstream” without any approval procedure. Since this model shall only be applied after the developer worked successfully under the major to major release model, there is no need for an “initial” contribution with the entire approval procedure, although it makes sense in order to have it documented.

完全信任模式适用于已经成功遵循主要版本到主要版本发布模式的开发者。这是一种对员工的激励以及雇主对员工信任的表现。基本上，它是允许开发者在没有任何审批程序的情况下“上游”工作的许可。由于该模式仅在开发人员已经成功遵循主要版本到主要版本发布的模式后才会应用，因此无需再进行包含完整审批程序的“初始”贡献，尽管处于文档记录的目的进行初始贡献仍然是合理的。

The major to major release model as well as the full trust model shall only be executed by senior developers, who are specially trained in copyright principles, have a good understanding of the business interests of the company they are working for, practice “an ownership culture” and have already deep experience in the open source ecosystem.

主要版本到主要版本的发布模式以及完全信任模式应当只能由高级开发者来实施，他们应当接受过专门的版权原则培训，对他们所工作的公司的商业利益有深入的了解，践行“主人翁文化”，并在开源生态系统中拥有丰富经验。

In order to track all the contributions the developers shall contribute with their official email address.

为了追踪所有贡献，开发者们应当使用其官方电子邮件地址进行贡献。

### Approving projects for contributions

### 批准项目贡献

Another model is to provide approval for specific projects. These projects are checked, e.g. by the OSPO, and if everything is in place to allow contributions, they are cleared for contributions by employees. Then there is no individual approval for each specific contribution required. But if the general conditions of the project change, such as license or introduction of a CLA, etc. the project needs to be cleared again by the OSPO

另一种模式是为具体的项目提供审批。这些项目已经被例如 OSPO 进行检查，如果一切就绪，允许员工贡献代码，则项目会被批准接受贡献。然后，对于每个具体的贡献就不再需要进行单独审批。但是，如果项目的总体条件发生改变，例如许可证或者引入 CLA 等，项目需要由 OSPO 重新进行批准。

Prerequisite for such a model is that contributors are qualified to do contributions autonomously. This can be achieved by making sure contributors have received training and/or tracking and approving who can contribute to which repository.

这种模式的前提条件是贡献者们具备自主进行贡献的资格。这可以通过确保贡献者们已经受到培训和/或追踪和批准哪些人可以向哪些仓库贡献代码来实现。

### Spare-time contributions -  also known as "moonlighting"

### 业余时间贡献——也称为“兼职”

What to do in case an employee wants to contribute to OSS projects in their spare time which do not fall under the corporate context?

当员工们想要在业余时间为不属于公司范畴的开源软件（OSS）项目做贡献时，应该怎么做？

In this case the copyright ownership stays with the developer (assuming they are not developing for another entity). In order to provide clarity the following procedure can be implemented:

在这种情况下，版权所有权将归开发人员所有（假设他们不是为其他实体开发软件）。为了清楚起见，可以实施以下程序：

The developer informs his or her manager about the intention to contribute to a certain project (which is out of scope of section 69b German Copyright Act). In case the manager has no objections he/she draft a small note with, at least, the following content:

开发者告知他或她的经理打算为某个项目（不属于德国版权法的第 69b 中的范围）做出贡献的意向。如果经理没有异议，他/她可以起草一份简短的说明，至少包括以下内容：

* Date of the meeting
* 会议日期
* Project(s) the employee wants to contribute to
* 员工希望参与贡献的项目
* Estimated hours per week
* 预计每周投入的时间
* Approval by the manager
* 经理的批准
* Signature of the developer
* 开发者的签名
* Signature of the manager
* 经理的签名

The note can be sent to the HR department to keep it in the personnel record of the employee.

可以将这份说明发送给人力资源（HR）部门，并将其保存在员工的人事档案中。

This procedure provides transparency especially in the context of large enterprises, acting in many different software technology areas.

该程序提供了透明性，尤其是在那些涉及多个软件技术领域的大型企业情况下。

The example below shall illustrate why such a procedure makes sense:

下面的例子将阐述为什么这样的程序是有意义的：

A developer may, for example, implement Linux kernel drivers according to his duties. Another area of interest of the developer is for example AI and the developer wants to contribute to an AI project during his spare time.
Given that the AI project has nothing to do with Linux kernel driver development, the developer holds copyright on his contributions and the copyright ownership is not transferred to the employer. The developer can contribute code without the need of an approval by his employer.

例如，根据职责，开发者可能是实现 Linux 内核驱动。开发者另一个感兴趣的领域比如是人工智能（AI），其想要在业余时间为 AI 项目做贡献。由于 AI 项目与 Linux 内核驱动开发没有关系，因此开发者对自己贡献的代码拥有版权以及版权所有权不用转移给雇主。开发者在贡献代码时不需要经过雇主批准。

But what about when the developer decides to move to another department inside the company, which develops AI. All of a sudden the former "moonlighting" is now covered by section 69b of the copyright act and the copyright owner now is the employer.

但是，当开发者决定转到公司内部另一个开发 AI 的部门时会怎么样？突然之间，以前被视为“兼职”的工作现在就属于著作拳法第 69b 条的规定，著作权的所有者也变成了雇主。

The above described procedure provides transparency about the copyright ownership and its change during the time.

上述程序在整个过程中提供了关于版权所有权及其变更的透明度。

## Trainings

## 培训

Contributors to open source projects will need to act with a certain degree of autonomy to be effective. For some corporate software developers it will also be new to participate in open source communities. For these reasons it is important to support corporate contributors and provide them with training or similar means to develop the understanding and skills to act as good citizens of the open source world on behalf of your company.

开源项目贡献者需要一定程度的自主性才能发挥作用。对一些公司软件开发者来说，参与开源社区也是一个新兴事物。出于这些原因，支持企业贡献者并为他们提供培训或其他类似手段，帮助他们发展理解和技能，以代表公司成为开源世界的好公民，这一点至关重要。

This can be achieved with mentoring, good practice guides, or trainings which cover the following topics:

这些可以通过指导，良好的实践指南，或者培训来实现，其包括以下主题：

* Essentials of legal implications of open source, such as copyright, licensing, CLAs, DCOs, trademarks
* 开源的法律问题的基础知识，例如版权，许可证，CLAs，DCOs，商标等。
* Awareness of your corporate rules and policies for contributing to open source
* 了解公司对于开源贡献的规则和政策。
* Open source community culture
* 开源社区文化
* Typical open source development procedures
* 典型的开源开发流程
* Open source governance in its different forms such as foundations or single-vendor projects
* 开源治理的不同形式，例如基金会或者单一供应商项目
* Working in public
* 公开工作
* Dealing with conflict of interests between open source project and company
* 处理开源项目和公司之间的利益冲突
* Where to get internal support in case of doubt or questions
* 在遇到疑问和问题时，从哪里获取内部支持？

# Starting open source projects

# 启动开源项目

## Motivation

## 动机

There are many good reasons to start own open source projects. See the [introduction](#motivation-for-open-source-contribution) for some of the motivations for doing this.

有许多好的理由启动自己的开源项目。请查看[介绍](https://todogroup.org/zh-cn/resources/guides/a-guide-to-outbound-open-source-software/#motivation-for-open-source-contribution)中描述的如此做的动机。

Launching a new OSS project is comparable to a product introduction and it is, at first hand, a software development project - there is no difference to an internal software development project concerning planning, budget, staffing, testing etc. - the only difference is that everything happens in the public area. Be aware that publicly available source code is the “business card” of the organization to the software  ecosystem, and it is also the “business card” of its maintainers.

启动一个新的开源项目与产品发布类似，它首先是一个软件开发项目——在规划、预算、人员配备和测试等方面，它与内部软件项目开发没有区别——唯一的区别是，所有工作都在公共领域进行。请注意，公开可用的源代码是组织在软件生态系统中的“名片”，也是其维护者的“名片”。

When thinking about to start an own OSS project there are several phases you should consider:

当考虑启动自己的开源项目时，这里有几个阶段你应当考虑：

![oss-project-process](/static/img/guides/outbound-oss3.png)

![oss-project-process](/static/img/guides/outbound-oss3-t.png)

## Project life cycle

## 项目生命周期

The life cycle of an open source project describes the stages in which the project evolves, from its conception to its retirement or end of life stage. Typically, a project originates to solve a specific problem. It may become obsolete either because the problem does not exist anymore or because other projects are better suited to solve the problem. The figure below shows the different stages an open source project may undergo.

开源项目的生命周期描述了项目从构思到退役或者生命周期结束阶段的演变过程。通常，一个项目是为了解决某个特定的问题而产生的。它可能会因为问题不在存在或因为其他项目更适合解决该问题而变得过时。下面的图展示了开源软件项目可能经历的不同阶段。

![Typical lifecycle of an open source project](/static/img/guides/outbound-oss4.png)

![Typical lifecycle of an open source project](/static/img/guides/outbound-oss4-t.png)

### Planning or Concept Phase

### 规划或者构思阶段

This is the starting point of every open source project. It can also be referred to as the “initiation phase”. Normally, at this stage, only an idea exists or a specific problem has been identified which requires solution. In this phase, the open source project typically has the following characteristics:

这是每个开源项目的开始。它也可以被称为“初始化阶段”。通常，在该阶段，只有一个想法存在或者一个特定的已经明确的问题需要解决方案。在这个阶段，开源项目具有以下的典型特征。

* The problem that the project intends to solve has been clearly defined
* 项目打算解决的问题已经被明确的定义。
* There is either no source code available yet or the source code is only internally available. In the first case, the project only exists as idea; in the second case, the project may have been started as an company-internal project and has not been published yet
* 目前还没有源代码可用，或者源代码只能内部使用。在第一种情况下，项目仅作为想法存在；在第二种情况下，项目可能已经作为一个内部项目开始，并且还没有被公开。
* Possibly, the idea has been already shared with the community to get feedback. However, note that sharing such ideas that have only been discussed company-internally requires approval in advance.
* 可能这个想法已经与社区分享来获得反馈。然而，要注意的是，分享这样仅在公司内部讨论过的想法，需要事先获得批准。

Before starting a project, it is reasonable to get answers to the key questions:

在启动一个项目之前，合理的做法是获得以下关键问题的答案：

* Is it possible to join efforts with an existing open source project?
* 是否有可能与现在的开源项目合作？
* Can we launch and maintain the project using the OSS model?
* 我们能使用开源软件（OSS）模式发起和维护项目吗？
* What constitutes success? How do we measure it?
* 成功的要素是什么？我们怎么衡量它？
* Can we financially sponsor the project? Do we have an internal executive champion?
* 我们能否从财务上资助这个项目？我们是否有一个内部的执行推动者？
* Will the project be able to attract outside enterprise participation (from the start)?
* 这个项目是否能够吸引外部企业参与（从一开始）？
* Is there enough external interest to form and grow a developer community?
* 是否有足够的外在兴趣来形成和壮大开发者社区？

(Source: [Linux Foundation](https://www.linuxfoundation.org/en/resources/open-source-guides/starting-an-open-source-project/))

（来源：[Linux 基金会](https://www.linuxfoundation.org/en/resources/open-source-guides/starting-an-open-source-project/)）

In addition, the following aspects should be considered in the planning phase:

另外，在规划阶段还应考虑以下几个方面：

* What is the goal of the project and will it solve the problem?
* 项目的目标是什么？它能解决问题吗？
* Are there enough resources not only to start, but to support the project in the long-term? (You also need to obtain and ensure sponsorship)
* 是否有足够的资源来启动项目，并在长期内支持该项目的发展？（你还需要获得并确保赞助）
* An appropriate license must be selected. The license should support the project goal.
* 必须选择一个合适的许可证。许可证应当支持项目目标。
* The legal requirements for contributions must be decided (if, for example, contributors must sign a CLA or DCO). Maybe your company has a standard approach for that.
* 必须确定贡献的法律要求（例如，贡献者是否必须签署CLA或DCO）。也许你的公司对此有一个标准的做法。
* Execute additional checks. For example:
* 执行额外的检查。例如：

  * Make sure that all license obligations are fulfilled
  * 确保所有许可义务都被履行
  * Export control: Under certain circumstances it might be required that the project must have an [export control classification number (ECCN)](https://en.wikipedia.org/wiki/Export_control), for example.
  * 出口管制：在某些环境下，可能要求该项目必须要有一个[出口管制分类编号(ECCN)](https://en.wikipedia.org/wiki/Export_control)
  * Check that the publication is not in conflict with existing trademarks.
  * 检查公开发布是否与现存的商标有冲突。

* The [checklist of the Linux Foundation](https://www.linuxfoundation.org/en/resources/open-source-guides/starting-an-open-source-project/#checklist) contains a comprehensive set of topics you might want to consider
* [Linux基金会的清单](https://www.linuxfoundation.org/en/resources/open-source-guides/starting-an-open-source-project/#checklist)包含了一系列您可能需要考虑的全面主题：
* Does it make sense to donate the code to a vendor-neutral, non-profit organization (that is, an open source foundation), or retain some control by owning and running the project under the responsibility of your company? Note that this decision depends on the project and may also be taken later in the life cycle. Typically, a project first needs to be published and generate interest in the community before it is handed over to a third-party organization.
* 将代码捐赠给中立的，非营利性组织（即开源基金会）是否有意义，或者由贵公司拥有和运行项目并保留一定控制权？请注意，这个决定取决于项目，也可能在项目生命周期的后期再做决定。通常，项目需要先发布并引起社区的兴趣，然后才能移交给第三方组织。
* Set up an open source project governance. It establishes how to contribute to or maintain a project.
* 设立开源项目治理结构。它规定了如何贡献或维护项目。
* Determine the tools and infrastructure the project members will use
* 确定项目成员们将使用的工具和基础设施。
* Carry out a technical review
* 进行技术审查。
  * Ensure that all critical content is removed from the project before publishing it. For example:
  * 在公开发布之前，确保删除所有关键内容。例如：

    * Dependencies to non-public components
    * 对非公开组件的依赖
    * Internal comments, references to other internal code, and the like
    * 内部评论，对其他内部代码的引用等。
    * Access tokens and the like
    * 访问令牌等。

  * Ensure that the coding style is consistent
  * 确保编码风格的一致性

* Where will the code be published? Typically, it will be in a company-owned organization on a code hosting platform such as GitHub.com or GitLab.com but, depending on the technology, other potential publishing channels exist (for example, NPM, Maven central, PyPI)
* 代码将在哪里发布？通常情况下，代码会发布在公司拥有的组织内，并使用诸如 GitHub.com 或 GitLab.com 的代码托管平台进行托管。但是，根据具体的技术类型，也存在其他潜在的发布渠道（例如 NPM、Maven 中央仓库、PyPI）。
* Does it make sense to publish binaries? If yes, where?
* 发布二进制文件是否有意义？如果有，发布在哪里？
* Define your web site and communication: What can you do to make your project known? Does it make sense to create a web site for the project? Are there working groups?
* 确定你的网站地址和沟通方式：您如何使你的项目广为人知？为项目创建一个网站是否意义？是否有工作组？
* Plan your project life cycle
* 规划你的项目生命周期。

### Active or Development Phase

### 活跃或开发阶段

Once the project has got an approval for open sourcing and the code is available and published, the project has entered the active development phase. In this phase, the open source project typically has the following characteristics:

项目一旦获得开源批准，并且代码已经发布可用，项目就进入了活跃开发阶段。在这个阶段，开源项目通常具有以下特点：

* The source code is publicly visible
* 源代码公开可见
* The project community is actively managed
* 项目社区积极管理
* The project can receive contributions from the community
* 项目能够收到来自社区的贡献。
* Further development is ongoing, based on incoming requirements
* 基于新收到的需求，进一步的开发在进行中。
* A dedicated team is working on the project and provides support
* 一个专门团队正在负责这个项目，并提供支持。
* Potentially, to make the project better known and to attract more users and contributors, the project is being promoted in talks at open source events, conferences, and so on.
* 为使得项目有更好的知名度以及吸引更多的用户和贡献者，项目正在通过开园活动、会议讲座进行推广。

During the active phase, the following aspects should be considered:

在活跃阶段，应当考虑以下方面：

* Do marketing: Make the project better known (for example through blog posts, reaching out to potentially interesting parties/companies, talks at conferences)
* 进行市场营销：提高项目知名度（例如通过博客文章、接触潜在感兴趣的团体/公司、参加会议演讲等方式）
* Invest in building and managing the community
* 投资于社区的建设和管理
* Care for full transparency, every decision shall be made in the public, even if there is no external community yet. This is very important because interested organizations are able to follow all decisions and to build up trust in the project
* 秉持完全透明的原则，即使目前没有外部社区，每个决策也应该公开进行。这样做非常重要，因为感兴趣的组织能够追踪所有决策，并逐步建立对项目的信任。
* Carry out a health check of the project and its community (that is, perform a review of the defined KPI’s and goals)
* 执行项目及社区的健康检查（即审查已定义的 KPI 和目标）
* Check 3rd party contributions
* 检查第三方贡献
* Plan further developments
* 规划进一步发展
* Support by fixing bugs and security issues
* 通过修复漏洞和安全问题提供支持

### Mature or Maintenance Phase

### 成熟或者维护阶段

At a certain point in time, an open source project becomes mature. This can also be referred to as the "maintenance phase", meaning that only error corrections are made and normally no new functionality is developed. The following aspects characterize this phase:

在某个时间点，开源项目变得成熟。这也可以称为“维护阶段”，意味着只进行错误修正，通常不再开发新功能。以下是这个阶段的特点：

* The project is being used actively, but from a functional perspective it can be considered as complete or at least no major functional enhancements are necessary
* 该项目正在被活跃使用，但是从功能角度看，它可以被认为是完整的，或者至少不再需要重大的功能增强。
* Contributions mainly focus on bug fixes. Functional enhancements are only minor and are done rarely
* 贡献主要专注于漏洞修复。功能增强只是次要，而且很少进行。
* A dedicated team still provides support for the project, but with relatively low efforts
* 一个专门的团队仍然为项目提供支持，但投入的精力相对较少。
* The team still has to take care of the community, but normally less effort is required compared to projects that are in active development.
* 团队仍然需要照顾社区，但与活跃开发阶段相比，通常需要更少的精力。
* It is good practice to clearly communicate that the project is in the maintenance phase and no or only limited further development can be expected
* 明确告知项目进入维护阶段，且不再进行或仅进行有限的进一步开发，是一种好的做法。
* The team should perform regular health checks of the open source project and the external community
* 团队应当定期对开源项目和外部社区进行定期检查。
* Bug fixes and security fixes are still required
* 漏洞修复和安全修复仍然是必需的。

### Obsolete or End of Life Phase

### 废弃或者生命周期结束阶段

An open source project in this phase is characterized by the following properties:

开源项目处在这个阶段具备以下特征：

* There is no or only very minor interest in the project
* 对项目没有或仅有很小的兴趣
* No further contributions take place
* 不再接受任何贡献
* There are no further developments and no incoming requirements
* 不再进行任何开发和新的需求
* No further support takes place
* 没有提供任何支持。
* Possibly, there is no project team available anymore
* 可能已经不再有项目团队可用。

During this phase, it is important to consider the legal implications and come up with the appropriate documentation and communication with the community. Since the project has been published, it might be in use. Therefore, the community needs to be informed that the project is no longer maintained. Furthermore, once in this phase the decision must be made whether to archive the project or remove it completely.

在这个阶段，重要的是要考虑法律影响，并制定适当的文件和与社区进行沟通。因为项目已经被公开，它可能正在被使用。因此，需要通知社区该项目不再维护。此外，一旦进入这一阶段，就必需决定是存档项目还是将其完全删除。

## Legal and governance considerations

## 法律与治理考量

### Which license to select

### 选择哪个许可证

Choosing the license for a new open source project is an important decision. Without a license the code can't be used by anybody, even if the code is publicly available, for example in a GitHub repository. Choosing a license which is not approved by the OSI as an open source license also effectively makes the code proprietary. This will make it harder to get adoption, especially in most corporate setups, where processes are usually built around the well-known standard open source licenses.

为开源的项目选择许可证是一个重要的决定。没有许可证，代码不能够被任何人使用，即使代码是公开可用的，例如在 GitHub 存储库中。选择一个未经开放源代码促进会（OSI）批准的许可证也将使代码实际上变为专有。这将使得代码难以被采用，特别是在大多数公司环境中，这些环境通常围绕众所周知的标准开源许可证建立流程。

Open source licenses vary in the rights and the obligations they give to users. All open source licenses approved by OSI give users the right to use the software without restriction to specific users or use cases. When distributing open source software, and especially when distributing it with modifications, the obligation vary. The spectrum goes from the so-called copyleft licenses such as the GPL, which require to pass on rights given by the license to users, to permissive licenses, such as the Apache or the MIT license, which allow incorporation in proprietary systems.

开源项目许可证赋予用户的权利和义务各不相同。所有被 OSI 批准的开源许可证赋予用户无限制地使用软件的权利，不受特定用户和使用情况的限制。当发布开源软件，尤其是发布经过修改的开源软件时，相关的义务会发生变化。范围从需要将许可证赋予的权利传递给用户的“copyleft”许可证（例如 GPL），到允许将软件并入专有系统的宽松许可证（例如 Apache 或 MIT 许可证）。

When choosing a license the following questions have to be considered:

当选择许可证时，以下的问题需要考虑：

* **What's the goal of the open source project?** When broad adoption is a priority, a permissive license might be a good choice, when the focus is on building a contributor community, more reciprocal licenses might have advantages.
* **开源项目的目标是什么？**当广泛采用是首要任务时，宽松的许可证是一个不错的选择；而当重点在于建立贡献者社区时，更护会的许可证可能更有优势。
* **Is there a license suggested or required by the ecosystem where the project is positioned?** If it is meant to become part of a foundation or an umbrella project then there might be a strong preference for a license, e.g. the Apache license for Apache projects, or the GPL for Linux kernel drivers.
* **项目所处的生态系统是否有建议或者要求的许可证？**如果项目旨在成为某个基金会或者项目的一部分，那么可能会强烈倾向于选择某种特定的许可证，例如 Apache 项目采用 Apache 许可证，Linux 内核驱动程序采用 GPL。
* **How does the license interact with your business model?** When the software you are going to open source is supporting other parts of your business, a permissive license might accelerate adoption. If you are also selling proprietary version of your software, a copyleft license might be a stronger differentiator.
* **许可证如何与您的商业模式相互作用？**当您打算开源的软件支撑您业务的其他部分时，宽松许可证可能会加速其被采纳。如果您还在销售软件的专有版本，那么 copyleft 许可证可能会成为更强大的差异化因素。
* **Are there dependencies or other incorporated code which limit the choice of licenses?** For example when incorporating GPL code, the resulting project has to be GPL as well.
* **是否存在限制许可证选择的依赖项或其他合并的代码？**例如，当合并GPL代码时，目标项目也必须采用GPL许可证。

Answering these questions can be challenging and opinions will vary. A simple starting point can be the [choosealicense.com](https://choosealicense.com/). There is a lot of comprehensive material available from various sources, e.g. [Open source licenses: What, which, and why](https://arstechnica.com/gadgets/2020/02/how-to-choose-an-open-source-license/).

回答这些问题可能具有挑战，并且观点会因人而异。一个简单的起点可以是使用[choosealicense.com](https://choosealicense.com/)这个网站。此外，从各种来源都可以找到大量综合材料，例如[Open source licenses: What, which, and why](https://arstechnica.com/gadgets/2020/02/how-to-choose-an-open-source-license/)（开源许可证：是什么、选哪种以及为什么）。

It is advisable to set up policies for license selection, so that the decision process is simplified when starting new projects.

建议制定许可证选择策略，以便在启动新项目时简化决策过程。

### Contributor License Agreement (CLA), Developer Certificate of Origin (DCO)

### 贡献者许可证协议（CLA)，开发者原创证书 （DCO）


When running an open source project you need to decide how you are going to check code provenance and if you need additional rights from contributors which are not given by the license. There are mainly three ways how to handle that:

当运营一个开源向目时，你需要决定如何检查代码的来源，以及是否需要从贡献者那里获取许可证未授予的额外权利。主要有三种方式来处理这些问题：

* **"Inbound=Outbound"** - Contributions are accepted under the same license as the project distributes its code. There is no additional paperwork. This is a symmetric setup, where contributors, maintainers, and users have the same rights under the chosen license. It has the lowest barrier for contributors. Some things such as changing the license of the projects become difficult, because that needs approval by every contributor.
*  **“Inbound=Outbound”**——项目接受贡献时，采用与项目发布代码相同的许可证。这意味着不需要额外的文书工作。这是一种对称的设置，其中贡献者、维护者和用户在所选许可证下享有相同的权利。对贡献者来说，门槛最低。然而，有些事情（比如更改项目的许可证）会变得困难，因为这需要得到每位贡献者的批准。

* **Developer Certificate of Origin (DCO)** - The [DCO](https://developercertificate.org/) was introduced in Linux kernel development and has been adopted by many other projects. It is a statement developers give with each commit by including a "Signed-off-by" statement in the commit message. With this statement developers explicitly declare that they have the rights they need to do the contribution and that they agree that the project is using it. This is still a low barrier, but it gives projects more confidence that code was rightfully contributed. It does not help in cases where the license of the code needs to be changed.
* **开发者原创证书（DCO）**—— DCO 最早用于 Linux 内核开发，现已被许多其他项目采用。它是一种开发者通过在提交信息中包含“Signed-off-by”声明来提供的声明。通过这个声明，开发者明确表示他们拥有进行贡献所需的权利，并同意项目使用其贡献。这种方式的门槛仍然较低，但它使项目对代码的合法贡献更加放心。然而，在需要更改代码许可证的情况下，它并不起作用。

* **Contributor License Agreement (CLA)** - A CLA is an additional agreement between the contributor and the project which gives the project additional rights on top of the rights given by the license. If people contribute on behalf of a company, where the company holds the rights on the work of the contributor, the company has to sign the CLA. There is a variety of different CLAs in use, some mostly confirm the rights already given by the license, some give additional rights such as being able to release the code under a different license, for example when the code is also released under a proprietary license as part of a commercial offering. With a CLA, rights are collected at a central place, so changing the license, or rereleasing the code as part of a product with a different license, is possible. The asymmetry of the agreement, which gives the project more rights than its contributors, can impose a bigger barrier for contributions. Requiring a corporate CLA can also be an insurmountable barrier, especially for large corporations, because the effort and legal implications of checking and signing a CLA might outweigh the benefits of contributing.
* **贡献者许可协议（CLA）**—— CLA 是一份贡献者与项目之间的附加协议，它为项目提供了除许可则所授权之外的额外权利。如果人员代表公司贡献代码，而公司享有贡献者的工作成果的权利，那么该公司必须签署 CLA。目前存在多种不同的 CLA，有些主要确认许可证已经赋予的权利，有些提供额外的权利，例如能够以不同的许可证发布代码，例如当代码作为商业产品的一部分也以专有许可证发布时。通过 CLA，权利被集中到中心位置，因此可以更改许可证，或者将代码作为具有不同许可证产品的一部分重新发布。该协议的不对称性赋予项目方比其贡献者更多的权利，这可能会对贡献造成更大的障碍。要求公司签署 CLA 也可能成为一个不可逾越的障碍，尤其是对大型公司而言，因为检查和签署 CLA 所需的工作量和法律影响可能超过贡献的收益。

You should have a policy for which of these ways you use when. "Inbound=Outbound" is a pragmatic way which can work for most projects. The DCO is a good way to make the contribution process more explicit, especially for larger projects with diverse contributors. The CLA makes contributions more difficult and requires additional administrational work and tooling. To get an impression about the additional effort and difficulties especially large corporations face you can check the section about [contributions to existing projects](#process-for-expressing-company-approval-for-contributions).

你应当制定一个策略，明确在何种情况下使用哪种方式。“Inbound=Outbound”是一种务实的方法，适用于大多数项目。DCO 是一种使贡献过程更加明确的好方法，尤其适用于具有众多贡献者的较大项目。CLA 使得贡献变得更加困难，并且需要额外的管理工作和工具。要了解大型企业面临的额外工作量和困难的详细信息，您可以查看关于[向现有项目贡献](https://todogroup.org/zh-cn/resources/guides/a-guide-to-outbound-open-source-software/#process-for-expressing-company-approval-for-contributions)的部分。

### Project governance

### 项目治理

An important factor for the success of an open source project is its governance. That comprises the rules, policies, conventions, and culture of the collaboration. It determines factors such as how decisions are taken, who is in control, or who can join a project.

开源项目成功的关键因素之一是其治理结构。这包含了协作的规则、策略、习惯和文化。 它决定了诸如如何做出决策、谁控制项目以及谁可以加入项目等因素。

In existing projects governance often has emerged over time, has gone from informal procedures driven by the practices of the project founders to more formally defined governance documented in contribution guides or ultimately instituted through a foundation as formal organization hosting the project.

在现有项目中，治理通常随着时间的推移而逐渐形成，从由项目创始人的实践所驱动的非正式程序，发展为在贡献指南中更为正式定义的治理结构，或者最终通过一个托管项目的正式组织基金会来制定。

When starting a new open source project you have to decide about how its governance will look like. This goes beyond deciding on a license. You will also have to decide about ownership of assets such as trademarks or domains and the rules how they can be used. And you will have to decide about policies of how people can become committers or maintainers, how releases and roadmaps are made, or how transparent the decision making process is.

当启动一个新的开源项目时，你应当决定治理结构是什么样的。这不仅仅是选择许可证的问题。你还需要决定商标或域名等资产的所有权，以及它们的使用规则。此外，您还需要决定人员如何成为提交者或维护者、版本发布和路线图的制定方式，以及决策过程的透明度等方面的政策。

For a project which is meant to attract a broad set of contributors it is important to set up governance which provides a neutral ground, is open to participation by diverse participants, and is transparent about its decision making. This can be called [open governance](https://opengovernance.dev/). One way to achieve this is to join one of the existing open source foundations. Prominent examples for this are [Kubernetes](https://kubernetes.io/) which is hosted by the [CNCF](https://www.cncf.io/) or the [Eclipse IDE](https://www.eclipse.org/ide/) which is part of the [Eclipse Foundation](https://www.eclipse.org/org/foundation/).

对于旨在吸引大量贡献者的项目，重要的是建立一个能够提供中立平台、对不同参与者开放参与并且决策过程透明的治理结构。这可以称为[开放治理](https://opengovernance.dev/)。实现这一目标的一种方法是加入现有的开源基金会之一。杰出的例子包括由 CNCF（云原生计算基金会）托管的 [Kubernetes](https://kubernetes.io/) 项目,以及隶属于 [Eclipse 基金会](https://www.eclipse.org/org/foundation/)的 [Eclipse IDE](https://www.eclipse.org/ide/) 项目。

In other cases a company might want to retain more control about the project. This will limit contributions from others but give more freedom in how to steer a project. It requires that there are enough resources allocated to maintain the project. It still is helpful to implement elements of open governance, such as transparency about planning or a permissive trademark policy to increase adoption of the project. Examples for this would be [TensorFlow](https://www.tensorflow.org/) which is run by Google or [Visual Studio Code](https://code.visualstudio.com/) which is run by Microsoft.

在其他情况下，公司可能想要保留对项目更多的控制权。这将限制其他人的贡献，但也给了公司更多的自由引导项目发展的方向。这要求分配足够多的资源来维护项目。尽管如此，实施开放治理的某些元素仍然是有帮助的，例如提高项目规划的透明度或实施宽容的商标政策以增加项目的采用率。这方面的例子包括由 Google 运营的 [TensorFlow](https://www.tensorflow.org/) 和由 Microsoft 运营的 [Visual Studio Code](https://code.visualstudio.com/)。

For smaller projects, for example technical tools which emerge from work on other projects, a simple and less formal approach to governance can also work. Here the goal is not primarily broad adoption or building a large community, but transparency and ad-hoc collaboration with interested individuals. Often this kind of project is more driven by technical needs and motivation of developers than by overarching business needs. If such a project is growing its governance can be evolved. This can for example result in a project being transferred to a foundation. Countless examples can be found on [GitHub](https://github.com/explore).

对于规模较小的项目，例如从其他项目工作中衍生出来的技术工具，也可以采用简单且不太正式的治理方式。在这种情况下，主要目标不是广泛采用或建立大型社区，而是保持透明度和与感兴趣的个人进行临时写作。这类项目往往更多地有技术需要和开发者动力驱动，而不是有总体业务需求驱动。如果这样的项目不断发展壮大，其治理方式也可以逐步演进。例如，项目可能会转移到某个基金会。在 [GitHub](https://github.com/explore) 上可以找到无数这样的例子。

More detailed information and possible starting points for open source governance can be found in the [Minimum Viable Governance](https://github.com/github/MVG) framework or [A Legal Issues Primer for Open Source and Free Software Projects](https://softwarefreedom.org/resources/2008/foss-primer.html).

您可以从[最小可行治理](https://github.com/github/MVG)框架或[面向开源和自由软件项目的法律问题入门](https://softwarefreedom.org/resources/2008/foss-primer.html)找到有关开源项目治理的更详细信息和可能的入门指南。

### Different Project Levels

### 不同的项目级别

It can make sense to have different levels for new open source projects ("sandbox", "incubator", "graduated" - these are the different [project levels of CNCF](https://www.cncf.io/projects/), for example). This is a way to classify your open source projects wrt. adoption, maturity and quality criteria that they have to fulfill. The basic idea is that new projects start in a dedicated space (CNCF calls that "sandbox" - at Meta, that's the ["Incubator"](https://github.com/facebookincubator)). In this space, projects can evolve and check if they reach the goals that have been defined in terms of adoption and quality. If they do, they can be promoted to the next level. If they don't, it might be decided to sunset them.

对新开源项目设置不同的级别（“沙箱”，“孵化器”，“毕业”）是有意义的。 例如[CNCF 的项目级别](https://www.cncf.io/projects/)就是这样划分的。这是一种根据采纳度、成熟度和质量标准对项目进行分类的方法。基本思路是，新项目在一个专用空间内开始（CNCF 称之为“沙箱”，在 Meta 则为“孵化器”项目，如 [“Incubator”](https://github.com/facebookincubator)）。在这个空间里，项目可以不断发展，并检查是否达到了在采纳和质量方面设定的目标。如果达到了，项目就可以晋升到下一个级别；如果没有，则可能会决定停止项目。这种分级制度有助于确保项目的质量和可持续性，同时也为项目提供了成长和发展的空间。

## Community management

## 社区管理

For the majority of open source projects, starting a community around that project and receiving contributions is an important if not the primary goal (however, there are also projects where the primary goal for open sourcing is not the creation of a vivid community - for example building trust by making the source code visible, in this case receiving contributions might have a lower priority). Such a community does not take off by itself. Starting it and keeping it alive requires planning as well as budget and resources. Initial and ongoing activities comprise:

对于大部分开源项目，围绕项目建立社区并接收贡献是一个重要目标，甚至可以说是首要目标（不过也有一些项目开源的主要目的并不是建立活跃的社区，例如通过公开源代码来建立信任，在这种情况下，获得贡献的优先级可能会较低）。这样的社区并不是自然而然形成的。启动和维持它需要计划、预算和资源。初始和持续的活动包括：

* Promote the project
* 宣传项目

  This includes presenting at conferences, hosting or sponsor key events, and building new initiatives and programs in your community

  这包括在会议上发言，主办或赞助关键活动，以及在您的社区中建立新的倡议和计划。

* Create a welcoming environment
* 创建一个温馨的环境

  This includes creating open-source project policies, guidelines (basic instructions for maintainers, installation process, instructions for end users) or improve main project communication channels (forums, chat discussions, etc)

  这包括创建开源项目政策，指南（面向维护者的基本指南，安装流程，最终用户使用指南）或改善主要的项目交流渠道（论坛、聊天讨论等）

* Facilitate collaboration
* 促进协作

  Building mentoring programs, adding project documentation (such as how to contribute, how to write and run tests, how the governing board is elected, etc )

  建立指导程序，增加项目文档（例如如何贡献、如何编写和运行测试、如何选举管理委员会等）

It's advisable to assign a community manager to the project who takes care of these tasks. The TODO Group Guide [Starting an open source project](https://todogroup.org/guides/starting/) contains more information in its chapter "Build the community". For further reading, we recommend the TODO Group Guides [Building an inclusive open source community](https://todogroup.org/guides/diversity-inclusion/) and [Building leadership in an open source community](https://todogroup.org/guides/building-leadership/).

建议为项目分配一名社区经理，负责这些任务。TODO Group 指南[启动开源项目](https://todogroup.org/guides/starting/)中“构建社区”的章节包含更多信息。如需进一步阅读，我们推荐 TODO Group 指南中的“[构建包容性开源社区](https://todogroup.org/guides/diversity-inclusion/)”和“[在开源社区中培养领导力](https://todogroup.org/guides/building-leadership/)”。

### Code of conduct

### 行为准则

Creating a welcoming environment where people are safe from harmful behavior by others is an important part of maintaining a healthy community. It is especially important to support a diverse community, where there is no discrimination of under-represented groups, and explicit or implicit bias gets addressed.

营造一个安全友好的环境，让人员免受他人有害行为的侵害，是维护健康社区的重要组成部分。尤其重要的是支持多元化的社区，避免对少数群体的歧视，解决显性和隐性的偏见问题。

A common element in maintaining a healthy community environment is a code of conduct which makes rules for accepted and unaccepted behavior explicit and defines how unacceptable behavior is dealt with. There are examples and templates which can be used as a base for your code of conduct. One popular reusable code of conduct is the [Contributor Covenant](https://www.contributor-covenant.org/) which is used by projects such as Kubernetes, git, Node.js, and many more.

维护健康社区环境的一个常见要素是行为准则，它明确规定了可接受和不可接受的行为规则，并定义如何处理不可接受的行为。有许多示例和模板可以作为您行为准则的基础。一个广受欢迎的、可重复使用的行为准则是[贡献者公约 (Contributor Covenant)](https://www.contributor-covenant.org/)，它被诸如 Kubernetes、git、Node.js 等许多项目所采用。

As a company you need to provide a contact email which can be used to report code of conduct violations. You need to make sure that this address is monitored by people who can react in a timely manner and have the competence and ability to initiate adequate actions to address these issues.

作为一家公司，你需要提供一个用于举报违反行为准则情况的电子邮件地址。您需要确保该地址由能够及时响应、具备处理此类问题的能力的人员负责控制。

## Technical considerations, tooling and best practices

## 技术考量、工具与最佳实践

Appropriate tooling can safe a lot of time and help to automate processes significantly. [Curated list of awesome tools to manage open source](https://github.com/todogroup/awesome-ospo) contains a comprehensive list of proven and recommendable tools.

合适的工具能够节约大量时间，并显著帮助自动化流程。[开源项目管理工具精选列表](https://github.com/todogroup/awesome-ospo)包含了经过验证和推荐的工具的综合列表。

### User management

### 用户管理

Normally, Git providers (GitHub, GitLab, Bitbucket etc.) offer means to define teams of individual users and to define (access) rights on team and on individual level. To be able to use the service of a Git provider, engineers have to create a corresponding account. This account has nothing to do with the company-internal account of an engineer. This imposes some challenges since the access rights of an engineer for an external repository might depend on their role in the company or whether they are still working for the company (let's assume that an engineer got comprehensive rights for external repositories when they were working for your company and that they now left the company - you might want to adjust the access rights). But how to do that since the external account of an engineer at a Git provider is independent from his company-internal user account? Somehow a mapping between both accounts is needed. For GitHub there's the open source tool [opensource-portal](https://github.com/microsoft/opensource-portal) available that can help to create such a mapping. It can also be used to implement a self service for joining of GitHub organizations. As part of the process, the tool creates the mapping between the GitHub.com account and the corresponding company-internal user account. The mapping is stored in a database. Based on this, it is easy to create some tooling that regularly checks if all users that are contained in that database are still employed by your company and trigger some activity if that's not the case.

通常，Git 提供商（GitHub、GitLab、Bitbucket 等）提供定义由单个用户组成的团队以及设置团队和个人级别（访问）权限的方法。为了使用 Git 提供商的服务，工程师需创建相应的账户。此账号与工程师在公司的内部账户无关。这会带来一些挑战，因为工程师对外部仓库的访问权限可能依赖于他们在公司内的角色或者他们是否仍然在公司工作（假设工程师在为贵公司工作期间获得外部仓库的全面权限，而现在他们已经离职——您可能想要调整访问权限）。但是如何做到这一点，因为工程师在 Git 提供商的外部账户独立于其公司内部用户账户？需要某种方式在两个账号之间建立映射。对于 GitHub，可以使用开源工具 [opensource-portal](https://github.com/microsoft/opensource-portal) 来帮助创建这样的映射。它还可用于实现加入 GitHub 组织的自助服务。作为该过程的一部分，该工具会建立了 GitHub.com 账号与其对应公司内部用户账号之间的映射。映射存储在数据库中。在此基础上，可以轻松创建一些工具，定期检查数据库中包含的所有用户是否仍在贵公司任职，并在情况不成立时出发某些活动。

### Setting up a repository

### 设置仓库

It is good practice that a repository contains a certain set of files (the *health files*). These files contain the basic information about the repository such as description, code of conduct, license, contribution guidelines etc. These files are often provided in [markdown format](https://en.wikipedia.org/wiki/Markdown), but could - depending on the Git provider - be provided in different formats such as [AsciiDoc](https://en.wikipedia.org/wiki/AsciiDoc). Here, we assume the default format (which is markdown) and thus use the file suffix `.md`.

在代码仓库包含一定的文件集合（健康文件）是一个良好的做法。这些文件包含仓库的基本信息，例如描述、行为规范、许可证、贡献指南等。这些文件通常以 [markdown 格式](https://en.wikipedia.org/wiki/Markdown)，但根据Git提供商的不同，也可以采用其他格式，例如 [AsciiDoc](https://en.wikipedia.org/wiki/AsciiDoc)。在这里，我们假设默认格式为 markdown，因此使用文件后缀名`.md`.

* *README.md*
* *README.md*

  This file is displayed as the *homepage* of the repository. It typically contains information such as repository description, dependencies as well as download, installation and configuration instructions.

  此文件作为仓库的“主页”展示。它通常包含关于仓库的描述、依赖项以及下载、安装和配置说明等信息。

* *LICENSE* or *LICENSE.txt*
* *LICENSE* 或 *LICENSE.txt*

  Contains the license text for the repository.

  包含仓库的许可证文本。

* *CONTRIBUTING.md*
* *CONTRIBUTING.md*

  Contains information and instruction about how contributions can be made.

  包含关于如何做出贡献的信息和说明。

* *CODE-OF-CONDUCT.md*
* *CODE-OF-CONDUCT.md*

  Contains the code of conduct for the repository.

  包含仓库的行为准则。

* *GOVERNANCE.md*
* *GOVERNANCE.md*

  Contains information about project governance.

  包含关于项目治理的信息。

* *SECURITY.md*
* *SECURITY.md*

  Contains instructions about how to report security vulnerabilities for the repository.

  包含关于如何报告仓库安全漏洞的说明。

* *SUPPORT.md*
* *SUPPORT.md*

  Contains information about how to receive support in case of problems.

  包含关于在出现问题时如何获得支持的信息。

The *README.md* and the license text file should be there for all repositories. The other files can be considered as optional and only be created if they are required (if, for example, no contributions are accepted, this information could be put into the *README.md* and a *CONTRIBUTING.md* is not necessary).

对所有仓库来说，都应当包含 *README.md* 和许可证的文本文件。其余的文件可以被视为可选的，只在需要时才创建（例如，如果不接受任何贡献，则可以将此信息放入 *README.md* 中，这样就不用需要创建 *CONTRIBUTING.md* 文件）

To make sure that a certain set of health files is always created, there are different possibilities:

为了确保始终创建某个特定健康文件集，我们可以采用以下几种方法：

* One possibility is to use template repositories. These are repositories that contain the required set of initial health files. A new repository can be created/copied from this template repository and thus it contains already the required set of health files. Some Git providers (GitHub, for example) provide [specific means](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file) to create the required health files per default.
* 一种方法是利用模版仓库。这些仓库包含了所需的一系列初始健康文件。您可以通过从模版仓库/复制一个新的仓库，从而使其包含所需的健康文件集。一些 Git 提供商（例如 Github）提供了[特定手段 (sepecific means)](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file)来帮助您默认创建必须的健康文件。

* Another possibility is to create repositories with a tool. Such tools create repositories based on some input data via the API's of the Git provider (GitHub.com, GitLab.com, Bitbucket.org etc.). Thus, they can help that repositories are compliant to the company guidelines (contain the required health files **and** team structure, for example). Based on such tools self services for repository creation could be offered that allow development teams creating repositories themselves. Often, companies develop such tools for their specific needs. We (the authors of this document) do not know generic repository creation tools.
* 另一种可能的方法是采用工具创建仓库。这类工具通过 Git 提供商（如 GitHub.com、GitLab.com、Bitbucket.org 等）的 API，基于一些输入数据来创建仓库。因此，它们可以帮助仓库符合公司指南（例如，包含所需健康文件和团队结构）。基于此类工具，可以提供自助服务来创建仓库，使开发团队能够自己创建仓库。通常，公司会根据自己的特定需求开发此类工具。我们（文档的作者们）不了解通用的仓库创建工具。

### Providing license and copyright information

### 提供许可证和版权信息

License and copyright information must be declared properly for an open source project. This is important for consumers of the project as well as for contributors. Furthermore source code often gets copied from one project to another, this makes it mandatory that all files carry license and copyright information

开源软件项目的许可证和版权信息必须正确的声明。这对于项目的使用者和贡献者都是非常重要的。此外，源代码经常从一个项目复制到另一个项目，因此，强制所有文件都必须携带许可证和版权信息是必不可少的。

* for the parts of the project that you / your company developed
* 对于项目中由您和您公司开发的部分
* but also for external components (i.e. code developed by external parties) that are part of your repositories
* 以及作为您仓库一部分的外部组件（即外部方开发的代码）。

Note that a statement like *For license conditions please check LICENSE.txt* is not suited.

请注意，像*有关许可条件，请查看 LICENSE.txt* 这样的声明是不合适的。

The [REUSE tool](https://reuse.software/) from the [Free Software Foundation Europe](https://fsfe.org/) supports the proper declaration of license and copyright information for your project:

来自[欧洲自由软件基金会 (Free Software Foundation Europe)](https://fsfe.org/)的 [REUSE 工具](https://reuse.software/)支持您项目的许可和版权信息的正确声明：

* It provides a machine-readable file format for license and copyright information and thus makes it easy for others (scanning tools, for example) to consume that information
* 它为许可证和版权信息提供了一个机器可读的文件格式，从而使其他人（例如扫描工具）可以轻松地提取这些信息。
* It provides tooling to:
* 它提供了工具用于：
  * add license and copyright information to source code files
  * 在源代码文件中添加许可和版权信息
  * download and store license texts
  * 下载和存储许可文本
  * to lint your repositories to make sure that license and copyright information is available for all files
  * 对您的仓库进行代码审查，以确保所有文件都包含了许可和版权信息。

### CLA/DCO Management

### CLA/DCO 管理

If contributors must accept an CLA or DCO before they can submit their contributions, it is beneficial to automate that process as much as possible. The [TODO Group](https://todogroup.org/) provides a [list of tools](https://github.com/todogroup/awesome-ospo#contributor-license-agreements--developer-certificate-of-originis) that support the management and the sign-off of DCOs or CLA documents. As an example, we describe the [CLA Assistant](https://github.com/cla-assistant/cla-assistant) in more detail.

如果贡献者在可以提交贡献代码之前，必须要接受 CLA 或者 DCO，那么尽可能的自动化该过程是有益的。[TODO Group](https://todogroup.org/) 提供了一份[工具列表](https://github.com/todogroup/awesome-ospo#contributor-license-agreements--developer-certificate-of-originis)，支持 DCOs 或 CLA 文档的管理和签署。作为例子，我们将更详细地描述 [CLA Assistant](https://github.com/cla-assistant/cla-assistant)。

The CLA Assistant implements a workflow that asks contributors to accept/sign-off a document when a contributor submit the first pull request to a certain repository on GitHub.com. Despite the name of the tool ("CLA Assistant"), it can be used for any type of document that companies require contributors to accept before a pull request can be submitted, including CLAs and DCOs. The document text must be provided as gist on GitHub.com. Which document/gist to be used can be configured on organization and on repository level. The CLA Assistant uses a default logic: If for a certain repository no specific document is configured, the document that is configured on organization level is used. When a contributor submits a pull request for a repository for the first time, the CLA Assistant displays the document text and the contributor can only submit the request if they accept the document. The next time, the same contributor submits a pull request, they can do so without having to accept the document again. The information that the contributor accepted the document for that repository is stored in the database of the CLA Assistant and can be retrieved later on. The CLA Assistant is available as hosted offering on https://cla-assistant.io/ or can be self-hosted.

CLA 助手 （CLA Assistant）实现了一个工作流程，要求贡献者在向 GitHub.com 上的特定仓库提交首个拉取请求时接受/签署一份文档。尽管该工具的名称为 “CLA 助手”，但它可以用于公司要求贡献者在提交拉取之前接受的任何类型的文档，包括 CLA 和 DCO。文档文本必须作为 GitHub.com 上的 gist 提供。要使用的文档/gist 可以在组织和仓库级别进行配置。CLA 助手使用默认逻辑：如果某个代码仓库没有配置特定文档，则会使用组织级别配置的文档。当贡献者首次向仓库提交拉取请求时，CLA 助手会显示文档文本，并且只有贡献者接受该文档内容后才能提交请求。接下来，当统一为贡献者提交拉取请求，他们可以直接提交，无需再次接受该文档。贡献者接受仓库文档的信息会存储在 CLA 助手的数据库中，以后可以检索。CLA 助手可以在[https://cla-assistant.io/](https://cla-assistant.io/)上作为托管服务提供，也可以自行托管。

### Credential scanning

### 凭据扫描

Even if open source policies and guidelines explicitly require that credentials such as password, access tokens or other secrets have to be removed from code before it is published, it happens from time to time that unintentionally such important and sensitive data is pushed to public repositories. To detect such situations as quickly as possible (and thus to be able to revoke the published secret and remove that data from public repositories), it is advisable to regularly execute credential scans for such repositories. Luckily, all well-known code hosting platforms (GitHub.com, GitLab.com etc.) provide such scanning services as part of their offering. We strongly recommend to use that services.

尽管开源政策和指南明确的要求，在公开代码之前必须移除密码、访问令牌或者其他敏感信息，但有时还是会无意中将此类重要和敏感数据推送到公共仓库。为了尽快发现此类情况（从而能够撤销已发布的敏感信息并从公共仓库中删除该数据），建议定期对此类仓库进行凭据扫描。幸运的是，所有知名的代码托管平台（如 GitHub.com、GitLab.com 等）都提供此类扫描服务作为其服务的一部分。我们强烈建议使用这些服务。

### Quality criteria / CII Best Practices Badge Program

### 质量标准/CII最佳实践徽章计划

The [Core Infrastructure Initiative](https://www.coreinfrastructure.org/) (CII) created the [CII Best Practices Badge Program](https://bestpractices.coreinfrastructure.org/en). It is now continued by the [Open Source Security Foundation](https://openssf.org/). As part of the program, best practices for open source software is defined and a badge system is implemented. Via a [web app](https://bestpractices.coreinfrastructure.org/en/projects), projects can self-certify that they meet the criteria and show a corresponding badge on their website. As of today (May 2022), more than 4724 projects did the assessment.

[核心基础设施倡议](https://www.coreinfrastructure.org/)（CII）创立了[CII 最佳实践徽章计划](https://bestpractices.coreinfrastructure.org/en)，该计划现在由[开源安全基金会](https://openssf.org/)继续推进。作为该计划的一部分，它定义了开源软件的最佳实践，并实施了徽章系统。项目可以通过[网络应用程序](https://bestpractices.coreinfrastructure.org/en/projects)自我认证是否符合标准，并在其网站上展示相应的徽章。截至今天（2022 年 5 月），已有超过 4724 个项目完成了评估。

The CII system consists of three levels (*Passing*, *Silver* and *Gold*). They are building on each other (i.e. the *Silver* level contains all criteria of the *Passing* level plus additional ones). The criteria are structured in clusters such as *Basics*, *Change Control*, *Reporting*, *Quality*, *Security* and *Analytics*.

CII 系统分为三个等级（*通过*、*银级* 和 *金级* ）。这些等级是层层递进的（即 *银级*包含了*通过*等级的所有标准以及额外的标准）。这些标准被划分为不同的类别，包括*基础*、*变更控制*、*报告*、*质量*、*安全*和*分析*。

The CII Best Practices Badge community is [open for contributions](https://github.com/coreinfrastructure/best-practices-badge/blob/main/CONTRIBUTING.md) (additional criteria, for example).

CII 最佳实践徽章社区[开放贡献](https://github.com/coreinfrastructure/best-practices-badge/blob/main/CONTRIBUTING.md)（例如，提出额外的标准）。

Overall, the CII Best Practices Badge Program is a good means to verify own projects against commonly accepted best practices. Via the badge, projects can document that they meet these criteria.

总体而言，CII 最佳实践徽章计划是验证项目是否遵循公认最佳实践的一种好方法。通过徽章，项目可以证明其符合这些标准。

### Repository Linting

### 代码仓库审查

Repository linters are tools that check in an automated way if repositories adhere to the guidelines that a company has defined for its public open source repositories. The [TODO Group](https://todogroup.org/) provides a [list of tools](https://github.com/todogroup/awesome-ospo#project-quality) that can be used for this purpose. Typically, repository linters check criteria such as:

代码仓库审查器是一种自动化工具，用来检查代码仓库是否遵循公司为其公开开源仓库定义的指南。[TODO Group](https://todogroup.org/) 提供了可用于此目的[工具列表](https://github.com/todogroup/awesome-ospo#project-quality)。代码仓库审查器通常会检查以下方面的标准：

* Do the required files exist in the repository (license file README.md, CONTRIBUTING.md, for example)?
* 仓库中是否存在必需的文件（例如 许可证文件README.md，CONTRIBUTING.md)？
* 这些文件是否包含必需的部分？
* Do these files contain the required sections?
* 代码仓库是否具有符合公司指南的许可证？
* Does the repository have a license that is compliant to the company guidelines?
* 代码仓库是否具有符合公司指南的许可证？
* Does the repository contain the required badges (the REUSE badge or the CII badge, for example)?
* 代码仓库是否包含必须的徽章（例如 REUSE 徽章或 CII 徽章）？
* Repository team structure (a certain team structure might be required - at least two administrators, for example)
* 代码仓库团队结构（可能需要特定的团队结构，例如至少两个管理员）
* Configuration of the repository (are vulnerability alerts activated?, for example)
* 代码仓库配置（例如，是否启用了漏洞警报？）

However, which criteria they check is company-specific and thus, they normally provide the possibility to configure rules (as JSON file, for example, as the [repolinter of the TODO Group](https://github.com/todogroup/repolinter) does). To retrieve the necessary data to execute these checks, the APIs of the Git provider (GitHub.com, GitLab.com, Bitbucket.org etc.) is used. The result of the check is typically provided in a UI. Another option is to automatically create issues in the corresponding repository if checks fail. Typical usage scenarios for such a linter include:

然而，它们检查的标准因公司而异，因此，它们通常提供配置规则的可能性（例如，作为JSON文件，正如 TODO Group 的 [repolinter](https://github.com/todogroup/repolinter)所做的那样）。为了获取执行这些检查所需的数据，会使用Git提供商（如 GitHub.com、GitLab.com、Bitbucket.org 等）的 API。检查结果通常会在用户界面上提供。如果检查失败，另一种选择是在相应的仓库中自动创建问题。此类审查器的典型使用场景包括：

* Check for guideline compliance before a repository is published
* 在代码仓库公开前，检查是否符合指南要求
* Regular checks after publication
* 公开后的常规检查

## Build an open source metrics strategy when releasing to open source projects

## 在发布开源项目时构建开源指标策略

Once you have established the goals, procedures, and tools for your company's outbound open source plan, it is always useful to monitor and track the overall health of open source projects the company engages with as they grow and mature.

一旦为公司对外开源计划制定了目标，流程和工具，随着公司参与的开源项目不断发展和成熟，持续监测和追踪这些项目的整体健康状况变得非常重要。

Before thinking about which tool should be used to track project health, a good alternative on how to do this is to establish a full metrics strategy following the goal-question-metrics approach. This approach is used in communities focused on community health analytics metrics standards and software, such as [CHAOSS](https://chaoss.community), one of the projects under the Linux Foundation umbrella.

在考虑使用哪些巩工具来追踪项目的健康状况之前，一个更好地替代方案是遵循目标——问题——指标（goal-question-metrics）方法来建立完整的指标策略。这种方法常用于关注社区健康分析指标标准和软件的社区，例如 Linux 基金会旗下的 [CHAOSS](https://chaoss.community/) 项目。

**Defining community health goals**

**定义社区健康目标**

Sometimes it is better to start small and define two or three main goals first before getting overwhelmed by metrics. If you don't know where to start, CHAOSS offers a set of metrics based on different focus-areas and goals when measuring project health that can help you get started in measuring the health of the open-source projects that matter to your organization:

有时候，最好从小处着手，先定义两个或三个主要目标，避免被指标淹没。如果你不知道从哪里开始，CHAOSS 提供了一套基于不同关注领域和目标的项目健康衡量指标，可以帮助您开始衡量对您组织至关重要的开源项目的健康状况：

* Common Metrics
* 常用指标
* Diversity and Inclusion
* 多样性和包容性
* Evolution
* 演进
* Risk
* 风险
* Value
* 价值
* App Ecosystem
* 应用生态系统

**Creating questions and building metrics around**

**创建问题和构建相关指标**

Metrics should be answering specific questions that are aligned with the previous goals established.

指标应当回答与先前设定的目标相一致的具体问题。

For instance, if one of your company's goals is to understand the community footprint within a project, one good question can be "What’s the presence and influence of organizations within the open source ecosystem?". In order to solve this, one useful metric can be the Elephant Factor (the minimum number of organizations whose employees perform 50% of the total contributions).

例如，如果你的公司的目标之一是了解项目内的社区足迹，那么一个很好的问题可以是：“在开源生态系统中，组织的存在和影响力如何？”为了解答这个问题，一个有用的指标是“大象因子”，即员工贡献了总贡献量 50% 所需的最少组织数。

There are great tools to help you measure different community health analytics metrics, for instance, GrimoireLab, LFX, or Augur.

有很多优秀的工具可以帮助你度量不同的社区健康分析指标，例如 GrimoireLab、LFX 或 Augur。

For further information about tools for tracking project health, check this dedicated section from one of the [TODO Guides](https://todogroup.org/guides/management-tools/#tools-for-tracking-project-health)

如需更多关于跟踪项目健康状况的工具的信息，请查阅 [TODO Guides](https://todogroup.org/guides/management-tools/#tools-for-tracking-project-health) 中的专门部分。

# References and Abbreviations

# 参考文献与缩写

## Abbreviations
## 缩写

- API = Application Programming Interface
- API = 应用程序编程接口
- CII = Core Infrastructure Initiative
- CII = 核心基础设施倡议
- CLA = Contributor License Agreement
- CLA = 贡献者许可协议
- CCLA = Corporate Contributor License Agreement
- CCLA = 企业贡献者许可协议
- CHAOSS = Community Health Analytics Open Source Software
- CHAOSS = 社区健康分析开源软件
- CNCF = Cloud Native Computing Foundation
- CNCF = 云原生计算基金会
- DCO = Developers Certificate of Origin
- DCO = 开发者原创证书
- ECC = Export Control and Customs
- ECC = 出口管制与海关
- ECCN = Export Control Classification Number
- ECCN = 出口管制分类编号
- GPL = GNU General Public License
- GPL = GNU 通用公共许可证
- ICLA = Individual Contributor License Agreement
- ICLA = 个人贡献者许可协议
- IDE = Integrated Development Environment
- IDE = 集成开发环境
- IP = Intellectual Property
- IP = 知识产权
- JSON = Java Script Object Notation
- JSON = Java 脚本对象表示法
- KPI = Key Performance Indicator
- KPI = 关键绩效指标
- LFX = Linux Foundation Collaboration Metrics
- LFX = Linux基金会协作指标
- MIT = Massachusetts Institute of Technology
- MIT = 麻省理工学院
- NPM = Node Package Manager
- NPM = Node 包管理器
- OSI = Open Source Initiative
- OSI = 开源促进会
- OSPO = Open Source Program Office
- OSPO = 开源项目办公室
- OSS = Open Source Software
- OSS = 开源软件
- PyPI = Python Package Index
- PyPI = Python 包索引

## References

## 参考文献

* [Open Source Archetypes: A Framework for Purposeful Open Source (Mozilla)](https://blog.mozilla.org/wp-content/uploads/2018/05/MZOTS_OS_Archetypes_report_ext_scr.pdf)
* [开源原型：有目的性开源的框架（Mozilla）](https://blog.mozilla.org/wp-content/uploads/2018/05/MZOTS_OS_Archetypes_report_ext_scr.pdf)
* [Starting an open source project (LF TODO Group)](https://todogroup.org/guides/starting/)
* [如何启动一个开源项目（Linux 基金会 TODO 组）](https://todogroup.org/guides/starting/)
* [Shutting down an open source project (LF TODO Group)](https://todogroup.org/guides/shutting-down/)
* [如何关闭一个开源项目（Linux 基金会 TODO 组）](https://todogroup.org/guides/shutting-down/)
* [Marketing open source projects (LF TODO Group)](https://todogroup.org/guides/marketing-open-source-projects/)
* [开源项目的市场营销（Linux 基金会 TODO 组）](https://todogroup.org/guides/marketing-open-source-projects/)
* [Building leadership in an open source community (LF TODO Group)](https://todogroup.org/guides/building-leadership/)
* [在开源社区中建立领导力（Linux基金会 TODO 组）](https://todogroup.org/guides/building-leadership/)
* [Community Health Analytics Open Source Software (LF CHAOSS)](https://chaoss.community/)
* [社区健康分析开源软件（Linux 基金会 CHAOSS）](https://chaoss.community/)
* [How to measure the health of an open source community](https://opensource.com/article/19/8/measure-project)
* [如何衡量开源社区的健康状况](https://opensource.com/article/19/8/measure-project)
* [Community health files (GitHub.com)](https://docs.github.com/en/github/building-a-strong-community/creating-a-default-community-health-file#about-default-community-health-files)
* [社区健康文件（GitHub.com）](https://docs.github.com/en/github/building-a-strong-community/creating-a-default-community-health-file#about-default-community-health-files)
* [CII Best Practices Badge (LF Core Infrastructure Initiative)](https://bestpractices.coreinfrastructure.org/en)
* [CII最佳实践徽章（Linux 基金会核心基础设施倡议）](https://bestpractices.coreinfrastructure.org/en)
* [DCO version 1.1](https://developercertificate.org/)
* [DCO 版本 1.1](https://developercertificate.org/)
* [ICLA](https://www.apache.org/licenses/icla.pdf)
* [个人贡献者许可协议（ICLA）](https://www.apache.org/licenses/icla.pdf)
* [CCLA](https://www.apache.org/licenses/cla-corporate.pdf)
* [企业贡献者许可协议（CCLA）](https://www.apache.org/licenses/cla-corporate.pdf)
* [German Copyright Act](https://dejure.org/gesetze/UrhG/69b.html)
* [德国版权法](https://dejure.org/gesetze/UrhG/69b.html)

# Appendix
# 附录

## Managing work vs personal emails in git
## 在 git 中管理工作与个人电子邮件

In the world of open source, folks may have an online identity that pre-dates
their employment with our current organization. Simultaneously, the organization
may want contributions done on their behalf to happen with corporate emails.

在开源领域，人们可能拥有一个早于其加入我们当前组织的线上身份。同时，组织可能希望代表他们进行的贡献使用公司电子邮件进行。

One way that folks can solve this is by encoding their commit email on a
per-repository basis, like:

解决这一问题的一种方法是，在每个仓库的基础上对其提交电子邮件进行编码，例如：

```
git config user.email "simba@special-email.example.com"
```

```
git config user.email "simba@special-email.example.com"
```

If you work with several repositories, this will become difficult to manage and
easy to forget. Instead, we can use a feature of git which allows different
configurations based on our directory structures.

如果你管理多个仓库，这将会变得难以管理且容易忘记。相反，我们可以利用 git 的一个功能，该功能允许我们根据不同的目录结构进行不同的配置。

Our `~/.gitconfig` file might look like this:

我们的 `~/.gitconfig` 文件可能类似于：

```
[user]
	name = Simba Lion
	email = simba@personal-email.example.org

[includeIf "gitdir:~/my-company/"]
    path = ~/my-company/.gitconfig
```

```
[user]
	name = Simba Lion
	email = simba@personal-email.example.org

[includeIf "gitdir:~/my-company/"]
    path = ~/my-company/.gitconfig
```

This sets our default email (which, in this case, is for a personal
account). If we have repositories in the `~/my-company` directory, we'll load an
additional git config file which is located at `~/my-company/.gitconfig`. That
file might look like:

这设置了我们的默认电子邮件（在这种情况下，是个人账户的电子邮件）。如果我们在 `~/my-company` 目录下有仓库，我们将会加载一个额外的 git 配置文件，该文件位于 `~/my-company/.gitconfig`。该文件可能看起来像这样：

```
[user]
	email = simba@very-corporate-email.example.com
```

```
[user]
	email = simba@very-corporate-email.example.com
```

Now when our user commits changes, it will use their personal email by default,
or their corporate email for any repositories within the `~/my-company`
folder. Note that the name attribute is inherited from the base configuration,
so we don't need to double specify it.

现在，当用户提交更改时，它将默认使用期个人电子邮件，或者对于 `~/my-company` 文件夹内的任何仓库，它将使用其公司电子邮件。请注意，name 属性是从基础配置中继承的，因此我们不需要重复指定它。