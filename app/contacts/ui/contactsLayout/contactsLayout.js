'use strict';

define([], function() {
    return function() {
        return {
            restrict: 'E',
            replace: true,
            template: '<div class="contacts"><div ui-view="master"></div><div ui-view="detail"></div></div>'
        };
    };
});