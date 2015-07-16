'use strict';

define([
  'angular',
  './View2Ctrl'
], function(angular, angularRoute, View2Ctrl) {
  angular.module('portfolio.view2', [])
      .controller('View2Ctrl', View2Ctrl);
});