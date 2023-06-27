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

In your `custom.scss`, you'll import Bootstrap Extension's source Sass files. You have two options: include all of Bootstrap Extensions, or pick the parts you need. We encourage the latter, though be aware there are some requirements and dependencies across our components. You also will need to include some JavaScript for Bootstrap's plugins.

```scss
// Option A: Include all of Bootstrap Extensions

// Include any default variable overrides here (though functions won't be available)

@import "@smolpack/bootstrap-extensions/scss/bootstrap-extensions";

// Then add additional custom code here

```

```scss
// Option B: Include parts of Bootstrap Extensions

// 1. Include functions first (so you can manipulate colors, SVGs, calc, etc)
@import "@smolpack/bootstrap-extensions/scss/functions";

// 2. Include any default variable overrides here

// 3. Include remainder of required Bootstrap stylesheets
@import "@smolpack/bootstrap-extensions/scss/variables";
@import "@smolpack/bootstrap-extensions/scss/variables-dark";

// 4. Include any default map overrides here

// 5. Include remainder of required parts
@import "@smolpack/bootstrap-extensions/scss/maps";
@import "@smolpack/bootstrap-extensions/scss/mixins";
@import "@smolpack/bootstrap-extensions/scss/root";

// 6. Optionally include any other parts as needed
@import "@smolpack/bootstrap-extensions/scss/utilities";
@import "bootstrap/scss/reboot";
@import "bootstrap/scss/type";
@import "bootstrap/scss/images";
@import "bootstrap/scss/containers";
@import "bootstrap/scss/grid";
@import "bootstrap/scss/helpers";

// 7. Optionally include utilities API last to generate classes based on the Sass map in `_utilities.scss`
@import "bootstrap/scss/utilities/api";

// 8. Add additional custom code here

```

With that setup in place, you can begin to modify any of the Sass variables and maps in your `custom.scss`. You can also start to add parts of Bootstrap Extensions under the `// Optional` section as needed. We suggest using the full import stack from our `bootstrap-extensions.scss` file as your starting point.

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
