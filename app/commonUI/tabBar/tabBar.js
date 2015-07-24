'use strict';

define(['./tabBarController', 'text!./tabBar.html'], function(tabBarController, template) {
  return function() {
    return {
      restrict: 'E',
      template: template,
      replace: true,
      scope: {
        titles: '=',
        currentIndex: '='
      },
      controller: ['$scope', tabBarController],
      controllerAs: 'TabBarController'
    };
  };
});