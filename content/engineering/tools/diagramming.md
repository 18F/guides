---
title: Diagramming
sidenav: true
sticky_sidenav: true
permalink: /engineering/tools/diagramming/
redirect_from:
  - engineering/diagramming/
tags: engineering
layout: layouts/page
eleventyNavigation:
  parent: engineering_tools
  key: Diagramming
  order: 8
  title: Diagramming
---

Diagrams are helpful for making sense of complex systems and may be requested or required by an agency partner as part of their security and compliance process. They can also just be fun!

While the diagramming tools chosen for each 18F project varies, a good tool will:

- produce clear, readable diagrams
- not share sensitive data with any unauthorized person
- be easy to use so that diagrams are maintained
- produce a diagram that can be updated without needing access to additional systems or software

## Accessibility

Make sure that all the information you put into a diagram is also available in text, preferably on the same page or in the same document. It's a nice thing to do and it is also the law.

Also, some people can't see colors or contrast very well, so avoid small fonts, smudgy greys, tiny dots, and if you use color to convey meaning, include the same information with shapes or text.

## Mermaid

[Mermaid](https://mermaid.js.org/intro/) is a JavaScript library for diagram rendering. Diagram code is written in Mermaid's own DSL (domain specific language). Cloud.gov does some of [their diagrams](https://diagrams.fr.cloud.gov/) using it; the source code is in their [diagram repository](https://github.com/cloud-gov/cg-diagrams).

It also has [inline rendering support from GitHub](https://github.blog/2022-02-14-include-diagrams-markdown-files-mermaid/) which makes it a good choice if you'd like to include diagrams as code directly in a markdown file to be viewed on GitHub's website.

## Graphviz

[Graphviz](https://graphviz.org/) is software program for diagram rendering. It runs on Windows, Mac, and Linux. Diagram code is written in DOT language, which is Graphviz's own DSL. Other tools are able to output DOT files, such as how this GSA Touchpoints [data model](https://github.com/GSA/touchpoints/wiki/Data-Model) was generated, and some editors like [Edotor](https://edotor.net/) exist to help you visualize how a piece of syntax works.

Diagrams are typically rendered to an image file, like png.

## PlantUML (PUML)

[PlantUML](https://plantuml.com/) is the heavy lifter in our diagramming toolbox. In spite of "UML" in the name, it renders many types of diagrams. It requires a Java runtime (and sometimes Graphviz) to generate diagrams. Diagram code is written in PlantUML's own DSL. Cloud.gov does some of [their diagrams](https://diagrams.fr.cloud.gov/) using it; the source code is in their [diagram repository](https://github.com/cloud-gov/cg-diagrams).

The [PlantUML standard library](https://github.com/plantuml-stdlib/C4-PlantUML) supports [the C4 Model for representing system architecture](https://c4model.com/) well. For examples, see [data.gov's diagrams](https://github.com/GSA/datagov-compliance) or [Tock's diagrams](https://github.com/18F/tock/tree/main/docs/diagrams).

The 18F [rails-template](https://github.com/18F/rails-template/tree/main/templates/doc/compliance) comes with instructions for using PlantUML to help with the ATO (authority to operate) process.

In the case of maintaining a large number of diagrams which need to be updated frequently, some teams may opt to host a PlantUML server to render the images on the fly. This saves having to manually regenerate images each time the diagrams change.

{% include "engineering/tag-caution.html" %} PlantUML's default configuration uses their own server, which is almost certainly not what you want. Run PlantUML locally or self-host.

## An example of using a diagram in HTML

This example is taken from the <a href="{{'/engineering/tools/sharepoint/' | url }}">SharePoint primer</a>.

```html
<figure>
  <img src="..." alt="Diagram of ..." />
  <figcaption>
    <details>
      <summary>Source for diagram</summary>
      ... how the diagram is generated...
      ... code for the diagram...
    </details>
  </figcaption>
</figure>
```