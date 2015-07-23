'use strict';

define([
    'angular',
    './loginForm',
  	'authentication/authenticationModule',
], function(angular, loginForm) {
    return angular.module('portfolio.login', ['portfolio.authentication'])
      .directive('loginForm', loginForm)

      .config(['$stateProvider',
        function($stateProvider) {
          $stateProvider.state('login', {
              url: '/login',
              views: {
                  '': {
                      template: '<login-form></login-form>'
                  },
              }
          });
        }
      ]);
});
