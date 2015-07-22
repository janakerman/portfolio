'use strict';

define([
    'angular',
    './contacts/contactsService',
    './finance/financeService',
    './portfolio/portfolioService',
], function(angular, contactsService, financeService, portfolioService) {
    return angular.module('portfolio.dataServices', [])
        .factory('contactsService', ['$q', contactsService])
        .factory('financeService', ['$q', '$http', financeService])
        .factory('portfolioService', ['$q', '$http', 'financeService', portfolioService]);
});