'use strict';

define(['./loginController'], function(loginController) {
  return function() {
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/app/login/loginForm.html',
      controllerAs: 'loginController',
      controller: ['$rootScope', 'authenticationService', 'AUTH_EVENTS', loginController]
    };
  };
});
