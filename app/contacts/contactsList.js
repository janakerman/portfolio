'use strict';

define(['./contactsListController'], function(contactListController) {
    return function() {
        return {
            restrict: 'E',
            template: '<ul><li ng-repeat="contact in contactListController.contacts">{{ contact }}</li></ul>',
            controller: ['contactsService', contactListController],
            controllerAs: 'contactListController'
        };
    };
});