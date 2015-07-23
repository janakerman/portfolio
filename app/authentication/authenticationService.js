'use strict';

define(['Parse'], function(Parse) {
  return function($rootScope, AUTH_EVENTS) {
    var authService = {};

    authService.login = function (credentials) {
      Parse.User.logIn(credentials.username, credentials.password).then(function() {
        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
      });
    };

    authService.logOut = function () {
      Parse.User.logOut().then(function() {
        $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
      });
    };
   
    authService.isAuthenticated = function () {
      return Parse.User.current() !== null;
    };
   
    authService.isAuthorized = function (authorizedRoles) {
      if (!angular.isArray(authorizedRoles)) {
        authorizedRoles = [authorizedRoles];
      }

      return (authService.isAuthenticated() && 
        authorizedRoles.indexOf(Parse.User.current().attributes.role) !== -1);
    };

    return authService;
  };
});

// TODO. Is this more of a provider than a service?
