'use strict';

define([
    'app',
  ], function(app, routeController, contactDetailResolves) {

  // Check to see if the user is logged in on every state change. Otherwise don't let them navigate.
  app.run(['$rootScope', 'authenticationService', function ($rootScope, authenticationService) {
    $rootScope.$on('$stateChangeStart', function (event, next) {
      if (!authenticationService.isAuthenticated()) {
        // go to state
        // pop up modal
      }
    });
  }]);

  return app;
});
