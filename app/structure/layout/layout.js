'use strict';

define(['text!./layout.html'], function(template) {
  return function() {
    return {
      restrict: 'E',
      template: template
    };
  };
});