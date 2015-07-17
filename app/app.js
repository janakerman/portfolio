'use strict';

define([
  'angular',
  'uiRouter',
  'structure/structure'
], function(angular) {
  return angular.module('portfolio', [
      'ui.router',
      'portfolio.structure'
  ]);
});