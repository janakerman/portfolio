'use strict';

define([], function() {

    var contactDetailController = function($scope) {
    	this.contact = $scope.contact;
    };

    contactDetailController.resolve =  {
        contact: ['$stateParams', 'contactsService',
            function($stateParams, contactsService) {
                return contactsService.getContactById($stateParams.id);
            }]
    };

    return contactDetailController;
});