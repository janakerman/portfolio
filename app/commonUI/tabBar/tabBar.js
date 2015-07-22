'use strict';

define(['./tabBarController'], function(tabBarController) {
  return function() {
    return {
      restrict: 'E',
      templateUrl: '/app/commonUI/tabBar/tabBar.html',
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