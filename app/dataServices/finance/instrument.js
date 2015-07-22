'use strict';

define([], function() {
    return function Instrument(json) {

        var firstInstrument = json.query.results.quote;

        this.symbol = firstInstrument.symbol;
        this.price = firstInstrument.Ask;
        this.percentChange = firstInstrument.ChangeinPercent;
        this.change = firstInstrument.Change;
        this.company = firstInstrument.Name;
    };
});