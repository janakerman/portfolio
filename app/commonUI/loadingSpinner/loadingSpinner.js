'use strict';

define(['text!./loadingSpinner.html'], function(template) {
    return function() {
        return {
            restrict: 'E',
            template: template,
            transclude: true,
            replace: true,
            link: function(scope, iElm, iAttrs) {

                var spinnerId = iAttrs.spinnerId;

                scope.$on('loadingSpinner:spin', function(event, args) {
                    if (!args && args !== spinnerId) {
                        return;
                    }

                    iElm.addClass('active');
                });

                scope.$on('loadingSpinner:stop', function(event, args) {
                    if (!args && args !== spinnerId) {
                        return;
                    }

                    iElm.removeClass('active');
                });
            }
        };
    };
});
