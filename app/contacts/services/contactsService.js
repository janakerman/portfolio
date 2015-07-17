'use strict';

define(['Parse'], function(Parse) {
    return function() {
        return {
            getContacts: function() {
              var query = new Parse.Query(Parse.User);
              return query.find();
            }
        };
    };
});