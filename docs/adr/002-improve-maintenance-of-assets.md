# 2. Improve long-term maintenance of styling assets

## Status

Pending

## Context

It might be time to think through long-term asset management strategy for the guides repo, particularly with CSS.

Our repo has three types of styles:

1. USWDS base styling
1. USWDS overrides/custom styling shared by all guides
1. USWDS overrides/custom styling unique to a single guide

Currently, we have one SASS file that collects all of these types of styles together in a single bundle for the live site. This means every guide gets custom styling from other guides.

This isn’t good for a few reasons, but mainly that it’ll be harder to maintain as styles get added and removed from individual guides. (For example, a change on one guide can affect styling for all other guides). Another reason is that it makes the CSS bundle larger than it needs to be for each guide, which can slow down page loads.

## Decision

We will change our CSS bundling approach to mimic the three types of styles listed above, with one bundled stylesheet for each type, and some server-side logic that provides each guide its own stylesheets.

We will do this before a lot of styling is added for the methods guide, as methods will need its own stylesheet regardless of this decision.

## Consequences

This approach will make the assets bundling process a bit more complex. Instead of bundling into one css file, we will bundle multiple css files. We can mitigate the risks of this with proper documentation.
