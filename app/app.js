'use strict';

define([
  'angular',
  'uiRouter',
  'structure/structureModule',
  'contacts/contactsModule',
  'login/loginModule',
  'authentication/authenticationModule',
], function(angular) {

  return angular.module('portfolio', [
    'ui.router',
    'portfolio.structure',
    'portfolio.contacts',
    'portfolio.login',
    'portfolio.authentication'
  ])

  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

      $stateProvider.state('app', {
        abstract: true,
        views: {
          '': {
            template: '<layout><layout/>'
          }
        }
      });
      $urlRouterProvider.otherwise('/contacts');
    }
  ]);

});
