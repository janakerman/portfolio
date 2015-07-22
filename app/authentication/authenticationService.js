'use strict';

define(['Parse'], function(Parse) {
  return function() {
    var authService = {};

    authService.login = function (credentials) {
      return Parse.User.logIn(credentials.username, credentials.password);
    };

    authService.logOut = function () {
      return Parse.User.logOut();
    };
   
    authService.isAuthenticated = function () {
      return Parse.User.current() !== null;
    };
   
    authService.isAuthorized = function (authorizedRoles) {
      if (!angular.isArray(authorizedRoles)) {
        authorizedRoles = [authorizedRoles];
      }
      
      return true; // TODO. Need to delay the call while we potentially fetch the user's role from the server.

      // return (authService.isAuthenticated() && 
      //   authorizedRoles.indexOf(Parse.User.current().userRole) !== -1);
    };

    return authService;
  };
});