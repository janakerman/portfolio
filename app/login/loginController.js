'use strict';

define([], function() {
    return function($scope, authenticationService) {

      this.login = function(credentials) {
        authenticationService.login(credentials).then(function() {
          $scope.$apply();
        });
      };

      this.logOut = function() {
        authenticationService.logOut();
      };

      this.isAuthenticated = function() {
        return authenticationService.isAuthenticated();
      };

    };
});