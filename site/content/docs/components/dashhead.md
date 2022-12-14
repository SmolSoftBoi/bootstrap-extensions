---
layout: docs
title: Dashhead
description: The dashhead is a component built to house all the textual headings, form controls, buttons, and more that are common for the top of dashboard page.
group: components
aliases:
  - "/dashhead"
  - "/docs/dashhead"
toc: true
---

## Examples

{{< example class="bd-example-padded" >}}
<div class="dashhead">
  <div class="dashhead-titles">
    <h6 class="dashhead-subtitle">Dashboards</h6>
    <h3 class="dashhead-title">Overview</h3>
  </div>

  <div class="dashhead-toolbar">
    <div class="input dashhead-toolbar-item">
      <input type="text" value="01/01/15 - 01/08/15" class="form-control" data-bs-provide="datepicker">
    </div>
    <span class="dashhead-toolbar-divider hidden-xs"></span>
    <div class="btn-group dashhead-toolbar-item btn-group-thirds">
      <button type="button" class="btn btn-outline-primary">Day</button>
      <button type="button" class="btn btn-outline-primary active">Week</button>
      <button type="button" class="btn btn-outline-primary">Month</button>
    </div>
  </div>
</div>
{{< /example >}}

## CSS

### Sass variables

{{< scss-docs name="dashhead-variables" file="scss/_variables.scss" >}}
