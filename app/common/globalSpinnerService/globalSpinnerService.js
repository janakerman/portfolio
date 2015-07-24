'use strict';

define([], function() {

  return function($rootScope, $q, loadingSpinnerService, stateService) {

    var onStateChangeSuccess;
    var onStateChangeError;
    var onStateChangeStart;

    function listen() {
      var transitionDeferred;

      $rootScope.$on('$stateChangeStart', function (event, toState) {

        // Assumes a substates spinner is always in it's parent state.
        var parentState = stateService.parentOf(toState.name);

        var stateSpinnerId = parentState && parentState.data && parentState.data.loadingSpinnerId;

        transitionDeferred = $q.defer();
        loadingSpinnerService.spin(stateSpinnerId, transitionDeferred.promise);
      });

      $rootScope.$on('$stateChangeSuccess', function (event, toState) {
        transitionDeferred.resolve();
      });

      $rootScope.$on('$stateChangeError', function (event, toState) {
        transitionDeferred.reject();
      });
    }

    function stopListening() {

      if (!onStateChangeError || !onStateChangeStart || !onStateChangeSuccess) {
        return;
      }

      onStateChangeError();
      onStateChangeStart();
      onStateChangeSuccess();

      onStateChangeError = onStateChangeStart = onStateChangeSuccess = null;
    }

    return {
      listen: listen,
      stopListening: stopListening
    };
  };
});
