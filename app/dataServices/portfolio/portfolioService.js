'use strict';

define(['Parse', './portfolio'], function(Parse, Portfolio) {
    return function($q, $http, financeService) {

        function getInstrumentSymbols(username) {
            var deferred = $q.defer();

            var Portfolio = Parse.Object.extend("Portfolio");
            var User = Parse.Object.extend("User");
            var queryUser = new User();
            queryUser.username = username;

            var query = new Parse.Query(Portfolio);
            query.find({
                success: function(portfolio) {
                     deferred.resolve(portfolio[0].attributes.instruments);
                },
                failure: deferred.reject
            });

            return deferred.promise;
        }

        function getPortfolioSummary(username) {
            return getInstrumentSymbols(username).then(function(instrumentSymbols) {

                var instrumentSummaryPromises = instrumentSymbols.map(function(symbol) {
                    return financeService.getInstrument(symbol);
                });

                return $q.all(instrumentSummaryPromises);
            });
        }

        return {
            getPortfolioSummary: getPortfolioSummary
        };
    };
});