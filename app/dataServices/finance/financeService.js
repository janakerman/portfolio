'use strict';

define(['./instrument'], function(Instrument) {
    return function($q, $http) {

        function getInstrumentUrl(symbol) {
            return "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22" + symbol + "%22)&env=store://datatables.org/alltableswithkeys&format=json";
        }

        function getInstrument(symbol) {
            var deferred = $q.defer();

            $http.get(getInstrumentUrl(symbol))
                .success(function(json) {
                    deferred.resolve(new Instrument(json));
                })
                .error(deferred.reject);

            return deferred.promise;
        }

        return {
            getInstrument: getInstrument
        };
    };
});