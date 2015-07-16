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
    ],
    deps: [
    // Trigger angular bootstrap.
        'angular-bootstrap'
    ]
});
