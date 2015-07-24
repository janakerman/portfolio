'use strict';

define([], function() {
  return function($scope, corporationsService) {

    var self = this;

    this.corporations = [];

    corporationsService.getNumberOfCorporations().then(function(count) {
      console.log(count);
    });

    corporationsService.getCorporationPage(0, 100, 'name', false).then(function(corporations) {
      self.corporations = corporations;
      $scope.$apply();
    });

  };
});