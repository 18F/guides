---
layout: layouts/page
title: Federal Field Guide
tags: derisking
permalink: /derisking/federal-field-guide/
eleventyNavigation:
  key: derisking-federal-index
  parent: derisking-federal
  order: 1
  title: Introduction
sidenav: true
sticky_sidenav: true
subnav:
- text: About the editors
  href: '#about-the-editors'
- text: Structure of this handbook
  href: '#structure-of-this-handbook'
- text: Footnotes
  href: '#footnotes'
---

Edited by: **Mark Hopson**, **Victoria McFadden**, **Rebecca Refoy** and **Alicia&nbsp;Rouault**

{% include 'derisking/download_guide.html' pdf_path: "/assets/derisking/dist/federal-field-guide.pdf" %}

## Introduction

{% include 'derisking/chapter_image.html' img_path: "assets/derisking/img/pie-chart-circle-1.svg" %}

Only 13% of large government software projects are successful.[^successful] Modern software development practices reduce that risk by delivering working code every few weeks and getting feedback from end users to ensure that the product meets their needs. Federal agencies are recognizing that their legacy development practices are risky and are shifting to this agile software development model. However, the ecosystems in place at agencies–budgeting, procurement, and oversight structures–do not support agile development practices, so our success rate remains low. 

In the federal government, technology isn't the challenge–outdated practices are. This guide provides instructions to federal agencies in how to budget for, procure, and oversee software development projects, to reduce risk and wasteful spending, support teams effectively, and improve outcomes for end users. 

### About the editors

We work for [18F](https://18f.gov/), part of the [Technology Transformation Services](https://www.gsa.gov/about-us/organization/federal-acquisition-service/technology-transformation-services) team at the [General Services Administration](https://www.gsa.gov/) (GSA). We're grateful to GSA's [10x](https://10x.gsa.gov/) for sponsoring this work, and to the many people who contributed their time and knowledge.

If you're interested in working with 18F, contact us at <inquiries18f@gsa.gov>.

### Structure of this handbook

This handbook provides straightforward recommendations for federal agency staff to address common pitfalls in implementing modern software development practices. It is designed for anyone involved in the budgeting, contracting, or execution of an agency mission through any government program, whether it resides in a department, agency, or bureau. It assumes that taxpayer funds will need to be spent externally in some way in order to successfully accomplish whatever that mission may be.

This handbook is primarily focused on, and would benefit, any mission that requires software, although some of the material recommendations and explanations are relevant in other areas of government information technology spending, such as hardware and emerging technologies. It is divided into the three major stages for any appropriated funds spent by a government agency to further its mission.

Some portions of this handbook were written specifically as part of this broader compendium, but the vast majority of it is collected writings, produced during years of research and practice, tested by experience from dozens of people and authors. It has been compiled and edited to be practical and immediately usable by anyone who has questions on these topics, providing sufficient detail to successfully execute the principles, methods, and lessons learned from people with direct, immediate experience with them. It will be updated continuously as we advance our knowledge of budgeting to procure modern, digital services for public good.

**Next**: [Basic principles of modern software design]({{ "/derisking/federal-field-guide/basic-principles/" | url }})

### Footnotes
[^successful]: Projects valued at $6M or greater, in Europe and the United States, that were completed satisfactorily, on time, and within budget. From The Standish Group’s "<a href="https://www.standishgroup.com/sample_research_files/Haze4.pdf">Haze</a>," based on their CHAOS database.
