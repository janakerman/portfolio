'use strict';

define([
  'angular',
  'angularRoute',
  'view1/view1',
  'view2/view2'
], function(angular, angularRoute, view1, view2) {
  return angular.module('portfolio', [
      'ngRoute',
      'portfolio.view1',
      'portfolio.view2'
  ])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);
});