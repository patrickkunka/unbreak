UnBreak
=========

A tiny jQuery plugin for orphan-less responsive typography that converts the last space character of targeted elements into a non-breaking space character.

Use as follows: 

``` javascript

// Remove orphans from all p, h4 and h6 tags

$('p, h4, h6').unBreak();

```

For quick operation, select elements by tag name rather than class name, and use sparingly.

**Before**

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod<br/>
tempor

**After**

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do<br/>
eiusmod tempor