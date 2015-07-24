'use strict';

define(['./adminLayoutController', 'text!./adminLayout.html'], function(adminLayoutController, template) {
    return function() {
        return {
            restrict: 'E',
            replace: true,
            template: template,
            controller: ['$state', adminLayoutController],
            controllerAs: 'layoutController'
        };
    };
});
