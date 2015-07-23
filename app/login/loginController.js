'use strict';

define([''], function() {
  return function($scope, $rootScope, authenticationService, AUTH_EVENTS) {

    this.login = function(credentials) {
      authenticationService.login(credentials);
    };

    this.logOut = function() {
      authenticationService.logOut();
    };

    this.isAuthenticated = function() {
      return authenticationService.isAuthenticated();
    };

  };
});