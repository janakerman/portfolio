'use strict';

define([
    'angular',
    './adminLayout/adminLayout',
    './corporations/corporations',
    'dataServices/dataServicesModule',
], function(angular, adminLayout, corporations) {
    return angular
    .module('portfolio.admin', [
        'portfolio.dataServices',
        'portfolio.common'
    ])

    .directive('adminLayout', [adminLayout])
    .directive('corporations', [corporations])

    .config([
      '$stateProvider',
      function($stateProvider) {
        $stateProvider.state('app.admin', {
            url: '/admin',
            data: {
              authorizedRoles: ['admin']
            },
            views: {
              'content@app': {
                template: '<admin-layout></admin-layout>'
              },
            }
        })
        .state('app.admin.users', {
          url: '/users',
          views: {
            'admin-content@app.admin': {
              template: 'Some user admin here.'
            }
          }
        })
        .state('app.admin.corporations', {
          url: '/corporations',
          views: {
            'admin-content@app.admin': {
              template: '<corporations></corporations>'
            }
          }
        });
      }]);

});
