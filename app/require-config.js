'use strict';

require.config({
    paths: {
        angular: '../node_modules/angular/angular',
        uiRouter: '../node_modules/ui-router/angular-ui-router'
    },
    shim: {
        'angular': {'exports': 'angular'},
        'uiRouter': {
            deps: ['angular']
        }
    },
    priority: [
        "angular"
    ]
});

require([
    'angular',
    'app',
    'routes'
], function(angular) {
    var $html = angular.element(document.getElementsByTagName('html')[0]);
    angular.element().ready(function() {
        // bootstrap the app manually
        angular.bootstrap(document, ['portfolio']);
    });
});