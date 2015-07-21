'use strict';

define([], function() {

    var ContactDetailController = function($state, contact) {
        var self = this;

    	this.contact = contact;

        this.states = [{
            title: 'Detail',
            state: 'main'
        },
        {
            title: 'Portfolio',
            state: 'portfolio'
        }];

        this.titles = this.states.map(function(state) { return state.title; });

        this.tabSelected = function(index) {
            $state.go('^.' + self.states[index].state);
        };
    };

    ContactDetailController.resolve =  {
        contact: ['$stateParams', 'contactsService',
            function($stateParams, contactsService) {
                return contactsService.getContactById($stateParams.id);
            }]
    };

    return ContactDetailController;
});