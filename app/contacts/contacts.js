'use strict';

define([
    'angular',
    './contactsLayout',
    './contactsList',
    './contactDetail',
    './contactPlaceholder',
    './services/services'
], function(angular, contactsLayout, contactsList, contactDetail, contactPlaceholder) {
    return angular.module('portfolio.contacts', ['portfolio.contacts.services'])
        .directive('contactsLayout', [contactsLayout])
        .directive('contactsList', [contactsList])
        .directive('contactDetail', [contactDetail])
        .directive('contactPlaceholder', [contactPlaceholder]);
});