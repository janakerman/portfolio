'use strict';

define([
    'angular',
    './contacts/contactsService'
], function(angular, contactsService) {
    return angular.module('portfolio.dataServices', [])
        .factory('contactsService', ['$q', contactsService]);
});