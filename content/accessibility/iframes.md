---
title: Inline frames (iframes)
permalink: /accessibility/iframes/
layout: layouts/page
sidenav: true
tags: accessibility
eleventyNavigation: 
  key: iframes
  parent: accessibility
  order: 18
  title: Inline frames
---
When using `iframe`s, it’s important that all content contained in them is accessible.

## Testing

1. Identify all `iframe`s on a page.
2. Using the keyboard, navigate to each `iframe` to ensure content is accessible.
3. Check the `title` or `name` attribute of each `iframe` for a description of the content.

## Examples


### Failures

<iframe src="../iframeform/" class="exampleFailure" data-pa11y-ignore></iframe>

```html
<iframe src="../iframeform/"></iframe>
```

> This `iframe` doesn’t have a `title` or `name`.

<iframe src="../iframeform/" name='Provide an address form' class="exampleFailure" data-pa11y-ignore></iframe>

```html
<iframe src="../iframeform/" name='Provide an address form'></iframe>
```

> This `name` isn’t correct.

### Passes

<iframe src="../iframeform/" title='Provide Name Form'></iframe>

```html
<iframe src="../iframeform/" title='Provide Name Form'></iframe>
```

> Correct `title` is provided. This would also pass if this information was in a `name` attribute.

