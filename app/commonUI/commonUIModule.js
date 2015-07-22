'use strict';

define([
  'angular',
  './tabBar/tabBar.js',
  './paginationBar/paginationBar.js'
], function(angular, tabBar, paginationBar) {
  return angular.module('portfolio.commonUI', [])
    .directive('tabBar', [tabBar])
    .directive('paginationBar', [paginationBar]);
});