'use strict';

define([], function() {
    return function(contactsService) {
        this.contacts = contactsService.getContacts();
    };
});