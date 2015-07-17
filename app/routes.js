'use strict';

define(['app'], function(app) {
  app.config([
    '$stateProvider', 
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $stateProvider.state('app', {
        abstract: true,
        views: {
          '': {
            template: '<layout><layout/>'
          }
        }
      })
      .state('app.contacts', {
        url: '/contacts',
        views: {
          'content@app': {
            template: '<contacts-layout></contacts-layout>'
          },
          'master@app.contacts': {
            template: '<contacts-list></contacts-list>'
          },
          'detail@app.contacts': {
            template: '<contact-placeholder></contact-placeholder>'
          }
        }
      });

      $urlRouterProvider.otherwise('/contacts');
  }]);

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
