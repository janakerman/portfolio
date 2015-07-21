'use strict';

define([], function() {
    return function($scope, contactsService) {

      var self = this;

      this.sortType = 'attributes.username';
      this.sortReverse = false;
      this.searchTerm = '';

      var contactsPromise = contactsService.getContacts();
      contactsPromise.then(function(students) {
        self.contacts = students;
        $scope.$apply();
      });

    };
});