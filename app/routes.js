'use strict';

define([
    'app',
    'common/routeController/routeController',
    'contacts/contactDetail/routeResolves'
  ], function(app, routeController, contactDetailResolves) {
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
        abstract: true,
        views: {
          'content@app': {
            template: '<contacts-layout></contacts-layout>'
          },
          'master@app.contacts': {
            template: '<contacts-list></contacts-list>'
          }
        }
      }).state('app.contacts.placeholder', {
        url: '/contacts',
        views: {
          'detail@app.contacts': {
            template: '<contact-placeholder></contact-placeholder>'
          }
        }
      })
      .state('app.contacts.detail', {
        url: '/contacts/:id',
        views: {
          'detail@app.contacts': {
            template: '<contact-detail contact="contact"></contact-detail>',
            resolve: {
              contact: contactDetailResolves
            },
            controller: routeController(['contact']),
            controllerAs: 'dataController'
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
