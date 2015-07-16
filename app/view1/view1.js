'use strict';

define([
  'angular',
  'angularRoute',
  './View1Ctrl'
], function(angular, angularRoute, View1Ctrl) {
  angular.module('portfolio.view1', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
      $routeProvider.when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl'
      });
    }])
    .controller('View1Ctrl', View1Ctrl);
});