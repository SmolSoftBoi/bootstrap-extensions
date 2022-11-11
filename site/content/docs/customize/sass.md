---
layout: docs
title: Sass
description: Some stylesheet is required to use these components.
group: customize
aliases:
  - "/docs/sass"
  - "/sass"
toc: true
---

## Importing

### CSS

```css
// The following line can be included in your css file
import 'bootstrap-extensions/dist/css/bootstrap-extensions.min.css';
```

In case you are using Sass the simplest way is to include the Bootstrap Extensions’ source Sass files in your main Sass file. You might have to setup the bundler of your choice to compile Sass/SCSS stylesheets to CSS.

```scss
// The following line can be included in a scss file
@import "bootstrap-extensions/scss/bootstrap-extensions";
```

If you wish to customize the Bootstrap Extensions theme or any Bootstrap Extensions variables you can create a custom Sass file:

```scss
// The following block can be included in a scss file

// Make the customisations
$theme-colors: (
  "info": tomato,
  "danger": teal
);

// import Bootstrap Extensions to set changes
@import "bootstrap-extensions/scss/bootstrap-extensions";
```
