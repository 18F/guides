# How assets work

## CSS

### At a glance

At a high level, there are three types of styles for the site:
1. USWDS
1. Custom sitewide styling
1. Custom styling for a single guide

USWDS (#1) is the basis for our styles, and we try to use to its defaults as much as possible. To make it easier to maintain, every guide inherits the same USWDS version and theme settings.

Inevitably, there are USWDS overrides and other custom styling that every page needs (#2).

Some of our guides, like Methods and Derisking, are more visually distinct and have their own styles that don’t pertain to other guides (#3).

All guides will need #1, many will need #1 and #2, and some (like Derisking and Methods) will need all three.

### Why are there separate CSS bundles for certain guides?

We want all stylesheets to be able to use the full range of USWDS features, like design tokens. In order to do that, USWDS SASS and guide-specific SASS needs to be compiled together.

Guides that only need #1 and #2 will use the "common" SASS bundle, which will forward USWDS core and our USWDS theme settings.

Guides that need all three style types will get their own SASS bundle, which will include the "common" bundle.

### File structure and convention

Under `/assets` there is a `_common` folder and a folder for each guide. Each folder may have a `styles` folder that holds all stylesheets.

Our convention is to keep this `styles` folder one level. The bundle for the guide will be named `styles-[guide].scss`. All other stylesheets will be prefixed with `_` and will be forwarded to the bundle.

Example folder structure:

```
- assets
  - _common
    - styles
      - _some-custom-stylesheet.scss
      - _another-custom-stylesheet.scss
      - styles-common.scss // forwards all stylesheets above
  - methods
    - styles
      - _some-methods-stylesheet.scss
      - _another-methods-stylesheet.scss
      - styles-methods.scss // forwards styles-common.scss and all methods stylesheets
```

Example styles-methods.scss file:

```
/*---------------------------------------------------------
Custom styling for all guides
----------------------------------------------------------*/
@forward "../../_common/styles/styles-common";

/*---------------------------------------------------------
Custom styling for methods guide only
----------------------------------------------------------*/
@forward "some-methods-stylesheet";
@forward "another-methods-stylesheet";
```

### Building assets

The site uses [esbuild](https://esbuild.github.io/) to build assets and [postcss](https://postcss.org/) for SASS compilation.

If you determine that a guide should have its own bundle, follow these steps:

1. Add the stylesheet to be bundled to the list of esbuild entry points in `/config/buildAssets.js`. This will add asset paths for your stylesheet in the local file `_data/assetPaths.json`.
1. Add the guide directory to the list of stylesheets in the `postcss` command in the `assets:autoprefix` npm script in `package.json`. This ensures that the SASS is compiled to CSS.
1. In the partial where stylesheets are provided to `<head>` (currently `meta.html`), add a conditional that loads the new `assetPath` for your stylesheet.
