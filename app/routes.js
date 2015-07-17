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
            template: '<p>contacts</p>'
          }
        }
      });

      $urlRouterProvider.otherwise('/contacts');
  }]);
});
