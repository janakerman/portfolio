'use strict';

define([
  'angular',
  './tabBar/tabBar.js',
  './paginationBar/paginationBar.js',
  './loadingSpinner/loadingSpinner.js',
  './loadingSpinner/loadingSpinnerService.js'
], function(angular, tabBar, paginationBar, loadingSpinner, loadingSpinnerService) {
  return angular.module('portfolio.commonUI', [])
    .directive('tabBar', [tabBar])
    .directive('paginationBar', [paginationBar])

    .directive('loadingSpinner', [loadingSpinner])
    .factory('loadingSpinnerService', ['$rootScope', loadingSpinnerService]);
});