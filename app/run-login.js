'use strict';

define([
    'app',
  ], function(app, routeController, contactDetailResolves) {

  // Check to see if the user is logged in on every state change. Otherwise don't let them navigate.
  app.run([
    '$rootScope', 
    'AUTH_EVENTS',
    'authenticationService',
    function ($rootScope, AUTH_EVENTS, authenticationService) {

      $rootScope.$on('$stateChangeStart', function (event, next) {

        var authorizedRoles;
        if (next.data) {
          if (next.data.authorizedRoles) {
            authorizedRoles = next.data.authorizedRoles;
          }
        }

        if (!authenticationService.isAuthorized(authorizedRoles)) {
          event.preventDefault();

          if (authenticationService.isAuthenticated()) {
            // user is not allowed
            $rootScope.$broadcast(AUTH_EVENTS.notAuthorized);
          } 
          else {
            // user is not logged in
            $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
          }
        }
        
      });
    }
  ]);

  return app;

});
