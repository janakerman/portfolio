'use strict';

define(['Parse'], function(Parse) {
    return function($q) {
		var getContacts = function() {
          	var query = new Parse.Query(Parse.User);
          	return query.find();
        };

        var getContactById = function(id) {

        	var hardCodedContacts = [
        		{ name: 'Chris' },
        		{ name: 'Jan' },
        		{ name: 'Test' }
        	];

    		return $q(function(resolve) { resolve(hardCodedContacts[id]); });
        };

        return {
            getContacts: getContacts,
            getContactById: getContactById
        };
    };
});