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
We can use the [EleventyNavigation](https://www.11ty.dev/docs/plugins/navigation/) plugin to programmatically create a sidenav for any collection. In order to do this, each collection should have a mock markdown file such as `agile.md`  or `state-handbook.md` which defines the collection’s parent `key` for `EleventyNavigation`. This file should containtain only this front matter and no real content. For example `agile.md` would contain:

```
permalink: false
eleventyNavigation:
   key: agile
```

Each page within the collection can then reference the relevant parent. For example the introduction page for the agile guide would have the following front matter:
```
eleventyNavigation:
  parent: agile
  key: Introduction
  order: 1
  title: Introduction
```
In the above front matter:
- `parent: agile` references the name of the parent collection.
- `key: Introduction` sets this page's unique key for the sidenav.
- `order:1` explicitly sets the order the page should appear in the sidenav (in this case it'll be first).
- `title: Introduction` controls what text is displayed in the sidenav. This field is optional, and if it’s omitted the `key` value will be displayed.

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

## Running pa11y
We use `pa11y-ci` is used to scan for accessibility issues. The scan runs as part of
our CI setup (see the [pull-request.yml workflow](.github/workflows/pull-request.yml))
on every pull request, but it can also be run locally. To run locally, type:

```
npm run test:pa11y-ci
```

Note that running `pa11y-ci` inside the docker container may not always work.

In cases where you want pa11y to ignore a certain element, such as in the accessibility guide which intentionally shows examples of accessibility issues, you can add the data attribute `data-pa11y-ignore` to the element that should be ignored.

_Example:_

```
<span style = "color:#58AA02" class="exampleFailure" data-pa11y-ignore>This text fails. </span>
```
