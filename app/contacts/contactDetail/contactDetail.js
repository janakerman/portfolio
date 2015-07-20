'use strict';

define(['./contactDetailController'], function(contactDetailController) {
    return function() {
        return {
            restrict: 'E',
            templateUrl: '/app/contacts/contactDetail/contactDetail.html',
            scope: {
            	contact: '='
            },
            controller: ['$scope', contactDetailController],
            controllerAs: 'contactDetailController'
        };
    };
});