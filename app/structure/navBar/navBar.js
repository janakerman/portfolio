'use strict';

define(['./navBarController'], function(navBarController) {
  return function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/app/structure/navBar/navBar.html',
      controller: ['$state', '$rootScope', 'authenticationService', 'AUTH_EVENTS', navBarController],
      controllerAs: 'navController'
    };
  };
});