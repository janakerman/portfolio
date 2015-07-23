'use strict';

define([], function() {

    return function($state) {

        function descendantsOfState(parentName) {
            return $state.get()
                .filter(function(stateConfig) {
                    return stateConfig.name.indexOf(parentName) === 0 && stateConfig.name !== parentName;
                });
        }

        return {
            descendantsOfState: descendantsOfState,
            $state: $state
        };
    };
});
