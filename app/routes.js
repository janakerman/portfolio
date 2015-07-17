'use strict';

define(['app'], function(app) {
  return app.config([
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
});
