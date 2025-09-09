---
title: "How Do OSPOs Make OSS and AI Work?"
author: todogroup
date: 2025-09-08
---
This is a summary post from the BoF session that took place during an Open Source Summit and explores how Open Source Program Offices (OSPOs) 
handle the intersection of AI, compliance, and community building.

![image1](https://github.com/user-attachments/assets/80098821-868c-4a01-afaf-81a7086746a6)
*Ashley Wolf, David Hirsch, Natalie Vlatko, Sachin Bhaka, and Ana Jiménez Santamaría at BoF session – open source in AI: Where OSPOs make it Work*

Ana Jiménez Santamaría, Senior Project Manager at the Linux Foundation’s TODO Group and PyTorch Foundation, opened the session by sharing key insights from the latest studies on open source management. “According to [The State of the OSPO 2025 report](https://www.linuxfoundation.org/research/ospo-2025), **79% of organizations with an OSPO** said they were being effective in managing generative AI risk, compared to 65% of organizations without one,” Jiménez noted. The same study found that **66 % of organizations with an OSPO felt prepared for emerging technologies** such as AI and cloud‑native infrastructure. These insights set the stage for a discussion 
about why OSPOs are well-positioned to guide AI strategy and governance.

# How OSPOs are using AI today

## Building internal tools and reducing friction

Ashley Wolf, who runs the OSPO at GitHub, described how her office has been using AI to reduce manual work. She explained that she uses GitHub’s own Copilot 
to create ad‑hoc tools: *“I created a workflow the other day that will find empty repositories in the organization, that’s been a huge tremendous help because 
we don’t have engineers anymore in our group”*.

AI chatbots also help staff navigate policy documents so they can quickly check whether a project can be released under a certain license. Wolf noted that the 
OSPO now asks whether a new release involves any AI systems and coordinates with GitHub’s responsible‑AI team to ensure model licenses, datasets and weights 
are considered: *“If people are releasing open source we now ask if there’s any involvement with AI systems and take into consideration licensing around models, 
data sets, weights”* 

David Hirsch, who works on the open ecosystem at Dynatrace, said they are exploring similar approaches. They want to use AI to automatically audit their hundreds 
of repositories and decide whether some can be retired.  At the moment, *“it was a lot of manual labour,”* he admitted. Dynatrace also maintains a traffic‑light 
system for AI tools, determining which ones are safe to use and which should be avoided.  Hirsch described *“coming up with those do‑not‑use lists”* as *“the fun part”*

Natalie Vlatko, who leads the OSPO at Cisco, highlighted a different angle: creating an internal search agent so that employees can ask questions and receive 
answers from OSPO documentation.  Her office is building a tool that *“will be using the same [AI] for our own wiki,”* because the OSPO is only two people and 
receives frequent enquiries.  She added that Cisco is working on standardised model cards and aligning them with the EU AI Act: *“Cisco´s OSPO is formalizing what 
model cards should look like for AI models, aligning this with the EU AI act”* 

## Managing AI‑generated contributions

Several questions from the audience focused on handling AI‑generated code and content. Sachin Bhakar from an energy company cautioned that AI‑generated code 
carries legal risk because the training data may include copyrighted material.  He advised developers to modify AI‑generated snippets to differentiate their 
own expression: *“If someone’s using AI‑generated code they should make small changes, so that the snippet is different”*. Bhakar added that in the Kubernetes 
project, contributors who submit AI‑generated code must review it themselves before opening a pull request to avoid wasting maintainers’ time

Vlatko shared that the Kubernetes project is experimenting with an agents.mmd file to warn maintainers about AI‑generated pull requests.  The idea is *“rather 
than fighting against that contribution, we’re trying to hopefully not waste too much of a maintainer’s time”*.  She explained that in Cisco’s documentation, 
AI‑generated content is only allowed for translation or localisation; it cannot be the final submission.  Moreover, she cautioned against adding a generic AI.md 
file because *“having an AI.md or AI.txt actually would be probably more confusing, we’re then grouping everything under this one bracket”*. Instead, OSPOs should 
define what kind of AI (LLM, neural networks, etc) they are addressing.

## Evolving the role of the OSPO for AI

A recurring theme was whether OSPOs should expand into Open Source AI Offices. Wolf argued that OSPOs are already positioned to coordinate legal, 
security, engineering and communications teams.  Because of these relationships, some OSPOs have “morphed and evolved to add more scope so that they can be 
part of rolling out or experimenting with AI tools,” but she emphasised that the core mission remains the same: enabling success in open ecosystems.  Hirs 
added that having a separate AI centre of excellence isn’t a replacement but a partner: *“It’s just cooperation, not a replacement of any sort. We 
have knowledge that they don’t, and they have knowledge that we don’t”*

Vlatko stressed collaboration with Cisco’s responsible AI team.  When an internal project involves AI, the OSPO triggers a responsible‑AI assessment and 
determines whether the project is truly open source by checking whether the license covers both code and data.  She emphasised educating executives that 
open‑source AI can’t be separated from open source: if AI initiatives are developed in isolation, *“they don’t think it’s integrated,”* but OSPO leaders know
that AI and machine‑learning ecosystems *“are powered by open source”*. The panel encouraged OSPOs to remain involved in AI decisions at a minimum because 
they are structured to handle emerging technologies.

## Giving advice for supporting dependencies and contributions

Another audience question asked how OSPOs can support outbound contributions to the open‑source projects they depend on. Bhakar suggested starting by filtering 
risky licenses and prioritising projects accordingly: the OSPO can “filter out the risky licenses, differentiate between which one should be catered first”. 
Wolf advocated that companies should inventory their dependencies using tools like the OpenSSF criticality score or SBOM analysers and look for unmaintained 
projects and security vulnerabilities.  If a project is critical, OSPOs can contribute code, sponsor maintainers or provide infrastructure.  Hirs noted that 
the Linux Foundation has a tool that estimates the value of open source in a product by analysing its software bill of materials; he explained that if a 
company had to replace open‑source components, it might spend 3½ times more.

Wolf shared a real example: a CNCF sandbox project temporarily paused releases due to a lack of maintainers.  Cisco’s OSPO discovered that many internal 
teams depended on the project, so they connected those teams, put Cisco on the list of adopters and helped with blog posts and testimonials. This experience 
shows that OSPOs can do more than write policy; they can rally communities to sustain critical projects and make it easy for employees to contribute. She urged 
OSPOs to remove barriers to contribution and even set up reward systems, noting that *“the more open and easy it is, the better.”* 

## Conclusion

OSPOs have an important role in guiding how organizations use AI. They bring cross‑functional coordination, experience in open‑source compliance and an 
understanding of community dynamics.  Whether it’s building internal AI tools, developing model cards, establishing traffic‑light systems for AI vendors, 
or helping maintain upstream projects, OSPOs can ensure AI adoption remains ethical, compliant and sustainable.

{{< button link="https://youtu.be/gJBRKNfex5Y?si=2BpNeDYtuKayX3_K" text=" Watch Recording" >}}

To stay involved, open source managers and OSPO practitioners are welcome to join community initiatives like the “#topic-OSS-AI” discussion group channel and the TODO Group’s working group on open source in business guide. Both available in TODO Slack space. [Here](https://todogroup.org/community/get-started/) you can get started with TODO community.
