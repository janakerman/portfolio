'use strict';

define([], function() {

    var ContactDetailController = function(contact) {
    	this.contact = contact;
    };

    ContactDetailController.resolve =  {
        contact: ['$stateParams', 'contactsService',
            function($stateParams, contactsService) {
                return contactsService.getContactById($stateParams.id);
            }]
    };

    return ContactDetailController;
});