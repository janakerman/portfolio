'use strict';

define(['./app.js'], function(app) {
  return app.config([
    '$stateProvider', 
    '$urlRouterProvider', 
    function($stateProvider, $urlRouterProvider) {
      $stateProvider.state('view1', {
        url: '/view1',
        templateUrl: 'view1/view1.html'
      })
      .state('view2', {
        url: '/view2',
        templateUrl: 'view2/view2.html'
      });

      $urlRouterProvider.otherwise('/view1');
  }]);
});
