'use strict';

define([
  'angular',
  'uiRouter',
  'structure/structure',
  'contacts/contacts',
  'authentication/authentication',
  'login/login'
], function(angular) {
  return angular.module('portfolio', [
      'ui.router',
      'portfolio.structure',
      'portfolio.contacts',
      'portfolio.authentication',
      'portfolio.login'
  ]);
});