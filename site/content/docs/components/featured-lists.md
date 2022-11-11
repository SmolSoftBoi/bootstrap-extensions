---
layout: docs
title: Featured lists
description: Featured lists are common marketing components used for associating visual icons with a list of topics.
group: components
aliases:
  - "/featured-lists"
  - "/docs/featured-lists"
toc: true
---

## Examples

{{< example >}}
<div class="container-fluid">
  <div class="row my-4">
    <div class="col-sm-6">
      <ul class="featured-list featured-list-bordered">
        <li class="mb-5">
          <div class="featured-list-icon">
            <img class="icon img-fluid p-3" src="/docs/assets/img/examples/dropbox.svg" alt="Dropbox">
          </div>

          <h3>Save things</h3>
          <p>
            Use dropbox to save things in the "cloud" because throwing things away is stressful and this way you don't have to.
          </p>
        </li>

        <li>
          <div class="featured-list-icon">
            <img class="icon img-fluid p-3" src="/docs/assets/img/examples/github.svg" alt="GitHub">
          </div>
          <h3>Fork things</h3>
          <p>
            Use github to share things on the internet then change them. Make things better. Free software? But not as in beer.
          </p>
        </li>
      </ul>
    </div>
    <div class="col-sm-6">
      <ul class="featured-list featured-list-bordered">
        <li class="mb-5">
          <div class="featured-list-icon">
            <img class="icon img-fluid p-3" src="/docs/assets/img/examples/medium.svg" alt="Medium">
          </div>

          <h3>Write things</h3>
          <p>
            Use Medium to write things down and sound smart. Also when you write, your writings looks pretty and that is cool.
          </p>
        </li>

        <li>
          <div class="featured-list-icon">
            <img class="icon img-fluid p-3" src="/docs/assets/img/examples/twitter.svg" alt="Twitter">
          </div>
          <h3>Tweet things</h3>
          <p>
            Use twitter to share 140 characters worth of anything you want. Pictures, videos, etc. It doesn't really matter.
          </p>
        </li>
      </ul>
    </div>
  </div>
</div>
{{< /example >}}

## CSS

### Sass variables

{{< scss-docs name="featured-list-variables" file="scss/_variables.scss" >}}
