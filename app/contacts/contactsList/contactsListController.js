'use strict';

define([], function() {
    return function($scope, contactsService) {

      var self = this;

      this.sortType = 'username';
      this.sortReverse = false;
      this.searchTerm = '';

      this.contacts = [];
      this.itemsPerPage = 10;
      this.currentPage = 0;
      this.numberOfContacts = 0;

      $scope.$watch(
        function() {
          return self.searchTerm;
        },
        function(newValue, oldValue) {
          self.updateNumberOfResults();
        }
      );

      this.pageChanged = function() {
        self.updateResults();
      };

      this.sortChanged = function() {
        self.updateResults();
      };

      this.updateResults = function() {
        self.getResultsPage(self.currentPage, self.sortType, self.sortReverse, self.searchTerm);
      };

      this.updateNumberOfResults = function() {
        var numberOfContactsPromise = contactsService.getNumberOfContacts(self.searchTerm);
        numberOfContactsPromise.then(function(numberOfContacts) {
          self.numberOfContacts = numberOfContacts;
          self.pageChanged();
        });
      };

      this.getResultsPage = function(pageNumber, sortKey, descending, searchTerm) {
        var contactsPagePromise = contactsService.getContactsListPage(pageNumber, self.itemsPerPage, sortKey, descending, searchTerm);
        contactsPagePromise.then(function(contacts) {
          self.contacts = contacts;
          $scope.$apply();
        });
      };

      this.sortClicked = function(sortKey) {
        if (self.sortType === sortKey) {
          self.sortReverse = !self.sortReverse;
        }
        else {
          self.sortType = sortKey;
          self.sortReverse = false;          
        }
        self.updateResults();
      };

      this.prevPage = function() {
        if (self.currentPage > 0) {
          self.currentPage--;
          self.pageChanged();
        }
      };

      this.prevPageDisabled = function() {
        return this.currentPage === 0 ? "disabled" : "";
      };

      this.nextPage = function() {
        if (self.currentPage < self.pageCount()) {
          self.currentPage++;
          self.pageChanged();
        }
      };

      this.nextPageDisabled = function() {
        return this.currentPage === self.pageCount() ? "disabled" : "";
      };

      this.pageCount = function() {
        return Math.ceil(self.numberOfContacts / self.itemsPerPage) - 1;
      };

      this.setPage = function(n) {
        self.currentPage = n;
        self.pageChanged();
      };

      this.range = function() {
        var rangeSize = 5;
        var ret = [];
        var start;

        start = self.currentPage;

        if (start > self.pageCount() - rangeSize) {
          start = self.pageCount() - rangeSize + 1;
        }

        for (var i = start; i < start + rangeSize; i++) {
          if (i >= 0) {
            ret.push(i);
          }
        }

        return ret;
      };

      this.updateNumberOfResults();
    };
});
