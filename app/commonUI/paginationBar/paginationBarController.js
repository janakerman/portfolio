'use strict';

define([], function() {
    return function($scope) {

      var self = this;

      this.prevPage = function() {
        if ($scope.currentPage > 0) {
          $scope.pageChanged($scope.currentPage - 1);
        }
      };

      this.nextPage = function() {
        if ($scope.currentPage < self.pageCount()) {
          $scope.pageChanged($scope.currentPage + 1);
        }
      };

      this.isNextButtonDisabled = function() {
        return $scope.currentPage === self.pageCount();
      };

      this.isPreviousButtonDisabled = function() {
        return $scope.currentPage === 0;
      };

      this.isCurrentPage = function(index) {
        return $scope.currentPage === index;
      };

      this.pageCount = function() {
        return Math.ceil($scope.numberOfItems / 10) - 1;
      };

      this.setPage = function(n) {
        $scope.pageChanged(n);
      };

      this.range = function() {
        var rangeSize = 5;
        var ret = [];
        var start = $scope.currentPage;

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

    };
});
