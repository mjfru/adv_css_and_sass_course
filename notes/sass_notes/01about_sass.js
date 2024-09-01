/*
! What is Sass? How does it work?
* Sass is a CSS preprocessor, an extension of CSS that adds power and elegance to the basic language.

Sass source code ---> Sass compiler ---> Compiled CSS code

? Main Sass Features:
  - Variables: for reusable values such as colors, font-sizes, spacing, etc.
  - Nesting: to nest selectors within one another, allowing us to write less code
  - Operators: for mathematical operations inside CSS
  - Partials & Imports: to write CSS code in different files and importing them all into a single file
  - Mixins: to write reusable pieces of CSS code
  - Functions: similar to mixins but they produce a value that can be used
  - Extends: to make different selectors inherit declarations that are common to all of them
  - Control directives: for writing complex code using conditionals and loops

? There are 2 Sass Syntaxes: Sass & SCSS

* Sass Syntax (indentation sensitive, no semi-colons):
.nav
  list-style: none
  float: left

  & li
    display: inline-block
    margin-left: 30px

* SCSS Syntax (preserves original CSS-like syntax):
.nav {
  list-style: none;
  float: left;

  & li {
  display: inline-block;
  margin-left: 30px;
  }
}
*/