---
layout: docs
title: Divided heading
description: Use a divided heading to call special attention to a separation of content in your pages.
group: components
aliases:
  - "/divided-heading"
  - "/docs/divided-heading"
toc: true
---

## Examples

{{< example class="bd-example-padded" >}}
<div class="hr-divider">
  <h3 class="hr-divider-content hr-divider-heading">
    Divider heading
  </h3>
</div>
{{< /example >}}

### Pill navigation

You can also use it with pill navigation.

{{< example class="bd-example-padded" >}}
<div class="hr-divider">
  <ul class="nav nav-pills hr-divider-content hr-divider-nav">
    <li class="nav-item">
      <a class="nav-link active" href="#">Active tab</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Tab</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Tab</a>
    </li>
  </ul>
</div>
{{< /example >}}

## CSS

### Sass variables

{{< scss-docs name="divider-variables" file="scss/_variables.scss" >}}
