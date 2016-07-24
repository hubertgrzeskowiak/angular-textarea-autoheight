# Angular auto-scaling textareas
This Angular 1 directive turns every normal textarea into a vertically growing and shrinking one.

## How to use
Apply to a textarea element as attribute:

    <textarea autoGrow></textarea>

As usual in Angular, you have to include the directive as dependency in the module you're using this in:

    angular.module('myApp', ['util.autoGrow'])
    // ...rest of your code

## Behaviour
The height starts at the height of one line-height (one row) and expands automatically on every change - done by user input or Angular bindings. If the number of visible lines shrinks, so does the height of the textarea.

## Technique
The technique used for this behaviour utilizes the fact that a textarea's `scrollHeight` property tells the maximal calculated height. The calculated value doesn't automatically shrink as the textarea's value is reduced, though. Therefor we we first set the height to zero and then to `scrollHeight` on every change of value.

The technique used here does not create any cloned or hidden elements to determine the height.

## Limitations
Border and padding cause some problems. Best wrap the textarea with another element for those and set both to zero on the textarea element.

## Browser support
✔️ Firefox 74

✔️ Chrome 51

✔️ Edge 25 (with minor shifting issues when switching between one line and two)
