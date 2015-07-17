'use strict';

define([], function() {
    return function() {
            return {
                restrict: 'E',
                template: '<div><nav-bar></nav-bar><content></content></div>'
            };
        };
});