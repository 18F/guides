---
title: methods homepage
permalink: /methods/
redirect_from:
  # resolves redirects from guides.18f.gov/methods
  - methods/rolling-issues-log/
  - methods/archive/bodystorming/
layout: layouts/default
tags: methods
eleventyExcludeFromCollections: true
---

<div class="usa-section intro-header">
  <div class="grid-container">
    <h1 class="visually-hidden">
      {{ title }}
    </h1>
    <p class="usa-intro usa-intro--methods no-print">A collection of tools to bring human-centered design into your project.</p>
  </div>
</div>
<div class="usa-section layout--methods">
{% for obj in method_categories %}
  {% comment %}
    methods_categories is a hash, so the object in the iteration is a key/values array.
    obj[0] is the key, which can be used as a slugified version of the category name.
    obj[1] is the category values object.
  {% endcomment %}
  {% assign category_slug = obj[0] %}
  {% assign category = obj[1] %}
  {% include "methods/homepage-category.html" category_slug: category_slug category: category %}
{% endfor %}
</div>
