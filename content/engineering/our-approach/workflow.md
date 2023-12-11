---
title: Our approach
permalink: /engineering/our-approach/
redirect_from:
  - engineering/workflow/
layout: layouts/page
sidenav: true
sticky_sidenav: true
tags: engineering
eleventyNavigation:
  parent: engineering_approach
  key: Our approach
  order: 1
  title: Our approach
subnav:
  - text: Continuous integration & deployment
    href: "#continuous-integration-and-deployment"
  - text: Git & GitHub
    href: "#git-and-github-standard"
  - text: Code style
    href: "#code-style"
---

Project teams may vary, but across TTS engineering we aim for consistency around deployments, git etiquette, and similar workflow conventions.

## Continuous integration & deployment

### All Projects {% include "engineering/tag-standard.html" %}

- Ensure that your project is running **automated tests** in CI. Successful test completion should be a requirement for deployment.
- Generally, **CI should perform deployments**. This ensures the deployments are repeatable and don’t rely on individual development environments. See our [documentation on continuous deployment]({{ "/engineering/tools/continuous-deployment/" | url }}) for details on how to set this up.
- Deployments should be **zero-downtime**, achievable through tools like [Cloud Foundry's rolling deployment process](https://docs.cloudfoundry.org/devguide/deploy-apps/rolling-deploy.html).
- In addition to deployments after code change, we generally need to (automatically) **re-deploy daily** to ensure the running containers haven’t been tampered with (an ATO compliance requirement). See CircleCI’s [“schedule” docs](https://circleci.com/docs/2.0/configuration-reference/#schedule) for details.

## Git & GitHub {% include "engineering/tag-standard.html" %}
Git is our version control system of choice and GitHub is our current repository platform, but how to use these tools can be spelled out in a bit more detail. Note that we are looking to consolidate this with our existing documentation on [code review]({{ "/engineering/our-approach/code-review/" | url }}) and [example workflows]({{ "/engineering/our-approach/example-workflows/" | url }}).

### Security {% include "engineering/tag-requirement.html" %}
_For best practices on protecting sensitive information, check out the [TTS Handbook](https://handbook.tts.gsa.gov/sensitive-information/#protecting-tts-systems)._

Enable [**two-factor authentication**](https://help.github.com/articles/about-two-factor-authentication/) for your GitHub account. This is required for all TTS employees.

As part of the ATO process, we require any branches which trigger automated deployment be [**protected**](https://help.github.com/articles/about-protected-branches/) by passing CI and peer review.

### Other considerations

#### {% include "engineering/tag-standard.html" %}
* Default to **public** for new repositories. See our [guidelines](https://github.com/18F/open-source-policy/blob/master/practice.md) about open source for more detail.
* Enforce reviewer approval of pull requests against the main branch.
* We prefer **branches** over forks to ease internal collaboration. *If your project has many outside contributors, consider forks instead.*
* Keep your repository **clean**; delete merged branches and avoid committing files specific to your dev environment (e.g. `.DS_Store`).
* Consider [**signing commits** with a GPG key](https://help.github.com/articles/signing-commits-with-gpg/)


#### {% include "engineering/tag-suggestion.html" %}
* When in doubt, use feature branches and [**gitflow**](http://nvie.com/posts/a-successful-git-branching-model/) as your branch naming scheme.
* Follow [this guidance](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html) about **good commit messages**.
* Consider using [Allstar](https://github.com/ossf/allstar) to enforce consistent branch protection rules or to require commit signing on all repositories in your organization. For example, see the [Allstar configuration](https://github.com/cloud-gov/.allstar) that the cloud.gov team is using.

## Code style

{% include "engineering/tag-standard.html" %} Use an opinionated automated code formatter whenever possible. This saves teams from wasting time arguing about code style, and makes it easy to comply. Specific suggestions in [the pages for each language]({{ "/engineering/languages-runtimes/" | url }}).
