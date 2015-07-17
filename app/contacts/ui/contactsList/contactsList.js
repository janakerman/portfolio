'use strict';

define(['./contactsListController'], function(contactListController) {
    return function() {
        return {
            restrict: 'E',
            templateUrl: '/app/contacts/ui/contactsList/contactsList.html',
            controller: ['$scope', 'contactsService', contactListController],
            controllerAs: 'contactListController'
        };
    };
});