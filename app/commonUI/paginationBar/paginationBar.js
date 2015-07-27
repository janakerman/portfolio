'use strict';

define(['./paginationBarController', 'text!./paginationBar.html'], function(paginationBarController, template) {
  return function() {
    return {
      restrict: 'E',
      scope: {
        currentPage: '=',
        numberOfItems: '=',
        pageChanged: '='
      },
      template: template,
      controller: ['$scope', paginationBarController],
      controllerAs: 'barController'
    };
  };
});
