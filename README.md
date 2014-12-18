UnBreak
=========

A tiny native javascript library for orphan-less responsive typography that converts the last space character of targeted elements into a non-breaking space character. 

NB: This is ideally something that should be done server-side, but in situations where that's not possible, this can be used a lighweight and relatively fast client-side solution.

**Before**

> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod<br/>
tempor

**After**

> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do<br/>
eiusmod tempor

Use as follows: 

``` javascript

// Basic usage:

new UnBreak(myDomElement);

```

For fast operation, use asyncronously within a native loop, once the DOMContentLoaded event has fired:

``` javascript

// Remove orphans from all h3 elements

document.addEventListener('DOMContentLoaded', function(){
    var headings = document.getElementsByTagName('h3'),
        applyUnBreak = function(el) {
            setTimeout(function(){
                new UnBreak(el);
            });
        };

    for (var i = 0, heading; heading = headings[i]; i++) {
        applyUnBreak(heading);
    }
});

```

An optional `data-min` attribute may be added to elements to act as a threshold under which the unbreak behavior is not applied.

``` html
<h3 data-min="4">Lorem Ipsum</h3>

<!-- this element has less than 4 words and therefore will not be affected by unbreak -->
```
