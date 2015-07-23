'use strict';

define([], function() {

    var ContactDetailController = function($rootScope, $scope, stateService, contact, $stateProvider) {
        var self = this;

        function stateNames() {
            return stateService.descendantsOfState('app.contacts.detail')
                .map(function(state) { return state.name; });
        }

        function stateTitles () {
            return stateService.descendantsOfState('app.contacts.detail')
                .map(function(state) { return state.data.title; });
        }

        function setTabIndexFromStateName(stateName) {
            self.tabIndex = stateNames().indexOf(stateName);
        }

        self.contact = contact;

        self.titles = stateTitles();

        setTabIndexFromStateName(stateService.$state.current.name);

        $scope.$watch(function() {
            return self.tabIndex;
        }, function(newIndex) {
            stateService.$state.go(stateNames()[newIndex]);
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