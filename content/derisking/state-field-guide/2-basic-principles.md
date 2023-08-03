---
title: Basic principles of modern software design
layout: layouts/page
permalink: /derisking/state-field-guide/basic-principles/
sidenav: true
sticky_sidenav: true
tags: derisking
eleventyNavigation:
  key: derisking-state-basics
  parent: derisking-state
  order: 2
  title: Basic principles of modern software design
subnav:
- text: User-centered design
  href: '#user-centered-design'
- text: Agile software development
  href: '#agile-software-development'
- text: Product ownership
  href: '#product-ownership'
- text: DevOps
  href: '#devops'
- text: Building with loosely coupled parts
  href: '#building-with-loosely-coupled-parts'
- text: Modular contracting
  href: '#modular-contracting'
- text: Footnotes
  href: '#footnotes'
---
# State Software Budgeting Handbook {.usa-sr-only}

{% include 'derisking/chapter_image.html' img_path: "assets/derisking/img/agile-basics.svg" %}

A technology project’s odds of success improve when the "non-technical" government leaders who fund and oversee it understand six basics concepts of modern software development: **user-centered design**, **agile software development**, **DevOps**, **building with loosely coupled parts**, **modular contracting**, and **product ownership**. You don’t have to be a technologist to understand these general concepts. Once you grasp them, it’ll feel like you’ve gained a new super power, allowing you to cut through the jargon and technical detail, and stay focused on the basics of successfully guiding any software project.

### User-centered design

All software development should be centered on the needs of the software’s actual end users, the specific people who are expected to use it. These "end users" may be applicants for benefits, call center workers, case workers, other state employees or any of innumerable other groups.

Designing with and for users reduces project risks by ensuring the software is solving actual problems (as opposed to what a few stakeholders think the problems actually are). These problems are identified via a variety of research tactics, including interviews and testing for usability.

In user-centered design, all work is in the service of those end users’ needs. That work is identified and prioritized in close and regular collaboration with end users, and is informed by, but not subservient to, any technical constraints. (That is, the goal of the work is to deliver value to users, which involves dealing with the realities of approved programming languages or server software, but work should never be omitted because of the perception that technical constraints would make it impossible.) The technical team and end users regularly review the work, as it is being performed, and the development work on the new software is not considered finished until those end users agree that their needs have been met. Designing with and for users reduces project risks by ensuring the software is solving users’ problems.

### Agile software development

Detailed, long-term plans for major, custom software projects have long been the norm in government. But, as software engineers and policy makers have learned over the years, those plans are never correct. They need a lot of costly modifications, leading to requests for more money to pay for "change orders". It’s time for government executives and budget officials to stop asking for detailed long-term plans, and instead to budget for software projects in a new way.

Planning an entire project upfront is known as "waterfall" development. Imagine planning a month-long family vacation of driving around the United States. Under waterfall, this would entail planning up front each day’s agenda, including the route driven, booking every hotel room, pre-paying for every meal, pre-buying tickets for admission to attractions, etc. This would never work because things change, unexpected options come up, and no rational person would want to lock in every decision at the start of the journey when they don’t know what the journey holds. Instead, most people would map out the general route to be taken and plan a few major stops — the specifics would be sorted out as they progressed along the way.

"[Agile software development]({{ '/agile/' | url }})" refers to using this trip-planning methodology for building and modernizing software systems. Instead of relying on years of costly planning and "requirements gathering" before beginning to write actual software, agile development projects are planned only in broad strokes, with a well defined description of the overall project goal and a strong preference for _just getting started_. A small, empowered, self-motivated team (usually 5-9 people, including developers, product managers, user researchers, writers, and/or security experts) is dedicated to accomplishing that goal, using user-centered design, working in two-week cycles to deliver some actual working software.

On day one, the team plans only what they’ll do for the next two weeks. (The length of a project’s cycles can be as brief as one week or as long as four weeks — two weeks is the most common.) Each task they’ll work on is in the form of a "user story" — a specific user need revealed by user research.[^research] The entire collection of user stories to be worked on is called the "backlog."

The team works on a selected group of user stories for two weeks and, at the end, the team reviews the work that they did, tests it with end users, and then plans the next two weeks by pulling more user stories from the backlog. Repeat. Each of these two-week cycles is referred to as a "sprint."

In the beginning, the software they produce may not seem like much (and may even be replaced by something else later), but it will gradually and systematically inform the project’s technical approach and help the team sensibly integrate the project into an agency’s existing legacy system.

Functioning software is delivered at the end of each sprint, without exception — fully-tested, fully-documented, ready to be used. In this way, value is delivered constantly, until the software is good enough to be rolled out for broad use. The team continues to work until they accomplish all of the goals or they run out of money, whichever happens first.[^first]

The vendor is paid for their employees’ time, not for a software system. Everything created by the vendor — software, documentation, research, designs, _everything_ — is owned by government, delivered to government at the end of each sprint. Technology changes, government policies change, regulations change, laws change, and leadership’s priorities change — any project that is planned in great detail up front will be unable to adapt to those changes, and will be at significant risk of failure, significant cost and deadline overruns, or costly "change orders."

By coupling agile with user-centered design, a development team can constantly iterate toward solving the needs of end users in ways that would have been impossible to learn about up front.

Earlier this year the U.S. Department of Defense’s Defense Innovation Board released its Software Acquisition and Practices (SWAP) Study including a concept paper on "[Detecting Agile BS](https://media.defense.gov/2019/May/02/2002127286/-1/-1/0/DIBGUIDEDETECTINGAGILEBS.PDF)," which provides a useful synopsis of agile practices, and a series of questions to help non-technical leaders understand whether those practices are being followed.

### Product ownership

Taking back ownership of government software projects requires government teams to focus on outcomes, not outputs. This means shifting from some of the traditional Program Management Body of Knowledge practices to a product-oriented mindset.

The word "product" may sound unusual in a government context, but it’s an important bit of tech lingo. "Product" is a shorthand for whatever the thing is that’s being created: a website, an iOS app, an intranet application, etc. Although the word makes more sense for a business that’s selling a literal product, everything else about the concept translates to government perfectly.

The product owner is the key person for any software project, and _must_ be a government employee. The product owner works with users, stakeholders, technologists, and the vendor to envision the direction for the product, with an eye toward delivering value to end users as quickly as possible. They iteratively prioritize and define the work for the product team, as part of the agile process. They measure progress against clear [performance indicators](https://www.atlassian.com/agile/project-management/metrics), and communicate with stakeholders and the cross-functional team that is building the product.

The product owner doesn’t need to be a strong technologist. Instead, they should know the users of the system, the business (for example, Medicaid insurance or DMV services), and policy constraints.

A strong product owner ensures that the vision is clear, the strategy is clear, there is space for teams building the software to learn, and that they are building or buying the right thing to incrementally show value to users. They prioritize ruthlessly to ensure that the product serves user needs, and that activity and attention is focused on the highest-priority needs. They are empowered by their agency to represent stakeholders in making rapid product decisions without the need for many layers of approval. This positioning ensures that the product owner understands everything that the development team is doing and that the needs of government are fully represented.

This is different than typical project management in government IT. The product owner won’t have Gantt charts or a detailed 5-year plan. But they will have a vision for the outcomes that will be delivered to users, and have a path to executing. Their most important job is to understand what the development team is doing and to make sure it strikes the right balance between the needs of government and the needs of end users.

It’s possible for a first-time product owner to learn as they go, but it’s better to be trained in advance. There are many sources of agile and scrum training, some specifically for product owners. These range from YouTube video series to in-person, multi-day classes to become a "Certified Scrum Product Owner." The more important the project, the more formal and rigorous that the product owner’s training should be.

### DevOps

Historically, the teams building software have been separate from the IT teams that are responsible for operating the software once it’s ready for use. A vendor might spend years building new software, and then a government IT team (or a vendor filling that role) might then require many months of work to get that software to function correctly on their servers. This is usually accompanied by frustration and finger-pointing, and can lead to project failures. To address this, government agencies often insist that the vendor building the software also host it indefinitely on the vendor’s infrastructure, which has the effect of ruling out most software vendors (who are not in the hosting business), and creating vendor lock-in with its associated high prices. Relying on these old approaches will get you less and cost more than adopting the modern software tools that are standard in the private sector.

The way to address this is with DevOps. This is the practice of coordinating the work of these two groups to automate the work that goes into testing software and moving it to a live server where people can use it — merging software **dev**elopment and system **op**erations. The developers write a series of automated processes for ensuring that the software will function properly in production, over the course of writing the software itself. Developers cannot merely hand their completed work to the system operations team and declare "hey, it works for us" — they are responsible, both practically and contractually, for their code working properly.[^properly]

Odds are good that most of the software you use every day, whether on your phone or your computer, was written just like this. Under DevOps, testing software quality is automatic, testing software security is automatic, merging multiple developers’ work is automatic, and moving completed software to servers is automatic. (The incorporation of security testing in DevOps is sometimes labeled as "DevSecOps.")

### Building with loosely coupled parts

Large, complex software projects tend to collapse under the weight of administration. No single developer can understand the entire system that they’re contributing to, yet each new member added to a project team increases the complexity of the entire team’s interactions, necessitating new supervisory roles like “software architects,” with whom developers must check before doing any work. The contributors need to coordinate carefully to avoid conflict between their efforts. As a team grows, they’re forced to spend increasing amounts of time managing the project, and decreasing amounts of time actually doing the work.

To avoid this fate, it’s smarter to break large projects into a handful of small, quasi-independent software projects. In this model, each component communicates with other components through simple, modular standards, so that any one piece can be swapped out at any time. Instead of building a monolith that everybody will lament in a few years, you build a little ecosystem, in which each piece can be upgraded and modified easily, as changing needs will demand. Each component is maintained by a single agile team, which documents the component’s application programming interface (API) — the grammatical rules that other components can use to communicate with it. The teams’ need to coordinate is minimal, because they can simply follow the API documentation for the other components that they need to interface with.

When each component uses abstracted APIs (think of them as common standards for using that technology), this is known as using "[service-oriented architecture](https://en.wikipedia.org/wiki/Service_oriented_architecture)" (SOA). This is the same as the concept of "interchangeable parts" that made the industrial revolution possible. Standardized couplings are the underlying concept behind cloud computing, electrical outlets, USB, Legos, trains, and countless other modern products and practices.

Building IT systems using loosely coupled parts, connected by open and available APIs, is the "magic bullet" that allows for flexible, sustainable systems that meet user needs and cost less over time.

### Modular contracting

By combining user-centered design, agile, product ownership, DevOps, and building with loosely coupled parts, it’s possible to break up a large, risky contract into a handful of smaller contracts. A contract should be small enough that the agency will have no compunction about giving no further work to a non-performing vendor, replacing them with a new vendor. (See "[Procure services, not software]({{site.baseurl}}/state-field-guide/#procure-services-not-software)" for how this is done.) The rest of the vendors will continue working, so the total loss of velocity will be minimal. A new vendor should have no difficulty taking over for the old one, since the old one was delivering completed, documented, tested software every two weeks. Another benefit is that small contracts may come in under your state’s simplified procurement threshold, meaning that agencies can write a request for proposals, publish it, and award a contract, all within 90 days or so.

There are vendor teams that specialize in working as we’ve described here. As a rule of thumb, an agile development team of 5–9 people costs between \$1–2M/year, depending on their geographic location.

This approach will require coordination and buy-in from your procurement teams. Procurement personnel are often accustomed to the traditional approach of outsourcing IT projects: one large procurement based on lengthy RFP documents, asking for lengthy proposals and outdated, waterfall-style certifications and qualifications from vendors. Generally, vendors that use agile, user-centered methods don’t have any idea what "CMMI" or "EVMS" is — such standards are no longer considered best practices for creating flexible and cost-effective software systems. This is a barrier to entry for many of the vendors that might be new to government and don’t want to expend all of the resources required to write a proposal.

<p align="center">* * *</p>

Modern software development processes are founded on user-centered design, agile software development, product ownership, DevOps, building with loosely coupled parts, and modular contracting. By understanding those core concepts, you’re in a great position to understand how to budget for software more effectively, and to understand the rest of this handbook.

**Next**: [Budgeting and overseeing tech projects]({{site.baseurl}}/state-field-guide/budgeting-tech/)

### Footnotes
[^research]: A user story reads in form of "as a [role], I need [this thing], so I can [accomplish this]." For example, "as a social worker, I need case notes to be cached on my phone, so that I can access case notes in areas without mobile phone service." All technical work is done in the service of addressing a user story.

[^first]: Stack Overflow’s 2018 survey of 57,075 developers found that <a href="https://insights.stackoverflow.com/survey/2018#work-_-which-methodologies-do-developers-use">85% of professional software developers use agile</a>. And <a href="https://softwaretestinggenius.com/docs/4aa5-7619.pdf">a 2015 study by Hewlett Packard</a> found that "the vast majority of organizations [they] surveyed reported that today they primarily use Agile methods." The process described here is not extraordinary in any way.

[^properly]: For more on DevOps, see the Defense Innovation Board’s "<a href="https://media.defense.gov/2018/Oct/09/2002049592/-1/-1/0/DIB_DEVELOPMENT_ENVIRONMENT_2018.10.05.PDF">Is Your Development Environment Holding You Back? A DIB Guide for the Acquisition Community</a>."
