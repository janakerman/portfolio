'use strict';

define([
  'angular',
  './View1Ctrl'
], function(angular, angularRoute, View1Ctrl) {
  angular.module('portfolio.view1', [])
    .controller('View1Ctrl', View1Ctrl);
});