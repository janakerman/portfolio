'use strict';

define([
    'angular',
    './contactsLayout/contactsLayout',
    './contactsList/contactsList',
    './contactDetail/contactDetail',
    './contactPlaceholder/contactPlaceholder',
  	'dataServices/dataServicesModule'
], function(angular, contactsLayout, contactsList, contactDetail, contactPlaceholder) {
    return angular.module('portfolio.contacts', ['portfolio.dataServices'])
        .directive('contactsLayout', [contactsLayout])
        .directive('contactsList', [contactsList])
        .directive('contactDetail', [contactDetail])
        .directive('contactPlaceholder', [contactPlaceholder]);
});