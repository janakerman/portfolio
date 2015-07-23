'use strict';

define([], function() {
    return function($rootScope) {

        function spin(spinnerId, promise) {
            if (promise) {
                promise.finally(function() {
                    stop(spinnerId);
                });
            }

            $rootScope.$broadcast('loadingSpinner:spin', spinnerId);
        }

        function stop(spinnerId) {
            $rootScope.$broadcast('loadingSpinner:stop', spinnerId);
        }

        return {
            spin: spin,
            stop: stop
        };
    };
});
