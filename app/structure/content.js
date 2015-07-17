'use strict';

define([], function() {
    return function() {
        return {
            restrict: 'E',
            replace: true,
            template: '<div ui-view="content"></div>'
        };
    };
});