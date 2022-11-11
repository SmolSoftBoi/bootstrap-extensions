---
layout: docs
title: Carousel light
description: The light carousel is a modified version of Bootstrap’s default carousel, using lighter styles on all carousel controls.
group: components
aliases:
  - "/carousel-light"
  - "/docs/carousel-light"
toc: true
---

## Examples

{{< example >}}
<div id="carouselLightExample" class="carousel carousel-light slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselLightExample" data-bs-slide-to="0" class="active"></li>
    <li data-target="#carouselLightExample" data-bs-slide-to="1"></li>
    <li data-target="#carouselLightExample" data-bs-slide-to="2"></li>
  </ol>
  <div class="carousel-inner" role="listbox">
    <div class="carousel-item active">
      {{< placeholder class="d-block img-fluid" width="1140" height="500" text="First slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder class="d-block img-fluid" width="1140" height="500" text="Second slide" >}}
    </div>
    <div class="carousel-item">
      {{< placeholder class="d-block img-fluid" width="1140" height="500" text="Third slide" >}}
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselLightExample" role="button" data-bs-slide="prev">
    <span class="icon icon-chevron-thin-left" aria-hidden="true">〈</span>
    <span class="visually-hidden">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselLightExample" role="button" data-bs-slide="next">
    <span class="icon icon-chevron-thin-right" aria-hidden="true">〉</span>
    <span class="visually-hidden">Next</span>
  </a>
</div>
{{< /example >}}

## CSS

### Sass variables

{{< scss-docs name="carousel-light-variables" file="scss/_variables.scss" >}}
