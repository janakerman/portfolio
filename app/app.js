'use strict';

define([
  'angular',
  'uiRouter',
  'view1/view1',
  'view2/view2'
], function(angular) {
  return angular.module('portfolio', [
      'ui.router',
      'portfolio.view1',
      'portfolio.view2'
  ]);
});