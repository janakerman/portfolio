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
      return true; // TODO
    };

    return authService;
  };
});