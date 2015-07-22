'use strict';

define([], function() {

    var ContactPortfolioController = function(portfolio) {
        this.holdings = portfolio.instruments;
    };

    ContactPortfolioController.resolve =  {
        holdings: ['$stateParams', 'portfolioService', function($stateParams, portfolioService) {
            return portfolioService.getPortfolioSummary($stateParams.id);
        }]
    };

    return ContactPortfolioController;
});