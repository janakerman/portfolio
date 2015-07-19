'use strict';

define([
    'angular',
    './layout/layout',
    './navBar/navBar',
    './content'
], function(angular, layout, navBar, content) {
    return angular.module('portfolio.structure', [])
        .directive('navBar', [navBar])
        .directive('layout', [layout])
        .directive('content', [content]);
});