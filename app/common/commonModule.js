'use strict';

define([
    'angular',
    './stateService/stateService',
    './globalSpinnerService/globalSpinnerService',
    'commonUI/commonUIModule',
], function(angular, stateService, globalSpinnerService) {
    return angular.module('portfolio.common', ['portfolio.commonUI'])
        .factory('stateService', ['$state', '$rootScope', stateService])
        .factory('globalSpinnerService', ['$rootScope', '$q', 'loadingSpinnerService', 'stateService', globalSpinnerService])

        // TODO: Pull out into proivider and add to state configure?
      .run(['globalSpinnerService', function(globalSpinnerService) {

    }]);
});
