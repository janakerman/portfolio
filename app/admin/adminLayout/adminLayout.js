'use strict';

define(['./adminLayoutController'], function(adminLayoutController) {
    return function() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: '/app/admin/adminLayout/adminLayout',
            controller: ['$state', adminLayoutController],
            controllerAs: 'layoutController'
        };
    };
});
