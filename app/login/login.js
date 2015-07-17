'use strict';

define([
    'angular',
    './loginForm',
], function(angular, loginForm) {
    return angular.module('portfolio.login', [])
      .directive('loginForm', ['authenticationService', loginForm]);
});
