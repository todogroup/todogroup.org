---
title: "OSPOlogy + OSPO Summit China 2026: From the Model Race to Open AI Systems"
author: todogroup
date: 2026-09-09
---

What does an Open Source Program Office need to govern when software can choose tools, delegate work, and act on an organization's behalf? That question brought a new urgency to the conversations at **OSPOlogy + OSPO Summit China 2026**, held on September 7 in Shanghai as a co-located event that was part of **KubeCon + CloudNativeCon + OpenInfra Summit + PyTorch Conference China 2026**. [Explore the event and program](https://www.lfopensource.cn/kubecon-cloudnativecon-openinfra-summit-pytorch-conference-china/co-located-events/ospology-ospo-summit/).

The event recorded **64 registered attendees representing 41 companies**. The call for proposals received **47 submissions, with room to select only nine**. Thank you to everyone who submitted: the breadth of ideas offered more than a single afternoon could accommodate.

Our strongest takeaway was that AI is shifting from a model race into a systems discipline. For OSPOs, that opens a larger conversation about how organizations build, govern, and sustain the open infrastructure around AI.

[Download the three-page community report](/reports/2026-09-09-ospology-ospo-summit-china-2026-report.pdf), with event figures and session highlights.

![Participants, stage and sponsor acknowledgments at the Shanghai event.](/images/blog/ospo-summit-china-2026/1458.jpg)

## A community conversation that keeps evolving

When TODO [introduced OSPOlogy in 2021](https://todogroup.org/blog/ospology-the-study-of-ospos/), the aim was to create a space open to everyone for sharing experience and learning across organizations. China's [OSPO Summit launched in 2022](https://dev.to/nadiajiang/ospo-summit-launched-414g) with a community-led effort to advance local open source practice. Bringing these communities together in Shanghai continued that work of connecting organizational experience with the wider open source ecosystem.

The questions have expanded. Alongside establishing an OSPO, building trust in software supply chains, and contributing upstream, practitioners now need to understand what happens when AI participates in those workflows. The foundations of open source program management remain relevant; the systems to which we apply them are changing.

## From model capabilities to systems that work

A capable model is one part of an operational AI system. It also needs context, access to tools, a way to coordinate work, and boundaries on what it can do. Once agents delegate tasks or exchange information, the behavior of the whole system matters as much as the output of any individual model.

Ana Jiménez Santamaría's session connected agent harnesses, MCP, and open infrastructure to this emerging OSPO agenda. Across the program, Fengjun Lyu explored AI-assisted governance at Ant Group, Chris Yang addressed practical OSPO implementation, and Amanda Brock examined readiness for AI. [See the session descriptions](https://www.lfopensource.cn/kubecon-cloudnativecon-openinfra-summit-pytorch-conference-china/co-located-events/ospology-ospo-summit/#schedule).

Taken together, these themes suggest a useful shift in how we evaluate progress: can an organization assemble a system that is reliable, understandable, adaptable, and affordable to operate? That requires attention to the components between the model and the work it performs, including their maintainers, dependencies, and governance.

## Sovereignty needs openness across the stack

The sovereignty discussion raised a strategic concern: treating autonomy primarily as a race to build the biggest model may send organizations down the wrong path. A model developed locally can still depend on a tightly coupled stack that is difficult to inspect, change, or replace.

Our takeaway is that the durable path to autonomy is open: **any chip, any model, any system**. This is a direction for architecture and collaboration, rather than a claim that every component is already interchangeable. It means working toward open interfaces, portable workloads, inspectable dependencies, and the practical ability to change providers or contribute improvements upstream.

As model capabilities become more widely available, we expect parts of the market to commoditize. The pace remains uncertain, but the strategic implication is already worth considering: long-term value may increasingly come from how well organizations combine models, tools, data, and operational knowledge. Investment in an adaptable open ecosystem can preserve choices as those components change.

Sovereignty also requires the skills and relationships to exercise those choices. OSPOs can help organizations understand which communities they depend on, where participation matters, and how local needs can be addressed through shared upstream work.

## Bringing OSPO experience into AI governance

Shanghai also connected the emerging AI discussion to established practice. Shane Coughlan covered patent cooperation; Marcel Kurzmann and Meixia Wang addressed supply-chain trust; Kurzmann and Jane Cao shared Bosch's OSPO experience. Li Jiansheng, Ryan Tao, Zhiqiang Yu, and Amanda Brock examined tensions between global and local open source ecosystems. [Browse the full program](https://ospology-opso-summit-china-2026.sessionize.com/schedule/day/20260907).

The practical lesson is that organizations have experience to build on. OSPOs already connect engineering, legal, security, procurement, and communities. As agent-to-agent interactions develop across open source ecosystems, that connecting role becomes increasingly useful in AI governance conversations.

{{< event-gallery >}}
{{< event-photo src="/images/blog/ospo-summit-china-2026/IMG_2666.jpg" alt="Patent cooperation session" position="75%" >}}
{{< event-photo src="/images/blog/ospo-summit-china-2026/744.jpg" alt="OpenChain and supply-chain trust" position="65%" >}}
{{< event-photo src="/images/blog/ospo-summit-china-2026/IMG_2679.jpg" alt="Discussion on open source ecosystems" position="85%" >}}
{{< event-photo src="/images/blog/ospo-summit-china-2026/IMG_2686.jpg" alt="Building an OSPO at Bosch" position="80%" >}}
{{< event-photo src="/images/blog/ospo-summit-china-2026/IMG_2690.jpg" alt="Chris Yang: From Portal to Partner" position="65%" >}}
{{< event-photo src="/images/blog/ospo-summit-china-2026/agent-harnesses-ospos.jpg" alt="Ana Jiménez Santamaría: agent harnesses and MCP" position="55%" >}}
{{< event-photo src="/images/blog/ospo-summit-china-2026/747.jpg" alt="Sharing OpenChain experience" position="15%" >}}
{{< event-photo src="/images/blog/ospo-summit-china-2026/1430.jpg" alt="OSPOlogy alongside the wider China 2026 conference program" position="35%" >}}
{{< /event-gallery >}}

For organizations moving agents from experiments into production, we see several areas for joint work between OSPOs and their engineering and security partners:

- **Map the system and its dependencies.** Understand the models, harnesses, tools, external services, and open source projects involved, including who maintains them and how changes are reviewed.
- **Define isolation and permissions.** Agree on sandbox boundaries, credential handling, and access to files, networks, and production systems. Delegating work to another agent should not silently expand authority.
- **Make actions traceable.** Preserve enough evidence to understand which agent acted, which tools it used, and where a person approved a consequential step.
- **Build a path to production.** Combine evaluation, security review, monitoring, incident response, and clear ownership so that adoption can grow with confidence.
- **Contribute shared improvements upstream.** Common problems in interoperability, documentation, and security are opportunities for collaboration across organizations.

These are practical implications we take from the event, rather than a checklist adopted by every speaker. OSPOs can help convene this work and bring open source expertise to it, with implementation and accountability shared across the relevant teams.

## Thank you to the people who made it possible

Thank you to **ByteDance Open Source, our Diamond Sponsor, and vivo, our Supporter Sponsor**, for supporting the gathering.

{{< event-gallery >}}
{{< event-photo src="/images/blog/ospo-summit-china-2026/IMG_2664.jpg" alt="ByteDance Open Source — Diamond Sponsor" position="70%" >}}
{{< event-photo src="/images/blog/ospo-summit-china-2026/IMG_2662.jpg" alt="vivo — Supporter Sponsor" position="67%" >}}
{{< /event-gallery >}}

We are grateful to the program committee and organizing team, with special thanks to **Ryan Tao, Zhiqiang Yu, Horace Li, and Ana Jiménez Santamaría**, and to everyone who helped review proposals, shape the program, and bring the community together. Thank you also to **Meng Wei**, all the speakers named above, the event staff, and every participant who contributed questions and experience.

{{< event-gallery >}}
{{< event-photo src="/images/blog/ospo-summit-china-2026/community-dinner.jpg" alt="Community conversations over dinner" position="50%" >}}
{{< event-photo src="/images/blog/ospo-summit-china-2026/1472.jpg" alt="Continuing the conversation beyond the sessions" position="50%" >}}
{{< /event-gallery >}}

The work continues through the relationships built in Shanghai: comparing approaches, sharing what succeeds and fails, and contributing to the infrastructure our organizations rely on. For the TODO community, the next step is to bring that same openness into the governance of AI systems, so that agents can move into wider organizational use with clear boundaries, accountable operations, and a sustainable community behind them.
