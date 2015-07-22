'use strict';

define(['./symbol'], function(Symbol) {
    return function($q, $http) {

        function getSymbolUrl(symbol) {
            return "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22" + symbol + "%22)&env=store://datatables.org/alltableswithkeys&format=json";
        }

        function getSymbol(symbol) {
            var deferred = $q.defer();

            $http.get(getSymbolUrl(symbol))
                .success(function(json) {
                    deferred.resolve(new Symbol(json));
                })
                .error(deferred.reject);

            return deferred.promise;
        }

        return {
            getSymbol: getSymbol
        };
    };
});