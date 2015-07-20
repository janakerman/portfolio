'use strict';

define([
  'angular',
  'uiRouter',
  'structure/structureModule',
  'contacts/contactsModule',
  'login/loginModule',
], function(angular) {
  return angular.module('portfolio', [
      'ui.router',
      'portfolio.structure',
      'portfolio.contacts',
      'portfolio.login'
  ]);
});