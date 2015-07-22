'use strict';

define([
    'angular',
    './contacts/contactsService',
    './finance/financeService',
], function(angular, contactsService, financeService) {
    return angular.module('portfolio.dataServices', [])
        .factory('contactsService', ['$q', contactsService])
        .factory('finance', ['$q', '$http', financeService]);
});