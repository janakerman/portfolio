'use strict';

define([], function() {
    return function() {
        return {
            restrict: 'E',
            templateUrl: '/app/commonUI/loadingSpinner/loadingSpinner.html',
            transclude: true,
            replace: true,
            link: function(scope, iElm, iAttrs) {

                var spinnerId = iAttrs.spinnerId;

                scope.$on('loadingSpinner:spin', function(event, args) {
                    if (!args) {
                        return;
                    }

                    iElm.addClass('active');
                });

                scope.$on('loadingSpinner:stop', function(event, args) {
                    if (!args) {
                        return;
                    }

                    iElm.removeClass('active');
                });
            }
        };
    };
});
