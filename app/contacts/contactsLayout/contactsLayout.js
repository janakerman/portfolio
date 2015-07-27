'use strict';

define(['text!./contactsLayout.html'], function(template) {
    return function() {
        return {
            restrict: 'E',
            replace: true,
            template: template
        };
    };
});
