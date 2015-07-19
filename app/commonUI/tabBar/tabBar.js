'use strict';

define([], function() {
  return function() {
    return {
      restrict: 'E',
      templateUrl: '/app/commonUI/tabBar/tabBar.html',
      replace: true,
      scope: {
        titles: '=',
        tabSelected: '='
      },
      link: function(scope, element, attributes) {

        function createTab(title) {
          return $('<li>')
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

        var ACTIVE_CLASS = 'active';

        var tabs = createTabs(scope.titles);
        tabs.first().addClass(ACTIVE_CLASS);
        tabs.on('click', function(e) {
          tabs.removeClass(ACTIVE_CLASS);

          var tappedTab = $(e.currentTarget);
          scope.tabSelected(tappedTab.index());
          tappedTab.addClass(ACTIVE_CLASS);
        });
        element.append(tabs);
      }
    };
  };
});