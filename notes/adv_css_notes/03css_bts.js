/*
! CSS Behind the Scenes

? What happens to CSS when we load a webpage?
HTML Loads -> Parses HTML ------> DOM is created
                  -> Load CSS -> Parse CSS
                              ? Here, it resolves conflicting CSS declarations (cascade) and processes final CSS values.
                                    -> CSS Object Model is created

After these are completed, the DOM and CSSOM combine to render the tree.
      -> The website rendering: the visual formatting model
            -> Final rendered website

! CSS Terminology

? my-class (selector) {
? declaration block
?     font-size(propety): 20px(declared value); <-- declaration
? }

! The 'C' - Cascade
* The cascade is the process of combining different stylesheets and resolving conflicts between different CSS rules and declarations, when more than one rule applies to a certain element.

- Declarations may come from the author, the user, or even the browser.

! Importance > Specficity > Source Order

* Importance
      - 1. User !important declarations
      - 2. Author !important declarations
      - 3. Author declarations
      - 4. User declrations
      - 5. Default browser declarations.

* Same importance? Move to specificity
      - 1. Inline styles
      - 2. IDs
      - 3. Classes, pseudo-classes, attribute
      - 4. Elements, pseudo-elements

* Tie? Move to source order
      - The last declaration in the code will override all other declarations and will be applied.

! Key points:
      - CSS declarations marked with !important have the highest priority.
      - This should be a last resort, it's better to use correct specificities - more maintainable code
      - Inline styles will always have priority over styles in external stylesheets
      - A selector that contains 1 ID is more specific than one with 1,000 classes.
      - A selector that contains 1 class is more specific than one with 1,000 elements.
      - The universal selector * has NO specificity value (0, 0, 0, 0)
      - Rely more on specificity than on the order of selectors.
      - But, rely on order when using 3rd-party stylesheets - always put your author stylesheet last.

! How CSS Values are Processed
<div class="section">
      <p class="amazing">CSS is absolutely amazing</p>
</div>

.section {
      font-size: 1.5rem;
      width: 280px;
      background-color: orangered;
}

p {
      width: 140px; (conflicting)
      background-color: green;
}

.amazing {
      width: 60%; (conflicing, but is more specific than the p selector and will be applied)
}

! How Units are Converted from Relative to Absolute (px)
                  Example           How to convert to px              Result in px
* % (fonts)       150%              x% * parent's c. font-size          24px
* % (lengths)     10%               x% * parent's c. width              100px
* em (fonts)      3em               x * parent c. font-size             72px (3 * 24)
* em (lengths)    2em               x * current element c. font-size    48px
* rem             10rem             x * root c. font-size               160px
* vh              90vh              x * 1% of viewport height           90% of current v.h.
* vw              80vw              x * 1% of viewport width            80% of current v.w.

! Key Points:
      - Each property has an initial value, used if nothing is declared
      - Browsers specify a root font-size for each page (usually 16px)
      - Percentages and relative values are always converted to pixels.
      - Percentages are measure relative to their parent's font-size
      - Percentages are measured relative to their parent's width
      - em are measured relative to their parent font-size
      - em are measured relative to their current font-size; if used to specify lengths
      - rem are always measured relative to the document's root font-size
      - vh and vw are simply percentage measurements of the viewport's height and width.

! Inheritance in CSS
Example:
.parent {
      font-size: 20px;
      line-height: 150%;
}

.child {
      font-size: 25px;
}

* If there is not a cascaded value, CSS will look to see if the property is inherited.
* This step is specific to each property and their specification.

- Inheritance passes the values for some specific properties from parents to children -- more maintainable code.
- Properties related to text are typically inherited: font-family, font-size, color, etc.
- The computed value of a property is what gets inherited, NOT the declared value
- Inheritance of a propety only works if no one declares a value for that property.
- The inherit keyword forces inheritance on a certain property.
      */
