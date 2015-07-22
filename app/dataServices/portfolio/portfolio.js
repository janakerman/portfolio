'use strict';

define([], function() {
    return function Instrument(json) {

        var firstPortfolio = json.query.results.quote;

        this.instruments = ['GOOG'];
    };
});