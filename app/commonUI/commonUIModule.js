'use strict';

define([
    'angular',
    './tabBar/tabBar.js',
], function(angular, tabBar) {
    return angular.module('portfolio.commonUI', [])
        .directive('tabBar', [tabBar]);
});