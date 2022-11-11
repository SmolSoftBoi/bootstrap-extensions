---
layout: docs
title: Transparent navbar
description: Use the navbar transparent variation for placing navbars over backgrounds and interactive content.
group: components
aliases:
  - "/navbar-transparent"
  - "/docs/navbar-transparent"
toc: true
---

## Examples

{{< example class="bd-example-bg" >}}
<div class="py-5 px-3" style="background: url(/docs/assets/img/examples/kanye.jpg) top center; background-size: cover">

  <nav class="navbar navbar-transparent navbar-padded navbar-expand-sm">
    <a class="navbar-brand" href="#">
      <h4 class="text-uppercase my-0">Project Name</h4>
    </a>

    <button
      class="navbar-toggler navbar-toggler-right d-md-none"
      type="button"
      data-toggle="collapse"
      data-target="#navbarResponsive"
      aria-controls="navbarResponsive"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="nav navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </nav>

</div>
{{< /example >}}

## CSS

### Sass variables

{{< scss-docs name="navbar-transparent-variables" file="scss/_variables.scss" >}}
