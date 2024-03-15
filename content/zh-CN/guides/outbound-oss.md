---
title: A Guide to Outbound Open Source Software
---

---
标题：对外开源指南
---

People can also download version 1.0 Guide as PDF [here](https://github.com/todogroup/todogroup.org/files/9560697/TODO_OutboundOSS_Report_v6.pdf)

人们也可从[这里](https://github.com/todogroup/todogroup.org/files/9560697/TODO_OutboundOSS_Report_v6.pdf)下载1.0版本指南的PDF。

The TODO Community is grateful to receive corrections and suggestions for improvements via [this repo](https://github.com/todogroup/outbound-oss), which contains TODO guide’s updated documentation with the most recent version

TODO 社区感谢通过这个[仓库](https://github.com/todogroup/outbound-oss)收到用于改进的修正和建议，它包含有TODO指南的最新版本的文档。

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
    - [Contribution models](#contribution-models)
      - [Small contributions model or trivial contributions](#small-contributions-model-or-trivial-contributions)
      - [Major to major release model](#major-to-major-release-model)
      - [Full trust model](#full-trust-model)
    - [Approving projects for contributions](#approving-projects-for-contributions)
    - [Spare-time contributions -  also known as "moonlighting"](#spare-time-contributions----also-known-as-moonlighting)
  - [Trainings](#trainings)
- [Starting open source projects](#starting-open-source-projects)
  - [Motivation](#motivation)
  - [Project life cycle](#project-life-cycle)
    - [Planning or Concept Phase](#planning-or-concept-phase)
    - [Active or Development Phase](#active-or-development-phase)
    - [Mature or Maintenance Phase](#mature-or-maintenance-phase)
    - [Obsolete or End of Life Phase](#obsolete-or-end-of-life-phase)
  - [Legal and governance considerations](#legal-and-governance-considerations)
    - [Which license to select](#which-license-to-select)
    - [Contributor License Agreement (CLA), Developer Certificate of Origin (DCO)](#contributor-license-agreement-cla-developer-certificate-of-origin-dco)
    - [Project governance](#project-governance)
    - [Different Project Levels](#different-project-levels)
  - [Community management](#community-management)
    - [Code of conduct](#code-of-conduct)
  - [Technical considerations, tooling and best practices](#technical-considerations-tooling-and-best-practices)
    - [User management](#user-management)
    - [Setting up a repository](#setting-up-a-repository)
    - [Providing license and copyright information](#providing-license-and-copyright-information)
    - [CLA/DCO Management](#cladco-management)
    - [Credential scanning](#credential-scanning)
    - [Quality criteria / CII Best Practices Badge Program](#quality-criteria--cii-best-practices-badge-program)
    - [Repository Linting](#repository-linting)
  - [Build an open source metrics strategy when releasing to open source projects](#build-an-open-source-metrics-strategy-when-releasing-to-open-source-projects)
- [References and Abbreviations](#references-and-abbreviations)
  - [Abbreviations](#abbreviations)
  - [References](#references)
- [Appendix](#appendix)
  - [Managing work vs personal emails in git](#managing-work-vs-personal-emails-in-git)

# Introduction

# 简介

## Goal and target audience

## 目标与受众

This guide is about how to contribute to or to launch an open source project (also called "outbound open source") as a company. It aims to describe a complete and lean process, that can be implemented in companies of any size (large but also small or medium sized organizations). Companies can tailor the proposed procedure to their needs. I.e., depending on the size and situation of the company not all steps need to be implemented.

本指南旨在指导公司如何为开源项目做出贡献或者发起一个开源项目（也叫做“对外开源”)。它旨在描述一个完整且精简的流程，该流程能够被任何规模（包括大型、小型或者中型）。公司可以根据自己的需求调整所提议的程序。例如，根据公司的规模和情况，并非所有的步骤都需要实施。

## Maturity levels

## 成熟度级别

Corporate adoption of open source software (OSS) can typically be classified with a model of maturity levels. These levels describe how OSS is used in an increasingly effective fashion to drive value and address business needs. One of the distinguishing factors for the different maturity levels is how outbound open source is handled in an organization. The insight that influencing the open source ecosystem is mainly done by participation in and contributing to open source projects is seen as a critical factor.

开源软件（OSS)的企业采纳情况通常可以根据成熟度模型进行分类。这些层级描述了OSS是如何以一种越来越有效地方式创造价值和满足业务需求。区分不同成熟度层级的一个显著因素是组织如何处理外向型开源软件。一个关键的认知是，对开源生态系统的影响主要是通过参与和贡献开源项目来实现的。

A typical maturity model of corporate open source adoption looks like this (see for example [Haddad: Open Source Program Offices](https://www.linkedin.com/pulse/open-source-program-offices-primer-organizational-roles-haddad)):

公司开源采纳的一个典型的成熟度模型如下（例如，参见[Haddad：开源项目办公室](https://www.linkedin.com/pulse/open-source-program-offices-primer-organizational-roles-haddad)）:

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

随着参与开源软件的程度加深，越来越多的组织意识到企业内部开源管理以及开源生态系统固有复杂关系带来的挑战。因此，有许多组织开始成立开源项目办公室（OSPOs），或者叫一些其他名称，例如开源技术中心，开源社区发展团队等。OSPOs是组织内部专门负责支持、培育、分享、解释和推动开源发展的地方。有了这样的办公室，企业可以以明确地条款和职责来制定和执行其开源战略，为领导者、开发人员、营销人员和其他员工提供所需的流程和工具，帮助他们在运营中成功运用开源。

The TODO Group offers a [set of guides](https://todogroup.org/guides/) on how to get started with an OSPO. Companies that are new to this topic, might want to first take a look at [**How to create an open source program**](https://todogroup.org/guides/create-program/)

针对如何启动开源项目办公室（OSPO），TODO Group提供了一[系列指南](https://todogroup.org/guides/)。对于刚接触该主题的公司而言，可以优先查看[**如何创建一个开源项目**](https://todogroup.org/guides/create-program/)指南。

## Motivation for open source contribution

## 开源贡献的动机

There is a broad spectrum of motivations for contributing to open source projects or starting new projects. Here, we can only list some examples.

投身开源项目或者发起新项目的动机多种多样。这里，我们仅列举部分示例.

### Build software faster and better

## 高效和高质量的构建软件

Consuming open source software typically increases the development speed and decreases development costs since one builds upon existing code and a working and tested functionality. One risk however is that required features or bug fixes are not provided by the community as quickly as needed. To mitigate that risk, it might make sense to build up the required skills and create these bug fixes and/or features yourself. Contributing them back to the upstream projects has important benefits:

使用开源软件通常可以加快开发的速度并降低开发的成本，因为您可以利用现有的经过功能测试的代码进行构建。然而，一个存在的风险是社区可能无法迅速地提供所需的功能或者漏洞修复。为了缓解这一风险，培养必要的技能并自行创建这些漏洞修复和/或功能可能是有意义的。将它们回馈给上游项目具有重要的好处：

* Integrating "own" features into upstream projects makes maintenance a lot easier
* 将“自有”功能集成到上游项目会使维护工作变得更加容易。
* Upstream versions can be directly used in own products and services
* 可以直接在自己的产品和服务中直接使用上游版本
* More features are obtained in shorter period of time
* 在更短的时间周期内使用更多功能
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
* 获得开源软件包（共同)的版权
* access to the creativity of everyone interested in software
* 获取所有对软件感兴趣的人的创造力

Companies sometimes have the tendency to use money to exert influence. With open source projects this is not the most effective method. The currency of influence is contributions, because open source projects are usually much more driven by the work of individuals than the decisions of committees. So contributions work much more directly and effectively than being a member in an organization or paying for support or other services.

有时，公司倾向于使用金钱来施加影响。但在开源项目中这并不是最有效的方法。影响力的“货币”是贡献，因为开源项目通常更多地由个人的工作驱动，而不是委员会的决策。因此，与单纯成为某个组织的成员或者支付支持费或其他服务相比，贡献代码更加直接、更有效。

Open source communities (particularly those run by the big open source foundations) provide a neutral place for collaboration between companies and other organizations. Thus, an open source approach could offer new ways of collaboration with suppliers, customers, partner and even competitors, just to mention industry- or domain-specific projects such as [Linux Foundation Energy](https://www.lfenergy.org/) or [Eclipse Tractus-X](https://projects.eclipse.org/proposals/eclipse-tractus-x). Establishing open source communities can also be a powerful means to create and maintain ecosystems and to establish de facto standards.

开源社区（尤其是那些由大的开源基金会运营的）为公司和其他组织之间的合作提供了一个中立的场所。因此，开源方式可以为公司提供与供应商、客户、合作伙伴甚至竞争对手合作的新途径，仅举一些行业或领域特定的项目为例，如[Linux Foundation Energy](https://www.lfenergy.org/)或[Eclipse Tractus-X](https://projects.eclipse.org/proposals/eclipse-tractus-x)。建立开源社区也是创建和维护生态系统以及建立事实标准的有力手段。

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

你的开源战略将管理、参与和创建开源软件的计划于这些计划服务的业务目标相结合。这可以带来许多机会并促进创新。TODO Group 提供了一份关于[制定开源战略](https://todogroup.org/guides/strategy/)
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
* “后端任务”潜在的复杂性不应该让开发者看到。要求的当前状态应该对开发者可见。

#### Boundary conditions

#### 边界条件

* Protect our employees and our business interests
* 保护我们的员工和商业利益
* Act in compliance with law as well as with internal and external regulations
* 遵守法律以及内部和外部的规定。
* Provide transparency to the decision makers on what and how much of the companies' code and IP will be affected by the publication
* 向决策者提供提供透明度，说明公司的那些代码和知识产权将受到发布的影响，以及影响程度。
* All the contributions shall be made with the “company”-email (similar for the GitHub activity) so that all contributions of the company can be identified easily
* 所有贡献应该使用“公司”邮箱进行（ Github 活动也类似），以便轻松识别公司的所有贡献。
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

来源：《[德国版权法]((https://dejure.org/gesetze/UrhG/69b.html)》

This means that all the software developed in this context is the property of the employer - i.e., the company the developer is working for. At least the German copyright act does not limit the proprietorship to code developed during working hours or within the company IT infrastructure, it only scopes the context.

这意味着，在此背景下开发的所有软件均属于雇主的财产，即开发人员工作的公司所有。《德国版权法》至少没有将所有权限定于工作时间或公司IT基础设施内开发的代码，它只界定了背景范围。

Secondly, a procedure is required to protect the company’s business interests as well as to protect the employee. Finally public code is like the business card of a company as well as of the developer who has written the code.

其次，需要遵循一定的程序来确保公司的商业利益以及保护员工。最后，公开代码既是公司的商业名片，也是编写该代码的开发者的名片。

#### Outbound CLA

#### 对外贡献者许可协议（CLA）

Some OSS projects as well as some OSS Foundations require a Contributor License Agreement (CLA) before they accept contributions. We know at least two different types of CLAs:

一些开源软件项目以及开源软件基金会，在接受贡献之前，会要求签署贡献者许可协议（CLA）。我们至少知道两种不同类型的CLA：

* Corporate Contributor License Agreement (CCLA)
* 企业贡献者许可协议（CCLA）
* Individual Contributor License Agreement (ICLA)
* 个人贡献者许可协议（ICLA)

Whether none, one or both are required for contributions is usually described in files like `CONTRIBUTING.md` in the project repositories. The [CCLA](https://www.apache.org/licenses/cla-corporate.pdf) and the [ICLA](https://www.apache.org/licenses/icla.pdf) authored by the Apache Foundation are the de facto standard of CLAs and many OSS projects have adopted either one or both.

项目是否不需要，或者需要其中一种或两种CLA，通常会在项目仓库中的CONTRIBUTING.md等文件中说明。APache基金会制定的CCLA和ICLA是CLA的实际标准，许多开源软件项目已经采用其中的一种或者两种。

The purpose of a CLA is to provide confidence to the OSS project that the contributor is entitled to submit the contribution. A Developer Certificate of Origin (DCO) is a an alternative approach and more lightweight compared to a CLA.

贡献者协议（CLA）的目的是给开源软件（OSS)项目提供信心，即贡献者有权提交其贡献。开发者原创证书（DCO）是一种替代方法，与CLA相比更加轻量级。

Some CLAs also require to transfer additional rights to the project such as the right to release the code under an additional, often proprietary license. This is an asymmetric setup which puts contributors at a disadvantage. Therefore most companies will not contribute to these kind of projects.

一些贡献者协议(CLA)还会要求将额外的权利转移给项目，例如以额外的、通常是专有许可证发布代码的权利。这是一种不对等的设置，不利于贡献者。因此大多数公司将不会向此类项目贡献代码。

The price of improved confidence for the OSS project is more overhead in the organization the contributor is working for. Especially in case of large corporations with several affiliates the effort of evaluating, signing and maintaining a CCLA shall not be underestimated.

开源软件项目提升信心的代价是贡献者所在的组织需要承担更多的额外工作。尤其是在拥有多家附属公司的大型企业中，评估、签署和维护企业贡献者许可协议(CCLA)所需的工作量不容小觑。

Why is a CCLA causing additional effort in large organizations? Let's briefly look at the CCLA of the Apache Foundation as an example:

为什么大型组织使用企业贡献者协议(CCLA)会带来额外的工作量？让我们以Apache基金会的CCLA为例来简单的看一下为什么造成这种情况:

* The CCLA is a contract - in many organizations the "four eyes principle" is implemented - a contract has to be signed by two persons, who have the right to sign contracts in the name of the organization - the required involvement of probably two more stakeholders requires additional effort in briefing them
* CCLA是一个合同——在许多组织中，都实行“四眼原则”——合同必须由两名有权代表组织签署合同的人员签署——可能需要另外两名利益相关者的参与，这需要在像他们进行情况介绍方面付出额外的努力。
* Usually a CCLA covers not only the specific legal entity the contributor is working for, it also covers all affiliates:
* 通常CCLA不仅覆盖贡献者所工作的特定法律实体，还覆盖其所有附属公司：
    * For legal entities, the entity making a Contribution and all other entities that control, are controlled by, or are under common control with that entity are considered to be a single Contributor. For the purposes of this definition, "control" means (i) the power, direct or indirect, to cause the direction or management of such entity, whether by contract or otherwise, or (ii) ownership of fifty percent (50%) or more of the outstanding shares, or (iii) beneficial ownership of such entity
    * 对于法律实体而言，做出贡献的实体以及控制的实体、被该实体控制或与该实体处于共同控制之下的所有其他实体都被视为单个贡献者。在本定义中，“控制”是指(i)直接或间接拥有导致该实体方向或管理发生变化的权力，无论是通过合同还是其他方式。(ii)拥有该实体已发行股份的百分之五十(50%)或更多，或(iii)对该实体享有受益所有权。
* The CCLA includes besides the copyright grant a patent grant. This is fine, nevertheless inside the organization the "IP department" needs to be involved in the evaluation process of the CCLA and for the specific contribution the "IP department" need to sync with all affiliates
* CCLA除了包括版权授权外，还包括专利授予。这没什么问题，不过，组织内部的“知识产权部门”需要参与CCLA的评估过程，并针对具体的贡献，“知识产权部门”还需要与所有附属公司进行同步。
* The CCLA needs to be analyzed by the "Legal department" of the organization.
* CCLA需要被组织的“法律部门”分析。


Some CCLAs require that the copyright of the contributions are assigned to the OSS project/Foundation. Copyright assignment is a topic which causes even more effort and might not be accepted at all.

一些CCLAs要求将贡献的版权转让给OSS项目/基金会。版权转让是一个需要付出更多努力的话题，并且可能根本不会被接受。

Besides the above-mentioned additional effort the CCLA adds additional "maintenance effort" to the organization, because it requires that the organization nominates all entitled contributors by name to the CCLA requiring party.

除了上面提及的额外工作，CCLA还给组织增加了额外的“维护工作”，因为它要求组织提名所有有资格的贡献者的姓名给CCLA要求方。

It is your responsibility to notify the Foundation when any change is required to the list of designated employees authorized to submit Contributions on behalf of the Corporation, or to the Corporation's Point of Contact with the Foundation.

您有责任在需要变更代表公司提交贡献的指定员工名单或公司与基金会之间的联系人时，及时通知基金会。

* The signed CCLA has to be made available inside the organization - This can be done via publishing the CCLA on the OSPOs website at a location which can be found easily be the employees (e.g., it might be useful to have a "top level page" named CCLAs, this page then contains a list of "signed CCLAs", a list of "CCLAs under evaluation", and a list of "denied CCLAs".)
* 签署的CCLA必须在公司内部公开——这可以通过在OSPOs网站上易于员工发现的位置上发布CCLA实现（例如，设立一个名为CCLAs的“顶层页面”可能很有用，该页面包含“已签署CCLAs”列表，“正在评估的CCLAs”列表，以及“已经拒绝的CCLAs”列表。

* All affiliates need to be informed and a procedure needs to be defined how the affiliates can nominate/de-nominate contributors working for them. This becomes even more challenging in case an affiliate has no access to the intranet of the signing entity. In this case the signed CCLA or the information about the signed CCLA needs to be sent to the OSPOs of all affiliates, in case an affiliate has no OSPO set up, the information must be routed to the function, which is in charge of software development. All affiliates need to provide the names of nominated contributors or former contributors, who shall not be entitled anymore to do contributions to the OSPO of the signing entity, which then must inform the Foundation/project about the change of the list of contributors.
*  所有附属公司都需要得到通知，并需要确定一个流程，以明确附属公司如何提名或取消提名为他们工作的贡献者。如果附属公司无法访问签署实体的内部网络，情况将变得更加复杂。在这种情况下，需要将已签署的CCLA或关于已签署CCLA的信息发送给所有附属公司的OSPO。如果附属公司没有设立OSPO，则必须将信息转发给负责软件开发的相关部门。所有附属公司需要提供已提名贡献者或前贡献者的姓名，这些贡献者将不再有权向签署实体的OSPO做出贡献，然后OSPO必须向基金会/项目通报贡献者名单的变更情况。
* Publishing the list of contributors inside the organization and disclosing it to the Foundation/project might also require the approval of the data protection officers of the involved entities
* 在组织内部公布贡献者名单并向基金会/项目披露名单可能还需要相关实体的数据保护官的批准。

This additional effort may hold organizations off to contribute small bug fixes or patches or even new features to the upstream OSS projects and puts them to risk of private forks and thus a lot of additional development effort in the long run. Thus the decision not to contribute needs to be taken very carefully.

这些额外的努力可能阻止组织向上游的开源软件(OSS)贡献小的漏洞修复、补丁甚至是新的功能，从而使他们面临私有分叉的风险，最终在长远来看带来大量额外的开发工作。因此，关于是否进行贡献的决策需要非常谨慎地做出。

A DCO in contrast to a CLA is a much more lightweight procedure. It was introduced to enhance the confidence that contributions to the Linux kernel are made "legally correct" by the contributors. The [DCO version 1.1](https://developercertificate.org/) is used by many OSS projects.

The main difference of a DCO compared to a CLA is, that a DCO is not a contract, it is a kind of attestation of the specific contributor that they are entitled to submit a concrete contribution. All the effort which has to be spent to get a CLA signed and maintained is not needed. The only tasks which have to be carried out are:

* Evaluation of the DCO by the "Legal department"
* Evaluation by the "IP department"
* Evaluation by the specific contributor, whether it is acceptable for them

Since the DCO version 1.1 is the "standard" the "Legal"- and "IP department" only have very little effort to spend.

## Procedure for contributions to existing projects

The more complex the business environment in which the code to publish was developed, the more stakeholders need to be involved. The picture below shows a procedure that involves all functions, even in a complex setup.

![contributions](/img/guides/outbound-oss1.png)

Abbreviations used:

* CLA = Contributor License Agreement
* DCO = Developers Certificate of Origin
* ECC = Export Control and Customs
* IP  = Intellectual Property

The procedure shown above is not suited for frequent contributors and/or contributors who are working “upstream” in their daily work. For these developers different procedures need to be established in order to avoid loading them with “unproductive” work. Different contribution models can be established in an organization to serve different needs.

### Contribution models

The following approaches are suited for such developers:

* Small contributions model
* Major to major release model
* Full trust model

![small-contributions](/img/guides/outbound-oss2.png)

#### Small contributions model or trivial contributions

A small or trivial contribution is a rather small and simple change to already existing open source software. Typical cases found in this category are bug fixes with no or low Intellectual Property value.

A change is not trivial if:

* Functionality is added or changed.
* The interface of the open source software component is changed.
* It is an optimization that more than insignificantly increases performance.
* It contains a design or an algorithm that wouldn’t be obvious for a software engineer.

This procedure scopes small contributions. It can be implemented for small or trivial contributions following the initial contribution to a particular OSS project or component. The initial contribution has to undergo the entire procedure described above, because CLAs/DCOs etc. have to be checked  and signed in case the particular project requires them.
After the initial contribution all subsequent small contributions can be contributed directly to the OSS project without the need to follow the defined process no matter which version of the OSS project.

#### Major to major release model

This procedure scopes the release cycle of the OSS project to which contributions shall be made. It has the same “starting point” like any other contribution - the initial contribution must implement the entire procedure in order to check CLAs/DCOs and to have the documented permission to contribute to a specific project. After the initial contribution all subsequent contributions during the development of a new major release can be contributed to the OSS project without the need to go through the approval process. There is no size limitation for contributions. The contributions can range from a trivial bug fix to adding new features, changing interfaces, refactoring and so on. After the release of a major version of the project a new approval procedure has to be kicked off for the first contribution after the major release.

#### Full trust model

The full trust model can be applied to developers who have already successfully worked under the major to major release model. It is an incentive for the employee and a sign of trust of the employer towards the employee. Basically it is the permission for the developer to work “upstream” without any approval procedure. Since this model shall only be applied after the developer worked successfully under the major to major release model, there is no need for an “initial” contribution with the entire approval procedure, although it makes sense in order to have it documented.

The major to major release model as well as the full trust model shall only be executed by senior developers, who are specially trained in copyright principles, have a good understanding of the business interests of the company they are working for, practice “an ownership culture” and have already deep experience in the open source ecosystem.

In order to track all the contributions the developers shall contribute with their official email address.

### Approving projects for contributions

Another model is to provide approval for specific projects. These projects are checked, e.g. by the OSPO, and if everything is in place to allow contributions, they are cleared for contributions by employees. Then there is no individual approval for each specific contribution required. But if the general conditions of the project change, such as license or introduction of a CLA, etc. the project needs to be cleared again by the OSPO

Prerequisite for such a model is that contributors are qualified to do contributions autonomously. This can be achieved by making sure contributors have received training and/or tracking and approving who can contribute to which repository.

### Spare-time contributions -  also known as "moonlighting"

What to do in case an employee wants to contribute to OSS projects in their spare time which do not fall under the corporate context?

In this case the copyright ownership stays with the developer (assuming they are not developing for another entity). In order to provide clarity the following procedure can be implemented:

The developer informs his or her manager about the intention to contribute to a certain project (which is out of scope of section 69b German Copyright Act). In case the manager has no objections he/she draft a small note with, at least, the following content:

* Date of the meeting
* Project(s) the employee wants to contribute to
* Estimated hours per week
* Approval by the manager
* Signature of the developer
* Signature of the manager

The note can be sent to the HR department to keep it in the personnel record of the employee.

This procedure provides transparency especially in the context of large enterprises, acting in many different software technology areas.

The example below shall illustrate why such a procedure makes sense:

A developer may, for example, implement Linux kernel drivers according to his duties. Another area of interest of the developer is for example AI and the developer wants to contribute to an AI project during his spare time.
Given that the AI project has nothing to do with Linux kernel driver development, the developer holds copyright on his contributions and the copyright ownership is not transferred to the employer. The developer can contribute code without the need of an approval by his employer.

But what about when the developer decides to move to another department inside the company, which develops AI. All of a sudden the former "moonlighting" is now covered by section 69b of the copyright act and the copyright owner now is the employer.

The above described procedure provides transparency about the copyright ownership and its change during the time.

## Trainings

Contributors to open source projects will need to act with a certain degree of autonomy to be effective. For some corporate software developers it will also be new to participate in open source communities. For these reasons it is important to support corporate contributors and provide them with training or similar means to develop the understanding and skills to act as good citizens of the open source world on behalf of your company.

This can be achieved with mentoring, good practice guides, or trainings which cover the following topics:

* Essentials of legal implications of open source, such as copyright, licensing, CLAs, DCOs, trademarks
* Awareness of your corporate rules and policies for contributing to open source
* Open source community culture
* Typical open source development procedures
* Open source governance in its different forms such as foundations or single-vendor projects
* Working in public
* Dealing with conflict of interests between open source project and company
* Where to get internal support in case of doubt or questions

# Starting open source projects

## Motivation

There are many good reasons to start own open source projects. See the [introduction](#motivation-for-open-source-contribution) for some of the motivations for doing this.

Launching a new OSS project is comparable to a product introduction and it is, at first hand, a software development project - there is no difference to an internal software development project concerning planning, budget, staffing, testing etc. - the only difference is that everything happens in the public area. Be aware that publicly available source code is the “business card” of the organization to the software  ecosystem, and it is also the “business card” of its maintainers.

When thinking about to start an own OSS project there are several phases you should consider:

![oss-project-process](/img/guides/outbound-oss3.png)

## Project life cycle

The life cycle of an open source project describes the stages in which the project evolves, from its conception to its retirement or end of life stage. Typically, a project originates to solve a specific problem. It may become obsolete either because the problem does not exist anymore or because other projects are better suited to solve the problem. The figure below shows the different stages an open source project may undergo.

![Typical lifecycle of an open source project](/img/guides/outbound-oss4.png)

### Planning or Concept Phase

This is the starting point of every open source project. It can also be referred to as the “initiation phase”. Normally, at this stage, only an idea exists or a specific problem has been identified which requires solution. In this phase, the open source project typically has the following characteristics:

* The problem that the project intends to solve has been clearly defined
* There is either no source code available yet or the source code is only internally available. In the first case, the project only exists as idea; in the second case, the project may have been started as an company-internal project and has not been published yet
* Possibly, the idea has been already shared with the community to get feedback. However, note that sharing such ideas that have only been discussed company-internally requires approval in advance.

Before starting a project, it is reasonable to get answers to the key questions:

* Is it possible to join efforts with an existing open source project?
* Can we launch and maintain the project using the OSS model?
* What constitutes success? How do we measure it?
* Can we financially sponsor the project? Do we have an internal executive champion?
* Will the project be able to attract outside enterprise participation (from the start)?
* Is there enough external interest to form and grow a developer community?

(Source: [Linux Foundation](https://www.linuxfoundation.org/en/resources/open-source-guides/starting-an-open-source-project/))

In addition, the following aspects should be considered in the planning phase:

* What is the goal of the project and will it solve the problem?
* Are there enough resources not only to start, but to support the project in the long-term? (You also need to obtain and ensure sponsorship)
* An appropriate license must be selected. The license should support the project goal.
* The legal requirements for contributions must be decided (if, for example, contributors must sign a CLA or DCO). Maybe your company has a standard approach for that.
* Execute additional checks. For example:

  * Make sure that all license obligations are fulfilled
  * Export control: Under certain circumstances it might be required that the project must have an [export control classification number (ECCN)](https://en.wikipedia.org/wiki/Export_control), for example.
  * Check that the publication is not in conflict with existing trademarks.

* The [checklist of the Linux Foundation](https://www.linuxfoundation.org/en/resources/open-source-guides/starting-an-open-source-project/#checklist) contains a comprehensive set of topics you might want to consider
* Does it make sense to donate the code to a vendor-neutral, non-profit organization (that is, an open source foundation), or retain some control by owning and running the project under the responsibility of your company? Note that this decision depends on the project and may also be taken later in the life cycle. Typically, a project first needs to be published and generate interest in the community before it is handed over to a third-party organization.
* Set up an open source project governance. It establishes how to contribute to or maintain a project.
* Determine the tools and infrastructure the project members will use
* Carry out a technical review

  * Ensure that all critical content is removed from the project before publishing it. For example:

    * Dependencies to non-public components
    * Internal comments, references to other internal code, and the like
    * Access tokens and the like

  * Ensure that the coding style is consistent

* Where will the code be published? Typically, it will be in a company-owned organization on a code hosting platform such as GitHub.com or GitLab.com but, depending on the technology, other potential publishing channels exist (for example, NPM, Maven central, PyPI)
* Does it make sense to publish binaries? If yes, where?
* Define your web site and communication: What can you do to make your project known? Does it make sense to create a web site for the project? Are there working groups?
* Plan your project life cycle

### Active or Development Phase

Once the project has got an approval for open sourcing and the code is available and published, the project has entered the active development phase. In this phase, the open source project typically has the following characteristics:

* The source code is publicly visible
* The project community is actively managed
* The project can receive contributions from the community
* Further development is ongoing, based on incoming requirements
* A dedicated team is working on the project and provides support
* Potentially, to make the project better known and to attract more users and contributors, the project is being promoted in talks at open source events, conferences, and so on.

During the active phase, the following aspects should be considered:

* Do marketing: Make the project better known (for example through blog posts, reaching out to potentially interesting parties/companies, talks at conferences)
* Invest in building and managing the community
* Care for full transparency, every decision shall be made in the public, even if there is no external community yet. This is very important because interested organizations are able to follow all decisions and to build up trust in the project
* Carry out a health check of the project and its community (that is, perform a review of the defined KPI’s and goals)
* Check 3rd party contributions
* Plan further developments
* Support by fixing bugs and security issues

### Mature or Maintenance Phase

At a certain point in time, an open source project becomes mature. This can also be referred to as the "maintenance phase", meaning that only error corrections are made and normally no new functionality is developed. The following aspects characterize this phase:

* The project is being used actively, but from a functional perspective it can be considered as complete or at least no major functional enhancements are necessary
* Contributions mainly focus on bug fixes. Functional enhancements are only minor and are done rarely
* A dedicated team still provides support for the project, but with relatively low efforts
* The team still has to take care of the community, but normally less effort is required compared to projects that are in active development.
* It is good practice to clearly communicate that the project is in the maintenance phase and no or only limited further development can be expected
* The team should perform regular health checks of the open source project and the external community
* Bug fixes and security fixes are still required

### Obsolete or End of Life Phase

An open source project in this phase is characterized by the following properties:

* There is no or only very minor interest in the project
* No further contributions take place
* There are no further developments and no incoming requirements
* No further support takes place
* Possibly, there is no project team available anymore

During this phase, it is important to consider the legal implications and come up with the appropriate documentation and communication with the community. Since the project has been published, it might be in use. Therefore, the community needs to be informed that the project is no longer maintained. Furthermore, once in this phase the decision must be made whether to archive the project or remove it completely.

## Legal and governance considerations

### Which license to select

Choosing the license for a new open source project is an important decision. Without a license the code can't be used by anybody, even if the code is publicly available, for example in a GitHub repository. Choosing a license which is not approved by the OSI as an open source license also effectively makes the code proprietary. This will make it harder to get adoption, especially in most corporate setups, where processes are usually built around the well-known standard open source licenses.

Open source licenses vary in the rights and the obligations they give to users. All open source licenses approved by OSI give users the right to use the software without restriction to specific users or use cases. When distributing open source software, and especially when distributing it with modifications, the obligation vary. The spectrum goes from the so-called copyleft licenses such as the GPL, which require to pass on rights given by the license to users, to permissive licenses, such as the Apache or the MIT license, which allow incorporation in proprietary systems.

When choosing a license the following questions have to be considered:

* **What's the goal of the open source project?** When broad adoption is a priority, a permissive license might be a good choice, when the focus is on building a contributor community, more reciprocal licenses might have advantages.
* **Is there a license suggested or required by the ecosystem where the project is positioned?** If it is meant to become part of a foundation or an umbrella project then there might be a strong preference for a license, e.g. the Apache license for Apache projects, or the GPL for Linux kernel drivers.
* **How does the license interact with your business model?** When the software you are going to open source is supporting other parts of your business, a permissive license might accelerate adoption. If you are also selling proprietary version of your software, a copyleft license might be a stronger differentiator.
* **Are there dependencies or other incorporated code which limit the choice of licenses?** For example when incorporating GPL code, the resulting project has to be GPL as well.

Answering these questions can be challenging and opinions will vary. A simple starting point can be the [choosealicense.com](https://choosealicense.com/). There is a lot of comprehensive material available from various sources, e.g. [Open source licenses: What, which, and why](https://arstechnica.com/gadgets/2020/02/how-to-choose-an-open-source-license/).

It is advisable to set up policies for license selection, so that the decision process is simplified when starting new projects.

### Contributor License Agreement (CLA), Developer Certificate of Origin (DCO)

When running an open source project you need to decide how you are going to check code provenance and if you need additional rights from contributors which are not given by the license. There are mainly three ways how to handle that:

* **"Inbound=Outbound"** - Contributions are accepted under the same license as the project distributes its code. There is no additional paperwork. This is a symmetric setup, where contributors, maintainers, and users have the same rights under the chosen license. It has the lowest barrier for contributors. Some things such as changing the license of the projects become difficult, because that needs approval by every contributor.

* **Developer Certificate of Origin (DCO)** - The [DCO](https://developercertificate.org/) was introduced in Linux kernel development and has been adopted by many other projects. It is a statement developers give with each commit by including a "Signed-off-by" statement in the commit message. With this statement developers explicitly declare that they have the rights they need to do the contribution and that they agree that the project is using it. This is still a low barrier, but it gives projects more confidence that code was rightfully contributed. It does not help in cases where the license of the code needs to be changed.

* **Contributor License Agreement (CLA)** - A CLA is an additional agreement between the contributor and the project which gives the project additional rights on top of the rights given by the license. If people contribute on behalf of a company, where the company holds the rights on the work of the contributor, the company has to sign the CLA. There is a variety of different CLAs in use, some mostly confirm the rights already given by the license, some give additional rights such as being able to release the code under a different license, for example when the code is also released under a proprietary license as part of a commercial offering. With a CLA, rights are collected at a central place, so changing the license, or rereleasing the code as part of a product with a different license, is possible. The asymmetry of the agreement, which gives the project more rights than its contributors, can impose a bigger barrier for contributions. Requiring a corporate CLA can also be an insurmountable barrier, especially for large corporations, because the effort and legal implications of checking and signing a CLA might outweigh the benefits of contributing.

You should have a policy for which of these ways you use when. "Inbound=Outbound" is a pragmatic way which can work for most projects. The DCO is a good way to make the contribution process more explicit, especially for larger projects with diverse contributors. The CLA makes contributions more difficult and requires additional administrational work and tooling. To get an impression about the additional effort and difficulties especially large corporations face you can check the section about [contributions to existing projects](#process-for-expressing-company-approval-for-contributions).

### Project governance

An important factor for the success of an open source project is its governance. That comprises the rules, policies, conventions, and culture of the collaboration. It determines factors such as how decisions are taken, who is in control, or who can join a project.

In existing projects governance often has emerged over time, has gone from informal procedures driven by the practices of the project founders to more formally defined governance documented in contribution guides or ultimately instituted through a foundation as formal organization hosting the project.

When starting a new open source project you have to decide about how its governance will look like. This goes beyond deciding on a license. You will also have to decide about ownership of assets such as trademarks or domains and the rules how they can be used. And you will have to decide about policies of how people can become committers or maintainers, how releases and roadmaps are made, or how transparent the decision making process is.

For a project which is meant to attract a broad set of contributors it is important to set up governance which provides a neutral ground, is open to participation by diverse participants, and is transparent about its decision making. This can be called [open governance](https://opengovernance.dev/). One way to achieve this is to join one of the existing open source foundations. Prominent examples for this are [Kubernetes](https://kubernetes.io/) which is hosted by the [CNCF](https://www.cncf.io/) or the [Eclipse IDE](https://www.eclipse.org/ide/) which is part of the [Eclipse Foundation](https://www.eclipse.org/org/foundation/).

In other cases a company might want to retain more control about the project. This will limit contributions from others but give more freedom in how to steer a project. It requires that there are enough resources allocated to maintain the project. It still is helpful to implement elements of open governance, such as transparency about planning or a permissive trademark policy to increase adoption of the project. Examples for this would be [TensorFlow](https://www.tensorflow.org/) which is run by Google or [Visual Studio Code](https://code.visualstudio.com/) which is run by Microsoft.

For smaller projects, for example technical tools which emerge from work on other projects, a simple and less formal approach to governance can also work. Here the goal is not primarily broad adoption or building a large community, but transparency and ad-hoc collaboration with interested individuals. Often this kind of project is more driven by technical needs and motivation of developers than by overarching business needs. If such a project is growing its governance can be evolved. This can for example result in a project being transferred to a foundation. Countless examples can be found on [GitHub](https://github.com/explore).

More detailed information and possible starting points for open source governance can be found in the [Minimum Viable Governance](https://github.com/github/MVG) framework or [A Legal Issues Primer for Open Source and Free Software Projects](https://softwarefreedom.org/resources/2008/foss-primer.html).

### Different Project Levels

It can make sense to have different levels for new open source projects ("sandbox", "incubator", "graduated" - these are the different [project levels of CNCF](https://www.cncf.io/projects/), for example). This is a way to classify your open source projects wrt. adoption, maturity and quality criteria that they have to fulfill. The basic idea is that new projects start in a dedicated space (CNCF calls that "sandbox" - at Meta, that's the ["Incubator"](https://github.com/facebookincubator)). In this space, projects can evolve and check if they reach the goals that have been defined in terms of adoption and quality. If they do, they can be promoted to the next level. If they don't, it might be decided to sunset them.

## Community management

For the majority of open source projects, starting a community around that project and receiving contributions is an important if not the primary goal (however, there are also projects where the primary goal for open sourcing is not the creation of a vivid community - for example building trust by making the source code visible, in this case receiving contributions might have a lower priority). Such a community does not take off by itself. Starting it and keeping it alive requires planning as well as budget and resources. Initial and ongoing activities comprise:

* Promote the project

  This includes presenting at conferences, hosting or sponsor key events, and building new initiatives and programs in your community

* Create a welcoming environment

  This includes creating open-source project policies, guidelines (basic instructions for maintainers, installation process, instructions for end users) or improve main project communication channels (forums, chat discussions, etc)

* Facilitate collaboration

  Building mentoring programs, adding project documentation (such as how to contribute, how to write and run tests, how the governing board is elected, etc )

It's advisable to assign a community manager to the project who takes care of these tasks. The TODO Group Guide [Starting an open source project](https://todogroup.org/guides/starting/) contains more information in its chapter "Build the community". For further reading, we recommend the TODO Group Guides [Building an inclusive open source community](https://todogroup.org/guides/diversity-inclusion/) and [Building leadership in an open source community](https://todogroup.org/guides/building-leadership/).

### Code of conduct

Creating a welcoming environment where people are safe from harmful behavior by others is an important part of maintaining a healthy community. It is especially important to support a diverse community, where there is no discrimination of under-represented groups, and explicit or implicit bias gets addressed.

A common element in maintaining a healthy community environment is a code of conduct which makes rules for accepted and unaccepted behavior explicit and defines how unacceptable behavior is dealt with. There are examples and templates which can be used as a base for your code of conduct. One popular reusable code of conduct is the [Contributor Covenant](https://www.contributor-covenant.org/) which is used by projects such as Kubernetes, git, Node.js, and many more.

As a company you need to provide a contact email which can be used to report code of conduct violations. You need to make sure that this address is monitored by people who can react in a timely manner and have the competence and ability to initiate adequate actions to address these issues.

## Technical considerations, tooling and best practices

Appropriate tooling can safe a lot of time and help to automate processes significantly. [Curated list of awesome tools to manage open source](https://github.com/todogroup/awesome-ospo) contains a comprehensive list of proven and recommendable tools.

### User management

Normally, Git providers (GitHub, GitLab, Bitbucket etc.) offer means to define teams of individual users and to define (access) rights on team and on individual level. To be able to use the service of a Git provider, engineers have to create a corresponding account. This account has nothing to do with the company-internal account of an engineer. This imposes some challenges since the access rights of an engineer for an external repository might depend on their role in the company or whether they are still working for the company (let's assume that an engineer got comprehensive rights for external repositories when they were working for your company and that they now left the company - you might want to adjust the access rights). But how to do that since the external account of an engineer at a Git provider is independent from his company-internal user account? Somehow a mapping between both accounts is needed. For GitHub there's the open source tool [opensource-portal](https://github.com/microsoft/opensource-portal) available that can help to create such a mapping. It can also be used to implement a self service for joining of GitHub organizations. As part of the process, the tool creates the mapping between the GitHub.com account and the corresponding company-internal user account. The mapping is stored in a database. Based on this, it is easy to create some tooling that regularly checks if all users that are contained in that database are still employed by your company and trigger some activity if that's not the case.

### Setting up a repository

It is good practice that a repository contains a certain set of files (the *health files*). These files contain the basic information about the repository such as description, code of conduct, license, contribution guidelines etc. These files are often provided in [markdown format](https://en.wikipedia.org/wiki/Markdown), but could - depending on the Git provider - be provided in different formats such as [AsciiDoc](https://en.wikipedia.org/wiki/AsciiDoc). Here, we assume the default format (which is markdown) and thus use the file suffix `.md`.

* *README.md*

  This file is displayed as the *homepage* of the repository. It typically contains information such as repository description, dependencies as well as download, installation and configuration instructions.

* *LICENSE* or *LICENSE.txt*

  Contains the license text for the repository.

* *CONTRIBUTING.md*

  Contains information and instruction about how contributions can be made.

* *CODE-OF-CONDUCT.md*

  Contains the code of conduct for the repository.

* *GOVERNANCE.md*

  Contains information about project governance.

* *SECURITY.md*

  Contains instructions about how to report security vulnerabilities for the repository.

* *SUPPORT.md*

  Contains information about how to receive support in case of problems.

The *README.md* and the license text file should be there for all repositories. The other files can be considered as optional and only be created if they are required (if, for example, no contributions are accepted, this information could be put into the *README.md* and a *CONTRIBUTING.md* is not necessary).

To make sure that a certain set of health files is always created, there are different possibilities:

* One possibility is to use template repositories. These are repositories that contain the required set of initial health files. A new repository can be created/copied from this template repository and thus it contains already the required set of health files. Some Git providers (GitHub, for example) provide [specific means](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/creating-a-default-community-health-file) to create the required health files per default.

* Another possibility is to create repositories with a tool. Such tools create repositories based on some input data via the API's of the Git provider (GitHub.com, GitLab.com, Bitbucket.org etc.). Thus, they can help that repositories are compliant to the company guidelines (contain the required health files **and** team structure, for example). Based on such tools self services for repository creation could be offered that allow development teams creating repositories themselves. Often, companies develop such tools for their specific needs. We (the authors of this document) do not know generic repository creation tools.

### Providing license and copyright information

License and copyright information must be declared properly for an open source project. This is important for consumers of the project as well as for contributors. Furthermore source code often gets copied from one project to another, this makes it mandatory that all files carry license and copyright information

* for the parts of the project that you / your company developed
* but also for external components (i.e. code developed by external parties) that are part of your repositories

Note that a statement like *For license conditions please check LICENSE.txt* is not suited.

The [REUSE tool](https://reuse.software/) from the [Free Software Foundation Europe](https://fsfe.org/) supports the proper declaration of license and copyright information for your project:

* It provides a machine-readable file format for license and copyright information and thus makes it easy for others (scanning tools, for example) to consume that information
* It provides tooling to:
  * add license and copyright information to source code files
  * download and store license texts
  * to lint your repositories to make sure that license and copyright information is available for all files

### CLA/DCO Management

If contributors must accept an CLA or DCO before they can submit their contributions, it is beneficial to automate that process as much as possible. The [TODO Group](https://todogroup.org/) provides a [list of tools](https://github.com/todogroup/awesome-ospo#contributor-license-agreements--developer-certificate-of-originis) that support the management and the sign-off of DCOs or CLA documents. As an example, we describe the [CLA Assistant](https://github.com/cla-assistant/cla-assistant) in more detail.

The CLA Assistant implements a workflow that asks contributors to accept/sign-off a document when a contributor submit the first pull request to a certain repository on GitHub.com. Despite the name of the tool ("CLA Assistant"), it can be used for any type of document that companies require contributors to accept before a pull request can be submitted, including CLAs and DCOs. The document text must be provided as gist on GitHub.com. Which document/gist to be used can be configured on organization and on repository level. The CLA Assistant uses a default logic: If for a certain repository no specific document is configured, the document that is configured on organization level is used. When a contributor submits a pull request for a repository for the first time, the CLA Assistant displays the document text and the contributor can only submit the request if they accept the document. The next time, the same contributor submits a pull request, they can do so without having to accept the document again. The information that the contributor accepted the document for that repository is stored in the database of the CLA Assistant and can be retrieved later on. The CLA Assistant is available as hosted offering on https://cla-assistant.io/ or can be self-hosted.

### Credential scanning

Even if open source policies and guidelines explicitly require that credentials such as password, access tokens or other secrets have to be removed from code before it is published, it happens from time to time that unintentionally such important and sensitive data is pushed to public repositories. To detect such situations as quickly as possible (and thus to be able to revoke the published secret and remove that data from public repositories), it is advisable to regularly execute credential scans for such repositories. Luckily, all well-known code hosting platforms (GitHub.com, GitLab.com etc.) provide such scanning services as part of their offering. We strongly recommend to use that services.

### Quality criteria / CII Best Practices Badge Program

The [Core Infrastructure Initiative](https://www.coreinfrastructure.org/) (CII) created the [CII Best Practices Badge Program](https://bestpractices.coreinfrastructure.org/en). It is now continued by the [Open Source Security Foundation](https://openssf.org/). As part of the program, best practices for open source software is defined and a badge system is implemented. Via a [web app](https://bestpractices.coreinfrastructure.org/en/projects), projects can self-certify that they meet the criteria and show a corresponding badge on their website. As of today (May 2022), more than 4724 projects did the assessment.

The CII system consists of three levels (*Passing*, *Silver* and *Gold*). They are building on each other (i.e. the *Silver* level contains all criteria of the *Passing* level plus additional ones). The criteria are structured in clusters such as *Basics*, *Change Control*, *Reporting*, *Quality*, *Security* and *Analytics*.

The CII Best Practices Badge community is [open for contributions](https://github.com/coreinfrastructure/best-practices-badge/blob/main/CONTRIBUTING.md) (additional criteria, for example).

Overall, the CII Best Practices Badge Program is a good means to verify own projects against commonly accepted best practices. Via the badge, projects can document that they meet these criteria.

### Repository Linting

Repository linters are tools that check in an automated way if repositories adhere to the guidelines that a company has defined for its public open source repositories. The [TODO Group](https://todogroup.org/) provides a [list of tools](https://github.com/todogroup/awesome-ospo#project-quality) that can be used for this purpose. Typically, repository linters check criteria such as:

* Do the required files exist in the repository (license file README.md, CONTRIBUTING.md, for example)?
* Do these files contain the required sections?
* Does the repository have a license that is compliant to the company guidelines?
* Does the repository contain the required badges (the REUSE badge or the CII badge, for example)?
* Repository team structure (a certain team structure might be required - at least two administrators, for example)
* Configuration of the repository (are vulnerability alerts activated?, for example)

However, which criteria they check is company-specific and thus, they normally provide the possibility to configure rules (as JSON file, for example, as the [repolinter of the TODO Group](https://github.com/todogroup/repolinter) does). To retrieve the necessary data to execute these checks, the APIs of the Git provider (GitHub.com, GitLab.com, Bitbucket.org etc.) is used. The result of the check is typically provided in a UI. Another option is to automatically create issues in the corresponding repository if checks fail. Typical usage scenarios for such a linter include:

* Check for guideline compliance before a repository is published
* Regular checks after publication

## Build an open source metrics strategy when releasing to open source projects

Once you have established the goals, procedures, and tools for your company's outbound open source plan, it is always useful to monitor and track the overall health of open source projects the company engages with as they grow and mature.

Before thinking about which tool should be used to track project health, a good alternative on how to do this is to establish a full metrics strategy following the goal-question-metrics approach. This approach is used in communities focused on community health analytics metrics standards and software, such as [CHAOSS](https://chaoss.community), one of the projects under the Linux Foundation umbrella.

**Defining community health goals**

Sometimes it is better to start small and define two or three main goals first before getting overwhelmed by metrics. If you don't know where to start, CHAOSS offers a set of metrics based on different focus-areas and goals when measuring project health that can help you get started in measuring the health of the open-source projects that matter to your organization:

* Common Metrics
* Diversity and Inclusion
* Evolution
* Risk
* Value
* App Ecosystem

**Creating questions and building metrics around**

Metrics should be answering specific questions that are aligned with the previous goals established.

For instance, if one of your company's goals is to understand the community footprint within a project, one good question can be "What’s the presence and influence of organizations within the open source ecosystem?". In order to solve this, one useful metric can be the Elephant Factor (the minimum number of organizations whose employees perform 50% of the total contributions).

There are great tools to help you measure different community health analytics metrics, for instance, GrimoireLab, LFX, or Augur.

For further information about tools for tracking project health, check this dedicated section from one of the [TODO Guides](https://todogroup.org/guides/management-tools/#tools-for-tracking-project-health)

# References and Abbreviations

## Abbreviations

- API = Application Programming Interface
- CII = Core Infrastructure Initiative
- CLA = Contributor License Agreement
- CCLA = Corporate Contributor License Agreement
- CHAOSS = Community Health Analytics Open Source Software
- CNCF = Cloud Native Computing Foundation
- DCO = Developers Certificate of Origin
- ECC = Export Control and Customs
- ECCN = Export Control Classification Number
- GPL = GNU General Public License
- ICLA = Individual Contributor License Agreement
- IDE = Integrated Development Environment
- IP = Intellectual Property
- JSON = Java Script Object Notation
- KPI = Key Performance Indicator
- LFX = Linux Foundation Collaboration Metrics
- MIT = Massachusetts Institute of Technology
- NPM = Node Package Manager
- OSI = Open Source Initiative
- OSPO = Open Source Program Office
- OSS = Open Source Software
- PyPI = Python Package Index

## References

* [Open Source Archetypes: A Framework for Purposeful Open Source (Mozilla)](https://blog.mozilla.org/wp-content/uploads/2018/05/MZOTS_OS_Archetypes_report_ext_scr.pdf)
* [Starting an open source project (LF TODO Group)](https://todogroup.org/guides/starting/)
* [Shutting down an open source project (LF TODO Group)](https://todogroup.org/guides/shutting-down/)
* [Marketing open source projects (LF TODO Group)](https://todogroup.org/guides/marketing-open-source-projects/)
* [Building leadership in an open source community (LF TODO Group)](https://todogroup.org/guides/building-leadership/)
* [Community Health Analytics Open Source Software (LF CHAOSS)](https://chaoss.community/)
* [How to measure the health of an open source community](https://opensource.com/article/19/8/measure-project)
* [Community health files (GitHub.com)](https://docs.github.com/en/github/building-a-strong-community/creating-a-default-community-health-file#about-default-community-health-files)
* [CII Best Practices Badge (LF Core Infrastructure Initiative)](https://bestpractices.coreinfrastructure.org/en)
* [DCO version 1.1](https://developercertificate.org/)
* [ICLA](https://www.apache.org/licenses/icla.pdf)
* [CCLA](https://www.apache.org/licenses/cla-corporate.pdf)
* [German Copyright Act](https://dejure.org/gesetze/UrhG/69b.html)

# Appendix
## Managing work vs personal emails in git
In the world of open source, folks may have an online identity that pre-dates
their employment with our current organization. Simultaneously, the organization
may want contributions done on their behalf to happen with corporate emails.

One way that folks can solve this is by encoding their commit email on a
per-repository basis, like:

```
git config user.email "simba@special-email.example.com"
```


If you work with several repositories, this will become difficult to manage and
easy to forget. Instead, we can use a feature of git which allows different
configurations based on our directory structures.

Our `~/.gitconfig` file might look like this:

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

```
[user]
	email = simba@very-corporate-email.example.com
```

Now when our user commits changes, it will use their personal email by default,
or their corporate email for any repositories within the `~/my-company`
folder. Note that the name attribute is inherited from the base configuration,
so we don't need to double specify it.
