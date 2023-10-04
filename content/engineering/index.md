---
title: Guidelines and best practices
permalink: /engineering/
layout: layouts/page
sidenav: false
tags: engineering
eleventyNavigation: 
  parent: engineering
  key: Guidelines and best practices
  order: 1
  title: Guidelines and best practices
---
This guide is where the TTS Engineering Practices Guild collects its best practices and resources for software development at TTS, as well as on our partner engagements. Our focus is cloud-native digital services and our recommendations in this guide reflect the needs of that domain.

{% assign about_links = collections.all | eleventyNavigation: 'engineering_about' %}
{% assign approach_links = collections.all | eleventyNavigation: 'engineering_approach' %}
{% assign tools_links = collections.all | eleventyNavigation: 'engineering_tools' %}
{% assign languages_links = collections.all | eleventyNavigation: 'engineering_languages' %}
{% assign security_links = collections.all | eleventyNavigation: 'engineering_security' %}

<div class="grid-row">
  {%- include "engineering/categorylinks.html" links: about_links  -%}
  {%- include "engineering/categorylinks.html" links: approach_links -%}
</div>
<div class="grid-row">
  {%- include "engineering/categorylinks.html" links: tools_links  -%}
  {%- include "engineering/categorylinks.html" links: languages_links  -%}
</div>
<div class="grid-row">
  {%- include "engineering/categorylinks.html" links: security_links -%}
</div>
