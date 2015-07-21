// Manually bootstrap AngularJS.
'use strict';

define([
    'angular',
    'app',
    'run-login',
    'parse-bootstrap'
], function (angular) {
    var $html = angular.element(document.getElementsByTagName('html')[0]);
    angular.element().ready(function() {
        angular.bootstrap(document, ['portfolio']);
    });
});
