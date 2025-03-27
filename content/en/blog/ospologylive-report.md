---
title: "OSPOlogyLive AMS – Shared Learnings Report"
author: todogroup
date: 2025-03-27
---

[OSPOlogyLive Amsterdam](https://community.linuxfoundation.org/events/details/lfhq-ospology-european-chapter-presents-ospologylive-amsterdam/) hosted by 
the Dutch Employee Insurance Agency (UWV OSPO) brought together practitioners, researchers, and public sector professionals to tackle shared challenges in open source management. 
With a special focus on the public sector, academia, and industry, the event blended technical insights with governance strategy across topics 
like security, regulation, and collaborative development.

![ospologyliveamsgroupphoto](https://github.com/user-attachments/assets/9dfe6927-0990-4623-8a00-0cd3dd9c6adb)

## IT Security & Regulations Tools Workshop

The IT Security & Regulations Tools Workshop provided participants with a hands-on approach to understanding the legal, technical, and organizational dimensions of responsible source code publication. Grounded in the requirements of the Dutch Open Government Act, the session emphasized the importance of designing projects with transparency in mind from the start, rather than retrofitting compliance at the end.

The visual guide introduced during the workshop offered a practical blueprint to assess a project’s readiness for publication, helping participants identify gaps in intellectual property management, licensing, version control, and stakeholder responsibilities. This guide contrasted what should be planned “by design” from the start versus what needs to be done “afterwards” if transparency wasn’t considered early on.


| Legal | Technical | Organizational |
| ---   | ---       |  ---           |
| Ownership and transfer of Intellectual Property Rights (IPR) | License and metadata documentation for all components | Stakeholder involvement in the publication process   |
| Identifying exceptions under the Dutch Open Government Act (Woo) | Identification of sensitive data and vulnerabilities | Defined roles and responsibilities  |
| Compliance with the Dutch Competition Act (Wet M&O)   | Code understandability and traceability  | Selection of platforms for publishing and communication |
| Appropriate licensing choices (“all rights reserved” vs. open source) | Version control and design documentation | Transparency on feedback loops and external collaboration  |

Alongside this framework, a series of proven tools were highlighted, including OSPO Scode Scanner, OpenSSF Scorecard and Baseline, RepoLinter, and the Compliance Assistant by the OpenRailAssociation. These tools play a vital role in automating and standardizing security, compliance, and best practices across the open source lifecycle.

### Tools referenced

- **OSPO Scode Scanner**: A GitHub Actions workflow and related configuration files to check if code repositories follow typical open source practices.  
- **OpenSSF Scorecard**: Automated tool that assesses a number of important heuristics ("checks") associated with software security and assigns each check a score of 0-10.  
- **OpenSSF Baseline**: A minimum definition of requirements for a project relative to its maturity level.  
- **RepoLinter**: Lint open source repositories for common issues.  
- **OpenRailAssociation - Compliance Assistant**: Toolset designed to assist with creating and managing Software Bill of Materials (SBOMs). It helps in enriching SBOMs with licensing and copyright information and checks for Open Source license compliance using data from ClearlyDefined.

> 🔗 Related content: [GitHub discussion notes](https://github.com/todogroup/ospology/discussions/564#discussioncomment-12639284) / [Workshop pad](https://pad.public.cat/V0DfjL8QQ02zOdHHvUjWIw#) / [License best practices guide](https://www.linuxfoundation.org/licensebestpractices)


## Build Better Together Roundtable

This roundtable explored the intersection of academia and research, industry, and government in Europe, focusing on how these sectors can better collaborate to drive open source innovation. Participants included representatives from research centers and universities, public administrations, and private industry, bringing diverse perspectives to a shared challenge.

The group examined real-world scenarios where these connections occur and raised key questions such as:
- **How does industry–academic collaboration actually happen?**  
- **How is academic funding structured, and how can it support open source efforts?**

### Key challenges included
- The need for shared tooling to avoid reinventing the wheel  
- Better funding mechanisms for academic involvement  
- The role of InnerSource in preparing organizations to contribute to and maintain open source projects  
- The gap between recognizing the importance of security and compliance — and actually enabling it through automation and scalable processes  

The group emphasized that true cross-sector collaboration requires more than alignment on values: it demands mutual investment, streamlined risk management, and structured models for long-term co-creation.

> 🔗 Related content: [GitHub discussion notes](https://github.com/todogroup/ospology/discussions/564#discussioncomment-12628530)


## Collaboration Marketplace

In this experimental session, participants had the opportunity to explore practical demos and tooling during the Collaboration Marketplace, switching between rooms every 15 minutes.

- **OpenDesk & OpenCode (Room A)**: Tools supporting open publishing workflows in the Dutch public sector  
- **CHAOSS, Augur & GrimoireLab (Room B)**: Community health metrics and data analysis  
- **AboutCode, ORT, REUSE (Room B)**: Open source compliance tooling and SPDX support  
- **Dutch Open Source Business Alliance (Room C)**: Ecosystem building across sectors  
- **InnerSource Commons, CURIOSS (Room D)**: Open collaboration practices in academic and research institutions

## Speaker Presentations

Speakers from organizations such as Zentrum Digitale Souveränität (ZenDiS), UWV, DOSBA, SURF, and the City of Amsterdam shared insights on open source 
management best practices within the public sector, education, and enterprise contexts in Europe. Their contributions covered a wide range of topics, 
including security management, Software Bill of Materials (SBOM), developer experience, and fostering open source culture inside organizations.

They also showcased impactful open source software projects supporting key public needs (such as TINA) for Sovereign AI initiatives in Dutch 
municipalities, and Abacus, used in the context of Dutch elections—presented by speakers from the Dutch Electoral Council and the Association 
of Dutch Municipalities.

> 🔗 Related content: [OSPOlogyLive Knowledge Archive](https://github.com/todogroup/ospology/tree/main/ospology-live/2025-march-amsterdam#-presentations)

## Wrap-up Session Highlights

The final wrap-up confirmed that OSPOlogyLive Amsterdam successfully met the core objectives:

- Inspired by experts  
- Set up collaborations  
- Defined three concrete actions  

### 📋 Next Actions Board

<img width="680" alt="image001" src="https://github.com/user-attachments/assets/dd61ba6a-fc1d-4721-a524-b1a41bd9fdd0" />

Throughout the sessions and especially during the wrap-up, participants identified practical follow-ups to continue the momentum after the event. These next steps were collaboratively gathered on a shared board, reflecting concrete opportunities for collaboration, improvement, and alignment across the open source ecosystem in Europe.

| Security & Regulations | Community & Networking | Tooling & Infrastructure | Leadership & Strategy |
| --- | --- | --- | --- |
| Collaborate with Linux Foundation / OpenSSF on security testing | Benchmarking sessions with the City of Amsterdam | mprove CI/CD tooling for blockchains and project boilerplates | Assign responsibilities for publication workflows |
| Join CHAOSS Working Group and connect strategies to the Dutch governmental context | Collaboration between InnerSource Commons and CURIOSS | Clarify metadata and SPDX usage across tools | Define cross-organizational agreements |
| Further define what’s needed to use OpenDesk in Sweden | Support formation of a working group for women in open source governance | Evaluate governance tooling landscape (CHAOSS, OSPO tooling from TODO, OpenChain, etc)| Continue working on alignment between legal counsel and developers| 
 
## What Makes OSPOlogyLive Europe Chapter Unique?

OSPOlogyLive prioritizes participation over passive listening. Sessions are designed for small-group work, guided discussions, 
and real-time collaboration with peers and experts. Instead of watching speakers from a distance, attendees roll up their sleeves 
and co-create solutions to current challenges in digital sovereignty, compliance, and open source governance.

![specialthanksto](https://github.com/user-attachments/assets/c2489053-f593-4d1d-bc07-a2fc17a0c46c)

By the end of OSPOlogyLive Amsterdam, participants left with clear actions, new collaborations, and a deeper 
understanding of how open source strategy connects legal, technical, and community impact.

> 🔗 Related content: [OSPOlogyLive Framework](https://github.com/todogroup/ospology/tree/main/ospology-live)
