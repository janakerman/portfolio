'use strict';

require.config({
    paths: {
        angular: '../node_modules/angular/angular',
        angularRoute: '../node_modules/angular-route/angular-route'
    },
    shim: {
        'angular': {'exports': 'angular'},
        'angularRoute': ['angular']
    },
    priority: [
        "angular"
    ]
});

require([
    'angular',
    'app'
], function(angular, app) {
    var $html = angular.element(document.getElementsByTagName('html')[0]);
    angular.element().ready(function() {
        // bootstrap the app manually
        angular.bootstrap(document, ['portfolio']);
    });
});