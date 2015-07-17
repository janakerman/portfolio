'use strict';

define([], function() {
    return function() {
        return {
            restrict: 'E',
            template: '<div ui-view="content"></div>'
        };
    };
});