---
title: Four key principles for effective custom software development
permalink: /derisking-government-tech/principles/
layout: layouts/page
tags: derisking-government-tech
description: To build user-centered custom software, agencies must understand modern software development practices and how to acquire and manage vendors who use them.
eleventyNavigation:
  parent: derisking-government-tech-home
  key: principles
  order: 3
  title: Key principles
sidenav: true
sticky_sidenav: true
subnav:
- text: Modern software development practices
  href: '#principle-1-modern-software-development-practices'
- text: Performance-based services contracting
  href: '#principle-2-performance-based-services-contracting'
- text: Product ownership
  href: '#principle-3-product-ownership'
- text: Setting up for success
  href: '#principle-4-setting-up-for-success'
---

<p class="chapter-summary">When contracting a development team to build custom software, agencies should use performance-based services contracting and understand modern software development practices, a product owner’s role, and how to set the team up for success.</p>

{% include 'derisking-government-tech/chapter_image.html' img_path: "assets/derisking-government-tech/img/key-principles.svg" %}

If you’ve decided that your needs are best met with custom software, your goal is to build it in a way that maximizes cost efficiency and reduces risk through every stage of development.

Many government agencies don’t have personnel who can create and maintain custom, human-centered software. They must buy the time and skills of professionals to form a development team to do that work. In other words, the agency must go through the acquisition process to procure the services of a vendor. That vendor team must also be experienced in using modern software development practices.

These key principles will enable you to contract with a development team who can build custom software successfully:

1. [Understand and commit to using modern software development practices.](#principle-1-modern-software-development-practices)  
2. [Use performance-based services contracting.](#principle-2-performance-based-services-contracting)   
3. [Identify and empower a full-time, in-house product owner to lead the project.](#principle-3-product-ownership)   
4. [Set the team up for success.](#principle-4-setting-up-for-success)

---

## Principle \#1: Understand and commit to modern software development practices {#principle-1-modern-software-development-practices}

{% include 'derisking-government-tech/section_image.html' img_path: "assets/derisking-government-tech/img/key-principles-1.svg" %}

Government agencies have typically used the “**waterfall**” method for developing software, which involves a lot of advance planning and collecting comprehensive requirements at the beginning of a project. Unfortunately, this approach increases the risk that custom software development will fail because planning often takes years to complete and it falsely presumes that all needs can be accounted for before a project starts. By the time the contract is awarded, the gathered requirements no longer represent current agency needs, priorities, and resources. 

A less risky approach to building software in government is to use the modern software development methods and practices defined below. They will help you plan appropriately, solicit and evaluate vendor proposals, and acquire professional services with the right experience and skills. 

Five key modern software development methods and practices: 

* User-centered design  
* Iterative and incremental development  
* Unified development infrastructure  
* Service-oriented architecture  
* Open source software

### User-centered design  {#user-centered-design}

**User-centered design** is the practice of building software so that the people expected to use it *can* actually use it. In government, users (sometimes called “end users”) may be government staff and/or public users. (User-centered design shares many principles with related fields such as user experience design, customer experience, and service design.)

User-centered design follows repeating cycles of research with real users of the software, design, and development. **User research** includes interviews, usability testing, and other methods. These reveal users’ expectations and needs for the software. They also expose points of confusion and bugs in code. 

User research is integral to building working software. Hearing from end users themselves is the only way to get and understand their perspectives and ensure that you’re addressing their needs. There is no substitute for direct user feedback. The perspectives of a stakeholder who has deep experience with a program or system are still not representative of a real user. 

Insights from user research are often used to write “user stories.” A **user story** is written with the syntax: 

As a **[role]**, I need **[this thing]**, so I can **[accomplish this]**. {.user-story}

For example: 

As a **social worker**, I need **case notes to be cached on my phone**, so that I can **access case notes in areas without mobile phone service**. {.user-story}

User stories, along with technical considerations, inform the design and development of software. Ideally, user research happens continually throughout the entire project because user needs may evolve over time. 

Project stakeholders and team members can only guess how users will use software. Designing with and for users is the only way to ensure the software will serve their needs.

Consult the [18F User Experience Guide](https://guides.18f.gov/ux-guide/research/) for more detail on approaches.

### Iterative and incremental development  {#iterative-and-incremental-development}

Effective software systems are built by a development team that uses iterative and incremental methods. 

Today, one of the most popular versions of iterative development for building software is called “agile.” Its goal is to test working software with its intended users as soon as possible to find out if it meets their needs. And, if not, to correct it quickly so it does. 

Agile is an alternative to the waterfall development process described above. It avoids the risks of using waterfall by empowering a development team to decide how it builds the product, and to use practices that enable it to work quickly and change course as needed based on new information.

There are several methods for practicing agile. The most prevalent is called “Scrum.” Its key features include a self-organizing team, customer focus, and responding to change.

A Scrum team usually includes five to nine people. Depending on the nature of the project, it may include developers, product managers, user experience (UX) researchers or designers, content strategists, and/or security experts. 

Agile tools and methods support quickly building code and responding to new information. They act as “sources of truth” and guardrails for prioritizing and planning work. They include:

* [**Product vision**](https://guides.18f.gov/product/define/vision/): a short description of the product’s primary goal  
* [**Product roadmap**](https://guides.18f.gov/product/define/roadmap/): a high-level diagram of how the team envisions building the product over time   
* **Product backlog**: a list of product features and bug fixes that is usually written in the user-story format  
* **Burn-down chart**: a graph that visualizes the amount of work left to be done on a project and how much time it is estimated to take   
* **Burn-up chart**: a graph that visualizes completed work  
* **Project risks**: a list of conditions that could affect the project’s outcomes and that the team works to mitigate

A Scrum team works in **sprints**: short, regular cycles of work that may be as brief as a week and as long as four weeks. Two weeks is the most common. 

On day one of a sprint, the team plans only what it’ll do for that cycle. At sprint’s end, the team reviews its work, demonstrates the software to stakeholders, and then plans the next cycle by pulling user stories from the backlog. This process is repeated until the team has addressed all of the user stories or the budget for the project runs out, whichever happens first.

Each sprint, without exception, delivers functioning software: tested, documented, and ready for use. In this way, the team delivers value constantly and quickly develops software that is good enough to be rolled out for broad use, and continues to refine and improve it.

### Unified development infrastructure {#unified-development-infrastructure}

Modern software development practice is grounded in the principle that there shouldn’t be a division between developing and operating software. The team that writes the software takes responsibility for how software performs in production (as a live application or site). This approach is associated with “DevOps” practices, which also rest on this principle of a unified development infrastructure. 

This is achieved by using automated testing and deployment tooling that allow the entire process of creating the environment for deployment, and incrementally updating it, to be scripted and repeatable. These tools and practices make it possible to make a change in the code and implement it in the production service almost instantaneously. They make it easy to make smaller incremental changes frequently and catch and fix errors.

### Service-oriented architecture

Large and complex technology systems are made of smaller independent components that perform specific functions or services. All the parts can function together thanks to shared standards and application programming interfaces (APIs). 

Each component’s API contains a set of rules for how to communicate with it and call on it to perform its specific function. Systems that are built with this modular architecture are more flexible and sustainable. By standardizing and documenting the way components communicate with each other, a developer can focus on building components independently. 

### Open source software

**Open source software** is software with source code that anyone can inspect, modify, and enhance. 

Developers often choose to build with open source software as it has many benefits. Building with open source technologies, and in an open code repository, often leads to a better and more secure end product than proprietary code. (This assumes developers follow [best practices for open source software security]({{'/derisking-government-tech/resources/open-source-security/' | url}}).) Open source practices encourage critical evaluation and participation from contributors. These practices can lead to suggestions for improvement and identifying bugs and vulnerabilities. When an open source code base is used by a strong community of developers, everyone benefits from this active refinement as it continuously improves the code’s quality and security.

Since the public funds government software projects, the government should allow the public to consult and use what it’s paid for. Making government software projects open source enables the public — and other agencies — to leverage these investments for their own purposes. It also increases transparency and makes these investments publicly accessible and reusable by default. 

There are other benefits to open source development for government technology projects as well: 

1. Open source software makes collaboration easier among agencies, contractors, and the public because it is meant to be reused and adapted. It allows anyone that uses it to focus on using the code for their specific needs, rather than having to build and maintain common features from scratch.   
2. The government retains ownership of the code, which reduces the risk of dependence on a single vendor.  
3. It levels the playing field for future procurements and increases competition. New offerors can review the code to help them decide if they want to bid and what to include in their proposal.  
4. Software developers contribute to open source projects to demonstrate their skills to colleagues and employers, current or future. There is a mutual benefit for the contributing developer and for the project. Public-facing government software tends to have high visibility and a built-in user base. Making that software open source cultivates a community of developers and other users around the project that is invested in making it better.  

(Open source software isn’t appropriate for every project, such as when an agency doesn’t have the rights to reproduce and release the code. Or, when publicly releasing the item is restricted by a law or regulation, such as the Export Administration Regulations or the International Traffic in Arms Regulation.)

---

## Principle \#2: Use performance-based services contracting  {#principle-2-performance-based-services-contracting}

{% include 'derisking-government-tech/section_image.html' img_path: "assets/derisking-government-tech/img/key-principles-2.svg" %}

Software developers as a labor category and profession qualify as “commercially available” and “professional services” under the FAR. To acquire the time and expertise of a team experienced in modern software development services, you must use performance-based acquisition methods for the solicitation, competition, and evaluation of proposals. 

[**Performance-based services contracting**](https://www.acquisition.gov/far/subpart-37.6) (PBSC) stresses that all aspects of an acquisition must be structured around the *purpose of the work* to be performed, and involve a way to assess contractor performance objectively *rather than* dictating the manner in which the work is to be performed. 

This approach to contracting professional services ensures that: 

* Contractors are given freedom to determine how to meet the government's performance objectives.  
* Appropriate levels of quality in performance are achieved.   
* Payment is made only for services that meet those levels.

Learn about the [solicitation process for performance-based services contracting]({{ "/derisking-government-tech/buying-development-services/#writing-a-solicitation-for-a-performance-based-services-contract" | url }}).

---

## Principle \#3: Identify and empower a full-time, in-house product owner to lead the project  {#principle-3-product-ownership}

{% include 'derisking-government-tech/section_image.html' img_path: "assets/derisking-government-tech/img/key-principles-3.svg" %}

Modern software development is led by a **product owner**. In tech lingo, a **product** is the thing a development team builds. It may be a website, mobile app, data service, intranet application, etc. A product owner is the *individual* responsible for making sure the team builds a thing that serves the needs of its users, as confirmed by research. They receive and review a vendor team’s work.

A product owner works closely with the team to ensure its work is focused on creating a product that meets its users’ needs and organizational goals. Their daily work includes deciding on priorities, adjusting direction based on feedback, and communicating with stakeholders. Unlike a project manager, who focuses on planning and monitoring projects, a product owner’s focus is on the product’s value to users and the team’s quality of work and well-being. They choose among priorities throughout the project, weighing the best response to information as it arises, and the value and impact of change versus stability.

Slow product decision-making is a common problem for development teams. To avoid it, the product owner must be available to the team and empowered by the organization. Specifically, the product owner of a government technology project must be:

* An individual, not a committee.  
* Employed by the agency the product is being built for.  
* Assigned at *least* half-time to the project, ideally full-time — especially for large or high-priority projects.   
* Permitted to make most decisions about the product’s development *without having to seek approval from stakeholders*. 

A product owner doesn’t need to be an expert in technology. A strong product owner understands the needs of the product’s users, the goals of the organization and any legal, technical or policy constraints that need to be weighed in decisions. 

While it’s possible for a product owner to learn “on the job,” it’s better that they receive formal training in agile product ownership. Free or paid training is offered online and in person through many sources (such as the [18F Product Guide](https://guides.18f.gov/product/)). If the product is critical to the agency, the product owner should have prior experience in modern software development practices or access to an experienced product coach. 

### Leadership’s role in a custom software development project

Agency leadership’s role in custom software development is to create an environment where modern software development practice is possible. 

Leadership is responsible for declaring what is important from the perspectives of policy and operations, and any concrete constraints the team must work within. They should be ready to take action when questions arise that fall outside the product owner or team’s responsibilities. They are also responsible for enabling the team to work in new ways and giving them space to innovate to meet the goals. 

It’s essential for the project’s success that leadership make it an organizational priority to support modern software methods, and work to align governance and oversight processes to permit their use. For example, if an agency has traditionally used waterfall processes to develop software, including expecting detailed documentation of requirements, these management practices will make it impossible for the team to adjust course based on user feedback. Leadership should spearhead the effort to shift an organization’s culture and policies to enable iterative software development or people will be discouraged from trying it again. This is especially important as learning new methods takes time and will involve missteps. 

Other responsibilities for leadership include:

* Providing funding  
* Helping overcome internal challenges  
* Serving as authorizing officials in security accreditations  
* Nearing launch of the software, facilitating internal and external communications 

It can be helpful for leadership to be involved in helping to set the product vision, reviewing the roadmap as it relates to organizational strategy, and seeing demos of the software. 

There’s no one-size-fits-all approach. The degree that leadership should be involved in the project depends on the nature of the challenge, organizational culture, and work preferences of individuals.

---

## Principle \#4: Set the team up for success {#principle-4-setting-up-for-success}

{% include 'derisking-government-tech/section_image.html' img_path: "assets/derisking-government-tech/img/key-principles-4.svg" %}

*Before you award a contract*, there are some things to do that will make it possible for the development team to work efficiently and productively from day one of a project. These reduce the risk of delays and wasting funds. Ideally, these are addressed before [onboarding a vendor development team]({{ "/derisking-government-tech/vendor-management/#onboarding" | url }}).

### Hire technical staff in-house, if needed

If your agency doesn’t have leadership, budgeting, or technical staff who have experience with modern software development practices, it’s missing knowledge and skills that are crucial for budgeting for and building custom software successfully. 

It may be tempting to rely on vendors to fill this gap. Or, if you’re at a state agency, the state’s central IT department. But, agencies are best served by in-house staff who have technical knowledge and understand the software’s relationship to the agency’s mission. They can both confidently represent the contract and assess the [quality of the vendor team’s performance]({{ "/derisking-government-tech/vendor-management/#quality-indicators" | url }}).

To determine if your budget office or leadership has the necessary experience to consider software requests or lead software projects, ask around. All but the smallest agencies will have technical staff who can join project leadership. There are few budget offices who currently employ software developers.

If your agency lacks staff with the technical knowledge to pursue a custom software project successfully, you’ll need to hire someone who does — even if only seasonally or on contract. Your best bet is a developer or designer with experience building modern software, ideally for the government. 

The cost of bringing in a developer or training current employees in modern development practices is tiny in comparison to the cost of a custom software project. Plus, once you have that knowledge in house, it can be drawn upon for future projects.

Software is never “done.” It will always need to adapt to changing user needs, technology, policy, regulations and laws. To properly maintain it, you must have developers on staff who fully understand the program or system.

### Allow for and provide support for a remote team

Allowing for the development team to work remotely will give you access to the best development resources in the United States. It will also likely lower costs while increasing competition. There’s a significant [difference in the salary of software developers](https://www.bls.gov/oes/current/oes151132.htm\#IDX701) in the most expensive and least expensive states, and small businesses will be able to enter the vendor pool.

Remote collaboration is easy with modern online tools. An agency product owner can communicate daily with a distributed team through any number of available tools that support video conferencing, instant messaging, task management, collaborative whiteboarding and document editing. 

Government agencies often struggle with enabling remote collaboration due to network restrictions and software approval policies. Ensuring a remote vendor team can be productive from day one of a project requires making sure they can access such tools well before work begins.

Determine which collaboration tools teams will need and make those available to them. As an interim step, agencies may want to develop a provisional Authorization to Operate (ATO) process for piloting tools that are relatively low risk. This process could inform decisions about which tools should go through the ATO process to be rolled out more broadly.

### Clear the “path to production”  {#clear-the-“path-to-production”}

Unlike in the private sector, making government systems available to end users is a highly regulated and scrutinized activity. It requires technical, legal, legislative, and other approvals, along with extra layers of development. 

Before publishing a solicitation, figure out the process for getting a vendor team access to the hosting and deployment environments necessary for testing and launching the software, and make sure they have access to them. In other words, clear any bureaucratic obstacles the vendor team could experience in the “path to production” and document the path clearly and comprehensively. (To find out if code can be deployed to the needed environments, you can: 1\) prototype a solution or 2\) talk to agency technical staff. Ideally, do both.) If this process for access is not done before a team is [onboarded]({{ "/derisking-government-tech/vendor-management/#onboarding" | url }}), it can result in wasted time and effort, as well as frustration.

Each agency will have its own set of processes, rules, and regulations around security clearances. (For instance, the [Homeland Security Presidential Directive 12 Policy](https://www.dhs.gov/homeland-security-presidential-directive-12) applies across the federal government.) To streamline work that concerns security issues, write a requirement into the contract that the vendor must delegate an individual to act as the security clearance liaison (a point of contact for all questions and requests) for the project. 

An agency that meets the following criteria can feel confident they can award an agile software development contract and that the vendor onboarding process will be relatively smooth:

* There is access to a hosting environment, administered by an employee at the agency.  
* There is an organizational account on a social code repository (for example, GitHub, GitLab, or Bitbucket) for the agency, administered by one or more employees of the agency.  
* There is a process by which changes made to code on the repository are automatically deployed to the hosting environment and the agency has the ability to release frequently (i.e., a [unified development architecture](#unified-development-infrastructure)).

### Prototype to learn 

Prototyping is an exercise that will help you understand your agency’s ability to support an agile software development project in terms of technology, human resources, and policy. 

The exercise can be as simple as publishing a single “Hello, world” webpage. It should answer these questions:

* What is the administrative process to gain access to the hosting and deployment environment?  
* What processes or policies does a software team need to work through to get access to services and deploy applications to them?  
* Which stakeholders are required for approvals? What things do they need to approve? What form do applications for approval take?

This work will help the team understand their tool preferences and document internal processes. The prototype can also be useful as supporting documentation in an RFP or to give to the winning vendor.

### Ask questions of agency technical staff

Invite relevant technical staff at your or your partner agency to a meeting to get answers to these questions:

* How are existing digital products hosted and deployed? Who is involved in those processes?  
* How do we get access to the agency’s deployment environment (for example, cloud.gov, Amazon Web Services, Microsoft Azure, on-premise servers)?  
* Are there existing technology stacks, solutions or components that are approved for use or that are recommended? Are there preferences for any of the options?

Having clear answers to these questions is the *minimum* amount of information an agency should have going into a build. If the answer to these questions are unknown, or the answers are murky, more investigation is needed prior to publishing an RFP.

---

**Next:** [Buying custom software development services]({{ "/derisking-government-tech/buying-development-services/" | url }})
