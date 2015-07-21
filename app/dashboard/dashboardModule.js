'use strict';

define([
    'angular',
    './holdingsSummary/holdingsSummary'
], function(angular, holdingsSummary) {
    return angular.module('portfolio.dashboard', [])

        .directive('holdingsSummary', holdingsSummary);
});
