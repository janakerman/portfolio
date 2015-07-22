'use strict';

define([], function() {

    var ContactPortfolioController = function(holdings) {
        this.holdings = holdings;
    };

    ContactPortfolioController.resolve =  {
        holdings: ['$stateParams', 'portfolioService', function($stateParams, portfolioService) {
            return portfolioService.getPortfolioSummary($stateParams.id);
        }]
    };

    return ContactPortfolioController;
});