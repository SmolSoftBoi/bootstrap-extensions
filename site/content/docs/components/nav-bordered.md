---
layout: docs
title: Bordered nav
description: The bordered nav builds on Bootstrap’s nav base styles with a new, bolder variation to nav links.
group: components
aliases:
  - "/nav-bordered"
  - "/docs/nav-bordered"
toc: true
---

## Examples

{{< example class="bd-example-padded" >}}
<ul class="nav nav-bordered">
  <li class="nav-item">
    <a class="nav-link active" href="#">Bold</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Minimal</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Components</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Docs</a>
  </li>
</ul>
{{< /example >}}

### Stacked

Bordered nav links can also be stacked.

{{< example class="bd-example-padded" >}}
<ul class="nav nav-bordered nav-stacked flex-column">
  <li class="nav-header">Examples</li>
  <li class="nav-item">
    <a class="nav-link active" href="#">Bold</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Minimal</a>
  </li>

  <li class="nav-header">Sections</li>

  <li class="nav-item">
    <a class="nav-link" href="#">Grid</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Pricing</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">About</a>
  </li>
</ul>
{{< /example >}}

## CSS

### Sass variables

{{< scss-docs name="nav-bordered-variables" file="scss/_variables.scss" >}}
