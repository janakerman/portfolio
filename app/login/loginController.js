'use strict';

define([], function() {
  return function($rootScope, authenticationService, AUTH_EVENTS) {

    var self = this;

    this.showError = false;

    $rootScope.$on(AUTH_EVENTS.loginFailed, function(a, b, c){
      self.errorMessage = b.reason;
      self.showError = true;
    });

    this.login = function(credentials) {
      self.showError = false;
      self.errorMessage = undefined;

      authenticationService.login(credentials);
    };
    
  };
});