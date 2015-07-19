'use strict';

define([], function() {
    return function($scope, contactsService) {

      var self = this;

      var contactsPromise = contactsService.getContacts();
      contactsPromise.then(function(students) {
        self.contacts = students;
        $scope.$apply();
      });

    };
});