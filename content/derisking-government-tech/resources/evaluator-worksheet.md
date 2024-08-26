---
title: Evaluator worksheet
permalink: /derisking-government-tech/resources/evaluator-worksheet/
layout: layouts/page
tags: derisking-government-tech
description: 18F's worksheet for evaluating proposals and bids for a performance-based services contract to build custom software for a government agency.
sidenav: false
---

{% include 'derisking-government-tech/evaluator_worksheet_download.html' %}

**Evaluator name:** {.font-body-sm}
   
**Offeror or vendor name:** {.font-body-sm}
   
**Date of evaluation:** {.font-body-sm}
   
**Have you signed and returned your COI and confidentiality forms?** {.font-body-sm}

---

### Evaluating quotes by technical factors

**From the Request for Quote (RFQ):** *The non-cost evaluation factors are of equal importance. The three (3) technical, non-price evaluation factors when combined, are significantly more important than price. The government may make an award to an offeror that demonstrates an advantage with respect to technical, non-price factors, even if such an award would result in a higher total price to the government.* {.font-body-sm}

* **Factor 1: Technical approach** {.font-body-sm}
* **Factor 2: Staffing plan** {.font-body-sm}
* **Factor 3: Similar experience** {.font-body-sm}

#### Qualitative evaluation
   
We will be doing narrative, qualitative evaluation. Quotes will not be scored numerically.  

Therefore, it is critical that we evaluate the quotes based on what we put down in the solicitation. 

#### How do you evaluate a proposal qualitatively?

* Provide as thorough of a narrative description as you can on this worksheet.  
* Base your decisions on the factors and descriptions identified in the solicitation.  
* Use common sense to consider real-world implications. Imagine your, or your agency’s, day-to-day work needs. 

#### Do’s and don’ts

Follow these tips when evaluating quotes. Please refer to your contracting officer with any questions.

{% capture dos %}

**Do** evaluate quotes against the solicitation requirements.

**Do** look carefully at the text in the technical quote that may include statements and/or assumptions that could indicate increased cost or price and/or risk to the government.

**Do** adequately document your reasoning for any potential increased risk to the government on the evaluation form for the contracting officer’s review.

**Do** provide comments that are clear and plainly written.

**Do** be fair and consistent in the proposal evaluation. If an item is a strength or weakness for one proposal, it should also be noted as a strength or weakness when it appears in other proposals.
{% endcapture %}

{% capture donts %}

**Don’t** make assumptions. Evaluate the text in the tech quote and do not rely on outside information for technical evaluations.

**Don’t** compare proposals against one another. They must be evaluated individually against the evaluation factors in the solicitation.

**Don’t** rank or compare quotes. Only determine if they meet, or do not meet, the acceptable standards specified in the solicitation.

**Don’t** take it easy or be overly harsh. Fairly evaluate all proposals against the requirements of the contract. Be critical, but fair in your evaluation.

**Don’t** consider price when evaluating technical quotes. These evaluations should be completed separately from each other.
{% endcapture %}

<table>
  <thead>
    <th class="width-50-percent">Do’s</th>
    <th class="width-50-percent">Don’ts</th>
  <thead>
  <tr>
    <td>{{ dos }}</td>
    <td>{{ donts }}</td>
  </tr>
</table>

### Strengths and weaknesses

For each evaluation factor — technical approach and staffing plan, key personnel, and source code — we will evaluate and analyze strengths and weaknesses that will be used as the basis for the confidence ratings (high, some, and low) for each factor.

A **strength** is an attribute that, within the confines of the evaluation criteria, would raise the evaluation above neutral.

A **weakness** is an attribute that, within the confines of the evaluation criteria, would reduce the evaluation below neutral.  
   
For each strength and weakness you identify in a quote, use words that qualitatively describe that strength or weakness in narrative form. For example:

* **Strength:** On page X, contractor two states that they offer their employees two weeks of paid time off to attend training sessions every year. This encourages retention and staff growth which is important to the government to maintain a consistent level of service to their internal and external customers. This also allows the contractor to provide the most qualified and trained staff.
* **Weakness:** Contractor one, page 10, paragraph four. The contractor does not appear to understand the direction of the program nor the intent of the contract and has specified an approach that has proven unsuccessful on this program in the past and that was communicated in the solicitation.

Don’t write narrative explanations that are vague or reflect subjective opinion. For example:

* **Weakness:** Contractor one’s approach to training is overly burdensome for the government compared to contractor three’s. 
* **Weakness:** The technical proposal doesn’t address what we asked for.
* **Strength:** I really like what contractor one wrote. It’s exactly what we’re looking for.

---

### Confidence ratings

Once you’ve identified strengths and weaknesses for each factor, you’ll assign a confidence rating to the factor as defined below:

**High confidence:** The government has high confidence in the portion of the quotation, and that the risk to the government is low.

**Some confidence**: The government has some confidence in the portion of the quotation, and that the risk to the government is low or moderate.

**Low confidence:** The government has low confidence in the portion of the quotation, and that the risk to the government is moderate or higher.

For any questions, concerns or comments, please do not hesitate to ask your contracting officer.

*You should also refer back to the solicitation if you are unsure or do not understand any portion of it.*

---

### Evaluation factor 1: Technical approach

#### From the RFQ:

{% capture factor-1-instructions %}

**Instructions to offerors:**

The technical approach must set forth the contractor’s proposed approach to providing the services required, including the base software (if any) and programming language(s) the contractor proposes to use. The technical approach must also make clear that the contractor understands the details of the project requirements. The technical approach must also identify potential obstacles to efficient development and include plans to overcome those potential obstacles. The technical approach must also include a description of the contractor’s plans, if any, to provide services through a joint venture, teaming partner, or subcontractors.

**Evaluation basis:**

In evaluating a contractor’s technical approach, the government will consider (a) the quality of the contractor's plans to provide the open source, agile development services required, including user research and design, (b) the extent of the contractor's understanding of the details of the project requirements, and (c) the extent to which the contractor has identified potential obstacles to efficient development, and has proposed realistic approaches to overcome those potential obstacles.

{% endcapture %}

<div class="padding-left-4">{{ factor-1-instructions }}</div>

#### Evaluator section – Factor 1

{% include 'derisking-government-tech/evaluation_factor_table.html' %}

### Evaluation factor 2: Staffing plan
   
#### From RFQ:

{% capture factor-2-instructions %}

**Instructions to offerors:**

The staffing plan must set forth the contractor’s proposed approach to staffing the requirements of this project, including the titles of each of the labor categories proposed and proposed level of effort for each member of the contractor's development team (full time, half time, etc.).

The staffing plan should identify the proposed qualified individuals for the three (3) key personnel.

Contractors proposing key personnel who are not currently employed by the contractor or a teaming partner must include a signed letter of intent from the individual proposed as key personnel that they intends to participate in this project for at least one year. The staffing plan must also set forth the extent to which the proposed team for this project was involved in the development of the source code referred to in the next paragraph.

The staffing plan must set forth and explain the extent to which the contractor will provide individuals with experience in most the following areas:

* Agile development practices  
* Automated (unit/integration/end-to-end) testing  
* Continuous Integration and Continuous Deployment (CI/CD)  
* Refactoring to minimize technical debt  
* Application Protocol Interface (API) development and documentation  
* Open source software development  
* Cloud deployment  
* Open source login and/or authentication services  
* Product management and strategy  
* Usability research, such as (but not limited to) contextual inquiry, stakeholder interviews, and usability testing  
* User experience design  
* Sketching, wireframing, and/or prototyping, and user-task flow development  
* Visual design  
* Content design and copywriting  
* Building and testing public facing sites and tools  
* User outreach and/or user adoption  
* Database design and SQL queries  
* Security and compliance  
    
In addition to these baseline skills, you must also provide information about your recruitment, retention, and training for your personnel as the needs of the individual team composition may change over time during the course of development.  

To understand your approach to recruitment, identify and provide an adequate description of your strategy to find qualified personnel generally and for the proposed personnel in your quote submission. As part of this, please provide an explanation of the process undertaken to ensure proposed employees staffed in each labor category meet the specific qualifications and have the requisite skills for the position. To understand your approach to retention, identify and provide an adequate description of your strategy to minimize staff turnover.

**Evaluation basis:**

In evaluating a contractor’s staffing plan, the government will consider (a) the skills and experience of the key personnel and other individuals that the contractor plans to use to provide the required services, (b) the mix of labor categories that will comprise the contractor’s proposed development team, (c) the contractor’s proposed number of hours of services to be provided by each member of the contractor's proposed development team; and (d) the contractor’s approach for recruiting and retaining qualified personnel.
{% endcapture %}

<div class="padding-left-4">{{ factor-2-instructions }}</div>

#### Evaluator section – Factor 2

{% include 'derisking-government-tech/evaluation_factor_table.html' %}

### Evaluation factor 3: Similar experience
   
#### From RFQ:

{% capture factor-3-instructions %}

**Instructions to offerors:**  
You shall submit two (2) source code repositories.

This must be either links to Git repositories (either credentialed or public) or to equivalent version-controlled repositories that provide the evaluation team with the full revision history for all files. If a contractor submits a link to a private Git repository hosted with GitHub, the government will provide the contractor with one or more GitHub user identities by email, and the contractor will be expected to promptly provide the identified user(s) with access to the private Git repository.

The source code samples should be for projects that are similar in size, scope, and complexity to the project contemplated here. The source code must have been developed by either (1) the contractor itself, (2) a teaming partner that is proposed in response to this RFQ, or (3) an individual that is being proposed as key personnel for this project. The government would prefer that the source code samples have been for recent projects involving teams of approximately four to seven full-time equivalent (FTE) personnel.

If the references to source code samples provided do not include associated references to user research plans and design artifacts demonstrating how ongoing user research was incorporated into the project, then the contractor must submit a user research plan and design artifacts relating to at least one (1) of the source code samples provided.

**Evaluation basis:**  

In evaluating a contractor’s similar experience, the government will consider the extent to which the contractor has recently provided software development services for projects that are similar in size, scope, and complexity to the project described in this RFQ, and the quality of those services. In evaluating the quality of those services, the evaluation team will consider, among other things, the revision history for all files in the source code samples provided. The government will also consider the user research and design-related artifacts that were associated with the source code samples provided or submitted separately. In considering a contractor’s similar experience, the government may also consider information from any other source, including contractor's prior customers and public websites.
{% endcapture %}

<div class="padding-left-4">{{ factor-3-instructions }}</div>

#### Evaluator Section – Factor 3

{% include 'derisking-government-tech/evaluation_factor_table.html' %}

{% include 'derisking-government-tech/evaluator_worksheet_download.html' %}
