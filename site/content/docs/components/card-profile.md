---
layout: docs
title: Card profile
description: Feature a user’s profile with the card profile variant.
group: components
aliases:
  - "/card-profile"
  - "/docs/card-profile"
toc: true
---

## Examples

{{< example class="bd-example-padded" >}}
<div class="row">
  <div class="col-lg-6">
    <div class="card card-profile">
      <div class="card-header" style="background-image: url(/docs/assets/img/examples/unsplash-1.jpg);"></div>
      <div class="card-body text-center">
        <img class="card-profile-img" src="/docs/assets/img/examples/avatar-fat.jpg" alt="Jacob Thornton avatar">
        <h5 class="card-title">Jacob Thornton</h5>
        <p class="mb-4">Big belly rude boy, million dollar hustler. Unemployed.</p>
        <button class="btn btn-outline-primary btn-sm">Follow</button>
      </div>
    </div>
  </div>
  <div class="col-lg-6">
    <div class="card card-profile">
      <div class="card-header" style="background-image: url(/docs/assets/img/examples/unsplash-2.jpg);"></div>
      <div class="card-body text-center">
        <img class="card-profile-img" src="/docs/assets/img/examples/avatar-mdo.png" alt="Mark Otto avatar">
        <h5 class="card-title">Mark Otto</h5>
        <p class="mb-4">GitHub and Bootstrap. Formerly at Twitter. Huge nerd.</p>
        <button class="btn btn-outline-primary btn-sm">Follow</button>
      </div>
    </div>
  </div>
</div>
{{< /example >}}

## CSS

### Sass variables

{{< scss-docs name="card-profile-variables" file="scss/_variables.scss" >}}
