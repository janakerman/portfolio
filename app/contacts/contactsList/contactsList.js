'use strict';

define(['./contactsListController', 'text!./contactsList.html'], function(contactListController, template) {
    return function() {
        return {
            restrict: 'E',
            template: template,
            controller: ['$scope', 'contactsService', contactListController],
            controllerAs: 'contactListController'
        };
    };
});
