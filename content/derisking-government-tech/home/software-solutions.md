---
title: Understanding and choosing a software solution
permalink: /derisking-government-tech/software-solutions/
layout: layouts/page
tags: derisking-government-tech
eleventyNavigation:
  parent: derisking-government-tech-home
  key: derisking-government-tech-home-software-solutions
  order: 2
  title: Software solutions
sidenav: true
sticky_sidenav: true
subnav:
- text: Commercial (COTS)
  href: '#commercially-available-off-the-shelf-cots-software'
- text: Custom
  href: '#custom-software'
- text: Customizing COTS
  href: '#unrecognizably-modified-off-the-shelf-umots-software'
---

<p class="chapter-summary">Understanding the benefits and risks of commercially available off-the-shelf (COTS) and custom software will help government agencies choose a solution appropriate to their needs.</p>

{% include 'derisking-government-tech/chapter_image.html' img_path: "assets/derisking-government-tech/img/software-solution.png" %}

A major reason that government technology projects fail or struggle is that government agencies often approach obtaining software as a matter of building *or* buying it. The reality is more complex. 

Many custom-built software systems are composed partly of commercially available products and services (cloud hosting, for instance). Meanwhile, agencies frequently buy commercial software products and then spend additional funds customizing them to suit their specific needs. 

A government technology system is almost always a mixture of commercial *and* custom parts. This complexity requires *building thoughtfully and buying differently* than has been done in the past. It’s critical to consider the costs and benefits of commercial products and custom development. One should ask: “Can we buy this piece of the system without having to customize it?” And: “If we build a custom piece of software, how do we ensure it is delivered on time, on budget, and satisfies our users?”

Understanding the benefits and risks of the options, and when each is appropriate, is necessary to answering those questions and setting your project up for success.

---

## Commercially available off-the-shelf (COTS) software

{% include 'derisking-government-tech/section_image.html' img_path: "assets/derisking-government-tech/img/software-solution-cots.svg" %}

In plain language, [**commercially available off-the-shelf (COTS)**](https://www.acquisition.gov/far/subpart-2.1\#FAR\_2\_101\_\_d75e451) means software that is sold to the government in the same form it’s sold to any other consumer.

COTS software is designed to do specific things and is *configured* to meet your organization’s needs and preferences. **Configuration** of COTS software means making changes to the product’s available “out of the box” settings. For example, types of configuration include changing the layout of your email inbox or deciding if a field appears on a form by turning options on or off. Configuration changes don’t require **customization**, which is when *a developer modifies the product’s code base to meet your needs.* 

### Some background on COTS software and its benefits

COTS software, like other commercial items, products, and services, is promoted and mandated for use at the federal level to the “maximum extent practicable” thanks to two laws: the Federal Acquisition Streamlining Act of 1994 ([Public Law No. 103–259](https://www.congress.gov/bill/103rd-congress/senate-bill/1587/text)) and the Clinger Cohen Act of 1996 ([Public Law No. 104–106](https://www.congress.gov/bill/104th-congress/senate-bill/1124/text). The federal government’s shift towards commercial offerings influenced many state and local governments as well. Along with the rise of the internet, these laws changed how the government could buy information technology. They made commercial items like COTS software exempt from the more rigorous procurement processes the government uses to evaluate products and services. 

The rationale for these changes was that the pressures of a competitive market were expected to keep costs low and quality high for consumers. That’s worked well for physical objects, but software is an inherently different kind of product with a different life cycle. This essential difference is the source of the government’s risk when acquiring software from the commercial market.

### When to choose COTS

COTS is the right choice for meeting a need that *many* other buyers have, like email. An agency could develop its own email system, but it would be a waste of time, money, and effort since existing COTS email systems come with a wide array of features and functions that any buyer can use to meet its needs.

---

## Custom software

{% include 'derisking-government-tech/section_image.html' img_path: "assets/derisking-government-tech/img/software-solution-custom.svg" %}

**Custom software** refers to software code written specifically for a buyer’s needs. Rather than being a commercially available *item*, custom software is built by a development team working in-house or through a vendor that builds the product and works with your IT department to put it into production online for its intended users.

### When to choose custom software

If your agency has a unique need that is currently not served by a large marketplace — something other than email or video conferencing, for example — you should invest in building custom software to meet that need. This is a likely scenario for government agencies, which often have unique requirements and specifications, as well as laws and policies they must follow.

---

## “Unrecognizably modified off-the-shelf” (UMOTS) software

{% include 'derisking-government-tech/section_image.html' img_path: "assets/derisking-government-tech/img/software-solution-umots.svg" %}

If you buy a commercially available off-the-shelf (COTS) product and then modify it to meet your needs, you are licensing COTS *and* paying for custom software development. If those changes are more than minor ([use our test to find out]({{'\#testing-for-umots' | url}})), you may end up with what some call **“unrecognizably modified off-the-shelf software”** (**UMOTS**).

### Why to avoid UMOTS — or beware customizing COTS 

UMOTS describes the frequent and risky tendency of government agencies to choose a COTS product and then modify it to such an extent that it is no longer compatible with updates to the core COTS product. It’s responsible for the failure and struggles of many government technology modernization projects. Unfortunately, some vendors often “sell” UMOTS during the solicitation process with inaccurate or incomplete explanations of a COTS product’s functionality.

We advise you to avoid UMOTS. It increases the risk of project failure and eliminates the primary benefit of COTS, which is to not reinvent the wheel. When you modify a COTS product, it becomes difficult and expensive to maintain. It may function poorly or not at all. It has the least amount of transparency and control for the buyer. It typically results in your agency becoming locked into long-term reliance on a single vendor (known as “vendor lock-in”). 

In the federal context, another reason to avoid extensive modification of COTS software is that you aren’t complying with regulations. The Federal Acquisition Regulation (FAR) states that *if it is necessary to make* customizations or modifications to the technology to meet federal requirements, *it isn’t* a commercially off-the-shelf item. By law, [only minor modifications are allowed for a product to still be considered commercial](https://www.dsp.dla.mil/Policy-Guidance/FAQs/Commercial-and-Nondevelopmental-Items/). Minor modifications refer to those that “*do not significantly alter the nongovernmental function or essential physical characteristics of an item or component, or change the purpose of a process*” ([FAR Part 2.101](https://www.acquisition.gov/dars/2.101-definitions)).

You can avoid the risk involved in customizing COTS software if you:

* [Use our test questions for identifying UMOTS]({{'\#testing-for-umots' | url}}).   
* Conducting thorough [market research]({{'\#how-to-conduct-market-research' | url}}) before and during the solicitation process. Along with informing you of what’s available, market research should help you sort out if the agency’s needs are best served by custom software or by adapting agency processes to be compatible with a COTS product.  
* Use [risk mitigation prototyping]({{'\#budget-for-a-“risk-mitigation-prototype”' | url}}). 

### Testing for UMOTS {#testing-for-umots}

If you’re thinking about acquiring a COTS solution that would need *any degree of customization* to meet an agency’s needs, you could end up with UMOTS. To avoid that outcome, ask this set of questions.

#### Will the vendor need to write *any* software code to enable the COTS product to meet your requirements and specifications? 

If the answer is “yes,” you’ll very likely end up with UMOTS. This is because one or both of these things will happen:

* The modification will alter the nongovernmental function of what the software was originally designed to do.  
* The labor costs to change the code will be higher than the base price (licensing plus sometimes hosting fees) of the product itself. (Derived from [FAR 2.101(b)](https://www.acquisition.gov/dars/2.101-definitions.))

Typically, customizing COTS software results in both things happening. Modifying a commercial product from its nongovernmental function takes a lot of developers’ time and effort. As a result, the costs for that work will almost certainly exceed the base costs. 

To know for sure if the new code will result in higher labor than base costs, add up the proposed cost of labor and compare the sum to the base cost of the COTS solution. 

If the labor costs exceed the base cost, the solution is UMOTS. 

If the vendor won’t provide an itemized list of labor costs, it’s also a sign you will end up with UMOTS. 

<svg aria-hidden="true" focusable="false" role="img" class="usa-icon top-2px">
<use xlink:href="#svg-info"></use>
</svg> Other questions to ask to figure out if your custom code will result in UMOTS:

* Will modifying the COTS software mean it can no longer follow the routine schedule for upgrades and patches? If yes, it fails.
* Once modified, will the vendor own modifications to the resulting product or system? If yes, it fails.
* Is the COTS vendor being unclear about the cost to customize, maintain modifications, or migrate existing data? Or about ownership of and access to government data, or how to export data when the contract ends? If yes, it fails.

#### Has any organization successfully implemented the COTS solution …

1. In a similar time frame to the one you’re planning?  
2. Within budget?
3. And to the satisfaction of its users? 

When it comes to COTS software, you should expect to find — or that the vendor can supply — *at least three* examples that clearly demonstrate successful implementation according to those terms. 

If you can’t find those examples, the solution is UMOTS.

---
