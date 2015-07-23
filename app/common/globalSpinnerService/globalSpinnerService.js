'use strict';

define([], function() {

  return function($rootScope, $q, loadingSpinnerService, stateService) {

    var transitionDeferred;

    $rootScope.$on('$stateChangeStart', function(event, toState){

      // Assumes a substates spinner is always in it's parent state.
      var parentState = stateService.parentOf(toState.name);

      var stateSpinnerId = parentState && parentState.data && parentState.data.loadingSpinnerId;

      transitionDeferred = $q.defer();
      loadingSpinnerService.spin(stateSpinnerId, transitionDeferred.promise);
    });

    $rootScope.$on('$stateChangeSuccess', function(event, toState){
      transitionDeferred.resolve();
    });

    $rootScope.$on('$stateChangeError', function(event, toState){
      transitionDeferred.reject();
    });

    return this;
  };
});
