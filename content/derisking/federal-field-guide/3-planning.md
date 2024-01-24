---
layout: layouts/page
title: Planning
page_title_tag: h2
hidden_guide_title: Federal Field Guide
tags: derisking
description: How to reduce risk when planning software projects by empowering a product owner, doing user research, picking open source and scoping work tightly.
permalink: /derisking/federal-field-guide/planning/
eleventyNavigation:
  key: derisking-federal-planning
  parent: derisking-federal
  order: 3
  title: Planning
sidenav: true
sticky_sidenav: true
subnav:
- text: Empower product owner
  href: '#assign-dedicated-and-empowered-product-owners-to-lead-development-efforts'
- text: Seek constant user feedback
  href: '#involve-end-users-early-and-often-in-software-development-efforts'
- text: Build-or-buy decision
  href: '#consider-tradeoffs-in-build-or-buy-decisions-taking-all-factors-into-consideration'
- text: Default to open
  href: '#default-to-open'
- text: Infrastructure-as-code
  href: '#require-infrastructure-as-code-single-command-deployment-and-per-sprint-government-verification-of-functionality'
- text: Leadership’s role
  href: '#leadership-should-set-direction-and-empower-teams'
- text: Scope efforts
  href: '#software-development-efforts-should-be-tightly-scoped-to-reduce-risk-and-avoid-overspending'
- text: Path to production
  href: '#clear-path-to-production-before-awarding-a-contract'
- text: Remote collaboration tools
  href: '#give-teams-access-to-the-remote-collaboration-tools-that-they-need-to-be-successful'
- text: Technology budgeting
  href: '#invest-in-technology-incrementally-and-budget-for-risk-mitigation-prototyping'
- text: Footnotes
  href: '#footnotes'
---

{% include 'derisking/chapter_image.html' img_path: "assets/derisking/img/fed2-planning.svg" %}

The following sections identify challenges and strategies to mitigate risk while planning custom technology projects in government.

### Assign dedicated and empowered product owners to lead development efforts 

By **Waldo Jaquith**, **Peter Rowland**, **Miatta Myers**, **Vicki McFadden**, **Mark&nbsp;Hopson**

**Challenge**: Agencies are not empowering product owners to be successful.
{.guide-highlight}

#### Executive summary

-   Any agile development effort requires an empowered, accountable, and technically proficient federal leader to succeed

-   Product owners must be given the time, latitude, and authority to succeed and deliver value to end users.

#### Recommendation

To reduce risk of failure and enable a greater chance of success for product development efforts to succeed, the government needs to take back some of the control that it has been outsourcing. This is done by appointing a government employee to serve in the role of product owner for a development effort. The product owner will help set the team's vision and priorities, and accept the contractor's work.

The goal of a [product owner](https://18f.gsa.gov/2020/03/10/ask-18f-po-vs-cor/) is to build a product people want to use. This is different from traditional government jobs, such as project and program managers, who focus on making sure an initiative runs well, and delivers on-time or on-budget.

A common problem government custom software development projects face is that leadership has not set up the product owner to succeed.

Product ownership is often treated as "other duties as assigned," but it is a full-time job. Product owners can't work on several products at any given time, especially if it's a new role for them. Their days should be filled with scrum ceremonies (sprint planning, sprint review, retro, daily stand-ups), clearing blockers for the team, attending usability sessions, meeting with users, communicating with stakeholders, and refining the backlog. Expecting someone to lead a product development team with only a fraction of their time is setting them — and the product — up for failure.

Another common problem is requiring the product owner to work through a governance board to make changes in product direction. Often, governance boards will vote on requirements, not based on any understanding of user needs, and give those requirements to product owners to execute against. That is at odds with an agile approach. Agile methods require that product owners are empowered to act on their understanding of the end users' needs. They should be empowered to say "no" to feature requests that do not meet user needs, and do so often, no matter who in the organization is making the request. This should be well understood and accepted. The product team should be empowered to adjust course throughout a project, based on what they learn. They should be able to communicate freely with their end users. This autonomous product team and product owner role requires cooperation with executive stakeholders. Without this autonomy and support, it is more difficult to deliver the right product to end users.

Product owners come from all walks of life. To serve in this role, they don't need a specific education or work experience background, but they do need to understand the needs of users, be able to lead a team effectively, clear blockers, and deliver results.

They also need a willingness to learn and have the time and space to experiment, make mistakes, and grow. They should also receive training — there are many excellent scrum product owner offerings available — and would benefit from working with an experienced scrum master and/or agile coach as they begin to master this new skill.

### Involve end users early and often in software development efforts
By **Waldo Jaquith**, **Peter Rowland**, **Miatta Myers**, **Vicki McFadden**, **Mark&nbsp;Hopson**

**Challenge**: Product development efforts lack sufficient end user input.
{.guide-highlight}

#### Executive summary

-   Agile is impossible without regular and ongoing feedback from end users. Agencies can't be agile without such feedback.

-   Leadership, governance boards, or proxies should not be "deciding for the user."

#### Recommendation

A wide variety of users are likely to interact with government software. For government programs, an end user of a given product could differ — it could be the public, a warfighter, a field employee, or one of dozens of other groups. Today, end users are not sufficiently involved in government agile projects. Projects that get funded are not always driven by end user needs. It's common to find "agile" projects that lack sufficient — sometimes _any_ — end user feedback.

Without regular and ongoing feedback from actual end users, an agency can't be agile. No level of stakeholder priority-setting or requirements review board processes can substitute for active and continuous end user feedback loops. Someone who had the job of an end user 10–20 years ago cannot serve as a proxy. Surveys do not bring sufficient user feedback into the development efforts. By not communicating with end users, teams could be solving the wrong problems. Under that approach, there is no feedback loop to validate whether the end user is satisfied, which is the primary definition of success in an agile project. This is an extremely risky way of developing software.

Every effort should start with end user research. Every user story in the product backlog should be based on current end user needs. End users should be continuously asked for feedback on product direction to shape the product to their needs. Development teams should be empowered to make changes in direction based on the feedback of end users. In many cases, end users should be included in every sprint review, so they can see the product mature iteratively, and provide feedback on direction.

### Consider tradeoffs in build-or-buy decisions, taking all factors into consideration 
By **Waldo Jaquith**, **Peter Rowland**, **Miatta Myers**, **Vicki McFadden**, **Mark&nbsp;Hopson**

**Challenge**: Customizing commercial off-the-shelf (COTS) can have adverse outcomes.
{.guide-highlight}

#### Executive summary

-   Custom development versus "commercial-off-the-shelf" or COTS is often a false paradigm. Often, agencies will buy COTS and then also pay for custom software development to make the software meet their needs.

-   Agencies should be wary of customizing COTS solutions to meet their needs — this software is difficult to maintain and may leave the agency locked into a long-term, sole-source relationship with the contractor.

-   Most government purchases are _commercial_, not _non-commercial_, and should leverage simplified acquisition procedures.

#### Recommendation

Government agencies often describe challenges and the expense of customized commercial off-the-shelf (COTS) software. These efforts often start out as a pure COTS implementation, until agencies realize that they need to customize the software to meet their needs.

In these situations, the agency pays industry to develop custom software that the agency may end up locked into, especially if, as often happens, the agency did not secure sufficient data rights in its contract.

Over time, these systems become more difficult to maintain, as new features and customizations are added to the base COTS product, each of which bring it further away from actually being COTS. 18F technologists often refer to these products as "unrecognizably modified off-the-shelf" software, or "UMOTS."

Modifying COTS software[^software] eliminates most of the benefits of using COTS. Customized COTS is often modified to the point where routine software updates can no longer be applied. At this point, the software requires expensive custom updates for the duration of the software's life. It also locks the agency into a long-term (and often sole-source) relationship with that contractor.

Without a path to replace highly modified COTS software or to bring it back into compatibility with developer updates, these systems require substantial maintenance expenses over time. Though COTS itself is an appealing way to gain desired functionality rapidly, the hidden costs of modification and the timeline to implement these changes may eventually outweigh these benefits.

Custom software allows agencies to build a solution that serves its unique operating environment. Custom-developed software may require more upfront investment, but over time its operational costs go down. When procured with due attention to acquiring sufficient data rights, custom software also eliminates vendor lock-in and facilitates no-cost reuse.

Before making a build-or-buy decision, teams need to understand end user needs, including the non-negotiable ones, so they can properly assess their options and make the best decision.

A team may want to go with a COTS solution when:

-   The product is under active development and is in widespread use, which indicates that the vendor continues to deliver value and respond to market needs.

-   It doesn't need customization to suit organizational needs.

-   The agency will modify its existing practices to work within the limitations of the COTS software.

-   The COTS software is highly mature in the marketplace, and similar organizations have successfully implemented the solution (with "success" determined by end users, not by the vendor).

A team may want to go with custom software development when:

-   The COTS solution will require change requests or customization.

-   The required COTS customization breaks the ability to apply routine software upgrades and patches.

-   The vendor owns modifications to a COTS system.

-   The COTS software comes with the baggage of having to support a suite of features that the organization will never use. Large COTS platforms are the Swiss Army knife of solutions and can leave agencies paying for large licensing costs to support unused capabilities.

-   The COTS vendor is not transparent about maintenance costs for modifications, migration of existing data, ownership of agency data, or how to export agency data when the contract ends.

-   No other organization has successfully implemented the COTS solution in a situation that is similar to the one the team is facing.

##### Commercial designations and the FAR

Agencies also mistakenly designate their development effort as _non-commercial_. This requires them to use restrictive and time-consuming parts of the Federal Acquisition Regulation (FAR), such as [FAR Part 15](https://www.acquisition.gov/content/part-15-contracting-negotiation). Most government purchases are commercial, whether they are custom software development or COTS purchases. Agencies should leverage simplified acquisition procedures whenever possible.

FAR Part 2 defines "commercial" as:

> [anything] customarily used by the general public or by non-governmental entities for purposes other than governmental purposes, and-

> (i) Has been sold, leased, or licensed to the general public;

> or (ii) Has been offered for sale, lease, or license to the general public;

This includes anything commercially available that is modified either in a way that is "customarily available" in the commercial marketplace or in a way that is:

> "...not customarily available in the commercial marketplace made to meet Federal Government requirements. Minor modifications means modifications that do not significantly alter the nongovernmental function or essential physical characteristics of an item or component, or change the purpose of a process. Factors to be considered in determining whether a modification is minor include the value and size of the modification and the comparative value and size of the final product. Dollar values and percentages may be used as guideposts, but are not conclusive evidence that a modification is minor..."

### Default to open
By **Ian Lee**, **Ryan Johnson**, **Rebecca Refoy**

**Challenge**: Agencies are not taking advantage of the benefits of open source.
{.guide-highlight}

#### Executive summary

-   Developing code in the open benefits agencies in numerous ways: improves code quality; gets active feedback from the public; makes collaboration easier among agencies, contractors, and the public; improves security; and encourages reuse.

#### Recommendation

18F promotes the benefits of using open source technologies and, more broadly, the value of working in the open. The open source principles underlying all our work include:

-   Default to using Free and Open Source Software (FOSS). FOSS is software that does not charge users a purchase or licensing fee to modify or redistribute the source code. It contributes our improvements to that software back to the open source community.

-   Develop our work in the open.

-   Publish publicly all source code created or modified by 18F, whether developed in-house by government staff or through contracts negotiated by 18F.

18F asked a few of our partner agencies[^agencies] about how open source has worked for them and what the future looks like across the executive branch:

**Department of the Interior's Office of Natural Resources Revenue:**
>"...the principles of transparency — emblematic in both the open data and open code that power the site — continue to inform our approach. We want the site to embody openness and transparency both in the content provided and in the way we build. For that reason, we use open source software to build the site, and we use GitHub to manage our code and workflow in the open."

**Department of Justice's Office of Information Policy (OIP):**
>"Working in the open to get active and frequent feedback from public and government stakeholders was the perfect match for the [National FOIA Portal project](https://github.com/usdoj/foia.gov). Given the core purpose of the FOIA, to shed light on government activities, it was very important to us to develop the first government-wide [National FOIA Portal](https://www.foia.gov/) in the most transparent and open way. Working collaboratively in the open with our diverse stakeholders, we were able to create a dynamic website that meets actual user needs."

>"OIP found that by working in the open, we were not only able to get immediate and active feedback from our stakeholders, but also it allowed other technologists to contribute to the overall success of the project. We would also encourage those who are unfamiliar with the open source process to approach it with an open mind."

**The Department of Defense (DoD)** addresses common security concerns with Open Source Software (OSS):

>"Hiding source code does inhibit the ability of third parties to respond to vulnerabilities (because changing software is more difficult without the source code), but this is obviously not a security advantage. In general, 'Security by Obscurity' is widely denigrated...Some OSS is very secure, while others are not; some proprietary software is very secure, while others are not. Each product must be examined on its own merits."[^merits]

##### Benefits

The public funds government projects, and the government should allow the public to use what it has paid for. The public — and other agencies — should be able to leverage these investments for their own purposes. Re-use reduces redundancies across the public sector for similar investments and facilitates innovation in the private sector.

Developing work in the open allows agencies to own their code and reduces the risk of future vendor lock-in.

Building with open source technologies, and building in an open code repository, may make the final product better. By using open software and working in the open, agencies allow critical evaluation and participation from others. Inviting critique from others can be uncomfortable, but it increases the likelihood that the final product is better — bugs and vulnerabilities are found and fixed quicker and security is improved.

Open source software also shows a developer's skills. Skilled developers want to work on open source projects to demonstrate their skills to colleagues, their current employer, and future employers. When their code is available for anyone to check, their personal standards go up and other developers can contribute to the project to improve outcomes.

### Require infrastructure-as-code, single-command deployment, and per-sprint government verification of functionality

By **Waldo Jaquith**

**Challenge:** Agencies do not own their technical stack through the use of DevOps.
{.guide-highlight}

#### Executive summary

A great deal happens between a developer writing code and then running the code where people can use it. It is important that the government controls the entire process to avoid vendor lock-in.

#### Recommendation

When contractors develop software, and are also in charge of the deployment and hosting of that software, it has the potential to create a conflict of interest.

If the contractor creates an opaque and convoluted deployment process, or complex and undocumented hosting requirements, then it puts the agency at risk of another form of vendor lock-in. The code is never in the custody or control of the agency at any time, from when it is authored until it is deployed to production.

A software-development contractor should not also provide the hosting service for that software. The agency must be in charge of which software is deployed to the agency's hosting environment. Many contractors prefer this approach, they do not want the liability associated with having direct access to government hosting infrastructure.

If the contractor properly automates the entire DevOps process and complies with the requirements of the Quality Assurance Surveillance Plan (QASP), then the agency can perform that deployment with a single command or click.

An important part of this automation process is defining infrastructure as code. That is, instead of providing prose-based instructions about the specifications for each server required ("needs one MySQL database with 2 CPUs and 4 GB of RAM"), they should provide those instructions as machine-readable code that will create virtual servers on the fly.

For example, here are instructions, written in Terraform (a programming language) that will create a web server:

```
provider "aws" {

    region = "us-east-1"

}

resource "aws_instance" "web_server" {

    ami = "ami-00068cd7555f543d5"

    instance_type = "t3a.medium"

}
```

These instructions specify the creation of a server in Amazon Web Services' Northern Virginia hosting facility, running Amazon's version of Linux, with 2 CPUs and 4 GB of RAM (what AWS calls a "t3a.medium"). A new stanza is written for each additional server that is required. This file is part of the source code developed by the vendor and delivered at the end of each sprint. Doing this ensures that the technical infrastructure matches the needs of the software, and that government can manage its own infrastructure without giving the vendor access to the government's hosting environment.

This code can be configured to fit a project's specific needs and an agency's specific cloud provider. If a project uses Microsoft Azure instead of AWS, swap out "aws" for "azurerm". To create more, fewer, or different resources, simply make the relevant changes to the instructions.

The government can review these proposed instructions as a pull request before they are used in production, just as they would for application code. AWS, Azure, and Google Cloud are all current cloud infrastructure providers to GSA. This example is for educational purposes only and is not intended to make any statement on the relative merits of AWS or Azure.

By having contractors use DevOps and define infrastructure as code, agencies can monitor and control technical work, and retain ownership over their technical infrastructure.

### Leadership should set direction and empower teams
By **Peter Rowland**, **Mark Hopson**, **Vicki McFadden**, **Miatta Myers**, **Waldo Jaquith**

**Challenge:** Leadership's role differs in an agile project.
{.guide-highlight}

#### Executive summary

Leadership's role in agile development is to empower teams, align organizational governance and oversight practices to agile development, and remove blockers.

#### Recommendation

Leadership's role in an agile project should not be to dictate requirements, set stringent timelines, solve problems, or make decisions on behalf of the user.

Instead, leadership should support and empower the development teams, and give them permission to make small mistakes and learn from those mistakes.

Leadership has an important role to play in establishing an organizational priority to adopt agile development, and aligning governance and [oversight processes](https://docs.google.com/document/d/1h3UBJk2PhggKu4LgCZQXCNvtXnFY3q6hv34bs-nysvo/edit#bookmark=id.cb8wc9gku3m8) to this methodology.

The artifacts that agencies typically look at when reviewing a project's progress are time-consuming to produce and discourage agile development. "Waterfall muscle memory" is strong in most agencies; most of the internal practices and processes have been established and reinforced over decades, and are not suitable for agile development. Employees who have spent years performing work in the service of leadership's needs will need time to learn how to prioritize user needs.

Internal management processes that demand detailed requirements documentation will make agile impossible. This is a large shift that will take a long period of time, and missteps will be made along the way. It's essential to have leadership in place to spearhead this effort. Without a significant and focused effort to shift an organization's culture, agile development is unlikely to succeed on a larger scale.

Other constructive involvement of leadership and key stakeholders in agile development may take the form of providing funding, helping to set the product vision, monitoring product roadmaps and backlog, attending sprint reviews and user research sessions, helping overcome bureaucratic hurdles, and serving as authorizing officials in security accreditations.

The level of leadership and stakeholder involvement needed is personality- and team-dependent, so there likely isn't a one-size-fits-all approach that will work with all teams.

### Software development efforts should be tightly scoped to reduce risk and avoid overspending

By **Mark Hopson**, **Vicki McFadden**

**Challenge:** Programs are receiving too much money for software development projects.
{.guide-highlight}

#### Executive summary

-   Building technology with loosely coupled parts means that agencies no longer need to undergo the big, upfront design, procurement, and implementation of large systems. Systems should be split into modules that deliver functionality to users, and the infrastructure to support a given module should be determined by the development team in the sprint in which it is needed.

-   Scope projects so that one or two scrum teams can deliver functionality to users, keep the period of performance to three years or less, and don't spend more than $10 million per modular contract.

#### Recommendation

18F often works with a program that intends to spend between tens and hundreds of millions of dollars for a software development project.

When we ask why they're spending so much, we often hear that the project is important to the agency's mission, the project is a priority for agency leadership, or that their end users are really counting on them to deliver this functionality.

It's counterintuitive, but _spending more money on a project increases the chances of failure._ Of government software projects that cost more than $6 million, only 13% succeed. But of those that cost less than $1 million, 57% succeed. [^succeed]

##### Old trap: Fund and do all the things, right now

Here's a common government IT project story.

> A program is identified as a priority. It is given too much money. The agency spends months or years gathering requirements from every stakeholder imaginable. The scope becomes untenable. The contract is awarded, with the perception that the risk has been outsourced to the contractor. Leadership celebrates. Government gets red/yellow/green "traffic light charts" monthly that show that the project is on track. The agency cycles through several project managers, each playing "hot potato" with this pending disaster. Several years go by. The traffic light charts finally shift to yellow or red on cost, schedule, performance, or all three. Little to no new functionality has been delivered to end users. Finger-pointing begins.

##### New approach: Pick a place and start delivering value

Instead of this tried-and-true approach that nearly guarantees failure, we advocate for breaking up large, monolithic systems or requirements into discrete chunks that can be delivered by one or two scrum teams.

A few rules:

1.  **No big up-front design:** Under waterfall development, agencies spend months or years getting infrastructure procured and deployed so software development can happen. But this becomes trivial with cloud hosting — instead of spending a lot of time figuring out infrastructure, database, business logic, user interface, etc., those can be created by the scrum team as they work on user stories as "slices" that cut across these layers.

{% image_with_class "assets/derisking/img/story-slices.svg" "" "User stories include all of layers" %}

1.  **No big-bang launch:** Many times, agencies say they intend to swap out a legacy system for a new system all at once, usually described as happening in a single day or over a weekend. This is rarely needed. Most often, we suggest they use a "strangler" (also known as "[encasement](https://18f.gsa.gov/2014/09/08/the-encasement-strategy-on-legacy-systems-and-the/)") strategy to modernize legacy systems.

1.  **Build an ecosystem:** Don't replace the hated old monolith with a hated new monolith. Instead, build a little ecosystem of services, each coupled to the others via open application programming interfaces (APIs). This architecture is the premise of Service Oriented Architecture (SOA). It allows projects to be broken into modules that require minimal-to-no coordination between the teams working on each module.

Once agencies understand that the new system does not need to be entirely designed or defined up-front, we can move directly to how to start work and start to deliver value to users. Usually we help agencies by charting their desired functionality on a 2×2 chart, with user value on one axis and technical complexity on the other.

We start work on the functionality that has the highest user value and the lowest technical complexity. While we want to quickly deliver value to end users, we don't necessarily want to pick the most technically challenging part of the project to start with. Some teams want to go after the most technically complex chunk of work first as a form of pathfinding, but that raises the stakes in a way that inhibits adoption of agile. We're not dogmatic about what "chunk" of work gets picked first, just that the work is tightly scoped and will allow the team to deliver value to users relatively quickly.

This "chunk" of the overall system should be assigned a product owner and allowed to write and award their own contract.

At this point, agencies often face two challenges: 

1.  **Move to agile by team.** Moving to agile tends to bring out organizational antibodies that stifles and discourages innovation. To combat this, we start small. Allow one or two brave teams to test out agile, learn, and recommend for what procedures, practices, and tools must be tweaked to enable agile for the entire organization.

    If several teams are told to adopt agile at the same time, that does not allow for this important learning to occur and scale naturally. A large-scale, simultaneous agile transition requires every team to undergo the same painful and frustrating learning process. These teams will probably develop their own solutions that will be based on the path of least resistance, rather than what is right for the enterprise.

1.  **Don't consolidate contracts.** There is no "economy of scale" when buying professional services. There is no reason to combine several product teams' needs into a single contract award. It does not reduce complexity — rather, it hides the complexity inherent in any development effort. Consolidating contracts increases risk by creating a single point of failure. And it does not allow the agency to buy specialized skills that it might need for just one team.

##### Pricing the cost of an agile software development team

The ideal size of a scrum team is somewhere between four to nine people. Let's pick the high end, nine people, and put together a reasonable mix of talent for the team. Using [GSA's Contract-Awarded Labor Category](https://calc.gsa.gov/) tool, it's simple to estimate the labor cost per hour and multiply that by a reasonable number of hours that a person would be expected to work in a given year: 1,880 (accounting for holidays and leave). Our independent government cost estimate (IGCE) in this scenario, for one year of performance, is $1.9 million.

_Note: The below table represents an estimate using the industry average cost of purchasing services from a private company offering agile software development. If an agency requires their development teams to be on-site or have top-secret security clearances, the pool of available companies to compete on this work will be drastically reduced, and the agency can expect the average hourly labor rates to be substantially higher (especially as the clearance process itself is an added cost). Also, these positions and their hourly rates vary greatly depending on location within the United States that the employee is located._
{.guide-note}

| Position Title          | # of people | Average hourly labor rate[^rate] | Cost       |
|-------------------------|------------:|--------------------------:|-----------:|
| Software Developer Lead |           1 |                      $133 |   $250,040 |
| Design Lead             |           1 |                      $123 |   $231,240 |
| Software Developer      |           3 |                      $113 |   $637,320 |
| Designer                |           3 |                      $102 |   $575,280 |
| Content strategist      |           1 |                      $144 |   $270,720 |
|                         |             |                     **Total** | **$1,964,600** |

Generally, we advise keeping contracts under $10 million for the entire period of performance, which we usually set at three years (one base and two one-year option periods). An agile software development team will produce a great deal of user value during that time. If the work is scoped appropriately, the team should be able to deliver all the major features that users need.

Software is never "done." Even after three years of performance, an agency should expect to award a contract to another, perhaps smaller, software development team to continue enhancing the software and fixing user issues. If not, user needs and technical needs will continue to change, while the software fails to change to accommodate those needs. In the eyes of the end users, the latest and greatest software will slowly deteriorate to become the hated legacy software.

##### Communicating cost, schedule, and performance to stakeholders

In the bad old days of software development, an agency painfully detailed out all conceivable requirements, and industry provided a cost and schedule in their bid. This gave the false impression of certainty, because projects rarely ended on time, or on budget, or delivered the functionality that was desired. More often, there were many modifications to the contract to add requirements over time, and the price skyrocketed and the schedule slipped.

With agile development, an agency can give a reasonable estimate for cost and schedule, but the performance is what will change over time based on user research and iterative development.

**Cost** is calculated by using the labor rates proposed by the winning vendor.

**Schedule** is the entire period of performance or some subset of that. For example, some agencies want to deliver a minimally viable product (MVP) in the first 9 months of a software development effort. That's great: it gives the agile software development team a timeboxed window to complete a useful but limited set of functionality for users. But the agency should know that the product will not be done at this time, and will continue to get refined and have new features added post-MVP.

**Performance** is unknown at the start of the project. The agency will have a product vision and a sense of the outcomes they're trying to create for end users, but specific functionality — and the order in which that functionality will be delivered — is unknown and unknowable. Over time, however, an agile software team should be able to provide some estimates about when certain functionality should be delivered.

Product owners should develop a product roadmap and share it with stakeholders. Agencies should not use product roadmaps to forecast  what will be delivered when, but use them to help communicate the priority order in which work is anticipated to be done. They are designed to help deliver the highest value to users within a given budget or time constraint.

### Clear ‘path to production’ before awarding a contract
By **Heather Battaglia**, **T Carter Baxter**, **Kelsey Foley**, **Mark Hopson**, **Waldo Jaquith**, **Vicki McFadden**, **Steven Reilly**, **Greg Walker**

**Challenge:** Not having a clear path to production derails development efforts.
{.guide-highlight}

#### Executive summary

It is demoralizing and expensive if a contractor is brought on to develop software and they can't access the hosting or deployment environments for months. Make sure the path to production is clear from bureaucratic obstacles and well-documented before awarding a contract for agile software development services.

#### Recommendation

Federal agencies often assume a clear path to production. However, when the work with a contractor gets started, delivering and deploying code becomes a challenge that creates a lot of wasted time, effort, and frustration. This can quickly escalate, creating a lot of tension and ill-will at the start of a project.

Before a contract is awarded and the contractor team starts working, the agency should validate whether software can be deployed to an environment where users can see the work. There are two options: prototype a solution, or ask questions to gain clarity before a contractor gets started. Ideally, do both.

##### Prototype a solution

Conduct a short prototyping process (as simple as a single-page "Hello, World" website) to test your agency's ability to support an agile software development project in terms of technology, human resources, and policy. The prototype is a disposable artifact of the process, not something that will ever be deployed for public use.

This work will help the team understand their tool preferences and document internal processes. This will likely be useful supporting documentation in a Request for Proposal (RFP) or to give to the winning contractor so they can get started quickly.

The prototype should answer these questions:

-   What is the administrative process to gain access to the hosting and deployment environment?

-   What processes or policies do a software team need to work through to provision services and deploy applications to them?

-   Which stakeholders are required for approvals? What things do they need to approve? What form do applications for approval take?

##### Ask detailed questions

Pull together a meeting with the relevant individuals at the partner agency — technical, security, Continuous Integration/Continuous Deployment (CI/CD), etc. — to get clarity on the following questions.

-   How are existing products hosted and deployed? Who is involved in those processes?

-   How do we get access to the agency's deployment environment (e.g. Cloud.gov, Amazon Web Services, Microsoft Azure, on-premise servers)?

-   Are there existing technology stacks, solutions, or components that are approved for use, or recommended? Are there any strong preferences among those options?

Having adequate answers to these questions is the _minimum_ that an agency should have going into a build. If they don't know the answer to these questions, or the answers are murky, more investigation is needed prior to publishing an RFP.

##### Success criteria

These are the general criteria to ensure an agency is ready for an agile software team, and can continue with contract award:

-   There is access to a hosting environment, which somebody at the agency administers.

-   There is an organizational account on a social code repository (e.g., GitHub, GitLab, or Bitbucket) for the agency, administered by one or more employees of the agency.

-   There is a process by which changes made to code on the repository are automatically deployed to the hosting environment, and the agency has the ability to release frequently (a.k.a, DevOps, or CI/CD).

If these success criteria are known, a team can feel confident that they can award an agile software development contract and that the contractor onboarding process should be relatively smooth.

### Give teams access to the remote collaboration tools that they need to be successful 
By **Peter Rowland**, **Randy Hart**, **Mark Hopson**, **Waldo Jaquith**, **Vicki&nbsp;McFadden**, **Miatta Myers**

**Challenge:** Distributed teamwork is impeded by restricted access to collaboration tools.
{.guide-highlight}

#### Executive summary

Remote collaboration is incredibly difficult for teams if they are not given access to the necessary collaboration tools they need. Unfortunately, this is commonplace in government.

#### Recommendation

Distributed teams are normal at agencies, as are distributed teams of contractors performing software development work. Allowing employees to work remotely is a great recruitment tool and attracts the best and brightest. It's also more cost effective, increases diversity, increases resilience (for continuity of operations planning), and improves work/life balance for teams. Allowing contractors to be located in a different location than your headquarters increases competition, unlocks the best development resources, and saves money. There's a  [150% difference in the salary of software developers](https://www.bls.gov/oes/current/oes151132.htm#IDX701)  between the most-expensive and least-expensive states in the United States. There's even a similar salary range _within_ some states, such as between Seattle and Spokane, Austin and Abilene, Los Angeles and Eureka.

However, remote collaboration can be difficult for agencies. Agency network restrictions and software approval policies make collaboration with remote team members difficult. Many commonly used tools for video-conferencing are blocked in government buildings. Federal employees often resort to workarounds, like using their personal mobile phones, to get access to the services they need.

Without a set of commonly available collaboration tools, especially for video-conferencing, it is much more difficult for agency teams and contractors to practice agile development, where frequent communication and feedback are needed to facilitate quick decision-making and prioritization of tasks. The product owner should always know what the team is working on, and the team should be readily available to answer questions or huddle to problem-solve issues as they arise. Every sprint, there should be a demonstration of functioning software. Working like this via phone calls, emails, and PowerPoint presentations is _incredibly — and needlessly — limiting_ for a distributed agile team.

In the past, our teams have used the following tools to support remote work. See this [article](https://digital.gov/2017/10/03/3-ways-manage-research-projects-remotely/) to learn more about managing teams remotely. Some of the tools 18F uses:

-   A virtual room like Google Hangouts or Appear.in

-   Mural or a similar sticky-note tool

-   A collaborative writing and editing tool like Google Docs

-   A project planning tool like Trello, Jira, or ZenHub 

-   Code repositories like GitHub, Bucket, etc.

Agencies should determine which collaboration tools their teams need and make those available. As an interim step, agencies may want to develop a provisional Authorization to Operate (ATO) process for piloting tools that are relatively low risk before figuring out which tools should go through the ATO process to be rolled out more broadly.

### Invest in technology incrementally and budget for risk mitigation prototyping 

**Mark Hopson** with special thanks to **Charles Tetreault** and other contributors.

**Challenge:** Budgeting for large, risky investments in major software programs years in advance increases risk of failure during implementation.
{.guide-highlight}

#### Executive summary

-   Compiling several smaller software development projects into a single large project might seem easier — one budget request and one vendor contract — but it increases the risk of failure.

-   Instead of a "lift and shift" approach to planning costs, use a risk mitigation budgeting strategy to incrementally discover needs, gather information, and increase the likelihood of successful modernization.

#### Recommendation

Instead of making large, risky investments in major software programs years in advance, agencies should apply agile principles to break up those larger, monolithic projects into smaller, incremental budget allocations.

This idea of modularity can be found in the [Clinger-Cohen Act of 1996](https://www.govinfo.gov/content/pkg/PLAW-104publ106/pdf/PLAW-104publ106.pdf) as enshrined in FAR Part 39 - Acquisition of Information Technology (which introduced modular contracting). Taking a modular approach compartmentalizes failures, reduces the risk of failure, and brings the size of projects below the threshold for greater agency oversight.

The federal budgeting process is a sequential progression of estimates, documents, and revisions between the executive and legislative branches. The executive branch can only request funds from the legislative branch to carry out an agency mission.

This request begins with the submission of an estimated budget to OMB as part of the preparation of the annual President's Budget. This process is extensively detailed by OMB's policy memorandum for the [Preparation, Submission, and Execution of the Budget](https://www.whitehouse.gov/wp-content/uploads/2018/06/a11.pdf).[^budget] 

When the budget is submitted to the legislative branch, both chambers of Congress undertake an extensive review and approval process. Ultimately, this lengthy process results in the passage of a law whereby Congress grants appropriations to the executive agencies to carry out their respective missions. An appropriation is the authority to incur obligations and make payments out of the Treasury for specific purposes. This power to appropriate lies solely with the legislative branch, known as the "power of the purse," from Article I of the U.S. Constitution.[^constitution]

Almost certainly[^certainly], there is a many-month delay for government agencies receiving its new year funding, called a continuing resolution (CR). With a CR, agencies can spend only at the levels they were authorized in the previous year. New projects can't start. Many-month CRs stall contract awards and the agency's ability to start new modernization projects.

Receiving an appropriation enables an agency to incur an obligation, which is an action that creates a legal liability or a definite commitment on the part of the government for the payment of goods and services ordered or received. A purchasing contract, in other words. The biggest complication created from this process is that it begins about **18 months** before receiving the appropriation.

This kind of planning is counter to the adaptive, agile development, which boasts a vastly greater success rate for building high quality, user-centered digital products and services.

Suzette Kent, former Federal CIO, has said, "We still fund in single-year increments. We still fund like a project has a finite start and stop date. It does not. Just like we have to continually fund the refurbishments of our national parks or our roads, our technology infrastructure is no different."

Another problem of the current budgeting process is how appropriations are categorized. Software is considered an "asset" that exists in one of three life cycle phases:

-   Development, Modernization, Enhancement (DME)

-   Operations and Maintenance (O&M)

-   End of Life (which can come in many different forms such as being eliminated, retired, consolidated, etc.)

DME spending refers to agency projects that results in a "new" IT asset, or modifying an existing IT asset to "substantively" improve its capability or performance.

O&M spending, sometimes called "steady state," refers to the expenses required to operate and maintain an IT asset in a production environment.

This is important because an agency generally cannot spend appropriated funds intended for one category on a different category.

While civilian agencies have to choose between one of two categories, DME or O&M, defense and intelligence agencies have the added frustration of another category, Research, Development, Testing, and Evaluation (RDTE). [^RDTE]

To complicate things even more, many agencies already have software systems in place to satisfy information technology needs with corresponding budgets and contracts.

How does an agency make all of the necessary changes to the existing system while at the same time planning and executing for the unknowable future?

This presents many challenges for agencies. For example, agencies that want to modernize their systems have to write and award a new contract for these DME-funded improvements. The winning contractor will have to work with the existing, O&M-funded contractor to implement those improvements.

These two contractors may have different contracts, different working styles, and no incentive to work together effectively. It often leads to a lot of finger-pointing and frustration.

To avoid the extra effort of requesting funding, awarding, and managing a new contract for these improvements, many agencies simply modify their existing O&M contract for needed enhancements, and hope the cost is low enough so no one notices — or cares — that they agency should have made a DME request.

A single agency system may combine annual software licenses, software-as-a-service tools, and custom code. Hiding this complexity with a single contract / vendor makes untangling knots and making improvements very difficult.

##### Breaking the legacy cycle

According to one GAO report on the current state of software budgeting in the federal government, "in several situations...agencies are not sure whether to report costs as O&M or DME" and so "agencies default to reporting as O&M."[^OM]

In fact, most agencies spend less than 20% of their annual budgets on DME, meaning they seem to be trapped in perpetual O&M spending. One major reason for this, as GAO and OMB cite, is that "agencies tend to categorize investments as O&M because they attract less oversight, require reduced documentation, and have a lower risk of losing funding."[^funding] This last point is especially telling.

If an agency gets their submitted budget estimates wrong, they can request approval from OMB and then from Congress to transfer amounts among these different categories. However, this can be a very lengthy process and getting approval isn't guaranteed. If the funds have to be obligated in the same fiscal year they were appropriated, they may run out of time.

This logistical issue has resulted in a steady increase in spending on O&M for legacy systems. In 2010, agencies' spending on O&M was 68% of the federal IT budget. By 2017, the amount of spending on O&M was at 77%.[^percent]

An agency knows the least about what it will take to fully modernize a legacy system when they draft a budget for that work.

#### Risk mitigation prototyping
Consider a hypothetical production system, meaning actively in-use, for a critical agency mission need. This kind of system would very likely be classified as a "major IT investment" for budgeting purposes. It's not uncommon for these kinds of systems to cost upwards of $20 million a year in O&M cost, based on publicly available information searchable on ITDashboard.gov. [^itdashboard]

The riskiest way that an agency could try to make this transition would be to take that same $20 million spent on O&M for the existing system and simply transfer it into a request for DME funds, coupled with a monolithic contract.

In our experience, risk mitigation prototyping provides far greater insight to the potential pitfalls, stumbling blocks, and other concerns that are only discoverable by actually working with the software code of a system. Risk mitigation prototyping results in code that can be deployed into production for end users or as a useful artifact in the solicitation process. Often, hurdles to deploy to production are discovered that should be mediated before awarding a modernization contract.

In our work with agency partners at 18F, we can often accomplish some form of risk prototyping even with a small team of 3-4 people from GSA. Just a few sprints' worth of effort can reveal information that would never have been known without a substantially riskier investment.

We often include our risk mitigation prototypes with any eventual solicitation to industry. In our experience, potential bidders find this kind of artifact valuable in both deciding whether they would be a good fit for the agency's needs and deciding how to staff a team for such an effort.

If agencies are unable to get budget requests for prototyping effort, there's an excellent alternative through the Technology Modernization Fund (TMF) housed within GSA.

#### Change agile software development appropriations

The Defense Innovation Board's (DIB) report [Software is Never Done: Refactoring the Acquisition Code for Competitive Advantage](https://media.defense.gov/2019/Mar/14/2002101480/-1/-1/0/DIB-SWAP_STUDY_REPORT[DRAFT],_LAST%20MODIFIED_13MAR2019.PDF)  made a number of recommendations to try and improve the success rate for defense agency software projects. In that report, the DIB makes the case that:

> To undertake this path, Congress and OSD must write new statutes and regulations for software, providing increased (and automation-enabled) insight to reduce the risk of slow, costly, and overgrown programs and enabling rapid deployment and continuous improvement of software to the field. Laws will have to be changed, and management and oversight will have to be reinvented, focusing on different measures and a quicker cadence.

There's a promising new development on this front to reduce the complexity and challenges created by multiple types of appropriations for software. This proposal in the DoD would create a [single type of appropriation](https://media.defense.gov/2019/Mar/14/2002101480/-1/-1/0/DIB-SWAP_STUDY_REPORT[DRAFT],_LAST%20MODIFIED_13MAR2019.PDF) to use for software needs, regardless of whether it captures what has historically been bucketed under RDTE, DME, or O&M. This single type of appropriation would resolve a host of issues caused by the appropriation categories and definitions. It would likely be welcomed by many operational components trying to deal with the complexity of modern software in government.

In the meantime, when budgeting for what a future state may look like, the best bet for agencies to make is to start small. Through a mechanism like risk mitigation prototyping, agencies can effectively create a form of risk mitigation budgeting that is evidence-based and incremental. It is in the original spirit of modularity conceived of in the mid-1990s, when the Clinger-Cohen Act was passed to help control "system development risks, better manage technology spending, and succeed in achieving real, measurable improvements in agency performance." [^performance]

The first meaningful step to provide the federal government with the same world-class technology available commercially is to address these risks as early as possible in the process to reduce the likelihood of failure.

**Next**: [Deciding what to buy]({{ "/derisking/federal-field-guide/deciding-what-to-buy/" | url }})

### Footnotes
[^software]: When modifying COTS, keep in mind the existing warranty and any impacts that it may have through such an activity.
[^agencies]: See 18F's [What agencies have to say about working in the open](https://18f.gsa.gov/2018/05/24/what-agencies-have-to-say-about-working-in-the-open/) for specifics.
[^merits]: See the U.S. Department of Defense's [DoD Open Source Software (OSS) FAQ](https://dodcio.defense.gov/Open-Source-Software-FAQ/#OSS_and_Security.2FSoftware_Assurance.2FSystem_Assurance.2FSupply_Chain_Risk_Management) for specifics.
[^succeed]: Projects valued at $6M or greater, in Europe and the United States, that were completed satisfactorily, on time, and within budget. "Haze Report,” The Standish Group, 2015.
[^rate]:  The [CALC tool](https://calc.gsa.gov/) provides a range of Multiple Award Schedules (MAS) ceiling prices for a given labor category. Decisions on reasonable comparison pricing for labor is the judgment call of the contracting officer. The average hourly labor rate will fluctuate over time based on contract awards.
[^budget]: The A-11 memo section related to Information Technology can be found [here](https://www.whitehouse.gov/wp-content/uploads/2020/11/FY22ITBudget_CapitalPlanningGuidance.pdf).
[^constitution]:  As a way to enforce its power of the purse on the executive, there is a significant body of law, called fiscal law, that controls how agencies may obligate Congressional appropriations. Examples include: the Purpose statute (31 U.S.C. § 1301(a)), Antideficiency Act (31 U.S.C. § 1341), Adequacy of Appropriations Act (41 USC 11), Miscellaneous Receipts Act (31 U.S.C. § 3302(b)), Bona Fide Needs (whose statutory basis is found at 31 U.S.C. § 1502, but is defined and interpreted through numerous GAO opinions), and Account Closing (31 U.S.C. § 1555). While readers should consult with their General Counsel on specific application or interpretation of laws, these topics are worth highlighting potential issues they present for modern software acquisitions in agencies.
[^certainly]:Since 1977, the first year under the current system, Congress has passed appropriation bills on-time 4 times: 1977, 1989, 1995, 1997
[^RDTE]: See [FY 2019 IT Budget — Capital Planning Guidance](https://www.whitehouse.gov/sites/whitehouse.gov/files/omb/assets/egov_docs/fy19_it_budget_guidance.pdf) for specifics.
[^OM]: See the U.S. Government Accountability Office's report [Federal Agencies Need to Address Aging Legacy Systems](https://www.gao.gov/assets/680/677574.pdf) at 18 for specifics.
[^funding]: See the U.S. Government Accountability Office's report [Federal Agencies Need to Address Aging Legacy Systems](https://www.gao.gov/assets/680/677574.pdf) at 18 for specifics.
[^percent]: See the U.S. Government Accountability Office's report [Federal Agencies Need to Address Aging Legacy Systems](https://www.gao.gov/assets/680/677574.pdf) at 13 for specifics.
[^itdashboard]: ITdashboard.gov provides federal agencies and the public with the ability to view details of federal information technology (IT) investments online and to track their progress over time. The IT Dashboard displays data received from agency IT Portfolio and Business Case reports, including general information on over 7,000 Federal IT investments and detailed data for over 700 of those investments that agencies classify as "major." According to data collected for the current 2020 fiscal year, there are 514 investments being tracked on the dashboard. Of those, 277, equaling 53.9% are at medium risk, and 32, equaling 6.2% are at high risk
[^performance]: See the U.S. Government Accountability Office's report [Opportunities Exist to Improve Role in Information Technology Management](https://www.gao.gov/products/GAO-11-634) at 1 for specifics.
