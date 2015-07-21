'use strict';

require.config({
    paths: {
        angular: '../node_modules/angular/angular',
        uiRouter: '../node_modules/angular-ui-router/release/angular-ui-router',
        Parse: '../node_modules/parse/build/parse-latest'
    },
    shim: {
        'angular': {
          'exports': 'angular'
        },
        'uiRouter': {
            deps: ['angular']
        },
        'Parse': {
          'exports': 'Parse'
        },
    },
    priority: ['angular'],
    deps: ['angular-bootstrap']
});
