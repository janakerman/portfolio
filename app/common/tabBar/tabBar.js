'use strict';

define([], function() {
  return function() {
    return {
      restrict: 'E',
      templateUrl: '/app/common/tabBar/tabBar.html',
      replace: true,
      scope: {
        titles: '=',
        selectedIndex: '='
      },
      link: function(scope, element, attributes) {

        function createTab(title, active) {
          return angular.element('<li>')
                      .attr('role', 'presentation')
                        .append($('<a>').html(title))
                        .get();
        }

        function createTabs(titles) {
          var tabs;

          for(var x=0; x<titles.length; x++) {
            var tab = createTab(titles[x]);

            tabs = tabs ? tabs.add(tab) : $(tab);
          }

          return tabs;
        }

        var tabs = createTabs(scope.titles);
        tabs.first().addClass('active');
        tabs.on('click', function() {
          scope.selectedIndex = 
        })
        element.append(tabs);
      }
    };
  };
});