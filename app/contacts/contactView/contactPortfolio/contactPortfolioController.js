'use strict';

define([], function() {

    var ContactPortfolioController = function(holdings) {
        this.holdings = holdings;
    };

    ContactPortfolioController.resolve =  {
        holdings: ['financeService', function(financeService) {

            return financeService.getSymbol('GOOG').then(function(symbol) {
                return [symbol, symbol, symbol, symbol];
            });
        }]
    };

    return ContactPortfolioController;
});