'use strict';

define([''], function() {
  return function($rootScope, authenticationService, AUTH_EVENTS) {

    this.logOut = function() {
      authenticationService.logOut();
    };

  };
});