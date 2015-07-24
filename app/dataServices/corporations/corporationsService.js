'use strict';

define(['Parse'], function(Parse) {

    return function() {

      var Corporation = Parse.Object.extend("Corporation");

      var getCorporationPage = function(pageNumber, pageCount, sortKey, descending, searchTerm) {
          var query = new Parse.Query(Corporation);
          query.limit(pageCount);
          
          // Sorting
          if (sortKey !== undefined) {
            if (descending) {
              query.descending(sortKey);
            }
            else {
              query.ascending(sortKey);
            }
          }

          // Filtering
          if (searchTerm !== undefined && searchTerm.length > 0) {
            query.startsWith("username", searchTerm);
          }

          query.skip(pageNumber * pageCount);
          return query.find();
      };

      var getNumberOfCorporations = function(searchTerm) {
          var query = new Parse.Query(Corporation);

          if (searchTerm !== undefined && searchTerm.length > 0) {
              query.startsWith("name", searchTerm);
          }

          return query.count();
      };

      return {
          getCorporationPage: getCorporationPage,
          getNumberOfCorporations: getNumberOfCorporations
      };
    };

});
