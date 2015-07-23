'use strict';

define([
    'angular',
    './stateService/stateService',
], function(angular, stateService) {
    return angular.module('portfolio.common', [])
        .factory('stateService', ['$state', '$rootScope', stateService]);
});
