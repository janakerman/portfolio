'use strict';

define([], function() {
    return function Symbol(json) {

        var firstSymbol = json.query.results.quote;

        this.symbol = firstSymbol.symbol;
        this.price = firstSymbol.ask;
        this.percentChange = firstSymbol.ChangeinPercent;
        this.change = firstSymbol.Change;
    };
});