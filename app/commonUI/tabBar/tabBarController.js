'use strict';

define([], function() {
    return function($scope) {

        this.tabSelected = function(tabIndex) {
            $scope.currentIndex = tabIndex;
        };

        this.isActive = function(index) {
            return index === $scope.currentIndex;
        };

    };
});
