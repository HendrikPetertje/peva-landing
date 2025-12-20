# Layout

## Display

Control the display box type of an element.

### Basic Display Classes

| Class | CSS | Description |
|-------|-----|-------------|
| `block` | `display: block;` | Makes element a block container |
| `inline-block` | `display: inline-block;` | Makes element inline-level block container |
| `inline` | `display: inline;` | Makes element inline |
| `flex` | `display: flex;` | Makes element a block-level flex container |
| `inline-flex` | `display: inline-flex;` | Makes element an inline-level flex container |
| `table` | `display: table;` | Makes element behave like table element |
| `inline-table` | `display: inline-table;` | Makes element behave like inline table |
| `table-caption` | `display: table-caption;` | Makes element behave like table caption |
| `table-cell` | `display: table-cell;` | Makes element behave like table cell |
| `table-column` | `display: table-column;` | Makes element behave like table column |
| `table-column-group` | `display: table-column-group;` | Makes element behave like table column group |
| `table-footer-group` | `display: table-footer-group;` | Makes element behave like table footer group |
| `table-header-group` | `display: table-header-group;` | Makes element behave like table header group |
| `table-row-group` | `display: table-row-group;` | Makes element behave like table row group |
| `table-row` | `display: table-row;` | Makes element behave like table row |
| `flow-root` | `display: flow-root;` | Creates new block formatting context |
| `grid` | `display: grid;` | Makes element a block-level grid container |
| `inline-grid` | `display: inline-grid;` | Makes element an inline-level grid container |
| `contents` | `display: contents;` | Element doesn't generate a box |
| `list-item` | `display: list-item;` | Makes element behave like list item |
| `hidden` | `display: none;` | Hides element completely |

### Visibility Classes

| Class | CSS | Description |
|-------|-----|-------------|
| `visible` | `visibility: visible;` | Makes element visible |
| `invisible` | `visibility: hidden;` | Hides element but reserves space |
| `collapse` | `visibility: collapse;` | Collapses table elements |

### Screen Reader Classes

| Class | CSS | Description |
|-------|-----|-------------|
| `sr-only` | `position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;` | Hide visually but keep for screen readers |
| `not-sr-only` | `position: static; width: auto; height: auto; padding: 0; margin: 0; overflow: visible; clip: auto; white-space: normal;` | Undo sr-only |

## Position

Control how an element is positioned in the document.

| Class | CSS | Description |
|-------|-----|-------------|
| `static` | `position: static;` | Default positioning |
| `fixed` | `position: fixed;` | Positioned relative to viewport |
| `absolute` | `position: absolute;` | Positioned relative to nearest positioned ancestor |
| `relative` | `position: relative;` | Positioned relative to normal position |
| `sticky` | `position: sticky;` | Positioned based on scroll position |

## Top / Right / Bottom / Left

Control placement of positioned elements.

### Inset Classes

| Class | CSS | Description |
|-------|-----|-------------|
| `inset-0` | `inset: 0px;` | Set all sides to 0 |
| `inset-px` | `inset: 1px;` | Set all sides to 1px |
| `inset-0.5` | `inset: 0.125rem;` | Set all sides to 2px |
| `inset-1` | `inset: 0.25rem;` | Set all sides to 4px |
| `inset-1.5` | `inset: 0.375rem;` | Set all sides to 6px |
| `inset-2` | `inset: 0.5rem;` | Set all sides to 8px |
| `inset-2.5` | `inset: 0.625rem;` | Set all sides to 10px |
| `inset-3` | `inset: 0.75rem;` | Set all sides to 12px |
| `inset-3.5` | `inset: 0.875rem;` | Set all sides to 14px |
| `inset-4` | `inset: 1rem;` | Set all sides to 16px |
| ... | ... | Additional spacing values |
| `inset-auto` | `inset: auto;` | Set all sides to auto |
| `inset-1/2` | `inset: 50%;` | Set all sides to 50% |
| `inset-1/3` | `inset: 33.333333%;` | Set all sides to 33.33% |
| `inset-2/3` | `inset: 66.666667%;` | Set all sides to 66.67% |
| `inset-1/4` | `inset: 25%;` | Set all sides to 25% |
| `inset-2/4` | `inset: 50%;` | Set all sides to 50% |
| `inset-3/4` | `inset: 75%;` | Set all sides to 75% |
| `inset-full` | `inset: 100%;` | Set all sides to 100% |

### Horizontal Inset

| Class | CSS | Description |
|-------|-----|-------------|
| `inset-x-0` | `left: 0px; right: 0px;` | Set left and right to 0 |
| `inset-x-auto` | `left: auto; right: auto;` | Set left and right to auto |
| ... | ... | All spacing values available |

### Vertical Inset

| Class | CSS | Description |
|-------|-----|-------------|
| `inset-y-0` | `top: 0px; bottom: 0px;` | Set top and bottom to 0 |
| `inset-y-auto` | `top: auto; bottom: auto;` | Set top and bottom to auto |
| ... | ... | All spacing values available |

### Individual Sides

| Class | CSS | Description |
|-------|-----|-------------|
| `start-0` | `inset-inline-start: 0px;` | Set logical start |
| `end-0` | `inset-inline-end: 0px;` | Set logical end |
| `top-0` | `top: 0px;` | Set top position |
| `right-0` | `right: 0px;` | Set right position |
| `bottom-0` | `bottom: 0px;` | Set bottom position |
| `left-0` | `left: 0px;` | Set left position |
| ... | ... | All spacing values available for each side |

## Float

Control how elements float.

| Class | CSS | Description |
|-------|-----|-------------|
| `float-start` | `float: inline-start;` | Float to logical start |
| `float-end` | `float: inline-end;` | Float to logical end |
| `float-right` | `float: right;` | Float to the right |
| `float-left` | `float: left;` | Float to the left |
| `float-none` | `float: none;` | Don't float |

## Clear

Control how elements clear floated elements.

| Class | CSS | Description |
|-------|-----|-------------|
| `clear-start` | `clear: inline-start;` | Clear floated elements on logical start |
| `clear-end` | `clear: inline-end;` | Clear floated elements on logical end |
| `clear-left` | `clear: left;` | Clear floated elements on the left |
| `clear-right` | `clear: right;` | Clear floated elements on the right |
| `clear-both` | `clear: both;` | Clear floated elements on both sides |
| `clear-none` | `clear: none;` | Don't clear floated elements |

## Isolation

Control whether an element should create a new stacking context.

| Class | CSS | Description |
|-------|-----|-------------|
| `isolate` | `isolation: isolate;` | Create new stacking context |
| `isolation-auto` | `isolation: auto;` | Don't create new stacking context |

## Object Fit

Control how replaced content should be resized.

| Class | CSS | Description |
|-------|-----|-------------|
| `object-contain` | `object-fit: contain;` | Resize to fit while preserving aspect ratio |
| `object-cover` | `object-fit: cover;` | Resize to cover while preserving aspect ratio |
| `object-fill` | `object-fit: fill;` | Stretch to fill |
| `object-none` | `object-fit: none;` | Display at original size |
| `object-scale-down` | `object-fit: scale-down;` | Scale down if needed |

## Object Position

Control the position of replaced content.

| Class | CSS | Description |
|-------|-----|-------------|
| `object-bottom` | `object-position: bottom;` | Position at bottom |
| `object-center` | `object-position: center;` | Position at center |
| `object-left` | `object-position: left;` | Position at left |
| `object-left-bottom` | `object-position: left bottom;` | Position at left bottom |
| `object-left-top` | `object-position: left top;` | Position at left top |
| `object-right` | `object-position: right;` | Position at right |
| `object-right-bottom` | `object-position: right bottom;` | Position at right bottom |
| `object-right-top` | `object-position: right top;` | Position at right top |
| `object-top` | `object-position: top;` | Position at top |

## Overflow

Control how content overflows its container.

| Class | CSS | Description |
|-------|-----|-------------|
| `overflow-auto` | `overflow: auto;` | Add scrollbars when needed |
| `overflow-hidden` | `overflow: hidden;` | Hide overflowing content |
| `overflow-clip` | `overflow: clip;` | Clip overflowing content |
| `overflow-visible` | `overflow: visible;` | Show overflowing content |
| `overflow-scroll` | `overflow: scroll;` | Always show scrollbars |
| `overflow-x-auto` | `overflow-x: auto;` | Horizontal scrollbars when needed |
| `overflow-y-auto` | `overflow-y: auto;` | Vertical scrollbars when needed |
| `overflow-x-hidden` | `overflow-x: hidden;` | Hide horizontal overflow |
| `overflow-y-hidden` | `overflow-y: hidden;` | Hide vertical overflow |
| `overflow-x-clip` | `overflow-x: clip;` | Clip horizontal overflow |
| `overflow-y-clip` | `overflow-y: clip;` | Clip vertical overflow |
| `overflow-x-visible` | `overflow-x: visible;` | Show horizontal overflow |
| `overflow-y-visible` | `overflow-y: visible;` | Show vertical overflow |
| `overflow-x-scroll` | `overflow-x: scroll;` | Always show horizontal scrollbars |
| `overflow-y-scroll` | `overflow-y: scroll;` | Always show vertical scrollbars |

## Overscroll Behavior

Control the behavior when scrolling reaches the boundary.

| Class | CSS | Description |
|-------|-----|-------------|
| `overscroll-auto` | `overscroll-behavior: auto;` | Default overscroll behavior |
| `overscroll-contain` | `overscroll-behavior: contain;` | Prevent scroll chaining |
| `overscroll-none` | `overscroll-behavior: none;` | Prevent overscroll effects |
| `overscroll-y-auto` | `overscroll-behavior-y: auto;` | Default vertical overscroll |
| `overscroll-y-contain` | `overscroll-behavior-y: contain;` | Prevent vertical scroll chaining |
| `overscroll-y-none` | `overscroll-behavior-y: none;` | Prevent vertical overscroll |
| `overscroll-x-auto` | `overscroll-behavior-x: auto;` | Default horizontal overscroll |
| `overscroll-x-contain` | `overscroll-behavior-x: contain;` | Prevent horizontal scroll chaining |
| `overscroll-x-none` | `overscroll-behavior-x: none;` | Prevent horizontal overscroll |

## Z-Index

Control the stack order of elements.

| Class | CSS | Description |
|-------|-----|-------------|
| `z-0` | `z-index: 0;` | Set z-index to 0 |
| `z-10` | `z-index: 10;` | Set z-index to 10 |
| `z-20` | `z-index: 20;` | Set z-index to 20 |
| `z-30` | `z-index: 30;` | Set z-index to 30 |
| `z-40` | `z-index: 40;` | Set z-index to 40 |
| `z-50` | `z-index: 50;` | Set z-index to 50 |
| `z-auto` | `z-index: auto;` | Set z-index to auto |

## Usage Examples

### Responsive Display
```html
<div class="hidden md:block">
  Only visible on medium screens and up
</div>
```

### Positioning
```html
<div class="relative">
  <div class="absolute top-0 right-0">
    Positioned in top-right corner
  </div>
</div>
```

### Overflow Control
```html
<div class="overflow-hidden">
  Content that might overflow is hidden
</div>
```
