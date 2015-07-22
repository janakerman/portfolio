'use strict';

define(['./paginationBarController'], function(paginationBarController) {
  return function() {
    return {
      restrict: 'E',
      scope: {
        currentPage: '=',
        numberOfItems: '=',
        pageChanged: '='
      },
      templateUrl: '/app/commonUI/paginationBar/paginationBar.html',
      controller: ['$scope', paginationBarController],
      controllerAs: 'barController'
    };
  };
});
