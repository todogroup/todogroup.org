---
title: "Exploring Verifiable Provenance for AI-Assisted Software Contributions"
author: chrisxie
date: 2026-07-14
---

This is one of the topics explored during a show-and-tell session of the TODO Group Agentic AI to Empower OSPOs working group. The session featured [OpenFab](https://github.com/Open-fab-ai/openfab) as one practical example of how provenance, attestations, approval records, and verification could be incorporated into AI-assisted software workflows.

An AI agent opens a pull request in a project supported by an OSPO. The change addresses a real bug, the continuous integration checks pass, and a maintainer merges it.

Several months later, an auditor, customer, or internal security team may ask:

- Was the code written by a person or generated with the assistance of an AI model?
- Which tools, models, instructions, or workflows were involved?
- What checks were performed before the contribution was accepted?
- Who reviewed and approved the resulting change?
- Can the available evidence be independently inspected or verified?

Most software development workflows were not designed to answer all these questions. Git records who committed or pushed a change, while continuous integration records whether a defined set of checks passed. These signals remain important, but they may not explain how an AI-assisted artifact was produced or what human oversight was applied.

Similar questions arise when OSPOs and their partner teams consider using agents internally for activities such as license triage, dependency analysis, software bill of materials (SBOM) review, documentation, or repository maintenance.

This creates an emerging area for exploration: what evidence should accompany AI-assisted software so that organizations can evaluate its origin, process, approvals, and integrity?

## What can be reproduced?

One important distinction discussed during the session is that AI generation is generally not reproducible in the traditional sense. Running the same prompt twice may produce different outputs.

What can be verified is the artifact and the process around it: whether the artifact changed, which workflow and checks were applied, who approved it, and whether the recorded evidence remains independently verifiable over time.

In other words, the goal is not to reproduce every model decision, but to preserve trustworthy evidence about how an artifact was produced.

## Building on software supply chain practices

The software supply chain community has already developed several relevant mechanisms.

SBOMs describe components contained within software artifacts. Frameworks and specifications such as SLSA and in-toto can represent information about how software was built. Signing systems such as Sigstore can help establish artifact integrity and authenticity.

AI-assisted development introduces additional questions that these mechanisms may not fully capture, including:

- whether an artifact was generated or modified using AI
- which model or agent participated
- which instructions guided the process
- what level of human review was applied
- how responsibility was assigned

One concept discussed during the working group session was an AI Bill of Materials (AI-BOM). In this context, an AI-BOM would complement rather than replace existing SBOM and provenance mechanisms by recording information specific to AI-assisted authorship and workflow execution.

The appropriate scope, terminology, interoperability requirements, and governance of such a record remain open questions. These are areas where collaboration across OSPOs, security teams, maintainers, standards communities, AI practitioners, and software supply chain projects could be valuable.

## OpenFab as one reference implementation

During the [June 30 meeting of the TODO Group Agentic AI to Empower OSPOs working group](https://github.com/todogroup/working-groups/blob/main/wg-agentic-ai/meeting-notes.md#summary-june-30), [OpenFab](https://github.com/Open-fab-ai/openfab) was presented as one experimental implementation of this pattern.

OpenFab is an Apache-2.0 licensed project exploring how AI-assisted software workflows can produce portable, verifiable provenance.

Starting from a request in natural language, OpenFab generates a specification with machine-checkable acceptance criteria, produces or modifies the code, executes the defined checks, and, if those checks succeed, generates a signed provenance attestation. The resulting AI-BOM combines existing software supply chain technologies such as in-toto, SLSA, Sigstore, and DID-based identities to record how an artifact was produced rather than only what it contains.

The workflow also includes an explicit human approval gate. Configurable N-of-M approvals prevent self-merging, allowing human review to become recorded evidence instead of an implicit assumption. The agent's operating instructions are maintained in a versioned `openfab-agent.md` file, following the emerging AGENTS.md convention promoted by the Agentic AI Foundation, making the workflow itself reviewable alongside the software.

Another aspect highlighted during the demonstration was that provenance remains attached to the artifact. The generated attestations can travel with the repository and be verified independently, even after the code has moved between forges or is inspected offline, without relying solely on the original hosting platform.

OpenFab was presented as one implementation of this broader pattern rather than the pattern itself. The working group's interest is not in prescribing a particular tool, but in exploring which provenance mechanisms, governance models, and open standards can help organizations build greater trust in AI-assisted software development.

## Why this may matter to OSPOs

OSPOs do not usually own every developer tool, security control, or continuous integration system. Their role often involves policy development, education, cross-functional coordination, tool evaluation, and engagement with open source ecosystems.

This can place OSPOs in a useful position to help organizations ask questions such as:

- Where is AI-assisted code entering our software supply chain?
- Which types of contributions require disclosure or additional review?
- What evidence should accompany an AI-assisted contribution?
- Which teams should define and enforce the relevant controls?
- How should provenance information interact with existing SBOM, security, and compliance workflows?
- Can the evidence be moved between platforms and independently inspected?
- How much additional burden would the workflow place on developers and maintainers?

Implementation ownership will vary by organization. Developer experience, product security, platform engineering, legal, compliance, internal tooling, incident response, and AI platform teams may all be involved.

The OSPO may serve as a coordinator by connecting open source governance requirements with the teams that design and operate these systems.

## About the TODO Group Agentic AI to Empower OSPOs WG

The TODO Group Agentic AI to Empower OSPOs working group explores, documents, and shares practical patterns for using agentic AI to scale open source and AI management and operations.

It provides a space for OSPO practitioners to compare experiences, prototype together, and turn lessons learned into resources that the broader community can reuse. Its current workstreams focus on mapping agentic AI use cases and maturity, collecting reusable skills, prompts, and workflows, and exploring how OSPOs can evaluate whether agentic AI workflows are safe, useful, reliable, and appropriate to adopt.

Show-and-tell sessions such as the OpenFab demonstration help the group examine practical examples, lessons learned, and open questions. These discussions are intended to identify common patterns, reusable artifacts, and areas where further community guidance may be needed.

Practitioners are welcome to contribute examples, evaluations, prototypes, lessons learned, and alternative approaches through the working group repository and upcoming community calls.
