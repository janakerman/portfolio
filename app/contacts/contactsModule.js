'use strict';

define([
    'angular',
    './contactsLayout/contactsLayout',
    './contactsList/contactsList',
    './contactDetail/contactDetailController',
    './contactPlaceholder/contactPlaceholder',
  	'dataServices/dataServicesModule',
], function(angular, contactsLayout, contactsList, ContactDetailController, contactPlaceholder) {
    return angular.module('portfolio.contacts', ['portfolio.dataServices'])
        .directive('contactsLayout', [contactsLayout])
        .directive('contactsList', [contactsList])
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
                })
                .state('app.contacts.placeholder', {
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
                            templateUrl: '/app/contacts/contactDetail/contactDetail.html',
                            resolve: ContactDetailController.resolve,
                            controller: ['contact', ContactDetailController],
                            controllerAs: 'contactDetailController'
                        }
                    }
                });

            }]);
});
