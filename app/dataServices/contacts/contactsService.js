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

        var getContactsListPage = function(pageNumber, pageCount, sortKey, descending) {
            var query = new Parse.Query(Parse.User);
            query.limit(pageCount);
            if (sortKey !== undefined) {
              if (descending) {
                query.descending(sortKey);
              }
              else {
                query.ascending(sortKey);
              }
            }
            query.skip(pageNumber * pageCount);
            return query.find();
        };

        var getNumberOfContacts = function() {
            var query = new Parse.Query(Parse.User);
            return query.count();
        };

        return {
            getContacts: getContacts,
            getContactById: getContactById,
            getContactsListPage: getContactsListPage,
            getNumberOfContacts: getNumberOfContacts
        };
    };
});