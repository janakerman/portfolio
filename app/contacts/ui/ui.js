'use strict';

define([
    'angular',
    './contactsLayout/contactsLayout',
    './contactsList/contactsList',
    './contactDetail/contactDetail',
    './contactPlaceholder/contactPlaceholder',
], function(angular, contactsLayout, contactsList, contactDetail, contactPlaceholder) {
    return angular.module('portfolio.contacts.ui', ['portfolio.contacts.services'])
        .directive('contactsLayout', [contactsLayout])
        .directive('contactsList', [contactsList])
        .directive('contactDetail', [contactDetail])
        .directive('contactPlaceholder', [contactPlaceholder]);
});