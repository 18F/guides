---
title: Working with a vendor development team
permalink: /derisking-government-tech/vendor-management/
layout: layouts/page
tags: derisking-government-tech
description: Managing a vendor software development team involves knowing how to lead product direction, monitor performance, and resolve issues.
eleventyNavigation:
  parent: derisking-government-tech-home
  key: vendor-management
  order: 5
  title: Vendor management
sidenav: true
sticky_sidenav: true
subnav:
- text: Leading product direction
  href: '#leading-product-direction'
- text: Setting up the relationship
  href: '#setting-up-the-vendor-relationship'
- text: Reviewing work
  href: '#reviewing-the-vendors-work'
- text: Maintaining the relationship
  href: '#maintaining-a-healthy-vendor-relationship'
---

<p class="chapter-summary">The principles of agile oversight underlie every aspect of working with a vendor team to build effective custom software, from setting up and maintaining the relationship to leading product direction and reviewing the quality of work.</p>

{% include 'derisking-government-tech/chapter_image.html' img_path: "assets/derisking-government-tech/img/vendors.svg" %}

## Introduction to vendor management

Once an agency has awarded a contract to a vendor to build custom software, its goal is to foster a healthy working relationship with the development team and make sure it delivers working software that meets the needs of its intended users. This work is typically called “vendor management.” 

As day-to-day management of a vendor’s work on a custom software development project is the responsibility of the [government product owner]]({{ "/derisking-government-tech/principles/#principle-3-product-ownership" | url }}), this section is written primarily for people in that role. Where government technical leads and other staff should be involved, they are mentioned specifically.

In government contracting, “**vendor management**” means the activities and interactions with a vendor that occur after a contract has been awarded. That work should result in the vendor fully performing its duties under the contract and the organization achieving its desired outcomes from the contract. 

In the context of a performance-based services contract, vendor management is not about enforcing the letter of contracts. It’s about developing a productive relationship with the vendor, engaging closely with them as they work to identify solutions, and regularly evaluating the actual software they were hired to produce. 

The contract broadly defines the outcomes you want to achieve together and sets the boundaries of how you and a vendor will work together. It doesn’t dictate the exact nature of the day-to-day work of building software. 

Indeed, it is a sign that you and your vendor have a healthy relationship if you rarely need to discuss the contract. If you’re meeting multiple times a week and working closely together, your conversations focus on the work itself: what the team is doing, how they’re doing it, and obstacles, complexities, and solutions they’re discovering. There’s no need to refer back to the contract. 

Good collaboration and communication are the cornerstones of effective vendor management of a custom software development project. This is why the government product owner (whether or not a technical expert) must actively participate in the project team and in meetings where work is being done, and from the earliest stages of planning.

This section outlines good practices for building a healthy relationship with an outsourced development team through active collaboration and communication. It starts by explaining the principles of agile oversight, which underlie our guidance, and explains the practices in relation to the following aspects of vendor management:

* [Setting up the relationship](#setting-up-the-vendor-relationship)
* [Reviewing the vendor’s work](#reviewing-the-vendors-work)
* [Maintaining a healthy vendor relationship](#maintaining-a-healthy-vendor-relationship), including managing conflict

### Principles of agile oversight

The [agile manifesto]({{ "https://agilemanifesto.org/" | url }}) established a set of values for agile software development. They are explained here for a government context. If you followed the [solicitation process for a performance-based services contract]({{ "/derisking-government-tech/buying-development-services/#writing-a-solicitation-for-a-performance-based-services-contract" | url }}) as explained in this guide, you have set up your relationship with your vendor to abide by these principles.

#### Individuals and interactions over processes and tools

You took the time to run a good procurement and select the best vendor. Now, create an environment that gives the vendor team space to do the work you hired them to do. Focus on building your relationship with the vendor team and communicating expectations for how you will regularly evaluate its work and not on how closely the vendor complies with established agency procedures and culture. 

#### Working software over comprehensive documentation

Use regular demonstrations of working software rather than written reports to measure the progress of work. To evaluate the quality of demos, you’ll use the quality indicators articulated in the performance-based services contract. (Some documentation is still required during the project to record details about how the software was built, security and privacy protection mechanisms, and instructions for its maintenance. Check out [Reviewing the vendor’s work](#reviewing-the-vendors-work) for specifics.) 

#### Customer collaboration over contract negotiation

As already noted, a sign of a good relationship with your vendor is that you’re in constant communication. Setting up an environment that enables professional, open dialogue between you and the vendor team is imperative to successful collaboration. 

#### Responding to change over following a plan

A development team can build working software only if they can respond to needs as they evolve over time. The purpose of acquiring the team’s services through a performance-based services contract was to enable the team to be able to work in this fashion. 

## Leading product direction

{% include 'derisking-government-tech/section_image.html' img_path: "assets/derisking-government-tech/img/vendors-leading-product.svg" %}

A government custom software project is successful only if the software delivers on the intent of the particular policy or service it was designed for. That purpose must remain front and center at all times. 

The product owner is responsible for ensuring that software achieves its purpose and meets [quality expectations](#quality-indicators). This work involves leadership throughout the many aspects of the project, including:

* Setting the overall product vision and goals.  
* Communicating constraints.  
* Translating the goals into work.  
* Navigating and recording major decisions.  
* Releasing and evaluating the software.

### Setting product vision and goals {#setting-product-vision-and-goals}

The **product vision** is the guiding statement of what a software project is trying to achieve. It should be clear and concrete about what will *change* in the world by delivering the software. 

For example, the vision for a new system within a benefits program might be: “Make it easier for state agency workers to detect potential fraud and error, and take timely action to resolve discrepancies, while preserving participants’ access to the full benefits they deserve.” The vision for an internal purchasing platform might be: “Create a world where the federal government can work out in the open with nontraditional vendors to get quality solutions delivered quickly and cost effectively for the public.” The vision can have more detail than these examples, but it should be immediately understandable and compelling for those involved in the product. (Consult the [18F Product Guide]({{ "https://guides.18f.gov/product/define/vision/" | url }}) for detailed guidance on creating a vision.)

The vision should be established in the solicitation phase and stated in the contract. During the solicitation phase, the vision informs the goals the government is trying to achieve with the vendor’s help. 

After the contract is awarded, the vision helps the team maintain focus during the project. It provides motivation and serves as a tool for aligning the team toward around the same goal. 

The vision helps the product owner and the vendor team set objectives and prioritize work by providing overarching guidance for what to pay attention to and how to weigh trade-offs. As context for all work, it is important to spend time establishing a shared understanding of the vision at the beginning of the project, communicating it frequently, and realigning around it when necessary. 

The team should check their progress against the vision no less than quarterly and update its approach for delivering on it if needed.  

There are a number of frameworks you can use to help you translate the vision into goals. Nonprofit organizations frequently use the framework of Impact, Outcomes, Outputs. Software development teams more often use Objectives and Key Results; the North Star framework; or Goals, Signals, and Measures. 

Choose a structure that fits how your organization discusses work and goals. Then tie the problems you’re trying to solve to the outcomes the team is pursuing, for example, a 20 percent increase in digital application submissions, a 30 percent decrease in call center requests related to application submission errors, time to deploy a new feature shifts from once a quarter to every two weeks, etc. The most important thing is to have *some* way to explain how the day-to-day product development tasks form building blocks toward the vision. 

### Communicating constraints

It’s also important to identify, communicate, and manage constraints that the development team may encounter while building the product. For example, the programming languages the agency can support or who can have access to production servers. 

Even if a constraint is outside the control of the development team, the government must be transparent about any obstacles the team may face. Sharing this information allows the development team to plan for them. It also allows the development team and the government to brainstorm possible solutions and mitigations together. 

### Translating the goals into work

It is not always easy to translate goals into work that delivers on those goals. In most cases, there are many different ways to approach a problem, and it is rarely clear how well an idea will work before it’s realized and users can try it out. The product owner helps the team to navigate this uncertainty. The product owner works with the team to prioritize work that is most likely to deliver the most progress towards the goal soonest, based on user research.  

#### The role of user research

Once a vendor team starts, it can be tempting to dive straight into software development in order to show progress. A better place to start is for the team to become familiar with and invested in the needs of the system’s intended users. 

Even if user research has been done before the vendor joins the project, conducting a round of user research when the vendor starts is helpful. There are always questions about user behavior to address. It also establishes frequent research as a norm that always informs the next set of product decisions.

It may feel risky or inefficient to involve the whole team in user research, especially a new vendor team. But it helps the whole team gain critical context, understanding, and empathy. People will learn the most from direct user contact, which provides nuances and details that may not be apparent from a summary. Participating in user research helps teams make better decisions about the software and results in less rework later.

#### Understanding the software development cycle  

{% image_with_class "assets/derisking-government-tech/img/software-dev-cycle.svg" "margin-bottom-3 margin-top-4 width-full" "" %}

| Stage | Description |
| :---- | :---- |
| **Prioritize** | Government decides what work the vendor should focus on in a sprint based on discussion with the vendor team, user research, and stakeholder input. |
| **Plan** | Vendor and the government lead divvy up and assign tasks and agree on a “definition of done.” |
| **Build** | Vendor team does the work and uses automated and other quality assurance tools to ensure code quality at deployment. |
| **Ship** | Vendor team delivers the work to the government, including all code and other artifacts. Government leads review for adherence to the quality indicators and definition of done. |
| **Reflect**  | Government and vendor team review the work done in the previous sprint, discuss what worked, and what will need to be tweaked in the next sprint. |

One of the most important roles the government product owner plays in a software development project is working with the team in each sprint to decide what to do next and to evaluate what’s been done. This involves frequent interaction via well-structured meetings which is one reason many teams begin work with an existing set of roles and meetings like Scrum.

To decide what to do next, product owners work with a team to define small pieces of work that it can work on independently. The “small pieces” are commonly written as “[user stories]({{ "/derisking-government-tech/principles/#user-centered-design" | url }}),” which capture what a user is trying to do and why. The process of fleshing out stories is critical to aligning the product owner and team on the work to be done and clarifying its connection to goals.

User stories should be accompanied by a “**definition of done**,” the criteria for when work on a backlog item can be considered “done.” This enables a vendor team to work independently and meet the product owner’s expectations for completeness.

At the start of a sprint, the product owner and vendor team agree on the next stories to work on. Then, at the end of the cycle, the team should demonstrate completed work, even if it won’t be directly experienced by the user. 

Having the vendor team demonstrate the product regularly is an indispensable part of healthy oversight and good product leadership. Along with the quality indicators discussed below, “demos” are the only way the government can be truly confident the vendor’s work is on track. They also help to avoid late surprises. 

Based on the demo, the product owner can then agree if it meets the definition of done or if more work and further clarification of the work is needed. If the work doesn’t meet the criteria to be considered done, it’s not a moment for blame, but for discussion and improving how you communicate and collaborate with the vendor team. After all, it’s impossible to anticipate all aspects of the work ahead of time. Ask questions like: “Was something missing from the definition of done?” “Is the team lacking essential context?” 

### Major decisions {#major-decisions}

Some decisions have risks or impacts beyond what a vendor is pre-authorized to decide. These decisions can include issues like whether to use a new third-party component, what data the system should store, or how a new capability should integrate with existing systems.

The government product owner or technical lead will likely be able to decide some of these on their own. But you will often need to work with the vendor about issues that involve established processes and other government stakeholders. It is the government’s responsibility to consult with stakeholders and ensure that the implications of decisions are surfaced. 

Whether the product owner or another agency representative makes a decision, it’s good practice to document major decisions in an [Architecture Decision Record]({{ "https://18f.gsa.gov/2021/07/06/architecture\_decision\_records\_helpful\_now\_invaluable\_later/" | url }}) (ADR), sometimes just called a “decision record.” This tool helps maintain the system, as well as [communicate the decision and any associated risks to stakeholders](#establishing-internal-agency-communication-and-collaboration).

Major decisions come up frequently at early stages of projects and then in waves, such as during release planning. They should be expected. If a vendor team isn’t flagging major decision areas, the product owner should bring it up in a meeting with the team and the contract administrator. 

### Releasing the software

When the software is ready for use, it’s a good risk management practice to release it to a small group of users first before rolling it out to more people. 

It’s important to discuss a rollout strategy for release early in development. Deciding who will use the product first will inform choices about what to build first and in which order to deliver capabilities, such as a whole payment flow or household registration process. The rollout strategy may also impact decisions about how the system captures and stores data.

As you get closer to release, you may need to flesh out responsibilities for compliance, release, and operations between the vendor team and agency. Oftentimes, the vendor team will need to interact with agency teams at this point, like operations or a help desk. You may need to get involved in these discussions to ensure that all of the teams are getting the information they need for a successful launch.

Before release, many agencies require hands-on or “**user acceptance testing**,” where intended users test the product’s features and functionality. But, hands-on testing doesn’t need to wait until all of the software is complete. It’s better to test a set of capabilities of the software or process before the team moves on. The earlier functionality is tested, the simpler it is to localize and fix issues. 

It is common for the product owner to help coordinate testing and work with the team to ensure that the tests adequately exercise the system. It is also likely you will test the system yourself. These tasks help de-risk the project and help you and other government stakeholders gain confidence in the software before it’s released.

### Evaluating the software

After release, a product owner’s work isn’t over. Systems don’t always perform as they should. They may even cause unexpected problems in the processes they’re part of. A key part of the product owner’s role is to evaluate if the system delivers on the [project goals](#setting-product-vision-and-goals) over time. Information collected after release is also essential for making ongoing development plans.

As with a rollout strategy, it’s important to have an evaluation plan in place before release to ensure the information needed to evaluate the product against the goals is being collected. The vendor may be able to help with evaluating how the software is performing, but the government is ultimately responsible for doing that work.

## Setting up the vendor relationship {#setting-up-the-vendor-relationship}

{% include 'derisking-government-tech/section_image.html' img_path: "assets/derisking-government-tech/img/vendors-relationships.svg" %}

Along with a strong understanding of product leadership, setting up the government-vendor relationship is key to effective vendor management. This begins in the project kick-off meeting and involves being ready to onboard the vendor team and establish healthy patterns for working together.

### Project kick-off meeting

Once the contract is awarded, the first interaction between the government and the vendor takes place at the post-award orientation meeting — the **project kick-off meeting**. 

This is the first opportunity for the product owner and vendor team to talk about the product vision and desired outcomes for the project together. This is also the time to establish how the development team will operate as a unit by sharing expectations about communicating and working with each other, including discussing how particular issues and challenges will be resolved by the development team, government, or both.  

Kick-off will involve a lot of new information for the vendor team. It’s important to be thoughtful in designing this orientation so the team members have time to process and ask questions. 

Consider spreading out orientation topics over a week rather than scheduling the typical half-day or full-day post-award orientation meeting. A multi-day format will allow more robust discussion of each topic area and allow time during and in between meetings to reflect, synthesize, craft follow-up questions, and strategize next steps. Each day should have no more than four sessions. Keep each one to 60 minutes or less to maximize information retention. (Review a [sample kick-off week agenda]({{'/derisking-government-tech/resources/kickoff/' | url}}).) Make sure to capture key orientation information in a written format, such as a README or guide, that the vendor can reference later. (Documentation will also help when onboarding new staff to the project.) 

The project kick-off week should set the expectation for collaboration, so invite the vendor to lead a session of their choosing. They may want the opportunity to lead a team-building session or an open working session where they can ask questions about what they’ve learned.  

It is important to limit attendance to the project kick-off week to only individuals that will participate in the day-to-day work. The week should serve as team-building for the newly formed team. Looky-loos or curious parties should not attend. However, it’s a good idea to invite the project’s executive stakeholder to the first meeting to stress its significance. 

The week after kick-off, the product owner should schedule one-on-one meetings with each member of the vendor team. We encourage all team members to meet in this fashion, especially the product support and technical support on both sides so they can set up recurring meetings and establish open lines of communication early.

### Onboarding {#onboarding}

**Onboarding** a new vendor team involves getting them the access they need to systems, buildings, and government-furnished equipment. An agency typically has processes in place for a common level of access, but a custom software development project will often require a more specialized level of access. The process of getting it can be an arduous journey of paperwork, permissions, and authorizations and take a few weeks to a few months. During that time, the vendor can still bill the government for hours worked.

You can make the onboarding more efficient if you [clear the “path to production”]({{ "/derisking-government-tech/principles/#clear-the-path-to-production" | url }}) during solicitation so software development systems and deployment environments are in place by the time the contract starts. If that work has been done, onboarding is a matter of getting the team access to these environments as early as possible. If not, then that prep work needs to be done and comes with the additional issue of often enmeshing the vendor team in messy discussions about its need for access.  

### Patterns for working together 

By the end of kick-off week, the government and the vendor team should know how they intend to work together, including:

* How often they will meet  
* What will be covered at meetings  
* Who will participate in each type of meeting  
* Who will lead each type of meeting 

As noted earlier, the government should convey the product vision during kick-off and check in about understanding of and alignment on vision and goals quarterly. 

In a best-case scenario, you and the vendor team do planning and review activities together. Whether you use a Scrum-based approach or not, you’ll need enough collaboration time to commit to and complete specific pieces of work in a one- or two-week cycle. You can expect to spend at least three hours per cycle on regular activities, including planning and review meetings in which the team:

* Frames work and discusses desired outcomes  
* Agrees on work to be done next  
* Reviews completed work together   
* Interprets new information and feedback, and decides what to do about them  
* Reflects on how to work better together as a joint team 

#### Regular check-ins with the contract administrator

The product owner should set up regular meetings with the vendor’s contract administrator (or whoever is the step above the vendor team lead) in case a situation requires escalation. These regular check-ins should be at least once a month and last no more than 30 minutes. 

The point of a check-in is to establish a frequent and open channel of communication with contractor leadership to discuss the project’s progress, successes, and challenges. The contracting officer or equivalent isn’t required to attend, but it’s a good practice to invite them for their awareness.

### Establishing internal agency communication and collaboration  {#establishing-internal-agency-communication-and-collaboration}

The start of a contract is a good time for the government to set up ways to track progress, deliverables, invoices, spend rate, and project risks. Even though the designated contract administrator is contractually responsible for approving invoices and accepting vendor deliverables, the product owner and government technical lead are also critical because they will work with the vendor team on a daily basis and will have firsthand knowledge of the team’s roles, responsibilities, and performance.

The contract administrator, product owner, and tech lead should be in frequent contact about the vendor’s performance. Documenting the status of the contract and vendor performance in one shared document will also help make sure that all government roles are in the loop. Common data points that should be tracked during performance include:

* Invoice numbers and dollar amounts (to monitor spending levels)  
* Deliverables and their respective [quality indicators](#quality-indicators)
* Any relevant materials or artifacts that the government and vendor team agrees are meaningful and valuable for tracking performance 

Reporting the development team’s progress to agency leadership is the responsibility of the product owner or contract administrator. Information that shows the vendor’s actual progress, like software demos or communications that articulate the status of work toward outcomes or perceived risks, should be shared to minimize misunderstandings or miscommunication, and surface issues that may need to be addressed by all of those involved.

## Reviewing the vendor’s work {#reviewing-the-vendors-work}

{% include 'derisking-government-tech/section_image.html' img_path: "assets/derisking-government-tech/img/vendors-reviewing.svg" %}

Good vendor management rests on the government’s power and capacity to accept the vendor’s work or ask for rework. This is much more than just quality assurance. Reviewing the vendor’s work effectively requires understanding the software’s intent and acceptable trade-offs. It also requires focusing on the software and not relying on reports about the project’s progress. 

A significant part of the review is checking that the software’s functionality meets user needs. Review should also check the work against the project’s “quality indicators,” which enable the government to assess if a vendor development team’s work meets the expectations for quality laid out in the contract.

### Quality indicators {#quality-indicators}

In software development, “quality” is sometimes assessed narrowly as a lack of defects or bugs. A more productive way to approach assessing quality is to set clear, positive expectations upfront and monitor them continuously throughout a project. Doing so will enable you to build a high-quality product and maintain a healthy vendor relationship. 

As explained earlier, [quality expectations and indicators for your project should be incorporated into the solicitation]({{ "/derisking-government-tech/buying-development-services/#quality-indicators-defined-in-a-quality-assurance-surveillance-plan" | url }}) and open to questions from vendors before they submit a proposal. Communicating these from the get-go lowers the risk of friction between you and the chosen vendor.

It is reasonable and consistent with private-sector tech practices to ask to see proof from your vendor that they are meeting expectations for quality, so don’t be shy about reviewing quality indicators. Think of them as the vital signs to be checked regularly during a project that help make sure the vendor is building high-quality and maintainable software. 

In general, good quality indicators: 

* Create a space for conversations between government and vendor to keep work on track  
* Focus on necessary, user-centered work products  
* Are grounded in common professional standards  
* Rely on facts, not opinions  
* Don’t create additional work for you or the vendor  
* Give the vendor freedom to meet the criteria in a variety of ways

The vendor should be able to demonstrate they are meeting such quality indicators without additional work. Automation tools collect most of the necessary data by default. 

{% capture monitorQualityContent %}
#### When

After the contract is awarded, the project’s quality indicators should be reviewed at every sprint, usually every two weeks, as part of acceptance of vendor work. 

#### Who

To avoid a conflict of interest, a government employee with sufficient technical knowledge should conduct the review. This may either be the agency product owner or a government technical lead assigned to the project, depending on the requirement. 

#### Method

Indicators are evaluated using two methods: manual review and automated testing. 

In a **manual review**, the government reviewer looks at the deliverable and judges whether it meets the standard set by the expectation stated in the contract. For example, the indicator “documented code” is not satisfied by the existence of documentation. The reviewer must judge if the documentation adequately explains the code.

**Automated testing** is done using tools that run tests every time code is submitted, or by some other trigger in the software development workflow. The vendor should set up the tests and provide the evaluator with the results from the testing tools.

After an initial evaluation of all of the quality indicators, the reviewer should talk to the vendor about the results, good or bad. This dialogue should align the reviewer’s and the vendor’s expectations and address early signs of problems or other concerns. Repeated failures to meet quality expectations should be documented and escalated to the appropriate contracting officials.
{% endcapture %}

{% include 'derisking-government-tech/info_box.html' header: "How to monitor quality indicators" content: monitorQualityContent %}

### 18F quality indicators 

18F teams use the following quality indicators in our projects with agency partners. We recommend these as a minimum set that [should be stated in a solicitation and contract for custom software development]({{ "/derisking-government-tech/buying-development-services/#writing-the-solicitation-using-18fs-agile-contract-format" | url }}). They are presented and explained below in the form by which they’re known at the federal level: [Quality Assurance Surveillance Plan (QASP)]({{ "https://www.acquisition.gov/far/37.604" | url }}). 

Each indicator is accompanied by a method or methods that make it easy to review and document. Expect a software vendor experienced in modern software development practices to be able to easily demonstrate they are meeting them at every sprint review. 

Modify our set of indicators to meet the standards and requirements of your agency and project as needed. If, for example, your agency has more thorough requirements for testing accessibility, those are the performance standards you should use. 

When writing a quality indicator, make sure it:

* States a performance standard(s) that is short and clear  
* Is measurable on an ongoing basis   
* Is work that lies within a vendor team’s scope and capacity to control   
* Is not a specific program outcome, such as reduction in processing times, payment accuracy, etc. (The government can’t pass responsibility for program outcomes to a software vendor. A vendor can follow the program’s assessment of how to generate outcomes, but the program is responsible for the ultimate results.) 

#### Tested code

| Performance standard{.width-33-percent} | Acceptable quality level{.width-33-percent} | Method of assessment{.width-33-percent} |
| :---- | :---- | :---- |
| Code delivered under the order must have substantial test code coverage and a clean code base | Minimum of 90% test coverage of all code | Automated testing |

Testing is an essential practice for developing functional software that performs well. 

Developers write automated tests alongside their code that find flaws and/or verify that features function the way they were designed to. As code develops, tests are added so that future changes and additions run through the entire “suite” of tests. This practice ensures that revised and new code don’t break features and functionality.

To meet this quality standard, a software developer must: 

* Use automated testing tools  
* Write automated tests for the code they develop  
* Address the issues that surface in testing immediately 

A developer can easily demonstrate that they’re following these practices by producing summaries of the automated tests that show the code base passes all of the project’s tests.

An important high-level indicator of quality in those reports is **code coverage**, or what percentage of the code base in the project is executed or touched by the automated tests. Code that isn’t covered by any tests is a source of potential errors and a liability for future development. Expect a high threshold for coverage: 18F’s standard is 90 percent. The 10 percent allows a buffer for how much code can be uncovered since full coverage is not always practical. For instance, the developers may have determined that a certain function should be tested manually. 

Automated testing of code isn’t perfect. New errors can get through even with code coverage and testing. When an error gets through automated testing, a developer must fix it and write an automated test for that particular error so that it is caught in the future. 

If a developer can demonstrate they are regularly using automated testing that provides 90 percent or more code coverage and fixes errors quickly, they have tools and practices in place for satisfying the quality indicator of tested code.

#### Properly styled code

| Performance standard{.width-33-percent} | Acceptable quality level{.width-33-percent} | Method of assessment{.width-33-percent} |
| :---- | :---- | :---- |
| Meeting acceptable quality level for this indicator | 0 linting errors and 0 warnings | Styling standards and linters |

**Code style** refers to established standards for writing and formatting a programming language. This practice maintains the readability and consistency of code so that it’s easy to review and future developers can understand and maintain it. 

Every programming language has its own code styling standards, much like there are various style guides for writing. To help them adhere to a code style, developers use code “linters,” which test code against a style’s rules and show code that needs to be changed to meet the chosen styling standard. 

From a quality perspective, it is important that the vendor uses the chosen code style consistently and that styling errors or warnings caught by the code linter are corrected before the code is delivered and integrated into the product. 

As with automated testing, a developer who is following these standards and using linters can easily and regularly produce output from the tool that shows there are currently no styling errors or warnings.

Review 18F’s recommendation for linters for [JavaScript]({{ "https://guides.18f.gov/engineering/languages-runtimes/javascript/#style" | url }}) and [CSS]({{ "https://guides.18f.gov/engineering/languages-runtimes/css/#linting" | url }}).

#### Accessibility

| Performance standard{.width-33-percent} | Acceptable quality level{.width-33-percent} | Method of assessment{.width-33-percent} |
| :---- | :---- | :---- |
| [Web Content Accessibility Guidelines 2.2 – ‘AA’ standards]({{ "https://www.w3.org/TR/WCAG21/" | url }}) | 0 errors reported using an automated scanner, and 0 errors reported in manual testing | Automated and manual testing |

Note: [Section 508]({{ "https://www.section508.gov/" | url }}) obligates federal agencies to make all their public-facing websites and digital services accessible. [Many states have their own accessibility standards.]({{ "https://www.section508.gov/manage/laws-and-policies/state/" | url }})

To meet full compliance with accessibility standards requires using automated and manual testing. 

Developers of public-facing websites can check that their projects meet common accessibility standards by using an open source accessibility testing tool, like [Pa11y]({{ "https://pa11y.org/" | url }}). **Accessibility testing tools** run a series of automated tests on a site that detect accessibility issues. 

Expect accessibility tests to be included in the suite of automated testing tools set up during a project and that you’ll review their results every sprint. Integrating regular automated accessibility testing during development will keep the project on a path towards meeting this quality expectation. 

Manual testing requires more effort than automated, which makes it impractical to do every sprint. An initial manual test should be done when the project’s main functions and interactions can be tested. This initial review will set the base line for the project and often reveals a number of accessibility issues that need to be addressed. 

To resolve the issues, prioritize them into categories of critical, moderate, and low priority:

* Critical issues pose serious accessibility challenges that will exclude users and should be addressed immediately.   
* Moderate issues should be resolved within the next sprint.   
* Low priority issues can be added to the project backlog and scheduled with other project tasks. 

The development team should conduct a manual review for each major release to the project. These reviews should build on the base line and only test the portions of the project that have changed. The team should also document the review and remediation process for each accessibility issue in each phase of testing so there is an ongoing record.

Refer to the [18F Accessibility Guide]({{ "https://guides.18f.gov/accessibility/checklist/" | url }}) for a comprehensive checklist and descriptions of accessibility issues and how to test for them. 

#### Deployed

| Performance standard{.width-33-percent} | Acceptable quality level{.width-33-percent} | Method of assessment{.width-33-percent} |
| :---- | :---- | :---- |
| Code must successfully build and deploy into a staging environment  | Successful build with a single command | Live demonstration |

Modern development processes approach deployment of code through **continuous integration and continuous deployment (CI/CD)**. These tools create a development “pipeline” that automatically builds and deploys the project so it can be tested and then deployed to a production server that runs the public-facing site.

Automated CI/CD tools, which are integrated into version control systems like GitHub, make this practice possible. These tools and practices make it easier to maintain software and quickly make changes in response to user needs.

A development team can demonstrate it has set up the pipeline using CI/CD practices and tools if it is able to deploy a change to the testing (also called “staging”) or public-facing production environment at any time with just a single command. The deployment process should be comprehensively documented in plain language so it is understandable to non-technical agency staff.

#### Documentation 

| Performance standards{.width-33-percent} | Acceptable quality level{.width-33-percent} | Method of assessment{.width-33-percent} |
| :---- | :---- | :---- |
| <ul><li>All dependencies are listed and the licenses are documented</li><li>Major functionality in the software/source code is documented in plain language</li><li>Individual methods are documented in-line using comments that permit the use of documentation generation tools such as [JSDoc]({{ "https://jsdoc.app/" | url }})</li><li>A system diagram is provided</li> | Vendor provides documentation as specified in this section  | Manual review |

As the owner of the software created by the vendor, you need accurate and current documentation of the software so future developers can understand how it was built and why various decisions were made.

There are two types of documentation:

* **In-line documentation** is written into the code as comments that describe what specific pieces of code do.   
* **Supplementary documentation** is written explanation of how the system works, its major functions, and any open source software “dependencies” required to run it. 

For maintenance, it’s also important to document:

* Tools used during the project  
* Software licenses for the tools  
* How to get access to the tools  
* Where log-ins are stored

This documentation is especially crucial if the system will be transitioned from the vendor to the agency. 

The expectation for this quality indicator is that new code and documentation of it are written at the same time. It is most efficient to document new code as it is written and more likely to be accurate.

#### Security

| Performance standard{.width-33-percent} | Acceptable quality level{.width-33-percent} | Method of assessment{.width-33-percent} |
| :---- | :---- | :---- |
| [Open Web Application Security Project (OWASP) Application Security Verification Standard 4.0.3]({{ "https://owasp.org/www-project-application-security-verification-standard/" | url }}) | Code submitted must be free of medium- and high-level static and dynamic security vulnerabilities | Evidence of automated testing per OWASP |

Make security testing a regular part of the sprint review process. Addressing vulnerabilities when they arise will reduce the risk that the project launches with significant security flaws. These practices should make it easy for a vendor to meet the hosting agency’s security and compliance standards.

To check that applications are free from known security vulnerabilities, developers use open source, community-developed security standards like OWASP, and scanning tools that perform automated testing of applications against those standards. 

Security scanning involves static and dynamic analysis. **Static scanning** refers to scanning the source code for vulnerabilities. **Dynamic scanning** refers to security tests of the application that determine if it is protected against common security vulnerabilities. 

As with other automated tests, the vendor should be able to demonstrate the code in its current state doesn’t have any vulnerabilities that are classified by OWASP as either medium- or high-level static or dynamic vulnerabilities.

Learn more about [good practices for security in government]({{ "https://guides.18f.gov/engineering/security/" | url }}).

#### User research

| Performance standard{.width-33-percent} | Acceptable quality level{.width-33-percent} | Method of assessment{.width-33-percent} |
| :---- | :---- | :---- |
| Usability testing and other user research methods must be conducted at regular intervals throughout the development process (not just at the beginning or end) | Artifacts from usability testing and/or other research methods with end users are available at the end of every applicable sprint, in accordance with the vendor’s research plan | Demonstrated evidence of user research best practices  |

Designing human-centered software involves many decisions. A development team’s decisions are better when they’re informed by the perspectives of a system’s intended users. This is why it’s critical to know a team is conducting and making decisions based on evidence gained from user research throughout the entire project. 

User research explores possibilities, tests assumptions, and reduces risk in a project by engaging frequently with end users. It includes qualitative and quantitative methods, including [user interviews]({{ "https://methods.18f.gov/discover/stakeholder-and-user-interviews/" | url }}), [usability testing]({{ "https://methods.18f.gov/validate/usability-testing/" | url }}), [journey mapping]({{ "https://methods.18f.gov/decide/journey-mapping/" | url }}), and [card sorting]({{ "https://methods.18f.gov/validate/card-sorting/" | url }}). It also involves investigating tools and systems, and interacting with members of the public. 

The research approach and methods used on a particular project will vary depending on the problem it’s trying to solve, timeline, phase of the project, goals, and constraints.  

When reviewing user research materials, processes, or deliverables, these are good signs that reflect the use of best practices:

* Recruiting from a diverse population  
  * The team should be recruiting participants with a diverse range of perspectives, needs, and abilities. This helps ensure a product or service will be accessible to anyone who may use it. It’s also important the team consider barriers to use and inclusion faced by various groups who may use the software and recruit people from those groups.   
* Research plan(s) with clear and appropriate goals  
  * Planning ensures that participants’ and the team’s time is respected throughout the research process. It also helps the team adapt its approach in response to real-world conditions. A research plan should include clearly stated and appropriate goals, methods, and research questions.  
* The whole team is part of the research process  
  * It’s a good sign to see active team participation in research planning, observing research sessions, debriefing, and discussing the findings because it indicates shared investment in learning and serving the needs of users. (Every member of a team need not participate in every aspect of research.)   
* Research participants’ privacy is protected  
  * When participants trust you, they are more likely to share full and accurate accounts of their experiences. A large part of maintaining trust with participants involves protecting their privacy. Signs that the vendor is protecting PII (personally identifiable information) include the use of pseudonyms, keeping access to raw notes limited, collecting informed consent, and de-identifying research data before synthesizing.  
* Actionable research findings  
  * After each round of research, the whole team should identify how the research findings change the work planned for the next sprint or for future design efforts. Articulating insights from findings involves various activities that allow the project team to work together to begin to map out larger patterns and themes. 

Learn more about [user research in the 18F User Experience Guide]({{ "https://guides.18f.gov/ux-guide/research/" | url }}).

{% capture codeReviewContent %}
**Code review** refers to the common practice of developers regularly reviewing each other’s code on a project. It is critical to maintaining consistency and quality on a project with many contributors. It allows reviewers to suggest improvements to the code and helps keep everyone on the team aware of what others are doing and how it may affect their own work. 

Code review facilitates the manual review method of assessment required for the code-related indicators explained above. It also helps produce higher quality code with fewer defects. 

While our [sample QASP]({{ "/derisking-government-tech/resources/quality-indicators/" | url }}) doesn’t include a specific quality indicator for code review, expect a vendor team to be engaging in this practice as part of its efforts to meet quality expectations. 

You can ensure a vendor team engages in internal code reviews by asking a vendor how its developers approach them as part of the [proposal evaluation process]({{'/derisking-government-tech/resources/evaluate-bids/' | url}}). It may be done in a formal meeting. It may be done through version control systems like GitHub, in which developers review and approve new code and changes to existing code through “pull requests” before they are integrated or “merged” into the project’s code.

The scope of a code review can range from addressing small issues to large ones. The only rule is that all new code or changes to existing code is being reviewed by *at least one person* before being merged.

It can be a challenge to establish a healthy balance of government involvement in a vendor team’s code reviews. The “right” amount supports the flow of work and doesn’t delay or block it. No involvement increases the risk that the project won’t meet end user needs or critical design flaws won’t be discovered until it is difficult to fix them. Too much can undermine the vendor’s autonomy and motivation to produce quality code independently. For instance, if a government reviewer strictly dictates how something should be done and is not open to dialogue, it can lead to frustration and breakdown in communication. The level of government involvement also depends on the availability of staff with relevant technical expertise. (Consider hiring an independent contractor to act as reviewer if needed.)

Open and regular communication is the key to finding a healthy level. When government experts, or independent contractors working on behalf of the government, are able to participate in the code review process, discuss expectations about their level of involvement with the vendor at the start of work. Then, at every sprint review, proactively solicit the team’s feedback about how that participation is going. Acknowledge and resolve issues before they harm the working relationship.

When technical expertise is not available on the government side to participate in code reviews, ask the vendor to confirm 1\) that they are conducting code reviews, and 2\) to demonstrate, in the form of pull request discussions and approvals, that reviews are happening. 

Learn about [18F Engineering’s approach to code review]({{ "https://guides.18f.gov/engineering/our-approach/code-review/" | url }}).

Review an [example of how to document the code review process in a government technology project]({{ "https://github.com/akhealth/EIS-Modernization/blob/master/code-review.md" | url }}).
{% endcapture %}

{% include 'derisking-government-tech/info_box.html' header: "A note on code review" content: codeReviewContent %}

## Maintaining a healthy vendor relationship {#maintaining-a-healthy-vendor-relationship}

{% include 'derisking-government-tech/section_image.html' img_path: "assets/derisking-government-tech/img/vendors-healthy-relationships.svg" %}

There are common warning signs that your relationship with a vendor is becoming dysfunctional. These include when you and the vendor are:

* Paying more attention to processes and tools instead of individuals and interactions.

* Valuing comprehensive documentation over working software.

* Spending more time negotiating what the contract means instead of collaborating to deliver value.

* Fixating on initial plans instead of accepting change as an inevitable part of the work.

If any of these occur, don’t immediately blame the vendor. These often appear when a vendor team is pressured by the agency to demonstrate they are following the rules of the contract. You can still get the relationship back on track.

### How to manage and resolve conflict

A “healthy” relationship with a vendor on a software development project will still involve conflict. When conflict does arise, it’s important to make it productive instead of destructive. 

You can do that by always staying close to the work and maintaining good communication channels, which will help you detect issues early and address them before they become major problems. 

Many conflicts with vendors are about performance and ultimately become conflicts over contracts. Contracts are legal documents that protect you and the vendor. To some extent they are also an attempt to predict the types of conflicts that could arise and to resolve them preemptively, or at least, to provide an outline for resolution. As such, they are, essentially, relationship agreements. Contracts establish a framework for how the parties will work together. Unfortunately, they are terrible tools for managing software projects. Contract language is typically dense and hard to understand, intended to be difficult to modify rather than accommodating to changing needs, and is designed to meet the needs of someone in a legal or procurement role, not a software project team member. In accordance with the FAR’s guidance for disputes and appeals that govern all federal contracts, we recommend [resolving issues without resorting to contractual claims]({{ "https://www.acquisition.gov/far/subpart-33.2#:~:text=33.204%20Policy.&text=Reasonable%20efforts%20should%20be%20made,572(b)%20)." | url }}).

We’ve found that if the government and vendor team are using the methods for communicating and demonstrating continuous progress that are outlined in this guide, contract claims almost never occur.

The product owner has the most responsibility for resolving conflict since they’re also responsible for maintaining the project’s speed. Some vendors also have an “agile coach,” or someone in a similar mediating role, on the team to help to unblock issues or deal with conflict. The goal for government and vendor is to discuss issues as they arise directly and professionally and resolve them before formal dispute resolution is needed. 

Here are some common issues we’ve seen arise in government-vendor relationships and how they’ve been addressed without resorting to contract claims.

#### Problems meeting the quality expectations 

Monitoring [quality indicators](#quality-indicators) on a continuous basis is the most effective way to get ahead of issues. If the vendor misses one or more indicators, the way to resolve the issue is by discussing it with the vendor and documenting the conversations.

For example, if a vendor isn’t meeting code coverage expectations in early sprints, the technical reviewer should ask the vendor team in the next sprint review meeting what’s causing it to miss the acceptable quality level and discuss remedies together. Documenting the reasons for the problem and the actions the vendor will take in future sprints to correct it should be captured in one place, such as the code repository, for later reference.

#### Staffing misalignment

Avoiding staff misalignment on the vendor team begins during proposal evaluation, when the government should assess the reasonableness and rationale of vendors’ proposed [staffing approach]({{ "/derisking-government-tech/buying-development-services/#staffing-approach" | url }}), including the team’s size and composition of roles. 

Still, if the vendor team is using an iterative approach, the make-up of the team may need to change. For example, after a few sprints, the vendor team might realize there’s a gap in the skills needed to maintain or increase its speed of work. Or user research might reveal a new priority for the project that requires new skills on the team. 

Allowing for an adjustment in staffing is one reason we recommend using a [time-and-materials (T\&M) type contract with a maximum ceiling price]({{ "/derisking-government-tech/buying-development-services/#time-and-materials-type-contract" | url }}) for a custom software project. The T\&M contract type enables the team composition and/or hours to be adjusted as long as the government and vendor agree it’s necessary, and there isn’t a major impact on the estimated ceiling price for the period of performance. 

Staying close to the work enables the government to be able to interpret the reasonableness of proposed staffing changes. It also helps spot potential issues with staffing that should be addressed with the vendor, such as frequent turnover, which might be a sign of friction within the project team. 

#### Turnover of key personnel

In a federal contract, the intention of a [key personnel clause]({{ "/derisking-government-tech/buying-development-services/#adding-a-key-personnel-clause" | url }}) is to ensure a vendor staffs a team that has the necessary expertise and experience for a project. 

If the vendor proposes a change to key personnel after the contract is awarded, the government should discuss the matter with an open mind. A change in leadership on the project might disrupt the flow of the vendor team’s work, so it’s important that the government and vendor discuss the impact of the change and work together to mitigate it. 

Before agreeing to the change, the government should review the résumé(s) for the proposed replacement(s) or meet with them. *However*, the government can’t participate in the vendor’s hiring processes for a replacement, such as reviewing applications or sitting in on interviews. Most agencies are restricted from “acting as an employer” to anyone on the vendor team because they lack “personal service” contract authority (refer to [FAR 37.104]({{ "https://www.acquisition.gov/far/37.104" | url }})). 

#### Doing work outside priority order 

Sometimes a team might work on issues in the backlog that are not in the order of priority set by the product owner. Whenever this occurs, the product owner should find out why. 

There are many possible reasons. The team may not have understood the priorities. It may have disagreed with them. Or, it may have had a logical reason. For instance, the team may have discovered an issue that wasn’t captured in the backlog but needed to be addressed before a prioritized issue. 

If you find that the team didn’t understand the priorities, discuss how your processes and communication can be improved. Clarifying and aligning on how priorities are communicated may be enough to address the issue. 

If the vendor doesn’t understand the priorities, you may need to share more context about the project or program-specific topics. 

If the team doesn’t agree with the priorities, it may be because they have important information you’re not aware of that affects the functionality or integrity of the software. 

If the vendor team understands the priorities but isn’t attending to them, it may be a sign of a staffing issue that the vendor needs to address. For example, if the team repeatedly de-prioritizes an important task, it might indicate weak skills in a particular area or need for a separate workstream. As the product owner, your role is to highlight the impact of the issue on the work and create space and motivation for the vendor to resolve it. 

If the team is choosing to take on more tasks in a sprint than those selected as priorities, it’s not a cause for concern *as long as* the top-priority tasks are being completed at a satisfactory rate. But, if lower priority work is drawing focus away from higher priority tasks, the product owner should address it with the team.

#### Making decisions outside the team’s authority

Good vendor teams sometimes make decisions beyond their authority. Because every agency operates differently, it can be difficult for a new team to know which decisions they are free to make, which decisions need to be communicated along with implications, and which decisions are truly for the agency to decide. The important thing is to spot when this happens and clarify the boundaries of team decision-making. 

Common areas where this issue comes up are:

* Tech re-platforming (such as introducing a new programming framework or data store)  
* Reopening settled questions, especially wanting to redo user research  
* Decisions that constrain launch strategy or operations

While it is the [vendor team’s responsibility to signal when its choices may have a wider impact](#major-decisions), the product owner should strive to create an environment that encourages that communication by asking good questions and remaining engaged throughout the project. Although a product owner should be mindful of leaving decisions to the team that are in its purview, it’s their responsibility to actively manage the consequences of the vendor team’s choices for people outside the team and to consider their long-term impacts.

Like with other challenges, the first thing a product owner should do if a team is making decisions outside its authority is to talk with the team. Escalation should only be a last resort. The product owner should work to clarify the types of decisions to be made and how they want to be involved in each. Decisions on these matters should be written into the document that captures  the team’s operating principles, such as a team charter.

---

**Next:** [Conclusion]({{ "/derisking-government-tech/conclusion/" | url }})
