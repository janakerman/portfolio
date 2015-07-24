'use strict';

define([
    'angular',
    './corporations/corporationsService',
    './contacts/contactsService',
    './finance/financeService',
    './portfolio/portfolioService',
], function(angular, corporationsService, contactsService, financeService, portfolioService) {
    return angular.module('portfolio.dataServices', [])
        .factory('corporationsService', ['$q', corporationsService])
        .factory('contactsService', ['$q', contactsService])
        .factory('financeService', ['$q', '$http', financeService])
        .factory('portfolioService', ['$q', '$http', 'financeService', portfolioService]);
});