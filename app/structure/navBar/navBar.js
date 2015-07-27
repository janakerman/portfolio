'use strict';

define(['./navBarController', 'text!./navBar.html'], function(navBarController, template) {
  return function() {
    return {
      restrict: 'E',
      replace: true,
      template: template,
      controller: ['$state', '$rootScope', 'authenticationService', 'AUTH_EVENTS', navBarController],
      controllerAs: 'navController'
    };
  };
});