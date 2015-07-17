'use strict';

define([
    'angular',
    './services/services',
    './ui/ui'
], function(angular) {
    return angular.module('portfolio.contacts', ['portfolio.contacts.ui', 'portfolio.contacts.services']);
});