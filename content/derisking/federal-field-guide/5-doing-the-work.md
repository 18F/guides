---
layout: layouts/page
title: Doing the work
page_title_tag: h2
hidden_guide_title: Federal Field Guide
tags: derisking
description: Vendor management best practices for software projects, from kick-off through measuring performance with a Quality Assurance Surveillance Plan (QASP). 
permalink: /derisking/federal-field-guide/doing-the-work/
eleventyNavigation:
  key: derisking-federal-doing
  parent: derisking-federal
  order: 5
  title: Doing the work
sidenav: true
sticky_sidenav: true
subnav:
- text: Kick-off meeting
  href: '#host-an-effective-post-award-kick-off-meeting-to-energize-folks-for-the-work-to-come'
- text: Agile oversight
  href: '#oversee-agile-projects-by-measuring-end-user-outcomes-instead-of-requiring-project-teams-to-perform-tasks-by-specific-dates'
- text: Post-award administration
  href: '#post-award-contract-administration-looks-different-in-agile'
- text: QASP monitoring
  href: '#monitor-conformance-with-the-qasp-at-the-end-of-every-sprint'
- text: Footnotes
  href: '#footnotes'
---

{% include 'derisking/chapter_image.html' img_path: "assets/derisking/img/fed4-work.svg" %}

The following sections identify challenges and strategies to reduce risk during the post-award phase of custom technology projects in government.

### Host an effective post-award kick-off meeting to energize folks for the work to come

By **Stephanie Rivera**, **Miatta Myers**, **Vicki McFadden**, and **Mark Hopson**<br>
{.guide-authors}

**Challenge:** Traditional post-award kick-off meetings usually do not adequately engage or prepare the contractor to begin work.
{.guide-highlight}

#### Executive summary
A thoughtful post-award kick-off meeting should introduce new team members, empower the government product owner, plan next steps, and get the team excited about the upcoming work.

#### Recommendations

[FAR Part 42.5](https://www.acquisition.gov/far/part-42#FAR_Subpart_42_5) encourages Contracting Officers (COs) to hold a post-award kick-off meeting with the winning contractor. That is often treated somewhere between a check-box exercise and an afterthought.

We recommend being more intentional about the kick-offs, either as one combined meeting (contractual + project) or as two separate meetings scheduled in close proximity to one another. Some Contracting Officers have strong feelings about their procedures for a FAR-required kickoff, and prefer to hold their own separate meeting.

Goals of a post-award kick-off:

**Make introductions:** Start building a new team by getting everybody acquainted.

**Share vision:** Make sure everyone understands the work's purpose and impact.

**Establish roles:** Determine who will play what role on the agency and contractor teams; clarify the lanes for the Contracting Officer, Contracting Officer's Representative (COR), and product owner (PO); outline escalation paths. 

**Publicly empower the product owner**: Make it clear to the team that the product owner is empowered to make decisions, that they are the agency's go-to person, and that the agency expects the product to evolve over time through learning and iteration with users.

**Make time for the contractual kick-off:** If this is held as a single meeting, cover whatever the CO would like to discuss — this can include security, legal concerns, and the COR's and the CO's contractual responsibilities. 

**Establish initial working practices:** Discuss folks' preferred communication methods and working hours; plan tools and technology.

**Plan next steps:** Pick a few action-oriented tasks that get the team started on a positive cadence (e.g. scheduling agile cadence, user research, technical prototype, etc.)

**Get folks excited:** Set the relationship off on the right foot, with the team leaving excited and energized.

&nbsp;  
To align both the government and the vendor, consider these things when planning a kick-off:

**Attendance:** Who will attend?

**Leadership involvement:** Does an agency leader want to kick off the meeting by saying a few words (e.g. underpinning the importance of this initiative, publicly empowering the PO, etc.)?

**Stakeholder management:** Who needs time on the agenda? Who needs to feel heard?

**Agency preference:** 

  - Does the agency have a policy for contract kick-offs?

  - How does the CO/program office usually handle kick-offs?

  - Would they like to have one meeting (combining the contractual kick-off and team kick-off) or two (separating these meetings)?

  - What does the CO want to cover in the meeting (to prevent duplication)?

  - How long are kick-offs, typically? Are they held in-person or virtually? If in-person, and the contractor is remote or distributed, how can these meetings accommodate remote contractors?

**Contractor preference:** Is there anything that the contractor would like to highlight/include in the agenda? 

**Facilitator:** Who will facilitate the discussion?

Thinking through these goals and considerations should help make the kick-off productive and energizing.

### Oversee agile projects by measuring end user outcomes instead of requiring project teams to perform tasks by specific dates

By **Waldo Jaquith**, **Brandon Kirby**, **Vicki McFadden**, **Mark Hopson**, and **Alan Atlas**

**Challenge:** Current oversight practices can discourage agile development.
{.guide-highlight}

#### Executive summary

- Most oversight and governance methods for waterfall software development do not work for agile software development. In fact, they make agile development difficult. 

- Requiring that project teams accomplish tasks by a specific date prevents them from responding to user needs and makes them build to predefined requirements.

- The only meaningful measure of success of an agile project is the delivery of value to end users through working software.

#### Recommendation

Traditional models of project oversight are based on reaching specified milestones by specified dates. Oversight, in the government context, means determining whether those milestones are being reached on time and, if not, why.

Agile software development rejects this feature-deadline paradigm. Instead, agile solves end users' problems by continuously researching and re-prioritizing planned work based on what that research uncovers. 

For example, a project team may initially plan to complete a specific feature within a few months, but subsequent user research may reveal that the work is of low value, and not worth doing.

There is no way to marry the standard model of software development oversight with agile software development — they are inherently at odds.

Even if it were possible, we would not want to keep this standard oversight model. Our research revealed that new agile program managers spend most of their time not managing the product development effort, but working on reports to their oversight bodies and funders to document compliance. This documentation is likely to report things are going well, regardless of the actual project state, and offers little utility. 

Agile software development means performing user research, documenting end user needs, performing work in the service of those users, and then presenting the work to assess whether it meets their needs. Observing the team's working practices and product's maturity over time is the best method of oversight.

##### How to oversee agile software projects

The only meaningful measure of success of an agile project is delivery of value to end users in the form of working software. 

User value should grow constantly, every sprint. How a team measures that, whether through some type of quantitative metric or qualitatively through constant user feedback, will be team-dependent.

###### Sprint reviews

Work quality is best assessed by attending sprint reviews to see the functioning software first-hand. At the end of every sprint, the team will demo the work performed. 

Program or oversight staff can join sprint reviews periodically. Meetings are often held via video teleconference, so they are simple to attend. Seeing functioning software is much more useful than reading reports from other people who have seen the software. Initially, contract administrators may feel unqualified to evaluate the quality of the work performed, but they will gain confidence with experience.

The United Kingdom's National Audit Office's [Governance for Agile delivery](https://www.nao.org.uk/wp-content/uploads/2012/07/governance_agile_delivery.pdf) explains how to perform assessments, specifically section in 3.5, "Principles for governance":

> External assessment or reviews of agile delivery should focus on the
> teams' behaviors and not just processes and documentation. Assessors
> are more effective in providing critical challenges if they have
> high-end skills, including technical and agile delivery experience. In
> addition, they provide better value if they continually review how the
> team is performing, using observation as their main method of evidence
> collection. Key lines of enquiry for assessors include:
> 
> - the skills and experience of the team;
> 
> - the team dynamics — frequency and nature of communication inside and outside of the delivery team, and the level of input to the
> delivery team from the business;
> 
> - the organisational culture — the level of commitment and openness;
> 
> - the timing and nature of quality control by the delivery team — the testing and release framework;
> 
> - the order in which the team tackled the tasks — prioritisation of actions and deliverables, the amount of actions in the backlog list;
> 
> - the way the team changes its activity in response to the results achieved in each iteration; and
> 
> - the value of outputs to the business.

###### Project documentation

One of the Agile Manifesto's principles is "working software over comprehensive documentation," often expressed as "demos, not memos." Do not ask teams to produce documentation just for oversight and governance. This takes away from the time that they could spend delivering value to end users.

There are a number of documents that are likely to be produced and maintained continuously by the scrum teams that can be useful artifacts in the oversight process:

**Product vision:** A short description of the team's goal that they can use to quickly explain the product and galvanize support.

**Product roadmap:** This piece outlines the vision, priorities, and progress of a product over time.

**Product backlog:** This prioritized list of product features and bug fixes is usually written in the user story format.

**Burn-down chart:** After several sprints, the product team can start to project the amount of work remaining in the product backlog and estimate delivery time.

**Burn-up chart:** After several sprints, the product team can start to forecast approximately when certain functionality may be delivered or track completed work to total work.

**Project risks:** A list of conditions that could affect intended project outcomes; the team should actively work to reduce risks to minimize their impact on the project.

###### Data rights documentation

Documentation is also key to securing adequate data rights in the code that the team intends to retain, thereby helping to avoid vendor lock-in. While the contracting team will add the appropriate clauses to the contract, the responsibility falls to the product team to assign, or map, each deliverable or piece of code to the correct clause. This should be done on an ongoing basis as each piece of code or deliverable is submitted for acceptance.

For example, if the code is completely new — i.e., what the FAR calls "first produced in the performance of the contract" — its acceptance paperwork should state that it is delivered with "unlimited rights in accordance with the FAR clause at 52.227-14(c)(1)" (if that clause is in the contract). If the code or deliverable is derived from pre-existing software that has license terms attached — *including open-source software that comes with an open-source license* —  the acceptance paperwork should state that the code is "delivered with the rights specified in the [associated license agreement], which constitutes a "collateral agreement" for purposes of the FAR clause at 52.227-14(c)(2)." Engage the contracting folks early and often to determine which data rights clause is in the contract and which part of it your code falls under.

###### Throwing in the towel

In six months, if a team has not delivered software with value to end users, meet with the project team to decide whether to continue the project. 

The Office of Management and Budget writes, in [their guidance for capital expenditures](https://www.whitehouse.gov/wp-content/uploads/2019/07/FY-2021-IT-Budget-Guidance.pdf#page=38), that "[a]ll software development projects must produce usable functionality at intervals of no more than six months." If the team has not been able to deliver value to users in that timespan, it's time for serious reflection and possible termination for default. [^default]

##### Common antipatterns

Attempts to use traditional oversight processes with agile software development tend to lead to the same common mistakes. 

Do not do any of the following things.

- Forecasting when the software will be "done." The software will never be done.

- Having oversight bodies and stakeholders measure progress in ways that do not add value:

    - **Velocity:** Over time, the product owner should keep an eye on this, but this measure is not useful for anyone outside the product team.

    - **Story points:** Story points are a fictional currency that, again, may be useful for the product team, but not by anyone outside of the team.

    - **Lines of code written:** These have nothing to do with user value in any way.

- Pitting agile teams against one another. There is no common metric to compare one team's progress and deliverables against another's. Don't try.

- Allowing scope creep. 

- Forecasting the completion date of an epic or feature. The product owner should be able to say whether an epic/feature is something that will be addressed in the short-, mid-, or long-term. However, asking them to give the specific date when it will be delivered is asking them to lie.

- Watering down accountability. Always assign a product owner to an effort. Don't split responsibilities between a product owner, business analyst, project manager, governance board, etc.

- Having product backlogs in name only. Instead of the backlog detailing user value in user story format, many agencies have fake backlogs that are just tasks and requirements. 

- Assigning an agile methodology to a team, instead of letting them choose for themselves. Trust your team.

- Using proxies for user feedback. Strive for direct user feedback. Do not rely on the interpretation of "subject matter experts" or people who once did the job many years ago. 

- Using monthly stoplight charts for cost, schedule, performance. 

- Using a requirement traceability matrix. Asking for this is a big red flag for an agile project. With agile projects, the waterfall software development cycle concept of predefined "requirements" goes away and is substituted with "user stories" that describe the intended outcomes of new features in terms of observed user needs.

    - Requirement traceability matrices require teams to make formal change requests and rob them of their ability to rapidly react and adapt to changing needs, essentially undermining a user-centered approach to development.

    - On the other hand, user stories allow the team to prioritize the most important work to be done in the product backlog. They can also iteratively make changes to priority and what is in the backlog as they uncover user needs. This is expected in an agile project, and no formal approvals are needed. 

- Expecting teams to have a roll-out plan before the software is built. 

No agency can move to agile overnight. The shift requires a lot of difficult organizational changes. If those changes aren't made, a brave team might venture down the path toward agile, only to be attacked and ultimately destroyed by organizational antibodies that have been trained to oversee and monitor a project with dated practices that have no place in agile development. 

Using the methods we recommend allows agencies to continue steering the ship while also allowing them to avoid the rocks.

See [18F's agile principles and practices](https://guides.18f.gov/agile/) for more information.

### Post-award contract administration looks different in agile
By **Miatta Myers**, **Vicki McFadden**, and **Mark Hopson**

**Challenge:** If you want to use agile (and agile contracts), you need to be ready for the additional time and effort that working this way requires. 
{.guide-highlight}

#### Executive summary

- Proper post-award contract administration requires more time and effort in agile than in traditional government contracts. Working this way brings many benefits: more flexibility, more control of the product, more transparency into day-to-day work, sufficient data rights remain with the government so vendor lock-in is difficult, and outcomes are better — and delivered faster — for end users. 

#### Recommendation

##### Status quo contract administration

Traditionally in government IT projects, awarding a contract is celebrated as a huge accomplishment. The winning contractor is expected to deliver all the requirements that the government has painstakingly detailed in the contract by the agreed-upon timeline and at the agreed-upon price. 

The role of the government looks something like this:

**Program or Project Manager:** The program or project manager is marginally engaged, usually peeking in on performance through the contractor's monthly reports. 

**Contracting Officer's Representative:** The Contracting Officer's Representative (COR) conveys messages between the program office and the contractor; usually these individuals manage many contracts at a given time and don't have the bandwidth to be intimately involved in a given contract's performance. 

**Contracting Officer:** The Contracting Officer (CO) has most likely awarded a firm-fixed-price contract that is "set it and forget it," which makes approving invoices easy. COs across government are notoriously understaffed and overworked, so the CO will only get involved if there is a problem that can't be resolved by the COR or if a contract modification is required. 

&nbsp;  
Contract modifications are common. A contract can go through dozens of modifications in its lifetime. These modifications can be both administrative ones like changing an official point of contact to a "within scope" change request.

There will be misalignments between what a program office intended as a contractual requirement and what the contractor interpreted the requirement to mean. During software development, the contractor or government will unearth new information that changes the intended design or functionality of the system. Laws and policies will change. Agency priorities and leadership will change. User needs will change. Technology will change. 

The government and the contractor will need to negotiate all of these changes to the form and function of the system. The result will most likely come with a bigger price tag and an extension to the delivery date, especially with fixed price contracts. These static requirements and firm-fixed-price contracts cause government contract values to bloat and delivery dates to extend years past when they were originally imagined.

Unfortunately, this is standard on government software projects.

##### Agile contract administration

With agile contracts, the contract award is just the first step that allows the real work to begin. 

The role of government looks something like this:

**Product Owner:** The government product owner (PO) works closely with the contractor development team to iteratively identify, build, and deliver functionality. The contract period of performance is static. The functionality to be delivered is discovered throughout the project and varies. The price the government pays — because of time and material contract type — is variable, based on team size and hours worked, within the confines of a not-to-exceed cost ceiling. The government PO has discretion over when and what functionality is delivered to end users.

Transparency and open dialogue are paramount in agile practices. The government PO is a member of the development team and plays an active role in setting the vision, prioritizing user stories, and clearing the team's blockers. Alignment between the government and contractor happens daily, so misalignments are quickly identified and resolved. 

**Contracting Officer's Representative:** The COR may or may not be the government PO. The government PO knows what the development team is working on every day; if the COR is not the product owner, the COR knows what the development team is working on every sprint. 

**Contracting Officer:** The CO is more involved than with traditional contracts; they are aware of contractor spending to approve invoices, and they check in with the COR to ensure that the contractor team is delivering value every sprint. 

&nbsp;  
The contract scope is set at the product vision, not at the discrete requirements, so the team has flexibility to identify and implement user needs through the project. Aside from exercising an option, modifications are rare. The not-to-exceed ceiling likely will not change throughout the project. Value will be delivered to end users frequently throughout the project. 

Agile contract administration requires more time and effort on the part of the government, both from the PO and CO. 

But there are many benefits: more flexibility, more control of the product, more transparency into the day-to-day, less opportunity for vendor lock-in, and better outcomes for end users. 

### Monitor conformance with the QASP at the end of every sprint
By **Miatta Myers**, **Vicki McFadden**, **Waldo Jaquith**, and **Mark Hopson**

**Challenge:** The quality assurance surveillance plan (QASP) is different — and requires active oversight — in agile development.
{.guide-highlight}

#### Executive summary

- **Never** allow contractors to write the QASP.

- An agile quality assurance surveillance plan (QASP) ensures that code is tested, properly styled, secure, documented, deployed, and based on user research, at the end of every sprint.

- In addition to assigning a product owner (PO) to agile development efforts, assign a technical lead to review code quality and conformance with the QASP at the end of every sprint. Ideally, this person is a government employee, but a contractor may do this work instead (as long as they're not on the same contract as the development team). 

#### Recommendation

##### Status quo QASP monitoring

On most government IT projects, a quality assurance surveillance plan (QASP) specifies how the government will measure contractor performance/quality. Sometimes, the government allows the contractor to write the QASP for the contract. That is a terrible idea. It's like allowing a restaurant to write their own review. There are all sorts of ways for the contractor to manipulate the performance standards in their favor. 

On most government IT projects, once the contract is awarded, government employees rarely look at the established QASP as a way to assess the contractor's performance. Performance against the QASP is usually a report that the contractor submits to the government monthly or quarterly. The only time that performance against a QASP is really closely watched is if it seems that the contractor is not performing; then the QASP is used as leverage to require a higher level of performance. 

##### Agile QASP monitoring

The government should write the QASP and include it when it issues the solicitation. 

Teams should monitor the QASP at the end of every sprint, and that the contractor be held to a high performance standard and quality level. 

Specifically, we expect the code and documentation to be tested, properly styled, secure, documented, deployed, and based on user research. Teams can use [the QASP that 18F uses on agile development contracts]({{ "/derisking/qasp/" | url }}) and incorporate it as-is.

An agile project's only meaningful measure of success is delivering value to end users through working software. Unfortunately, there is no quantitative way to monitor value to end-users each sprint. 18F's QASP is our best attempt to measure metrics that will impact the product outcomes. 

In addition to having a government PO, we also like to assign a technical lead, ideally, a government employee. A contractor may perform this work as well, especially if there are no other options at the time, but they must be free from any conflict of interest. At the very least, this means that it cannot be someone from the same company, or even contract, as the agile development team. The technical lead must be a neutral party. 

At the end of the sprint, this technical lead will review all the code produced by the contractor team to ensure it conforms with the QASP before the code is accepted. If any of the performance standards are not met, the code will be returned for the contractor team to fix and resubmit. 

This is not a full-time job, but will likely take 4–8 hours per scrum team, per sprint.

**Next**: [Appendix]({{ "/derisking/federal-field-guide/appendix/" | url }})

### Footnotes

[^default]: See Aquisition.gov's [section on FAR 49.4](https://www.acquisition.gov/far/part-49#FAR_Subpart_49_4) for specifics.
