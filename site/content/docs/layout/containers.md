---
layout: docs
title: Containers
description: We’ve introduced a component for vertically aligning content with container content middle and bottom. This is particularly useful for sign in and other simple pages.
group: layout
aliases:
  - "/containers"
  - "/docs/containers"
toc: true
---

## Examples

Support for multiple, stackable modal bodies and scrolling bodies using the `.modal-body-scroller` modifier.

{{< example class="bd-example-padded bd-example-reduce-height" >}}
<div class="container-fill-height">
  <div class="container-content-middle">
    Vertically centered content.
  </div>
</div>
{{< /example >}}

## CSS

### Sass variables

{{< scss-docs name="container-variables" file="scss/_variables.scss" >}}
