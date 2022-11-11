---
layout: docs
title: Icon nav
description: The icon nav is a special sidebar navigation for this toolkit. In mobile viewports, the icon nav is horizontal with icons and textual labels. On larger devices the icon nav changes and becomes affixed to the side of the viewport with tooltips instead of textual labels.
group: components
aliases:
  - "/icon-nav"
  - "/docs/icon-nav"
toc: true
---

## Examples

{{< example class="bd-example-static" >}}
<nav class="nav-icon">
  <a class="nav-icon-brand" href="#">
    <span class="icon nav-icon-brand-icon">
      <img src="/docs/assets/img/examples/8s.svg" class="img-fluid" alt="Brand">
    </span>
  </a>
  <div class="nav-icon-slider">
    <ul class="nav nav-pills nav-icon-nav flex-md-column">
      <li class="nav-item">
        <a class="nav-link" href="#" title="Overview" data-toggle="tooltip" data-placement="right" data-container="body">
          <span class="icon">
            <img src="/docs/assets/img/examples/house.svg" alt="Home">
          </span>
          <small class="nav-icon-nav-label d-md-none">Overview</small>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" title="Order history" data-toggle="tooltip" data-placement="right" data-container="body">
          <span class="icon">
            <img src="/docs/assets/img/examples/file-text.svg" alt="Text document">
          </span>
          <small class="nav-icon-nav-label d-md-none">History</small>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="#" title="Docs" data-toggle="tooltip" data-placement="right" data-container="body">
          <span class="icon">
            <img src="/docs/assets/img/examples/list.svg" alt="List">
          </span>
          <small class="nav-icon-nav-label d-md-none">Docs</small>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" title="Signed in as mdo" data-toggle="tooltip" data-placement="right" data-container="body">
          <img src="/docs/assets/img/examples/avatar-mdo.png" alt="@mdo avatar" class="rounded-circle">
          <small class="nav-icon-nav-label d-md-none">@mdo</small>
        </a>
      </li>
    </ul>
  </div>
</nav>
{{< /example >}}

## CSS

### Sass variables

{{< scss-docs name="nav-icon-variables" file="scss/_variables.scss" >}}
