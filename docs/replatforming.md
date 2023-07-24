---
permalink: false
eleventyExcludeFromCollections: true
---
# Replatforming
This document captures the structure of the new platform for 18F approaches and outlines the process of migrating our existing content to the new platform. This document is a work in progress.

##  Content organization
The content for all of the guides is in the `content` folder, which is organized with subfolders for each guide. For example all of the content for the De-risking guide should be placed in `content/derisking/`.

## Guide titles and subdirectories
The `_data/titles_roots.yaml` file is used to set the title for each guide (i.e. what appears after the 18F logo in the header). In addition it defines the name of the URL “subdirectory” that will be the “root” or homepage for the guide. A guide’s tag is used as a key which maps to the title and root. This tag is referenced to set the title, header, and primary navigation for each guide.

_Example:_
```
agile:
  title: Agile
  root: /agile/
```
## Guide primary navigation

The `_data/navigation.yaml` file is used to define the primary navigation for each guide. The guide’s tag is used as a key which maps to its list of link names and urls.

_Example:_
```
agile:
  - name: Home
    url: /agile/
```

## Collections / tags
11ty uses “[collections](https://www.11ty.dev/docs/collections/)” to create content groupings. We can create a distinct collection for each guide, which allows us to group relevant content together. Site pages can be added to a collection simply by adding a `tag` to the front matter with the appropriate guide name as the value. The tag name is used throughout the site to refer to each guide (for example to determine the guide’s title).

_Examples:_
De-risking guide content would have the front matter `tags: derisking`
UX guide pages would have `tags: uxguide`

## Sidenavs
We can use the [EleventyNavigation](https://www.11ty.dev/docs/plugins/navigation/) plugin to programmatically create a sidenav for any collection. In order to group pages within a subsection to together, all pages within a section should have a common `eleventyNavigation` `parent` key. For example the introduction page for the content guide "Our style" would include the following front matter:
```
eleventyNavigation:
  key: content-style-index
  parent: content-style
  order: 1
  title: Our style
---
```
and similarly, the "Active voice" page within that section would have the following in its front matter:

```
eleventyNavigation:
  key: content-active
  parent: content-style
  order: 3
  title: Active voice
```

In the above front matter:
- `parent: content-sytle` references the name of the parent section.
- `key: content-active` sets this page's unique key for the sidenav.
- `order: 3` explicitly sets the order the page should appear in the sidenav (in this case it'll be first).
- `title: Active voice` controls what text is displayed in the sidenav. This field is optional, and if it’s omitted the `key` value will be displayed.


## Ignoring assetPaths
We want to avoid commiting the `assetPaths.json` file, but need to keep it out of the project `.gitignore` in order to allow eleventy to rebuild when it is changed. One way to resolve this issue is to add `assetPaths.json` to the git exclude list:
1. Open up `.git/info/exclude`
2. Add `assetPaths.json` to that file

## Content migration process

The general steps for migrating a guide: 
1. Add the guide to the `_data/titles_roots.yaml` file with the guide’s tag, name, and root (See [Guide titles and subdirectories](#guide-titles-and-subdirectories) for an example).
2. Add the primary navigation for the guide to `_data/navigation.yaml`.
3. Create a mock markdown file to establish the `eleventyNavigation` either for the guide or for the guide section. Each section that has a sidenav will need to have a mock file. (See [Sidenavs](#sidenavs) for more details).
4. Copy over the markdown file for the guide into the appropriate subfolder.
5. Open up the markdown file to edit the front matter:
    1. Change the layout to `layout/page` or whatever layout is most appropriate.
    2. Add `tags: <collection-name>` where <collection-name> is the guide’s tag.
    2. Update the `permalink` to the link that should be displayed. Generally this will be `/<guide-root>/<page-name>`. Try to match the permalink of the original markdown file.
    3. Add the `eleventyNavigation` front matter (See [Sidenavs](#sidenavs) for more details) : 
    ```
    eleventyNavigation: 
      parent: <collection-name>
      key: <unique-key>
      order: <#>
      title: <Sidenav-title>
    ```
6. Celebrate! Or edit this documentation to update any steps that may be missing.

## CI/CD
Every pull request will trigger a build on Cloud.gov pages. Additionally, we have a github workflow in place that performs a number of tests on every pull request:
- Automated accessbility test with`pa11y-ci`
- HTML validation with `html-validate`
- Internal and external link checking with `check-html-links`

### Running pa11y
We use `pa11y-ci` is used to scan for accessibility issues. The scan runs as part of
our CI setup (see the [pull-request.yml workflow](.github/workflows/pull-request.yml))
on every pull request, but it can also be run locally. To run locally, type:

```
npm run test:pa11y-ci
```

Note that running `pa11y-ci` inside the docker container may not always work.

In cases where you want pa11y to ignore a certain element, such as in the accessibility guide which intentionally shows examples of accessibility issues, you can add the data attribute `data-pa11y-ignore` to the element that should be ignored.

In certain cases we may need `pa11y-ci` to ignore an element. For example, in the accessibility guide there are elements that violate a11y rules on purpose. We know those will fail and don't want to fix them because they are showing an example of a bad practice, and so we want `pa11y-ci` to ignore them. To do so we can the data attribute `data-pa11y-ignore` to the element that should be ignored.

_Example:_

```
<span style = "color:#58AA02" class="exampleFailure" data-pa11y-ignore>This text fails. </span>
```

### HTML Validation
`html-validate` will check for valid HTML. It is configured in `.htmlvalidate.json`.

### Link checking
`check-html-links` will test both internal and external links on the site. The internal link check tests whether a target link file exists in the `_site` folder at the expected location. The external link check will test if the link returns a `200` HTTP response. Because the current version of `check-html-link` [does not return an error value](https://github.com/modernweb-dev/rocket/issues/166) when it finds broken links, the npm script for this check includes an additional grep search for a "✅" which would appear only if there are no broken links. With this (hopefully) temporary fix in place, github actions will report a failure if there are broken links.

If you'd like to run these locally you could run `npm run test:links`. Note that the external-link test takes significantly longer than the internal link check (around 40 seconds to a minute). If you'd like to only test for internal links you can run `npm run test:links-internal`.

