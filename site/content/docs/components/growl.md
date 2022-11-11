---
layout: docs
title: Growl
description: Use the Growl plugin to turn any Bootstrap alert into a macOS style notification. Growls are fixed to the top right of your viewport and can be dismissed, just like normal Bootstrap alerts.
group: components
aliases:
  - "/growl"
  - "/docs/growl"
toc: true
---

## Examples

{{< example class="bd-example-padded" >}}
<div class="growl growl-static">
  <div class="alert alert-dismissible fade show" role="alert">
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    <strong class="alert-heading">Well done!</strong>
    <p>You successfully read this important alert message.</p>
  </div>
</div>
{{< /example >}}

## CSS

### Variables

{{< scss-docs name="growl-alert-css-vars" file="scss/components/_growl.scss" >}}

### Sass variables

{{< scss-docs name="growl-variables" file="scss/_variables.scss" >}}
