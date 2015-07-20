'use strict';

define([
    'angular',
    './contactsLayout/contactsLayout',
    './contactsList/contactsList',
    './contactDetail/contactDetail',
    './contactDetail/contactDetailController',
    './contactPlaceholder/contactPlaceholder',
    'common/routeController/routeController',
  	'dataServices/dataServicesModule',
], function(angular, contactsLayout, contactsList, contactDetail, contactDetailController, contactPlaceholder, routeController) {
    return angular.module('portfolio.contacts', ['portfolio.dataServices'])
        .directive('contactsLayout', [contactsLayout])
        .directive('contactsList', [contactsList])
        .directive('contactDetail', [contactDetail])
        .directive('contactPlaceholder', [contactPlaceholder])

        .config([
            '$stateProvider',
            function($stateProvider) {
                $stateProvider.state('app.contacts', {
                    abstract: true,
                    views: {
                        'content@app': {
                            template: '<contacts-layout></contacts-layout>'
                        },
                        'master@app.contacts': {
                            template: '<contacts-list></contacts-list>'
                        }
                    }
                }).state('app.contacts.placeholder', {
                    url: '/contacts',
                    views: {
                        'detail@app.contacts': {
                            template: '<contact-placeholder></contact-placeholder>'
                        }
                    }
                })
                    .state('app.contacts.detail', {
                        url: '/contacts/:id',
                        views: {
                            'detail@app.contacts': {
                                template: '<contact-detail contact="contact"></contact-detail>',
                                resolve: contactDetailController.resolve,
                                controller: routeController(['contact']),
                                controllerAs: 'dataController'
                            }
                        }
                    });

            }]);
});
