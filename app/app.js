'use strict';

define([
  'angular',
  'uiRouter',
  'structure/structure',
  'contacts/contacts'
], function(angular) {
  return angular.module('portfolio', [
      'ui.router',
      'portfolio.structure',
      'portfolio.contacts'
  ]);
});