'use strict';

define([], function() {

    var ContactPortfolioController = function(holdings) {
        this.holdings = holdings;
    };

    ContactPortfolioController.resolve =  {
        holdings: ['financeService', function(financeService) {

            return financeService.getInstrument('GOOG').then(function(instrument) {
                return [instrument];
            });
        }]
    };

    return ContactPortfolioController;
});