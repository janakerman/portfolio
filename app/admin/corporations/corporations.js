'use strict';

define(['./corporationsController'], function(corporationsController) {
  return function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/app/admin/corporations/corporations.html',
      controllerAs: 'corporationsController',
      controller: ['$scope', 'corporationsService', corporationsController]
    };
  };
});
