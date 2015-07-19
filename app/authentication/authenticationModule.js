'use strict';

define([
    'angular',
    './authenticationService'
], function(angular, authenticationService) {
    return angular.module('portfolio.authentication', [])
        .factory('authenticationService', [authenticationService]);
});