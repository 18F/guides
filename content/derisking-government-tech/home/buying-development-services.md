---
title: Buying custom software development services
permalink: /derisking-government-tech/buying-development-services/
layout: layouts/page
tags: derisking-government-tech
description: Government agencies should buy and budget for custom software development using professional-based services contracting.
show-workshop-cta: true
eleventyNavigation:
  parent: derisking-government-tech-home
  key: buying-development-services
  order: 4
  title: Buying custom software
sidenav: true
sticky_sidenav: true
subnav:
- text: Writing a solicitation
  href: '#writing-a-solicitation-for-a-performance-based-services-contract'
- text: Budgeting
  href: '#budgeting-for-custom-software-development'
---

<p class="chapter-summary">Learn about the elements of a solicitation for a performance-based services contract, and tips on how to budget for technology projects so they can be pursued iteratively and incrementally.</p>

{% include 'derisking-government-tech/chapter_image.html' img_path: "assets/derisking-government-tech/img/custom-development.svg" %}

To acquire a development team to build custom software using modern software development practices, you should use a performance-based services contract. That begins by writing a solicitation in the way outlined in this section. You should also plan [budgeting for technology projects](#budgeting-for-custom-software-development) so it can support an iterative and incremental approach.  

---

## Writing a solicitation for a performance-based services contract

{% include 'derisking-government-tech/section_image.html' img_path: "assets/derisking-government-tech/img/custom-development-solicitation.svg" %}

A **solicitation** is the document that articulates an agency’s need for a product or service in terms that enable businesses to submit bids or proposals within a competitive bidding process. Agencies have different terms for solicitations, including Request for Proposal (RFP), Request for Quote (RFQ), and Request for Offers (RFO), among others. 

The **general solicitation process** has three steps:

1. An agency writes a solicitation to seek industry help to satisfy a need.  
2. Industry reviews and responds to the solicitation with proposals for satisfying the agency’s need.  
3. The agency picks the proposal it has determined to be the strongest offer with the least amount of risk.

This section explains what happens in the first step in the process: market research and the writing of the solicitation. The second step occurs in the vendor context. On the third step, refer to our guidance on [evaluating proposals and bids]({{'/derisking-government-tech/resources/evaluate-bids/' | url}}).

### Conducting market research to identify suggested sources

Every solicitation begins with the agency conducting market research, which continues throughout the process of writing the solicitation.

The [FAR defines **market research**]({{ "https://www.acquisition.gov/far/2.101" | url }}) as “collecting and analyzing information about capabilities within the market to satisfy agency needs.” (“Needs” and “requirements” are often used interchangeably in the market research context.)

Done well, market research shapes the final product as well as a product’s requirements. If market research is done poorly, the project will face issues from the beginning, including delays in the schedule, increased costs and, ultimately, unsatisfied users. 

Consult our detailed guidance for [conducting market research]({{ "/derisking-government-tech/resources/market-research/" | url }}).

### Writing the solicitation using 18F’s Agile Contract Format {#writing-the-solicitation-using-18fs-agile-contract-format}

Our **Agile Contract Format** has three elements:

1. A statement of objectives for performance-based services  
2. A time-and-materials type contract  
3. A Quality Assurance Surveillance Plan (QASP) that defines the expectations of quality that will be monitored throughout the contract using specific indicators 

The solicitation also spells out a [rationalized competitive award process](#rationalized-competitive-award-process) to potential vendors and the [evidence-based evaluation methods](#evidence-based-evaluation-methods) that will be used to evaluate bids and proposals.

#### Statement of objectives for performance-based services

[FAR Part 37.601]({{ "https://www.acquisition.gov/far/37.601" | url }}) states a performance-based solicitation may either be a performance work statement (PWS) or a statement of objectives (SOO). 

We use a statement of objectives for the purpose of competition since, unlike a performance work standard, it requires industry to produce evidence that will help you evaluate proposals. A statement of objectives requires these six elements: 

* Purpose  
* Scope or mission  
* Period and place of performance  
* Background  
* Performance objectives (that is, required results)  
* Any operating constraints

18F has created a statement of objectives template for writing a solicitation for agile software development services. ([Download 18F’s statement of objectives template (Microsoft Word).]({{ "https://18f.gsa.gov/assets/presentations/agile-software-development-solicitation-template.docx" | url }})) To use our template to create an Agile Contract Format, you will plug agile artifacts into the sections as follows:

| SOO section{.width-50-percent} | Agile analog{.width-50-percent} |
| ----- | ----- |
| Scope or mission | Product vision  |
| Performance objectives (that is, required results) | Product backlog |
| Any operating constraints | Non-functional requirements |

#### Time-and-materials type contract

A **time-and-materials (T\&M) type contract** is used for acquiring services at fixed hourly rates for labor, and supplies or materials used to create and/or make the end product available to users. 

You will use a T\&M type contract with a not-to-exceed ceiling to buy the time and expertise of a development team that will use modern software development methods to build a product. (A T\&M contract is preferred to a Labor-Hour (LH) type contract when acquiring professional software development services for the reason that it enables a team to buy any tools or services they need to build the software and enable its functionality. For example, the team may need to pay a service provider to support SMS messaging in an application.) 

A T\&M contract gives the development team the flexibility, freedom, and professional discretion it needs to develop software iteratively based on user research. It also allows them to respond to changes that arise on the program side, such as shifts in priorities or resources. For instance, if the government decides to terminate early for some reason, such as a change in priorities or the vendor is not performing, this type of contract enables it to do so without having to go through the burdensome termination procedures that come with other types of contracts, and to still own the software that has been delivered up to that point. Work just stops being assigned to the vendor (such as through the product backlog) and they can’t bill their time to the government. 

For software projects, a T\&M contract protects the government’s financial and performance interests better than other contract types. The vendor bills on an as-needed basis and only for actual time incurred. Each submitted invoice must provide exact billing data. (Firm-fixed-price type contracts don’t provide this protection as work is performed over time and submitted invoices lack detail.) A T\&M contract dissuades vendors from falsifying invoices since the FAR deems false invoices a “false claim” and exposes the vendor to the risk of paying triple the initial damages for each instance.

Every T\&M type contract requires a dollar ceiling and can’t exceed three calendar years in duration in order to reduce the risk of the project going over budget. 

We use a not-to-exceed (NTE) ceiling, provided regardless of the actual proposal price from potential bidders, to allow for the iterative nature of modern software development. 

The FAR states that a [T\&M contract]({{ "https://www.acquisition.gov/far/subpart-16.6#FAR_16_601__d1049e207" | url }}) is not supposed to exceed three calendar years. Consequently, the period of performance is between one to three calendar years in total. For a more in-depth justification for using the T&M contract type, download [18F’s Determinations & Findings artifact (Microsoft Word)]({{ "https://18f.gsa.gov/assets/presentations/determinations-findings-for-a-time-and-materials-contract-type-sample.docx" | url }}).

#### Quality indicators defined in a Quality Assurance Surveillance Plan (QASP) {#quality-indicators-defined-in-a-quality-assurance-surveillance-plan}

[The FAR allows for a range of ways to establish and monitor contract performance.]({{ "https://www.acquisition.gov/far/part-46#FAR_46_201" | url }}) Quality indicators for software development are best declared through a well defined, objective set of criteria that serve as an assessment tool for both the government agency and the vendor. At the federal level, these criteria are put into a **Quality Assurance Surveillance Plan** (QASP).

The QASP is the most rigorous way to oversee vendor performance. Waterfall projects often collect a long list of functional requirements before work begins and involve written status updates. In contrast, the QASP is focused on criteria that can be verified objectively and continuously throughout the performance period. The QASP sets the standard that, at the end of each sprint, all code is delivered to a government-owned repository and must be complete, tested, accessible, deployed, documented, and secure. 

You can include this [sample QASP]({{ "/derisking-government-tech/resources/quality-indicators/" | url }}), which covers a minimum set of quality indicators, without any changes in your solicitation. Modify it to meet your specific needs if necessary. 

[At the federal level, the government can allow a vendor to provide their own QASP.]({{ "https://www.acquisition.gov/far/37.604" | url }}) *We strongly advise against this.* If you allow the vendor to define its own measures of success, you give up one of the most powerful tools the government has for monitoring and ensuring quality. 

Learn about the [elements of a QASP and how to use them]({{ "/derisking-government-tech/vendor-management/#quality-indicators" | url }}).

#### Rationalized, competitive award process {#rationalized-competitive-award-process}

The competitive award process to acquire an outsourced development team varies for federal, state, or local agencies due to different acquisition laws.

{% image_with_class "assets/derisking-government-tech/img/competitive-award-process.svg" "margin-bottom-3 margin-top-4 width-full" "" %}

At the federal level, for example, the process ideally takes four to 12 weeks from release to award. It includes these steps:

* (Optional) Release a draft solicitation as part of market research. Government and vendors discuss its strategy and contents so the government can refine a final draft.  
* Release the solicitation.  
* Vendors ask questions. Government amends the solicitation in response to questions.  
* Vendors submit final proposals.  
* Government evaluates proposals. Verbal interviews occur, if included in the process.  
* Government documents award decision.  
* Government announces award.

(The optional step to release a draft solicitation during market research is included because it’s more likely to result in qualified proposals than a [Request for Information (RFI)]({{ "/derisking-government-tech/resources/market-research/#requests-for-information" | url }}), which is more commonly used. Further, [verbal interviews]({{ "/derisking-government-tech/resources/verbal-interview-questions/" | url }}) are mentioned because 18F strongly recommends them to validate the approach provided in written proposals.) 

The solicitation should require bidders to keep proposals under 10 pages. We recommend a hard limit of five pages, with the narrative sections kept to two to three pages each. Short proposals can: 

* Increase and make competition more equitable by reducing the effort to create them. (New and small businesses don’t always have the dedicated resources for writing proposals that larger companies do.)   
* Reduce the likelihood of vendor protest.   
* Reduce the time and work government staff spend evaluating the proposals. 

Note: If vendors request more narrative space, it indicates one of two things:

* The vendor might not be experienced or comfortable working with an iterative approach to software development. A vendor experienced in responding to more traditional solicitations for waterfall development will be used to providing long, detailed explanations of how they would meet every requirement. Don’t let vendors’ requests for more narrative space dissuade you from keeping a page or word limit. We’ve found most vendors appreciate the request for brief explanations.
* The government’s request was poorly written and is confusing to potential bidders.

#### Evidence-based evaluation methods

A solicitation explains the factors and methods the agency will use for evaluating proposals. 

Agencies often include factors in solicitations that don’t enable them to discern risk or meaningfully judge the content of proposals. These add significant amounts of time and effort to the evaluation process with little benefit. 

Our approach uses only four key factors: technical approach, staffing approach, similar experience, and price. 

Proposals are evaluated as follows:

* Technical approach, staffing approach and similar experience will be given more weight than price.   
* Proposals will not be evaluated by a numeric point or color scoring scheme. Instead, each member of the evaluation team will review each proposal and list its pros and cons. The whole team will discuss the proposals’ pros and cons to determine the strongest ones.  
* Evaluation teams may use whatever materials are available beyond the proposals to help them decide: websites, news articles, samples of prior work, etc. (Include a statement in the solicitation that the government may use such information at its discretion.) 

##### Technical approach

Inform vendors their proposed technical approach will be evaluated for how it describes its approach to modern software development practices. In particular, ask them to include the process they will follow to meet the solicitation’s quality expectations for the software. Ask them also to identify any risks they anticipate in regard to the specific project’s development effort and how it would address them. 

##### Staffing approach

We’ve found that how a vendor proposes to staff a project is a strong indicator of how much experience they’ve had in working in iterative ways. As a result, the solicitation should inform vendors that evaluation of their proposed approach to staffing the project will focus on the stated skills and team composition. 

{% capture keyPersonnelClauseContent %}
At the federal level, you may add a [“**key personnel**” clause]({{ "https://www.acquisition.gov/hudar/2452.237-70-key-personnel." | url }}) to the solicitation. It requires a vendor submitting a proposal to supply the résumés of the people proposed for certain positions and establishes that the government will approve any proposed replacements. Its purpose is to ensure that the vendor team committed throughout the contract operates at an equivalent level of experience and expertise to the key personnel included in the vendor’s proposal. 

For that reason, the key personnel clause is typically perceived as a quality control measure. But, requiring vendors to specify dozens of key personnel comes with some risks. 

Before using a key personnel clause, consider:

* Most bidding vendors will not have enough people “on the bench” at the time of proposal to be able to commit to assigning them to the project when the contract is awarded. If a vendor that has committed key personnel gets the contract, they are then required to put those people on the project. As those staff are functionally benched until the contract is awarded, it can increase a bidding company’s costs, as well as the likelihood of protests. The more a company invests or risks to make a bid, the more likely it will dispute a decision not to go with its proposal.  
* The market for skilled developers is fluid. It’s not possible for a company to lock down all key personnel months before the actual work *might* begin on a contract.

If you choose to use the key personnel clause, ask vendors to specify *two or three positions at most*: a project lead, a technical lead and, optionally, a design lead. 

Finally, ask that all named key personnel participate in a **verbal interview**: a timed, unstructured question-and-answer session in which they will answer questions about the proposal’s technical approach. Verbal interviews will allow the agency to better understand each contractor’s proposed technical approach and to observe key personnel’s interactions and working style. They are a critical quality control measure that confirms the information provided in the written proposal. Verbal interviews don’t allow contractors to make presentations, ask questions, or change their submission in any way. (They are not FAR Part 15 oral presentations). 

Verbal interviews should be tailored to each proposal. Consult our [sample interview question bank]({{'/derisking-government-tech/resources/verbal-interview-questions/' | url}}). 
{% endcapture %}

{% include 'derisking-government-tech/info_box.html' header: "Adding a key personnel clause" content: keyPersonnelClauseContent link-slug: 'adding-a-key-personnel-clause' %}

##### Similar experience

Actual code is a far better indicator of how a vendor team is likely to perform under real-world conditions than exercises like “bake-offs” or “hackathons.” Similar experience is best evaluated by reviewing concrete evidence of the vendor’s work so you may assess its quality. 

The solicitation should ask the contractor to submit code repositories similar in size, scope, and complexity to the work that the agency is undertaking. 

Ask for links to two or three source code repositories that illustrate the work of the company or technical lead and other relevant key personnel. This may include examples from previous employment or volunteer projects, since many contractors won’t have had clients willing to work in the open and thus no public code repositories to share. If a private repository is shared, the vendor must promptly provide access to the government-provided Git users. 

##### Price

To evaluate price, you will calculate a total estimate by looking at the number of people, their allocation (part time, full time, etc.) and the hourly rate for their labor. The ideal size of a Scrum team is between four to nine people. A typical team has six. A Scrum team never has more than 10\. 

Before you send out a solicitation, you must also create an independent government cost estimate (IGCE). This will give you a baseline against which to judge the cost of proposals.  

Use [GSA’s Contract-Awarded Labor Category tool]({{ "https://buy.gsa.gov/pricing/qr/mas?page=1&page_size=20&histogram=12&experience_range=0,45&price__gte=15&price__lte=500&ordering=current_price&acceptsDataDisclosure=true&sort=asc&price_range=15,500" | url }}) to estimate the average hourly labor rate. (The average hourly labor rate will fluctuate over time based on contract awards. The contracting officer judges what is reasonable comparison pricing for labor.) Then, multiply that number by a reasonable number of hours that a person would be expected to work in a given year. For example, 1,880 working hours a year accounts for holidays and some leave. 

The table below represents a sample IGCE. It assumes nine people and represents a typical mix of talent on a Scrum team. Based on average hourly labor rates as of June 2024, in this sample scenario the IGCE for one year of performance is $1.96 million. 

<table>
  <caption>Sample independent government cost estimate for a vendor Scrum team for one year</caption>
  <thead>
    <th class="scrum-table-position-header">Position title*</th>
    <th class="scrum-table-people-header"># of people</th>
    <th class="scrum-table-rate-header">Average hourly labor rate**</th>
    <th class="scrum-table-cost-header">
      Estimated cost
      <p class="scrum-table-subheader">(# of people x avg. hourly labor rate x 1,880)</p>
    </th>
  </thead>
  <tr>
    <td>Senior Software Developer</td>
    <td class="numeric">1</td>
    <td class="numeric">$139</td>
    <td class="numeric">$261,320</td>
  </tr>
  <tr>
    <td>Senior Designer</td>
    <td class="numeric">1</td>
    <td class="numeric">$119</td>
    <td class="numeric">$223,720</td>
  </tr>
  <tr>
    <td>Software Developer</td>
    <td class="numeric">3</td>
    <td class="numeric">$120</td>
    <td class="numeric">$676,800</td>
  </tr>
  <tr>
    <td>Designer</td>
    <td class="numeric">3</td>
    <td class="numeric">$97</td>
    <td class="numeric">$547,080</td>
  </tr>
  <tr>
    <td>Content strategist</td>
    <td class="numeric">1</td>
    <td class="numeric">$136</td>
    <td class="numeric">$255,680</td>
  </tr>
  <tr class="total-row">
    <td colspan=3><strong>Total</strong></td>
    <td class="numeric"><strong>$1,964,600</strong></td>
  </tr>
</table>

\* Vendors will propose different labor categories or skill mixes based on how they typically operate and what they assume the work will entail. Expect position titles to vary based on the competition pool and the skills needed for a project. For example, “Senior UX Designer,” “Senior Product Designer,” “UX Designer or Researcher,” etc. {.table-footnote}

\*\* If an agency requires the development team to be on-site or have top-secret security clearances, expect the average hourly labor rates to be substantially higher and that fewer companies will be able compete for the work. The clearance process itself is an added cost. Also, hourly rates for these positions vary depending on where an individual team member lives within the United States. {.table-footnote}

Check out our in-depth guidance on [how to evaluate proposals and bids]({{'/derisking-government-tech/resources/evaluate-bids/' | url}}) and use our [sample evaluator worksheet]({{'/derisking-government-tech/resources/evaluate-bids/#evaluator-worksheet' | url}}) to help determine the strongest proposals.

---

## Budgeting for custom software development

{% include 'derisking-government-tech/section_image.html' img_path: "assets/derisking-government-tech/img/custom-development-budgeting.svg" %}

Government budget and appropriation processes and cycles typically run over one or two years. As a result, agencies must request funds for technology projects many months or even years before they can begin. For example, a budget request made in the first year of a project may take two years to get approval. The contract may not be awarded until three years later. The software needed at the time of the budget request may not be delivered until five or more years have passed.

Because this process takes years, government agencies will often decide to pursue building or updating large, complex systems through one big contract because it seems like the most efficient way forward. However, this approach makes the project more likely to fail because it doesn’t account for changes in agency needs that will occur over time.  

A less risky way to build or modernize a major system is to embrace iterative and incremental approaches in budgeting as well as in software development. Start small rather than let your project snowball into something that’s too big to succeed. 

### Small projects, small budget allocations

Large technology systems are made up of smaller component systems. To lower the risk that building or updating a large system will fail, carve a large project into several small ones and budget for these in small, incremental budget allocations.

A modular approach to budgeting for and building a large system insulates each small project from the others. As a rule of thumb, we recommend keeping budgets below $10 million. If one fails, it won’t affect the others. Smaller projects also operate below a threshold that requires the layers of agency oversight that can delay and complicate the budget approval process involved with large projects.

### Budget for a “risk mitigation prototype” {#budget-for-a-risk-mitigation-prototype}

Building a prototype for a small part of a larger system prior to awarding a contract mitigates risk in several ways. 

It exposes potential pitfalls and other issues that can only be identified when actually working with software code. In our experience, risk mitigation prototyping often reveals challenges in the “[path to production]({{ "/derisking-government-tech/principles/#clear-the-path-to-production" | url }})” that should be mediated before awarding a contract to build custom software. For instance, it can prevent costly post-award expenditures that can accrue when getting ready to begin actual development.

It also results in code that can be tested by a system’s intended users and used as an artifact in the solicitation process. In our experience, potential bidders find this early risk mitigation work very valuable for helping them decide if they’re a good fit for an agency’s needs and for how to staff a team for such an effort. 

In our work with agency partners, we can often complete some form of risk mitigation prototyping with a team of three to four 18F staff in a few sprints. We document what we’ve learned as part of the solicitation document, so that an implementation team doesn’t have to start from scratch in an unknown development environment.

(To fund this type of effort, federal agencies can apply to the [Technology Modernization Fund]({{ "https://tmf.cio.gov/" | url }}) (TMF)).

---

**Next:** [Working with a vendor development team]({{ "/derisking-government-tech/vendor-management/" | url }})
