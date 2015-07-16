'use strict';

define([
  'angular',
  'angularRoute',
  './View2Ctrl'
], function(angular, angularRoute, View2Ctrl) {
  angular.module('portfolio.view2', ['ngRoute'])
      .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view2', {
          templateUrl: 'view2/view2.html',
          controller: 'View2Ctrl'
        });
      }])
      .controller('View2Ctrl', View2Ctrl);
});