---
title: About this guide
permalink: /engineering/
layout: layouts/page
sidenav: true
sticky_sidenav: true
tags: engineering
subnav:
  - text: How we classify best practices
    href: "#how-we-classify-best-practices"
eleventyNavigation:
  parent: engineering_about
  key: About this guide
  order: 1
  title: About this guide
---
At [18F](https://18f.gsa.gov/), We empower our partners to create better digital experiences for the people of the United States. As engineers at 18F, we are federal employees who help other government agencies build, buy, and share technology products. This guide is meant as a resource for 18F engineers on how we approach technical issues. As part of working in the open, we share this guide publicly so that others can learn how we approach our work. 

Or approach:
### [Putting user experience first](https://guides.18f.gov/ux-guide/)
We have amazing designers and strategists that are skilled in fulfilling the needs of the people that will use your product or service. We get to collaborate with them on creating the best way to serve our users.

### [Reducing risk with agile practices](https://guides.18f.gov/derisking/)
We use agile methodologies (usually SCRUM or Kanban) to achieve our goals and model how an agile, cross-functional team works. Being agile allows us to implement DevOps best practices. 

### [Open source](https://18f.gsa.gov/open-source-policy/)
Delivering open source software helps ensure quality, security and reusability. It's also an additional way to encourage community involvement in government services.

## Updates 

Getting new practices into the guide is pretty light on process. Feel free to raise a topic in Slack or at a guild meeting and drive to some consensus. Once you've done that, document your findings, submit a PR, and ask in #dev for a quick review. If you think a proposal might be controversial after getting some consensus prior, please post the draft PR to #dev (and elsewhere if you don’t think target audience is in that channel) and solicit feedback.

## How we classify best practices
These documents are structured by topic; under topics we have classified we indicate "Requirement", "Standard", "Default", "Suggestion", and "Caution".

If a classification is not present on a topic or a reference to a tool or practice, it should be presumed to be a {% include "engineering/tag-suggestion.html" %} and the decision is left at your discretion. If you are unsure, ask in #dev, as the topic or tool may be a good candidate for classification.

{% include "engineering/tag-requirement.html" %} indicates practices that _must_ be done for regulatory, legal, compliance, or other reasons.

{% include "engineering/tag-standard.html" %} signifies practices that have a strong consensus across TTS; they should generally be followed to ease the ATO process and make on-boarding simpler.

{% include "engineering/tag-default.html" %} practices are safe selections that tend to be used by a large number of our projects; you may find yourself with a better or more tailored solution, however.

{% include "engineering/tag-suggestion.html" %} indicates examples that have worked well on a project or two; they're not widely used enough to be defaults, but are worth considering.

{% include "engineering/tag-caution.html" %} marks approaches that have significant pitfalls or should not be used for security/compliance reasons.

If a specific classification is not present on a topic or reference to a tool or practice, it should be presumed to be a {% include "engineering/tag-suggestion.html" %}.

All references to specific brands, products, and/or companies are used only for illustrative or descriptive purposes and do not imply endorsement by the U.S. federal government or any federal government agency.
