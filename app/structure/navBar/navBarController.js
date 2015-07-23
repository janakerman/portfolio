'use strict';

define([''], function() {
  return function($state, $rootScope, authenticationService, AUTH_EVENTS) {

    this.logOut = function() {
      authenticationService.logOut();
    };

    this.classFor = function(link) {
      if ($state.current.name.startsWith('app.' + link)) {
        return 'active';
      }
      return "";
    };

  };
});