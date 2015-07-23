'use strict';

define([], function() {

    var ContactDetailController = function($scope, stateService, contact, loadingSpinnerService) {
        var self = this;

        this.spinnerId = 'contact-detail';

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
            var transitionPromise = stateService.$state.go(stateNames()[newIndex]);
            loadingSpinnerService.spin(self.spinnerId, transitionPromise);
        });

        stateService.navigatedToDescendantOf('app.contacts.detail', function(toState) {
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