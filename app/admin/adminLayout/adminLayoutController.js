'use strict';

define([''], function() {
  return function($state) {

    this.classFor = function(link) {
      if ($state.current.name.startsWith('app.admin.' + link)) {
        return 'active';
      }
      return "";
    };

  };
});