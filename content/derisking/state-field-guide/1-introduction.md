---
title: State Software Budgeting Handbook
first_page_style: true
permalink: /derisking/state-field-guide/
layout: layouts/page
sidenav: true
sticky_sidenav: true
tags: derisking
eleventyNavigation:
  key: derisking-state-index
  parent: derisking-state
  order: 1
  title: Introduction
---

By **Robin Carnahan**, **Randy Hart** and **Waldo Jaquith**<br>
18F, Technology Transformation Service, General Services Administration

{% include 'derisking/download_guide.html' pdf_path: "/assets/derisking/dist/state-software-budgeting-handbook.pdf" %}

## Introduction

{% include 'derisking/chapter_image.html' img_path: "assets/derisking/img/pie-chart-circle-1.svg" %}


Only 13% of large government software projects are successful.[^13pct] State IT projects, in particular, are often challenged because states lack basic knowledge about modern software development, relying on outdated procurement processes. Every year, the federal government matches billions of dollars in funding to state and local governments to maintain and modernize IT systems used to implement federal programs such as Medicaid, child welfare benefits, housing, and unemployment insurance. Efforts to modernize those legacy systems fail at an alarmingly high rate and at great cost to the federal budget.

State governments are increasingly reliant on modern software and hardware to implement federal programs and deliver essential services to the public, and the success of any major policy initiative depends on the success of the underlying software infrastructure. Government agencies all confront similar challenges, facing budget and staffing constraints while struggling to modernize legacy technology systems that are out-of-date, inflexible, expensive, and ineffective.[^ineffective] Government officials and agencies often rely on the same legacy processes that led to problems in the first place.

The public deserves a government that provides the same world-class technology they get from the commercial marketplace. Trust in government depends on it.

This handbook is designed for executives, budget specialists, legislators, and other "non-technical" decision-makers who fund or oversee state government technology projects that receive federal funding and implement the necessary technology to support federal programs. It can help you set these projects up for success by asking the right questions, identifying the right outcomes, and equally important, empowering you with a basic knowledge of the fundamental principles of modern software design.

This handbook also gives you the tools you need to start tackling related problems like:

- The need to use, maintain, and modernize legacy systems simultaneously
- Lock-in from legacy commercial arrangements
- Siloed organizations and risk-averse cultures
- Long budget cycles that don’t always match modern software design practices
- Security threats
- Hiring, staffing, and other resource constraints

This is written specifically for procurement of custom software, but it’s important to recognize that commercial off-the-shelf software (COTS) is often custom and Software as a Service (SaaS) often requires custom code. Once any customization is made, the bulk of this advice in this handbook applies to these commercial offerings. (See "[Beware the customized commercial software trap]({{ "/derisking/state-field-guide/budgeting-tech/#beware-the-customized-commercial-software-trap" | url }})" for details.)

As government leaders, we must be good stewards of public money by demanding easy-to-use, cost-effective, sustainable digital tools for use by the public and civil servants. This handbook will help you do just that.

**Next**: [Basic principles of modern software design]({{ "/derisking/state-field-guide/basic-principles/" | url }})

### Footnotes
[^13pct]: Projects valued at $6M or greater, in Europe and the United States, that were completed satisfactorily, on time, and within budget. From The Standish Group’s "<a href="https://www.standishgroup.com/sample_research_files/Haze4.pdf">Haze</a>," based on their CHAOS database.

[^ineffective]: Of the $90 billion in federal IT spending in FY2019, 80% is allocated for maintenance of legacy software, according to the GAO’s June 2019 report, "<a href="https://www.gao.gov/products/GAO-19-471">Agencies Need to Develop Modernization Plans for Critical Legacy Systems</a>." They write that inadequately-maintained legacy software leads to security risks, unmet mission needs, staffing issues, and increased costs.
