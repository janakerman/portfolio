'use strict';

define([], function() {
  return ['$stateParams', 'contactsService', 
    function($stateParams, contactsService) {
      return contactsService.getContactById($stateParams.id);
    }];
});