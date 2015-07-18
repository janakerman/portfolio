'use strict';

define([
    'angular',
    './contactsService'
], function(angular, contactsService) {
    return angular.module('portfolio.contacts.services', [])
        .factory('contactsService', ['$q', contactsService]);
});