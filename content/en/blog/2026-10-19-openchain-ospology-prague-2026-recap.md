---
title: "AI Governance and the Expanding Role of OSPOs: OpenChain x OSPOlogy Prague"
author: todogroup
date: 2026-10-19
---

On October 6, **OpenChain x OSPOlogy Prague 2026** brought the community together at Deloitte's Prague office for a day of keynotes, practical use cases, roundtables, workshops, and tooling demos. Held the day before Open Source Summit Europe, the gathering connected people working on open source program management, compliance, software supply chains, and community health.

**Nithya Ruff’s keynote, *OSPOs and Open Technology*, provided a central theme for the gathering: OSPO responsibilities are expanding beyond open source software into AI governance and the wider open technology ecosystem.** The workshops brought that changing role into practical discussions about due diligence, project health, supply chain data, and community trust.

Alongside presentations, participants worked in smaller groups to compare approaches and identify questions that need continued collaboration. The [shared presentations and roundtable notes](https://github.com/todogroup/ospology/discussions/831) capture both practical lessons and unresolved challenges from those conversations.

![Participants at OpenChain x OSPOlogy Prague during the operational compliance session.](/images/blog/openchain-ospology-prague-2026/cover-landscape.jpg)

## OSPO responsibilities are expanding beyond software

In her keynote, **Nithya Ruff** described how AI challenges established approaches to software supply chain management. Understanding an AI system requires visibility into its data, models, and weights as well as its code. She also highlighted the provenance and licensing questions raised by AI-generated code, and the limits of compliance tools designed for conventional source code workflows.

Her message connected this broader scope with the question of openness itself. She pointed to work on defining open source AI and called for greater openness around data alongside access to model weights. For OSPOs, this expands the governance conversation: the objects being assessed, the evidence needed to understand them, and the policies that guide their use are changing.

The implication for OSPO practice is that expertise in open source consumption, contribution, licensing, and community participation increasingly intersects with AI governance. Organizations need to bring that experience into decisions about models, data, and AI-assisted development, while continuing to support the software ecosystems they depend on.

![Nithya Ruff presenting OSPOs and Open Technology.](/images/blog/openchain-ospology-prague-2026/ospos-open-technology.jpg)

*Nithya Ruff delivering the keynote, OSPOs and Open Technology.*

[Explore the slides from Nithya’s keynote](https://github.com/todogroup/ospology/discussions/831#discussioncomment-18781138).

## Turning governance into operational practice

The day opened with welcome remarks from **Ummo Schwarting (Deloitte), Ana Jiménez (TODO Group), and Mary (Meixia) Wang (OpenChain)**. **Bogomil Shopov (imagenotfound.art)** delivered the morning keynote, *What ARTivism can teach open source*.

![Ana Jiménez delivering the welcome remarks.](/images/blog/openchain-ospology-prague-2026/welcome.jpg)

*Ana Jiménez delivering the welcome remarks.*

Operational practice was a central part of the program. **Mary (Meixia) Wang, Marcel Kurzmann (Bosch), and Ummo Schwarting** joined the session on OpenChain Business Operations and operational compliance. Their [shared resources](https://github.com/todogroup/ospology/discussions/831#discussioncomment-18796842) include the group's CRA checklist and ways to participate in its ongoing work.

![Mary (Meixia) Wang, Ummo Schwarting, and Marcel Kurzmann discussing operational compliance.](/images/blog/openchain-ospology-prague-2026/operational-compliance-panel.jpg)

*Mary (Meixia) Wang, Ummo Schwarting, and Marcel Kurzmann discussing operational compliance.*

## SBOMs: connecting standards with useful data

Software bills of materials (SBOMs) featured throughout the day. **Masato Endo (Toyota), Ayumi Watanabe (Hitachi), Keisuke Takase, and Mary (Meixia) Wang** presented *A Living Framework for Automotive SBOMs*. The session introduced an industry-specific perspective on a challenge shared across organizations: making software supply chain information usable across company boundaries.

![Masato Endo presenting the Automotive SBOM Framework.](/images/blog/openchain-ospology-prague-2026/automotive-sbom.jpg)

*Masato Endo presenting the Automotive SBOM Framework.*

The program also included **Marc-Etienne Vargenau (Nokia)** on *CISA 2026 Minimum Elements in practice* and **Rakesh Prabhakaran (Bosch)** demonstrating *Bring Your Own Mapping Rules: Cross-Standard SBOM Validation*.

## Community learnings from the workshops

Three parallel groups gave participants time to explore different aspects of open source management:

- **Preparing an OSPO for the Cyber Resilience Act (CRA)**, facilitated by **Gergely Csatari (Nokia)**.
- **Taking a strategic approach to improving an OSPO using CHAOSS**, facilitated by **Dawn Foster (TODO Group Ambassador)**.
- **A community-led discussion**, with **Nikola Babadzhanov (Bosch)** and **Gourav Tandon (Source Code Control)** listed as mentors.

### CRA preparation needs a repeatable process and documented evidence

In **Gergely Csatari’s workshop**, participants worked through questions about product scope, supplier and project due diligence, SBOM management, vulnerability handling, and the role of open source stewards. The [published notes](https://github.com/todogroup/ospology/discussions/831#discussioncomment-18794426) preserve open questions as well as proposed approaches; they should be read as a record of the workshop rather than settled legal interpretations.

Several practical areas for OSPO work emerged:

- **Distinguish supplier assessment from direct open source consumption.** Participants considered how to assess a project directly and what to do when a supplier does not provide an SBOM.
- **Make assessments repeatable and retain the evidence.** The discussion covered automation, tools, risk-aware exceptions, and documenting results so they can be retrieved later.
- **Connect inventories with vulnerability workflows.** Questions about package identity, origin, dependency depth, and affectedness showed why producing an SBOM is only one part of the work.

For OSPO teams, these topics provide a concrete agenda for collaboration with engineering, security, procurement, and legal colleagues. They also expose where organizations need clearer shared practices rather than isolated answers.

![Participants in the CRA workshop.](/images/blog/openchain-ospology-prague-2026/workshop-conversations.jpg)

*Participants in the CRA workshop.*

### Start with strategy, then choose metrics that support a decision

**Dawn Foster’s CHAOSS roundtable** explored how an OSPO can turn project data into decisions. The [participant notes](https://github.com/todogroup/ospology/discussions/831#discussioncomment-18790252) emphasize interpretation: people can read the same dashboard differently, so the OSPO needs to explain what the evidence means in its organizational context.

Tool selection followed the question being asked. Participants discussed CollectOSS with 8Knot and GrimoireLab for examining known projects, and ecosyste.ms for exploring the wider ecosystem. The CHAOSS Practitioner Guides on assessing viability and demonstrating organizational value helped connect measurement with concrete goals.

One example made that connection tangible: an organization seeking to help engineers move between teams discovered that the teams used different Java frameworks. The value of the analysis came from exposing a barrier to an organizational goal. Participants also discussed the difficulty of reducing OSPO value to a single financial return and the importance of explaining contributions in terms the organization understands.

Another lesson concerned community: publicly available code does not by itself demonstrate an active community around it. Project assessment therefore needs attention to the people sustaining the work, alongside repository activity and technical indicators.

![Participants in the CHAOSS workshop, facilitated by Dawn Foster.](/images/blog/openchain-ospology-prague-2026/roundtable-discussion.jpg)

*Participants in the CHAOSS workshop, facilitated by Dawn Foster.*

### Shared data and trust across the supply chain

The [community-led discussion](https://github.com/todogroup/ospology/discussions/831#discussioncomment-18861615), documented by **Prashant Baghel** and shared by **Nikola Babadzhanov**, explored what makes an SBOM useful in practice. Participants raised concerns about preserving information across formats, differences between build and runtime needs, and communicating requirements to vendors. Their discussion points toward a practical lesson for OSPOs: agree on the information needed for a use case and examine its quality, alongside selecting a format.

Trust was another concern. Participants questioned why organizations repeatedly scan software when relevant information already exists elsewhere, and discussed the barriers to reusing that information. These questions connect technical interoperability with supplier relationships and confidence in the source of the data.

Participants also raised questions about AI-assisted code rewrites and their effects on original contributors. The notes record concerns about maintaining trust and the continuing importance of people who understand the software. These were questions from the community-led discussion, with further work needed on how to address them.

## Exploring project health with Goose, MCP, and CHAOSS

**Ana Jiménez Santamaría** presented *Agentic AI for OSPOs: Goose + MCP + CHAOSS Security Metrics*. The demo explored how an AI agent can help an OSPO investigate open source project health using verifiable evidence and community guidance.

Her experiment connected a GitHub Stats MCP server to goose, showing how the agent harness, model, and tools work together. CHAOSS Practitioner Guides supplied context for interpreting the results to support human decisions. The [shared materials](https://github.com/todogroup/ospology/discussions/831#discussioncomment-18773086) include slides and tutorials for building the server, connecting it to goose, and trying the experiment.

## Further use cases in compliance and community trust

The afternoon program also included three presentations addressing different aspects of open source practice:

- **Helio Chissini de Castro (CARIAD)**: *The missing link on SCA analysis*.
- **Philippe Ombredanne (AboutCode)**: *Sharing is caring: Open data for open source compliance*.
- **David Walter (ownCloud / Kiteworks)**: *Two Forks and a CLA-to-DCO Rewrite: What Actually Rebuilds Community Trust*.

## Thank you to the people who made it possible

Thank you to **OpenChain, TODO Group, SPDX, CHAOSS, and Deloitte**, the event organizers, for bringing these communities together. Special thanks to **Deloitte for hosting and sponsoring the gathering**, and to **Source Code Control for sponsoring the evening social and dinner**.

We are grateful to the speakers, facilitators, organizers, and everyone who contributed questions, experiences, and notes. **Gourav Tandon** provided the closing remarks, with the evening social offering more time for conversations beyond the sessions.

## Continue the conversation

The [Prague presentations and roundtable notes](https://github.com/todogroup/ospology/discussions/831) are available in the OSPOlogy repository, including slides, demo tutorials, and community notes. Visit the [event page](https://community.linuxfoundation.org/events/details/lfhq-ospology-european-chapter-presents-openchain-x-ospology-prague-2026/) for the full program and speaker details.

If you joined us in Prague, add your resources or reflections to the discussion. If you could not attend, the shared materials offer a starting point for exploring these questions with your own OSPO and the wider community.
