'use strict';

define([], function() {

    var ContactDetailController = function($rootScope, $scope, $state, contact) {
        var self = this;

        // Temporary hard coded states
        var states = [{
            name: 'app.contacts.detail.main',
            title: 'Details'
        },
        {
            name: 'app.contacts.detail.portfolio',
            title: 'Portfolio'
        }];

        function stateNames() {
            return states.map(function(state) { return state.name; });
        }

        function stateTitles () {
            return states.map(function(state) { return state.title; });
        }

        function setTabIndexFromStateName(stateName) {
            self.tabIndex = stateNames().indexOf(stateName);
        }

        self.contact = contact;

        self.titles = stateTitles();

        setTabIndexFromStateName($state.current.name);

        $scope.$watch(function() {
            return self.tabIndex;
        }, function(newIndex) {
            $state.go(stateNames()[newIndex]);
        });

        $rootScope.$on('$stateChangeSuccess', function(event, toState){
           setTabIndexFromStateName(toState.name);
        });
    };

    ContactDetailController.resolve =  {
        contact: ['$stateParams', 'contactsService',
            function($stateParams, contactsService) {
                return contactsService.getContactById($stateParams.id);
            }]
    };

    return ContactDetailController;
});