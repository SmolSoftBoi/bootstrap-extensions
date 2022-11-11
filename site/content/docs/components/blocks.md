---
layout: docs
title: Blocks
description: Blocks are a composing metaphor. Build your site up by stacking several blocks on top of each other to provide focused, attention grabbing units of content.
group: components
aliases:
  - "/blocks"
  - "/docs/blocks"
toc: true
---

## Examples

{{< example class="bd-example-blocks" >}}
<div class="block text-center">
  <h1 class="block-title">A basic block</h1>
  <h4 class="text-muted">Use these to package stackable, image driven content.</h4>
  <button class="btn btn-primary mt-1">With a simple button</button>
</div>
{{< /example >}}

### Dark

We have several basic block types, including a dark block.

{{< example class="bd-example-blocks" >}}
<div class="block block-dark text-center">
  <h1 class="block-title">A dark block</h1>
  <h4 class="text-muted">Use the dark modifier for working over dark images.</h4>
  <button class="btn btn-primary mt-1">With a simple button</button>
</div>
{{< /example >}}

### Backgrounds

We’ve also made it easy to integrate embeded content for more interactive block backgrounds.

{{< example class="bd-example-blocks" >}}
<div class="block block-dark text-center">
  <div class="block-foreground">
    <h1 class="block-title">An embed block</h1>
    <h4 class="text-muted">Use block-background to integrate interactive backgrounds.</h4>
    <button class="btn btn-outline-secondary mt-1">With a simple button</button>
  </div>
  <div class="block-background">
    <iframe src="https://youtube.com/embed/zpOULjyy-n8?autoplay=1controls=0&disablekb=1&fs=0&loop=1&modestbranding=1" title="YouTube video"></iframe>
  </div>
</div>
{{< /example >}}

### Bordered and angle

Use different modifiers like `block-bordered` and `block-angle` to experiment with different visual treatments and flows between your blocks.

{{< example class="bd-example-blocks" >}}
<div class="block text-center">
  <div class="container-fluid">
    <h4 class="mb-4">
      Join designers already using Bootstrap Extensions.<br>
      Get Bootstrap Extensions <strong>free</strong> forever!
    </h4>
    <form class="form-inline">
      <div class="d-flex justify-content-center">
        <input class="form-control mb-3" placeholder="Email address">
        <input class="form-control mb-3 mx-1" type="password" placeholder="Create a Password">
      </div>
      <button class="btn btn-primary mb-3">Get started - free forever</button>
    </form>
    <small class="text-muted">
      By clicking "get started – free Forever!" I agree to Bootstrap Extensions
      <a href="#">Terms of service</a>
    </small>
  </div>
</div>
<div class="block block-bordered text-center">
  <div class="container-fluid">
    <blockquote class="pull-quote">
      <p>
        “Notice that simple inset border above. Isn't it lovely.”
      </p>
      <cite>Mark Otto, Huge Nerd</cite>
    </blockquote>
  </div>
</div>
{{< /example >}}

### Fill height and alignment

{{< example class="bd-example-blocks" >}}
<div class="block block-fill-height text-center">
  <div class="block-xs-bottom">
    <div class="container-fluid">
     <blockquote class="pull-quote">
        <p>
          “Started at the bottom&hellip; etc”
        </p>
        <cite>Drake, OVO</cite>
      </blockquote>
    </div>
  </div>
</div>
{{< /example >}}

## CSS

### Sass variables

{{< scss-docs name="block-variables" file="scss/_variables.scss" >}}
