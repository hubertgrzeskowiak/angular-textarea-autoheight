angular.module("util.autoGrow", [])
    .directive("autoGrow", function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                attrs.rows = "1";
                element.css("overflow", "hidden");
                element.css("resize", "none");
                var updateHeight = function () {
                    // The elem.scrollHeight doesn't shrink automatically - it only grows.
                    // By setting it to 0px first, we ensure it grows to actual scrollHeight.
                    element.css("height", "0px");
                    element.css("height", element[0].scrollHeight + "px");
                }
                element.bind('input', updateHeight);
                // This watcher ensures that updateHeight() will be called after initialization,
                // when the textarea has been filled with text.
                scope.$watch(attrs.value, updateHeight);
            }
        }
    })