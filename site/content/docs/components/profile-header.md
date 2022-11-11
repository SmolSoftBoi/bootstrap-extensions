---
layout: docs
title: Profile header
description: Simple profile headers to show off a user’s profile information
group: components
aliases:
  - "/profile-header"
  - "/docs/profile-header"
toc: true
---

## Examples

{{< example class="bd-example-bg" >}}
<div class="profile-header text-center" style="background-image: url(/docs/assets/img/examples/iceland.jpg); ">
  <div class="container-fluid">
    <div class="container-inner">
      <img class="rounded-circle media-object" src="/docs/assets/img/examples/avatar-dhg.png" alt="Dave Gamache avatar">
      <h3 class="profile-header-user">Dave Gamache</h3>
      <p class="profile-header-bio">I wish i was a little bit taller, wish i was a baller, wish i had a girl&hellip; also.</p>
    </div>
  </div>
  <nav class="profile-header-nav">
    <ul class="nav nav-tabs justify-content-center">
      <li class="nav-item">
        <a class="nav-link active" href="#">Photos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Others</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Anothers</a>
      </li>
    </ul>
  </nav>
</div>
{{< /example >}}

## CSS

### Sass variables

{{< scss-docs name="profile-header-variables" file="scss/_variables.scss" >}}
