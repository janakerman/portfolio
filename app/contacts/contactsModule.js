'use strict';

define([
    'angular',
    './contactsLayout/contactsLayout',
    './contactsList/contactsList',
    './contactView/contactDetail/contactDetailController',
    './contactView/contactPlaceholder/contactPlaceholder',
    './contactView/contactPortfolio/contactPortfolioController',
  	'dataServices/dataServicesModule',
    'commonUI/commonUIModule',
    'common/commonModule',
    'dashboard/dashboardModule',
], function(angular, contactsLayout, contactsList, ContactDetailController, contactPlaceholder, ContactPortfolioController) {
    return angular.module('portfolio.contacts', [
        'portfolio.dataServices',
        'portfolio.commonUI',
        'portfolio.dashboard',
        'portfolio.common'
    ])
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
                            templateUrl: '/app/contacts/contactView/contactDetail/contactDetail.html',
                            resolve: ContactDetailController.resolve,
                            controller: ['$scope', 'stateService', 'contact', ContactDetailController],
                            controllerAs: 'contactDetailController'
                        }
                    },
                    data: {
                        loadingSpinnerId: 'contact-detail'
                    }
                })
                .state('app.contacts.detail.main', {
                    url: '',
                    views: {
                        'contact-detail-tab@app.contacts.detail': {
                            templateUrl: '/app/contacts/contactView/contactSummary/contactSummary.html',

                        }
                    },
                    data: {
                        title: 'Details'
                    }
                })
                .state('app.contacts.detail.portfolio', {
                    url: '/portfolio',
                    views: {
                        'contact-detail-tab@app.contacts.detail': {
                            templateUrl: '/app/contacts/contactView/contactPortfolio/contactPortfolio.html',
                            resolve: ContactPortfolioController.resolve,
                            controller: ['holdings', ContactPortfolioController],
                            controllerAs: 'contactPortfolioController',
                        }
                    },
                    data: {
                        title: 'Portfolio'
                    }
                });

            }]);
});
