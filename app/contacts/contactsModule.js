'use strict';

define([
    'angular',
    './contactsLayout/contactsLayout',
    './contactsList/contactsList',
    './contactDetail/contactDetailController',
    './contactPlaceholder/contactPlaceholder',
  	'dataServices/dataServicesModule',
    'commonUI/commonUIModule'
], function(angular, contactsLayout, contactsList, ContactDetailController, contactPlaceholder) {
    return angular.module('portfolio.contacts', ['portfolio.dataServices', 'portfolio.commonUI'])
        .directive('contactsLayout', [contactsLayout])
        .directive('contactsList', [contactsList])
        .directive('contactPlaceholder', [contactPlaceholder])

        .config([
            '$stateProvider',
            function($stateProvider) {
                $stateProvider.state('app.contacts', {
                    abstract: true,
                    url: '/contacts',
                    views: {
                        'content@app': {
                            template: '<contacts-layout></contacts-layout>'
                        },
                        'master@app.contacts': {
                            template: '<contacts-list></contacts-list>'
                        }
                    }
                })
                .state('app.contacts.placeholder', {
                    url: '',
                    views: {
                        'detail@app.contacts': {
                            template: '<contact-placeholder></contact-placeholder>'
                        }
                    }
                })
                .state('app.contacts.detail', {
                    abstract: true,
                    url: '/:id',
                    views: {
                        'detail@app.contacts': {
                            templateUrl: '/app/contacts/contactDetail/contactDetail.html',
                            resolve: ContactDetailController.resolve,
                            controller: ['$state', 'contact', ContactDetailController],
                            controllerAs: 'contactDetailController'
                        }
                    }
                })
                .state('app.contacts.detail.main', {
                    url: '',
                    views: {
                        'contact-detail-tab@app.contacts.detail': {
                            template: 'main detail'
                        }
                    }
                })
                .state('app.contacts.detail.portfolio', {
                    url: '/portfolio',
                    views: {
                        'contact-detail-tab@app.contacts.detail': {
                            template: 'portfolio'
                        }
                    }
                });

            }]);
});
