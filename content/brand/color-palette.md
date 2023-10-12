---
title: Color palette
permalink: /brand/color-palette/
layout: layouts/wide
sidenav: false
tags: brand
eleventyNavigation:
  parent: brand
  key: color-palette
  order: 3
  title: Color palette

palette:
  - name: white
    hex: 'FFFFFF'
  - name: light
    hex: 'B3EFFF'
  - name: bright
    hex: '00CFFF'
  - name: medium
    hex: '046B99'
  - name: dark
    hex: '1C304A'
  - name: black
    hex: '000000'
---

For Adobe, Sketch, and Mac applications

[Download color palettes]({{ "/assets/brand/dist/18F_Color_Palette.zip" | url }}){.usa-button}

  <div class="grid-row grid-gap-md margin-top-4">
  {%- for color in palette -%}
    <div class="grid-col-6 tablet:grid-col-2">
      <div class="palette-square brand-background-{{ color.name }}"></div>
      <p class="margin-bottom-0 text-bold">{{- color.name | capitalize -}}</p>
      <p class="margin-y-0">#{{ color.hex }}</p>
    </div>
  {%- endfor -%}
  </div>
<br>


## Color guidance
Color choices impact the accessibility of our content. Here's how to use color in line with [18F's accessibility practices](https://pages.18f.gov/accessibility/).

### Don't use color exclusively to convey meaning
People see colors differently, and color is not seen by everyone. If color is the only signal, that signal won’t get through as intended to everyone.

When communicating, use color as an enhancement to other elements like text, icons, or patterns. For example, to visualize data in a line chart, use different line styles (solid, dashed, dotted) in addition to different line colors.

One helpful test is to imagine your design in black and white. Is it still understandable?

### Use accessible color combinations
Colors need to contrast with one another to be identifiable. WCAG provides guidance on what contrast ratios are accessible in certain situations:
*  Large text (bolded 18px text, regular 24px text, or larger) [should have a contrast ratio of 3:1 or more with its background](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html).
*  Small text (18px text or smaller) [should have a contrast ratio of 4.5:1 or more with its background](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html).
*  Non-text elements (aka, icons or diagrams) [should have a contrast ratio of 3:1 or more with its background color](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html).

We recommend using a higher standard when using the 18F palette:
* Large **and** small text should have a contrast ratio of 4.5:1 or more with its background.
* Non-text elements should have a contrast ratio of 3:1 or more with its background color.

Below is an outline of accessible 18F color combinations.

{% include 'brand/color-matrix.html' %}
