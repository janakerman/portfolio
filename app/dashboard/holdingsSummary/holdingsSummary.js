'use strict';

define([], function() {
    return function() {
        return {
            restrict: 'E',
            templateUrl: '/app/dashboard/holdingsSummary/holdingsSummary.html',
            replace: true,
            scope: {
                holdings: '='
            }
        };
    };
});