'use strict';

define(['./contactDetailController'], function(contactDetailController) {
    return function() {
        return {
            restrict: 'E',
            template: 'contactDetail',
            scope: {
            	contact: '='
            },
            controller: ['$scope', contactDetailController]
        };
    };
});