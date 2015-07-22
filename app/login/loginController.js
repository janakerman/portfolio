'use strict';

define([''], function() {
    return function($scope, $rootScope, authenticationService, AUTH_EVENTS) {

      this.login = function(credentials) {
        authenticationService.login(credentials).then(function() {
          $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
          $scope.$apply();
        });
      };

      this.logOut = function() {
        $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
        authenticationService.logOut();
      };

      this.isAuthenticated = function() {
        return authenticationService.isAuthenticated();
      };

    };
});