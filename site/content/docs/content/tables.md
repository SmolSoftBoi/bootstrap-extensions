---
layout: docs
title: Flex tables
description: Use the flex table classes when you need to keep related elements on the same row, but with flexible individual widths.
group: content
aliases:
  - "/tables"
  - "/docs/tables"
toc: true
---

## Examples

{{< example class="bd-example-padded" >}}
<div class="table-flex">
  <div class="flextable-item table-flex-primary">
    <input type="text" class="form-control" placeholder="Search orders">
  </div>
  <div class="table-flex-item">
    <div class="btn-group">
      <button type="button" class="btn btn-outline-primary">Create</button>
      <button type="button" class="btn btn-outline-primary">Export</button>
    </div>
  </div>
</div>
{{< /example >}}

## CSS

### Sass variables

{{< scss-docs name="table-variables" file="scss/_variables.scss" >}}
