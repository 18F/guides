---
title: Budgeting and overseeing tech projects
page_title_tag: h2
hidden_guide_title: State Software Budgeting Handbook
seo_title: Budgeting and overseeing state-level tech projects
tags: derisking
redirect-url: /derisking-government-tech/principles/
description: Guidance for state agencies for budgeting and managing software projects, including tools for recognizing progress and warning signs.
permalink: /derisking/state-field-guide/budgeting-tech/
layout: layouts/page
sidenav: true
sticky_sidenav: true
eleventyNavigation:
  key: derisking-state-budgeting
  parent: derisking-state
  order: 3
  title: Budgeting and overseeing tech projects
subnav:
- text: Risk
  href: '#think-about-risk-in-a-new-way'
- text: Services not software
  href: '#procure-services-not-software'
- text: Customized commercial software
  href: '#beware-the-customized-commercial-software-trap'
- text: Demos not memos
  href: '#require-demos-not-memos'
- text: Hire in-house
  href: '#hire-tech-talent-in-house'
- text: Cost of change
  href: '#minimize-the-cost-of-change'
- text: Measuring success
  href: '#measure-success-based-on-iterative-outcomes-not-project-milestones'
- text: Limit total spending
  href: '#limit-total-spending'
- text: Limit contract sizes
  href: '#limit-contract-sizes'
- text: Systems not monoliths
  href: '#fund-systems-not-monoliths'
- text: Expand vendor pool
  href: '#expand-your-vendor-pool'
- text: Share your software
  href: '#share-your-software'
- text: Operational not capital
  href: '#budget-for-software-as-an-operational-expense'
- text: Ask technical questions
  href: '#ask-technical-questions-of-agencies'
- text: Footnotes
  href: '#footnotes'
---

{% include 'derisking/chapter_image.html' img_path: "assets/derisking/img/agile-best-practices.svg" %}

### Think about risk in a new way

Over the past several decades, government agencies have turned away from using in-house staff, relying on outside vendors to build their mission-critical technology. The decisions to do this were based on trade-offs that seemed like lower-risk options — often driven by limited capacity and promises of cheaper "off the shelf" tools offered by government contractors.

However, we’ve learned from examples like Healthcare.gov that while government can easily outsource the work of creating new technology systems, it cannot outsource the risk of failure.[^failure] Projects that go wrong reflect back on their agencies, not contractors or software providers.

Government is ultimately accountable for its mission, so agencies need to have control of and responsibility for the projects that support that mission. The problem an IT budget request aims to solve is not a technical problem; it is a problem related to fulfilling the agency’s mission, and technology is simply a means to that end.

This doesn’t mean agencies need to do all the work in-house; however, it does mean agencies need to set clear expectations about human outcomes and technical standards related to data security, use, interoperability, monitoring, and evaluation.

Technical knowledge is cheap and abundant, but knowing how to run a state agency is a rare and valuable skill. Government must embrace and own its responsibility and risk of failure, recognizing that technology vendors are hired only to help and should be easily replaceable if they don’t deliver.

#### Checklist {.guide-checklist}

- The project has a dedicated, empowered product owner who is an employee of the mission agency — not a contractor, and not an employee of the state’s IT agency
- Stakeholders recognize that the existing approach (waterfall development) fails the majority of the time, and that moving to agile development and modular procurement is, in fact, significantly less risky
- Stakeholders regard outside vendors as interchangeable tools to accomplish a goal, rather than as the "owners" of a project or its outcome

#### Key questions {.key-questions}

- Are there identified and trained government employees (not contractors) that will serve as dedicated and empowered product owners to set direction, prioritize, and oversee the work of the development team?
- Is there a chain of support for this new approach within the agency all the way up to the governor’s office, central IT, legal and procurement offices, as well as the legislature? Are any of those stakeholders able to block adoption of this new approach? If so, what is the path to escalating issues, ensuring alignment, and preventing those internal blockers from putting the project at risk?
- How is the agency taking responsibility for leading the project and owning the results, rather than trying to outsource risk to a vendor through the contracting process?

### Procure services, not software

Don’t think of procuring custom software as buying a _thing._ Instead, think of it as buying a _service:_ the service of a team of developers and designers performing work as prioritized by the product owner. This reframing leads to a completely different approach — a much simpler approach — to the RFP and to the contract, and is an important distinction for contracting officers.

Your RFP should describe the overall goal of the work, and should include a first attempt at a product backlog — a list of the work that will be done — put together by the product owner. This should look like a list of user stories — tasks to be performed to address the needs of end users — that the work is likely to address, clearly labeled as indicative of the types of work that’s likely to be involved, rather than a fixed scope of work. The RFP should also acknowledge there will be constant change to the work based on shifting priorities and ongoing user research; change is expected, and it’s easy to change software when it’s built in modern ways.

The RFP should use a Statement of Objectives rather than a Statement of Work — that is, it should state the objectives of the project, rather than the specifics of a product that the vendor should produce. Using a SOO instead of a SOW eliminates "change orders" from vendors, because the scope of work is whatever the team is directed to do. (If an ostensibly "agile" vendor mentions change orders, that’s a red flag.)

To ensure vendors deliver work that meets the needed technical specifications, it is important that the RFP include a Quality Assessment Surveillance Plan (QASP) that is appropriate for agile development methods, requiring that the software be inspected at the end of each sprint to ensure that it is tested, secure, accessible, documented, and deployed.[^deployed] (See [sample QASP]({{ "/derisking/qasp/" | url }}).) Meeting this requirement requires regular demonstrations of actual, working software, not memos or descriptions of what a system is supposed to do in the future.

Historically, there has been pressure to only use firm fixed price contracts, on the assumption that this reduces risk. However, if you are in a position to constantly measure software quality, then a time and materials contract — with a ceiling on total spending — allows for more flexibility for the software development team. A time and materials contract also allows for much easier escape clauses if the direction of the work changes or the vendor team is not producing quality software. If a vendor team’s work is inadequate, or their skills prove inappropriate, then no further work need be assigned to that vendor (effectively terminating the contract), and the vendor can be replaced.

#### Checklist {.guide-checklist}

- The project has a dedicated, empowered product owner who is an employee of the agency — not a contractor, and not an employee of the state’s IT agency — whose job it is to prioritize work for the development team
- An agency contracting officer has embraced this project, and is enthusiastic about procuring software in new ways
- The RFP will be solely about procuring development services, not about procuring a tangible thing
- The RFP will require a cross-functional team of designers, user researchers, and developers
- The RFP will be no more than 20 pages in length
- A backlog of at least a dozen user stories has been created and added to the RFP
- A time and materials contract (with a cap) will be used
- The simplest available procurement vehicle that provides access to the targeted vendors will be used

#### Key questions {.key-questions}

- Is the product owner empowered to rapidly make authoritative decisions on behalf of the agency?
- Is the product owner prepared to spend most of their work hours fulfilling the requirements of this new role?
- Is agency leadership prepared to have product decisions led by identified user needs, based on direct conversations with those users, rather than leadership’s personal preferences?
- Does the RFP establish clear requirements about the regular delivery of working code, documentation, testing, and ownership of all work products remaining with the state?

### Beware the customized commercial software trap

Commercial off-the-shelf software (COTS) and Software as a Service (SaaS) can be great ways to rapidly procure new software or infrastructure without having to build it from scratch. For example, it makes perfect sense to buy a COTS word processor instead of building your own custom word processor.

But for major procurements of specialized, mission-critical technology, be extremely wary of claims that COTS or SaaS will work "out of the box." Vendors will often pitch their "customizable COTS" and SaaS as a magic bullet, promising that it will handle your unique regulatory and process requirements. And it might — but likely only after extensive modifications.

Before signing on to those tools, first talk to other state agencies that have used those customized products. Chances are you’ll learn that what’s being sold as an out of the box solution takes a lot more time and money to customize than you’ve anticipated.

Instead of mandating any one solution at the budgeting stage, give agencies the space to determine whether to buy or build various pieces of the system. If the budget allocation mandates COTS, then the agency is likely to wind up locked into a highly modified version of a COTS product, cut off from all future upgrades by those modifications without significant expense. Likewise, mandating SaaS is likely to force the agency to cram their needs into a SaaS product like an ill-fitting shoe, while spending a significant amount of additional money on a "software integrator" to connect it to their existing legacy system, leading to the same type of undesirable lock-in.

It may well make sense to use COTS or SaaS as the core of a major new agency system. But the legislature and the agency needs to go into that with eyes wide open, recognizing that they’re not likely to get a completely turnkey COTS or SaaS solution for specialized agency software.

#### Checklist {.guide-checklist}

- The budget allocation does not mandate the use of COTS, SaaS, or custom software, but allows the agency to fund a combination of those as they find necessary
- Vendors’ claims that their COTS or SaaS product will work immediately, without burdensome modification or customization, are independently investigated by talking to other states and agencies that have used those products and gone through the customization and deployment process

#### Key questions {.key-questions}

- How will COTS software updates be made once the product has been customized to meet the agency’s needs? How much further customization will be required to integrate those modifications, and who will pay for those updates?
- What happens if the SaaS vendor goes out of business one day without warning?
- Will the state have no-cost, easy access to its data, data models, and APIs?

### Require demos, not memos

Historically, progress in software development projects has been measured by comparing the work that has been done to the schedule of work to be done that was established at the outset. This is done by producing artifacts like Gantt charts and lists of completed tasks. But this doesn’t work — agile software development is premised on the idea that this doesn’t work. Modern software development teams have never heard of "CMMI" or "Earned Value Management Systems," and won’t bid on work that includes these requirements.

A better philosophy is _demos, not memos._ Instead of measuring progress by looking at purpose-made artifacts, look at the actual work that is being done. Join the reviews that are held at the end of each sprint, where the work done in that sprint is demonstrated to the project team and invited end users. Try out the website. Install the app. Ask for a "[burn down chart](https://en.wikipedia.org/wiki/Burn_down_chart)" — a graph of work that remains to be done and how much time that will take.

An important part of ensuring that progress isn’t illusory is for the contract to include a Quality Assurance Surveillance Plan (QASP) that requires, at the end of each sprint, that all work meet specific standards. The QASP describes the method by which the government will determine that the vendor’s work is of sufficient quality to accept at the end of each sprint, enabling the vendor to perform those same tests to ensure that there will be no surprises. (See [sample QASP]({{ "/derisking/qasp/" | url }}).)

The QASP does not require producing any artifacts explicitly for the purpose of monitoring the work — the way to monitor the work is by _seeing if it actually works._ This is a very different way to monitor the progress of a technology project. It has the added benefit of being a more objective, observable, functional test than requiring subjective or legal interpretations about whether the work satisfies a long series of system requirements.

#### Checklist {.guide-checklist}

- An empowered, dedicated government employee will serve as the product owner
- There will be no planning or reporting requirements that run counter to agile (i.e., there are no dates by which specific tasks are to be completed and no specifications of exact functionality that will be required — whether in the RFP, the acquisition plan, or legislation)
- There will be a government-employed software developer who will ensure compliance with the QASP at the end of each sprint
- People providing oversight, above the level of the government product owner, are willing to primarily receive "reports" in the form of demonstrations of functioning software and burn down charts, combined with a review of user stories that have been completed and those that remain to be completed
- There is an identified person within the agency who is prepared to provide repeated explanations of progress to each level of oversight, because artifacts of measuring progress on an agile project are unfamiliar to people accustomed to waterfall projects

#### Key questions {.key-questions}

- Is it feasible to provide the end-to-end support for such a radically different approach to measuring progress, from the agency to the governor’s office to the legislature? Is there anybody with the power to dig in their heels and demand a Gantt chart, thus potentially making agile methodology non-viable?
- Whose job will it be to report progress up and out of the agency, e.g., to a legislative oversight committee?

### Hire tech talent in-house

If nobody in the budget office or budget committee has experience with software development, then they are not well-equipped to consider a software development funding request. The same is true of agencies —if nobody in project leadership has experience with software development, then the agency is not well-equipped to lead a software development project successfully. The burden is on the governor’s office, legislators, and agency heads to ensure that their respective organizations prioritize hiring people who have this experience.

While it may be tempting to solve this knowledge gap by relying on somebody from the state’s central IT department, or by relying on a vendor, ultimately mission agencies must have the knowledge in-house to comprehend what they need, what they should be asking of vendors, and assessing the work done by vendors.

To determine if your budget office or your leadership has the experience to consider software requests or lead software projects, start by asking around. All but the smallest agencies will have technical staff who can join project leadership, although vanishingly few budget offices currently employ software developers.

If you don’t currently have the knowledge you need in-house, you’ll need to hire someone who does — even if only seasonally or on contract. A developer or designer with experience building modern software, ideally for government, is your best bet. Also, consider authorizing one or more employees to spend some of their training time learning the basics of agile software development — there are coding "bootcamps" throughout the U.S., including some online-only options.

The personnel cost of bringing in a developer or upskilling your current employees is miniscule in comparison to spending on technology. And once an employee has monitored an agile project from start to finish, they’ll be better equipped to consider future budget requests for custom software.

Likewise, mission agencies must directly employ enough developers that they can oversee the work being done by vendors. They’ll represent the contracting officer, ensuring that vendors’ work is of a high quality and that vendors are working on the right things.

Although software is never "done" — you’ll always need to adapt to changing technology, policy, regulations, laws, and user needs — there will be a point when you need far fewer developers to continue that work. At that point it becomes especially important to have multiple agency employees who fully grasp the software, who are capable of maintaining it.

For larger projects, you’ll need to contract for a development team indefinitely, under the oversight of a government product owner. Under waterfall, this travels under the name of "Operations and Maintenance," but under agile, O&amp;M is simply continued user research, design, software development, etc.[^etc]

#### Checklist {.guide-checklist}

- There are one or more budget-office employees with experience developing complex, custom software in an agile environment who will assist in evaluating custom-software budget requests
- If there are no budget-office employees with relevant experience, the legislature has a contract with a non-conflicted vendor — one with no other contracts with the state and no ties or partnerships with any COTS products
- The agency has identified a specific government employee who will be providing technical leadership for the project, along with evidence of their experience developing custom software in an agile environment

#### Key questions {.key-questions}

- When a vendor delivers code at the end of every sprint, which _specific_ government employee will inspect that code to ensure quality?
- If an agency says they need \$10 million to complete a specific software project, which budget office employee is equipped to know whether that’s an appropriate price? Which _specific_ legislative budget committee employee is equipped to know whether that’s an appropriate price?
- When the procurement is complete, who will maintain the software? Does the agency employ people who know how to maintain it? Will they be brought into the development process so that they can learn about it as it’s built and help ensure it’s something they’re capable of supporting?

### Minimize the cost of change

Your state government will exist longer than any piece of software. And that means one day, your exciting new software system could someday become your hard-to-use, old software system.

As good as software may be today, eventually you’ll need to switch to a new system – whether that’s in whole or in part. And acquiring software as a completed monolith guarantees it will gradually become unable to support an agency’s needs.

Technology changes, government policies change, regulations change, laws change, federal grant requirements change, and leadership’s priorities change — any project that is planned in great detail up front will be unable to adapt to those changes, and will be at significant risk of failure, significant cost and deadline overruns, or costly "change orders."

So rather than acquiring one giant piece of proprietary software, insist that your vendors default to practices like using open-source software and service-oriented architecture. That way, you can optimize for reducing the cost of updating and changing the system from the beginning.

#### Checklist {.guide-checklist}


- Systems, whether cloud-native or being moved to the cloud, will use service-oriented architecture (SOA) that is vendor- and product-agnostic
- To ensure data portability, files will be stored in open, non-patented formats supported by multiple vendors
- APIs will use open schemas
- To avoid product lock-in, open source software will be used instead of commercial software whenever possible
- Government will own all vendor work products
- If using COTS components, the vendor will provide a path to leave for a competitor — both contractually and technologically — with a cost-effective way to export all stored data

#### Key questions {.key-questions}

- What is the plan for reducing the time and cost of future updates to the system due to technology, policy, or vendor changes?
- How much will it cost to change the system to reflect needed technology or policy changes?
- Are the APIs open and usable by other vendors?
- Are the data formats standardized, open, and usable by other vendors?
- Keeping a software system up-to-date will take regular, on-going work — what is the plan to do that?

### Measure success based on iterative outcomes, not project milestones

Value shouldn’t come at the end of a project — it must be provided to end users within no more than six months of the contract being awarded, and constantly from there on out. At the end of the _first_ sprint, working code must be delivered to the agency for its review, and that must continue with every subsequent sprint. End users should evaluate work at the end of each sprint, regardless of whether the work has yet been deployed for daily use.

Don’t measure progress in "story points," lines of code written, person-hours of work, etc. The only measure of success that matters is what value has been delivered to end users. This is best assessed by attending semi-weekly sprint reviews and talking to both the scrum master and the government product owner.

#### Checklist {.guide-checklist}

- The vendor team will use agile
- The vendor will be required to deploy functioning software into a government-owned environment at the end of each sprint
- The project team will interview and test their work with end users routinely, both to inform planned work and to determine whether the work already done is correct
- The RFP will have no mention of a detailed project schedule, and there will be no mention of Gantt charts or Independent Validation and Verification (IV&amp;V) contracts
- A legislative staffer will be assigned to provide oversight of the project, and will coordinate with project leadership to monitor progress by periodically attending sprint reviews

#### Key questions {.key-questions}

- Can the requesting agency deliver value to end users within six months? What, specifically, is that value?
- Is the agency prepared for the vendor to continuously interview and test their work with actual end users of the software — perhaps including agency employees?

### Limit total spending

The greater the amount of money spent on a software project, the greater the odds of failure. As a general rule, plan to spend no more than \$10 million on an entire project.[^project] (There are rare exceptions for extraordinarily complex systems like unemployment insurance, Medicaid Eligibility &amp; Enrollment, and Medicaid Management Information Systems.)

#### Checklist {.guide-checklist}

- The requesting agency understands they’re not being given a small percentage of the resources they believe they need — instead, they’re being given an entirely new process to procure software, as well as adequate funding under that model

#### Key questions {.key-questions}

- If the project "requires" \$20 million in funding, what value can be delivered to end users with \$10 million? Or \$2 million? (If the answer is "none," then this is a project doomed to fail)
- When this spending is matched by federal dollars — especially at a highly-leveraged rate, like the 9:1 match provided by the Centers for Medicare &amp; Medicaid Services for Medicaid Management Information Systems — is anybody going to get in trouble for leaving money on the table?
- Is there somebody whose performance is measured by how much grant funding they raise and who has an incentive to demand that \$100 million be spent, instead of \$10 million?

### Limit contract sizes

Using a single vendor over a long period of time, or for a large number of teams, may feel more comfortable, but it inevitably leads to vendor lock-in. Breaking up projects into several small contracts incentivizes vendors to build a sustainable software ecosystem, instead of a monolith, and makes each contract small enough that the odds of success increase markedly.[^markedly]

Require that no more than \$2 million be spent on any single contract annually, and that no contract last for more than three years, including option periods. That way, you’ll get no more than two development teams from a single vendor. If the project needs more development teams, obtain them from another vendor and have them work separately. Limit the RFP, too, keeping it below 20 pages; don’t spend any longer than 60 days writing it.

In addition to preventing lock-in, there’s another benefit to using smaller contracts: they’re less likely to be protested, because the dollar value doesn’t justify the trouble and legal costs. If you’re respectful and transparent with vendors, and don’t require hundreds of pages of proposals, they will likely want to do business with your agencies in the future.

As the number of people who work on a project increases, so does the amount of time that all of those people have to spend coordinating with each other. The solution to this is to have them work in parallel, which is possible when building with loosely coupled parts. Having more than one vendor team working on your project also provides you with more competitive options if you need to change vendors.

#### Checklist {.guide-checklist}

- If the project will require multiple contracts, the scope of the first contract has been identified, and there is a general idea of what some other contracts may be comprised of
- If there will be more than one development team, service-oriented architecture (SOA) will be employed
- When possible, contracts will be sized within the simplified procurement threshold so they can be awarded quickly and easily
- The identified first project has relatively low technical complexity, low political risk, and high end-user value, so that teams can start practicing working this way while experimenting and learning in a relatively low-risk environment

#### Key questions {.key-questions}

- Have the relevant contracting officers read this handbook?
- Do the contracting officers understand that they’re not being asked to do all of the work that goes into a \$50 million contract? Do they understand that \$2 million contracts are far easier to award and that, under agile, they’ll also be much easier to manage?

### Fund systems, not monoliths

Don’t replace the old legacy system with a new legacy system. Insist on loosely coupled systems that are built incrementally. That way, they’ll never need to be replaced wholesale — they’ll just replace individual components as the need arises.

#### Checklist {.guide-checklist}

- Each contract will be written to deliver value to end users — they’re not for "maintaining servers" or "setting up a database," but for "adding a web-based permit application system" or "simplifying the intake process"
- There will be no single "enterprise architect," because the architecture will emerge iteratively throughout the agile process
- If the project is large enough that it will include multiple scrum teams working simultaneously, there is no expectation that all members of all teams will ever be in meetings together
- The RFP will specify the use of service-oriented architecture for each component

#### Key questions {.key-questions}

- Is there a single point of failure that can bring the whole system down? (If so, that’s probably monolith, not a system.)
- If one vendor’s contract needs to be terminated for non-performance, can the others continue to work without interruption?

### Expand your vendor pool

Your existing vendors are unlikely to employ the modern software development practices outlined in this handbook — they were hired for their legacy practices back when that was what you needed. To find vendors who meet your new needs, you’ll likely need to identify and attract new companies that use modern software development practices.

If it is important to get bids from in-state vendors, then know that odds are good that there are many qualified small businesses that can deliver agile development programs in your state.[^state] However, if you want to drive down the price of bids, then it’s important to consider working with remote or distributed (rather than on-site) vendor teams.

In places like California, Washington, New York, Virginia, and Maryland, the cost of an agile team can be easily twice the cost of a team in the Midwest or the northern plains — a difference of over \$1 million each year with no difference in quality. That’s a price point at which it’s worth rethinking how important it is that the team be local, or even in-state.[^in-state] Encouraging distributed vendor teams also gives you access to a wider talent pool, so it’s smart to embrace distributed working best practices to engage with development teams[^teams] and only require on-site visits when necessary (such as for user research).

How do you find those qualified small businesses? There are a number of cities and states that have created a pool of agile software vendors. For example, [California’s Department of Technology has a vendor pool](https://github.com/CDTProcurement/adpq) that adds new companies on a rolling basis. Seek out and draw from these vendor pools, and include some of these companies in future RFP processes. Also, ask around among colleagues in other state agencies to see if they can recommend any vendors to include. Finally, try thinking like a software developer looking for a job, and check out sites that are well-known for posting job opportunities and professional networking, to identify agile vendors in your state. This entire process only takes a few hours.

Although the procurement team will be tempted to seek out vendors who have previously built a near-identical system, that’s both unnecessary and limits the vendor pool to just a few big, international companies. Instead, they should widen their scope to look for vendors that have built something analogous. A vendor that has built a website to book rental cars can build a website to apply for backcountry camping permits. A lead developer who has built a database to track the positions of comets can build a database to track state-owned vehicles. By seeking relevant expertise with this axis, the procurement team will find plenty of developers who can get the job done.

#### Checklist {.guide-checklist}

- The RFP will be streamlined (no more than 20 pages), and comprehensible by software developers who do not normally work with government
- The acquisition plan includes reaching out to small vendors to encourage them to bid
- The RFP will not be hidden on a registration-required procurement website, but published openly on the web so the vendor community can share it
- The RFP will require that vendors name their key personnel in their proposals — no more than three people — such as the lead developer or the lead designer
- The acquisition plan includes interviewing the finalists about their proposed approach, questioning the named key personnel, _not_ the vendor’s sales staff
- Vendor employees will not be required to work on-site at a government facility
- Vendor teams and the government product owner will be permitted to use a desktop-based video call service, a real-time chat tool, and a public, Git-based version-control system, such as [those available for use by remote employees of the General Service Administration](https://www.gsa.gov/reference/for-gsa-employees/on-the-go) and [other tools commonly used by agile development teams](https://media.defense.gov/2018/Oct/09/2002049591/-1/-1/0/DIB_DETECTING_AGILE_BS_2018.10.05.PDF#page=3)

#### Key questions {.key-questions}

- Are there any benefits — political or otherwise — to awarding contracts to in-state vendors, or even requirements to do so? Might that limit the degree to which you can expand your vendor pool?
- Is \$1 million per year savings for each scrum team sufficient to overcome any objections to remote teams?
- Has lightweight market research been done to know what vendors will be targeted with the RFP, rather than only issuing an RFI and hoping for the best?

### Share your software

An agency’s software is likely to be useful, in whole or in part, to other agencies within the state, to local and regional governments within the state, or to similar agencies in other states. Additionally, in many states [software created as a work of government is inherently in the public domain](http://copyright.lib.harvard.edu/states/), which means an open-records request is all that’s necessary for software to become public.

If the software is published openly, vendors’ employees will be eager to work on it — it becomes a rare case of work that they can add to their portfolio for future jobs or share with friends, which helps to ensure that you’re getting their best work. Also, additional RFPs issued for the project can direct vendors to the code that’s already been written, allowing them to see exactly what they’ll be working on or interfacing with. A federal agency funding the work may be eager to find ways to share your software with other states that they’re also funding.

#### Checklist {.guide-checklist}

- The RFP will require that software source code be written and maintained in public on a social-coding platform (e.g., [GitHub](http://github.com/) or [GitLab](https://gitlab.com/)), from day one
- The RFP will require that software be explicitly dedicated to the public domain or published under an [open source license](https://opensource.org/licenses)
- The RFP will use best security practices by requiring that software be strictly separated from data and secrets (e.g., passwords), with automated testing to make sure that separation is maintained
- The RFP will require that software be documented sufficiently well that a developer with no connection to the project can use it to run their own copy of the software

#### Key questions {.key-questions}

- Will the state or agency security office bristle at the prospect of publishing open-source software and block deployment of the software?
- Are there other agencies in the state or elsewhere around the country who are likely to benefit from this software? Can they be consulted prior to and during the development process?
- Will the agency’s office of general counsel (or its equivalent) object to publishing software in the public domain or under an [OSI-approved open source license](https://opensource.org/licenses)?

### Budget for software as an operational expense

Unlike bridges or other capital infrastructure projects, custom software is never "done," so it’s important to plan for it to be modified continuously. That way it can serve today’s agency needs, not yesterday’s.

For small systems, this may require adding one or fewer FTEs to the agency’s staff of software developers. For large, flagship systems, this may require procuring a team of developers to continually develop and maintain the software.

Software maintenance is sometimes budgeted for as if it is a different activity than initially building software, but that is a mistake. Maintaining software should mean simply continuing to modify it in response to identified user needs, which change continuously along with laws, regulations, policies, best practices, and technology. This requires the same skill sets, methodology, and tasks as building a system in the first place. A proposal to transition software development into an "operations and maintenance" ("O&amp;M") phase should be seen as a red flag,

Rule of thumb: a "scrum team" of 5–9 developers costs
\$1–2 million per year, depending on the cost of living in the area where the developers reside. Funding can be ramped up over the course of several budget cycles, as the requesting agency demonstrates that they’re successfully reducing risk, controlling costs, and delivering iteratively to end users.

Ultimately, this can provide agencies with a predictable source of funding for software projects — replacing unpredictable capital expenditures — while simultaneously providing the legislature with a predictable annual cost for all agency software projects.

#### Checklist {.guide-checklist}

- The agency recognizes that software must be improved continuously as long as it is in use, because "maintenance" is functionally the same as building software in the first place
- The agency plans to procure agile development services
- You have talked with the requesting agency to determine if they would prefer to receive funding over years, as a predictable stream of operational funding, instead of as a lump sum
- This approach has been coordinated with the governor’s office, the budget office, agencies, and the state IT agency — this is likely a radical change that will require trust and cooperation between all parties
- If an agency’s request is at a high risk of failure, you will allocate only a few million dollars in the first year, increasing funding as the project delivers value

#### Key questions {.key-questions}

- Is the requested funding going to be spent within a single budget period?
- Perhaps \$50 million is being requested, but what value can be delivered to end users with \$2 million? And the next \$2 million? And so on?
- Is a federal agency funding the work amenable to taking an operational approach to the funding?

### Ask technical questions of agencies

Budget requests for custom software often feature non-technical people making a technical proposal to other non-technical people. This process doesn’t lend itself to asking key questions, such as many of those found throughout this handbook. It is important to ask all of those difficult technical questions, and to insist on getting the right answers ([see "Questions to ask" for sample questions and answers]({{ "/derisking/state-field-guide/questions-to-ask/" | url }}).

It is no kindness to fund a project that is going to fail. If the agency doesn’t know exactly what they want to buy, they’re not going to get it.

#### Checklist {.guide-checklist}

- The agency will rely on the U.S. Digital Service’s [Digital Services Playbook](https://playbook.cio.gov/)
- If building a website, the agency will direct the vendor to use the [United States Web Design System (USWDS)](https://designsystem.digital.gov/)
- The agency will adhere to the Defense Innovation Board’s "[Ten Commandments of Software](https://media.defense.gov/2018/Apr/22/2001906836/-1/-1/0/DEFENSEINNOVATIONBOARD_TEN_COMMANDMENTS_OF_SOFTWARE_2018.04.20.PDF)"
- The agency has read this handbook
- The rules and questions found in the Defense Innovation Board’s "[Detecting Agile BS](https://media.defense.gov/2018/Oct/09/2002049591/-1/-1/0/DIB_DETECTING_AGILE_BS_2018.10.05.PDF)" guide have been applied to and asked of the agency, and their answers are satisfactory

#### Key questions {.key-questions}

- What exactly does the agency want to buy? Why? Who will benefit?
- Which parts of the system will be custom? Which will be actual (not customized) COTS? How much will those updates cost? What will be done when a commercial component ends production — e.g., if the database company goes out of business?
- Who are the end users of your system? Have you talked to them? What do _they_ want?
- Are you prepared for when changes need to be made?
- How much will it cost to move to a new system?
- What are you doing to avoid paying expensive change fees in the future?

**Next**: [Questions to ask]({{ "/derisking/state-field-guide/questions-to-ask/" | url }})

### Footnotes
[^failure]: For details, see the U.S. Department of Health &amp; Human Services’ Office of the Inspector General report about the Healthcare.gov failure, "<a href="https://oig.hhs.gov/oei/reports/oei-06-14-00350.asp">Case Study of CMS Management of the Federal Marketplace</a>" and Harvard Business School case study, "<a href="https://hbswk.hbs.edu/item/the-spectacular-fall-and-fix-of-healthcare-gov">The Spectacular Fall and Fix of HealthCare.gov</a>."

[^deployed]: For an example RFP, see the <a href="https://github.com/ustaxcourt/case-management-rfq">U.S. Tax Court’s 2018 EF-CMS RFQ</a>, which includes a QASP, under the <a href="https://github.com/ustaxcourt/case-management-rfq/blob/master/02_SOW.md#deliverables-and-performance-standards">"Deliverables and Performance Standards" section</a>.

[^etc]: For more about the difference between O&amp;M and continuous agile development, read <a href="https://18f.gsa.gov/2016/02/23/software-maintenance-is-an-anti-pattern/">"Software maintenance is an anti-pattern"</a> on the 18F blog.

[^project]: In The Standish Group’s 2014 CHAOS Report, based on a survey of 25,000 software projects, they found that software projects that cost more than $10 million succeed only 8% of the time. Outcomes improve substantially as the dollar value is reduced, peaking at a 70% success rate for projects under $1 million.

[^markedly]: In The Standish Group’s 2014 CHAOS Report, based on a survey of 25,000 software projects, they found that software projects’ outcomes get worse as more money is spent. Limiting the spending on each contract segments the project into smaller components, making each component — and the entire project — more likely to succeed.

[^state]: Alaska’s Department of Health &amp; Social Services faced this challenge in 2017, and their Contracts and Procurement Manager wrote about the process that they used to attract small, agile, Alaskan vendors in "<a href="https://18f.gsa.gov/2017/09/12/how-alaska-is-using-transparency/">How Alaska is using transparency to attract modern software vendors</a>."

[^in-state]: The Bureau of Labor Statistics provides <a href="https://www.bls.gov/oes/current/oes151132.htm#IDX701">state-level wage information for software developers</a>, which shows that the difference between the most expensive developers (Washington state) and the least expensive (Puerto Rico) is a 150% wage gap. Even within states there can be tremendous variation in labor costs between urban areas and rural areas. As a result, insisting that vendor teams work on-site can double the cost of software.

[^teams]: See "<a href="https://18f.gsa.gov/2015/10/15/best-practices-for-distributed-teams/">18F’s best practices for making distributed teams work</a>" for specifics.
