'use strict';

define([
  'angular',
  'uiRouter',
  'structure/structureModule',
  'contacts/contactsModule',
  'authentication/authenticationModule',
  'login/loginModule',
  'common/commonModule'
], function(angular) {
  return angular.module('portfolio', [
      'ui.router',
      'portfolio.structure',
      'portfolio.contacts',
      'portfolio.authentication',
      'portfolio.login',
      'portfolio.common'
  ]);
});