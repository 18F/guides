---
title: User stories
description: A short, plain-language description of a product feature or requirement written from the perspective of the user.
permalink: /methods/decide/user-stories/
redirect_from:
  - user-stories/
layout: layouts/method-card
tags: methods
eleventyNavigation:
  key: methods
  parent: Decide
  title: User stories
method:
  title: User stories
  what: A short, plain-language description of a product feature or requirement written from the perspective of the user.
  why: To frame the problem we’re solving around the needs of the people who will use the product, rather than the limitations of the technology or the program or agency overseeing it. User stories help us break down a large development effort into smaller, more manageable slices so that we can track progress, plan sprints, and prioritize work around user impact. They also encourage us to talk about features in plain language and make the discussions (and solutions) more accessible.
  timeRequired: 1-2 hours per epic
  category: decide
---

## How to do it{#how-user-stories}
1. Start by defining the project’s [epics](https://tech.gsa.gov/guides/glossary/#epic){.usa-link .usa-link--external}—typically the larger, high-level “themes” or bodies of work that make up the initiative.
1. Break down each epic into pieces of work that can be independently estimated, developed, and tested. These will become your user stories.
1. For each piece of work you identified, write a story from the user’s perspective of who they are, what they want to do, and why. User stories typically follow this template:
    <p>
      <b><em>As a < type of user >, I want < some goal > so that </br> < some outcome >.</em></b>
    </p>
    <p>
      <em>Note: Only make the type of user as specific as you need to. If the piece of work is needed by all your users, it’s ok to say “as a system user.” That way when it is specific (“as a first-time applicant”) it’s clear that this is a group with particular needs.</em>
    </p>
1. Consider possible harms to the user, the system, or external to the system by adding a second part of the sentence:
    <p>
      <b><em>…while avoiding < potential negative impacts > to </br> < the user, the system, or external to the system >.</em></b>
    </p>
1. User stories can be the basis for tickets—a tool to manage and track work for the solution you’re building. These tickets should include the story, a brief description, and a list of [acceptance criteria]({{ "/agile/agile-lexicon/#how-we-talk-about-the-work" | url}}){.usa-link .usa-link--external}.


<section class="method--section method--section--additional-resources" markdown="1">

## Additional resources{#add-personas}

- [Agile — 18F Guides]({{ "/agile/" | url}}){.usa-link .usa-link--external}
- [Agile software development — 18F De-risking Guide]({{ '/derisking-government-tech/principles-effective-software/#modern-software-dev-practices/' | url}}){.usa-link .usa-link--external}
- [Writing Effective User Stories — Tech at GSA](https://tech.gsa.gov/guides/effective_user_stories/){.usa-link .usa-link--external}
- [User Story Examples — Tech at GSA](https://tech.gsa.gov/guides/user_story_example/){.usa-link .usa-link--external}
- [Government Product Managers Play a Key Role in UX — Digital.gov](https://digital.gov/2015/11/27/government-product-managers-play-a-key-role-in-ux/){.usa-link .usa-link--external}

</section>

<section class="method--section method--section--government-considerations" markdown="1" >

## Considerations for use in government{#con-personas}

No PRA implications. No information is collected from members of the public.
</section>
