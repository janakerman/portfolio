'use strict';

define([], function() {

    var ContactPortfolioController = function(holdings) {
        this.holdings = holdings;
    };

    ContactPortfolioController.resolve =  {
        holdings: function() {
            return [
                { company: 'Google', symbol: 'GOOG', price: '300', change: '0.03' },
                { company: 'Google', symbol: 'GOOG', price: '300', change: '0.03' },
                { company: 'Google', symbol: 'GOOG', price: '300', change: '0.03' },
                { company: 'Google', symbol: 'GOOG', price: '300', change: '0.03' }
            ];
        }
    };

    return ContactPortfolioController;
});