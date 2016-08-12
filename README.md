# Angular module: textarea-autoheight
This Angular 1 directive turns every normal textarea into a vertically growing and shrinking one.

Original by Hubert Grzeskowiak
Copyright 2016 Hubert Grzeskowiak
MIT license

# Demo
https://plnkr.co/edit/T0dBtj2GHi95Oae7xAJJ?p=preview

# Problem Definition
Normal HTML textarea elements  have no means of scaling depending on the text inside them. You can set the initial height and width, but as soon as the content doesn't fit inside, scrollbars show up. You can work around this by showing the overflow, but this messes up the whole layout.

# Target Behaviour
The height starts at the height of one line-height (one row) and expands automatically on every change - done by user input or Angular bindings. If the number of visible lines shrinks, so does the height of the textarea.

# My Solution
The technique used to implement the behaviour above utilizes the fact that a textarea's `scrollHeight` property tells the actual calculated height. The calculated value doesn't automatically shrink as the textarea's value is reduced, though. Therefore we first set the height to zero and then to `scrollHeight` on every change of value. This way we're using the browser's native calculation of the height with no side-effects.

Unlike most other solutions to this problem, the technique used here does not create any cloned or hidden elements to determine the height.

# Usage
Include the file in your HTML:

    <script src="autoheight.js"></script>

Include as dependency in your module:

    angular.module('myApp', ['textarea.autoheight'])    

Apply to a textarea element as attribute:

    <textarea auto-height></textarea>


# Browser support
Tested so far:

✔ Firefox 47
✔ Chrome 51
✔ Edge 25

# Bugs and improvements
There is one known pitfall: animating the height using CSS transitiions will result in very jittery and bugged animation. If you feel like there's a way around this, please open an issue.


Please feel free to fork and report issues on GitHub.