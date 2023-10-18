# 1. Clarify Dependabot process

## Status

Pending

## Context

### Why use Dependabot?

18F guides uses open source software. Having to build every software tool ourselves would be slow, redundant, prohibitively expensive, and less secure. Managing open source dependencies is the tradeoff we make for faster, cheaper, secure development.

The longer we avoid dependency updates, the harder they are to do. Automated dependency managers like Dependabot help us keep updates small, simple, and quick, so that folks working on the site can focus on other priorities.

### Who can and should make dependency updates?

The skills needed to make dependency updates include:
- How to read changelogs, in order to understand the impact of an update
- How to manage application dependencies
  - know where they're configured
  - know how to change configurations
  - understand the impact of those changes
- How to navigate git history to see when a bug might've been introduced
- How to QA the site
- How to fix whatever bugs have been introduced by an update

Given the above skillsets, it’s likely most appropriate for engineers to manage dependency updates, although this isn't limited to only engineers if others have these skills.

The TLC Crew currently manages the 18F Guides repo. Staffing of the crew fluctuates every two weeks, from multiple engineers on the crew to no one on the crew. This can lead to inconsistent dependency management, which can result in harder updates to perform and ultimately a less secure site.

Here's a proposal for Dependabot support when one or more engineers are on TLC Crew:

| Scenario | Responsibility |
| --- | --- |
| Multiple engineers on TLC Crew | Rotate Dependabot support every iteration |
| 1 Engineer on TLC Crew | Does all Dependabot support |
| No engineers on TLC Crew | Whoever has the skills, otherwise ? |
| Nobody on TLC Crew | ? |

How might we solve the problem of inconsistent human support for dependency updates?

### Automation can offer consistency

We can use [Github Actions](https://docs.github.com/en/code-security/dependabot/working-with-dependabot/automating-dependabot-with-github-actions#enable-auto-merge-on-a-pull-request) to auto-deploy Dependabot updates. We can ensure all CI checks pass before merging, and we can choose what types of updates to auto-merge based on Dependabot metadata (for example, only merging [patches](https://semver.org/#summary)).

Here are three options for a Dependabot process:

| Option | Process | Benefit | Risk |
| --- | --- | --- | --- |
| 1 | Handle all updates manually | safest approach _if support is consistent_ | inconsistent supports leads to harder updates, fewer updates, and less secure code |
| 2 | Auto-merge patches only | more consistent updates; engineers partially freed up for other tasks | minor risk of bugs entering production if update is mislabeled as a patch (patches should be for bugfixes only); still a risk of inconsistent support for minor and major updates |
| 3 | Auto-merge all updates | ensures consistency of updates; engineers entirely freed up for other tasks (unless something goes wrong — see _risks_) | greater risk of bugs entering production; greater risk of having no one on TLC Crew to fix bugs |

### Things to consider when thinking about risk

#### 1) It's a static site

If we were doing automatic updates on a dynamic, two-way application, there would be a very different threat model.

#### 2) Our riskiest bugs are visual bugs

Merges would still need to pass our CI pipeline, which already checks for build completion and accessibility compliance. The likeliest bugs to "slip through the cracks" would be visual/design bugs.

(Pa11y checks are somewhat different than visual QA. It can ensure that certain elements exist and are accessible, but not that they look the way we expect them to look.)

This does open up the question of how we could incorporate visual spot-checks into our CI pipeline, and if this is worth doing.

## Proposal

### 1) Start with option 2: auto-merge only patches, and track how it goes

Our hypothesis with option #2 is that this will offer some needed consistency, and the time that engineers will save will outweigh the risks of bugs entering production.

In this trial period, pay attention to:
- how many bugs enter production
- how much engineering time is saved

If bugs enter production at an unacceptable level, roll back to fully manual updates.

### 2) Rotate responsiblities for Dependabot support among TLC Crew engineers

For every iteration, make a ticket for Dependabot support. Assign that ticket to a new engineer each week. Keep track of who's done it and how many times, to make sure work is delegated equitably.

This would only be for minor or major updates, as patches will now be automatic.

Keep the [weekly PR cadence](https://github.com/18F/guides/blob/main/.github/dependabot.yml#L11) for Dependabot so that updates can happen a little more synchronously for the supporter.

