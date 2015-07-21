'use strict';

define([
    'angular',
    './loginForm',
  	'authentication/authenticationModule',
], function(angular, loginForm) {
    return angular.module('portfolio.login', ['portfolio.authentication'])
      .directive('loginForm', loginForm);
});
