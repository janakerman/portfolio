'use strict';

// Simple controller for attaching ui-router resolves.
// {{ resolves }} is an array of strings corresponding to the resolves that should
// be added to the return controller's scope.
define([], function() {
    return function(resolves) {

      var controller = function($scope) { 
        for (var x=1; x<arguments.length; x++) {
          $scope[resolves[x-1]] = arguments[x];
        }
      };

      return ['$scope'].concat(resolves).concat([controller]);
    };
});