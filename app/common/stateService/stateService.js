'use strict';

define([], function() {

    var Listener = function(states, callback) {
        this.states = states;
        this.callback = callback;
    };

    var listeners = [];

    return function($state, $rootScope) {

        $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
            listeners.forEach(function(listener) {
               if (listener.states.indexOf(toState.name) > -1) {
                   listener.callback(event, toState, toParams, fromState, fromParams);
               }
            });
        });

        function descendantsOfState(parentName) {
            return $state.get()
                .filter(function(stateConfig) {
                    return stateConfig.name.indexOf(parentName) === 0 && stateConfig.name !== parentName;
                });
        }

        function navigatedToDescendant(parentName, callback) {
            var descendants = descendantsOfState(parentName);
            listeners.push(new Listener(descendants, callback));
        }

        return {
            descendantsOfState: descendantsOfState,
            navigatedToDescendantOf: navigatedToDescendant,
            $state: $state,
        };
    };
});
