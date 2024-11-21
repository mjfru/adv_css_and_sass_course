/*
! Concepts in Header Section of Natours

* Basic resets using the universal selector
* {
  margin:  0;
  padding: 0;
  box-sizing: border-box;
}


* Setting project-wide font definitions (thanks to inheritance)
body {
  font-family: ...
  
}

* Clip parts of elements using clip-path
element {
? polygon(coordinates that define it--clockwise)
? These are the four corners of the polygon and where they're positioned-- can use pixels, percentages, etc.
clip-path: polygon(0 0, 100% 0, 100% 60%, 0 100%)
}

? 'clippy' tool can assist with this.


* Center anything with transform, top, and left (before flexbox...)
* Creating CSS Animations using @keyframes and the animation property

* Pseudo-elements and pseudo-classes
* How and why to use ::after pseudo-element
* How to create a hover animation efect using the transition property

* Converting px to rem.

* Box Types: Inline, Block-level, and Inline-block
* Positioning Schemes: Normal flow, Absolute position, and Floats

! Tours Section:
- Rotating Cards
- Perspective in CSS
- backface-visibility property
- background blend modes
- How and when to use box-decoration-break

! Testimony Section
- How to make text flow around hapes with shape-outside and float
- How to apply a filter to an image
- How to create a background video covering an entire section
- How to use the <video> HTML element
- How and when to use the object-fit property

! Booking Section
- How to implement 'solid-color-gradients'
- How the general and adjacent sibling selectors work and why we need them
- How to use the ::input-placeholder pseudo-element
- How and when to use the :focus, :invalid, placeholder-show and :checked pseudo-classes
- Techniques to build custom radio buttons

! Navigation
- The 'checkbox hack' and how it works
- Creating custom animation timing functions using cubic bezier curves
- Animating solid-color gradient
- How and why to use transform-origin
- Create some cool effects

! 'Popup' Panel
- Building a nice popup with only CSS
- Using the :target pseudo-class
- Creating boxes with equal height using display: table-cell;
- How to create CSS text columns
- Automatically hyphenate words using hyphens

! Responsive design
- Use a powerful Sass mixin to write all our media queries
- Use the @content and @if Sass directives
- Take advantage of Chrome DevTools for responsive design
- How to use the srcset attribute on the <img> and <source> elements, together with density descriptors.
- How and why to use the <picture> element for art direction
- How to write media queries in HTML

- How to implement responsive images in CSS
- How to use resolution media queries to target high-res screens with 2x.
- How to combine multiple conditions in media queries

- How to use @supports feature queries
- Implement graceful degradation on selected properties
- How to use the backdrop-filter
*/