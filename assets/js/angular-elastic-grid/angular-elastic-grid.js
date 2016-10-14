/**
 * @name angular-elastic-grid
 * @version 1.0.6
 * @author Build by Lucien Bénié lucien.benie@gmail.com
 * @license MIT
 * Built on 21/04/2016
 */
(function (angular) {

  // Create all modules and define dependencies to make sure they exist
  // and are loaded in the correct order to satisfy dependency injection
  // before all nested files are concatenated by Gulp

  // Config
  angular.module('angular-elastic-grid.config', [])
      .value('angular-elastic-grid.config', {
          debug: true
      });

  // Modules

  angular.module('angular-elastic-grid.directives', []);




  angular.module('angular-elastic-grid',
      [
        'angular-elastic-grid.config',
        'angular-elastic-grid.directives'
      ]);

})(angular);

'use strict';
angular.module('angular-elastic-grid').directive('elasticGrid',
  function() {
    // List of known option keys for elastic_grid according to jquery-elastic-grid.js docs:
    // http://demo.phapsu.com/jquery.elastic_grid/index.php
    var OPTION_FILTERS = ['popup', 'none', 'moveup', 'scaleup', 'fallperspective', 'helix', 'fly', 'flip'];

    return {
      template: '<div></div>',
      restrict: 'EA',
      replace: true,
      scope: {
        items: '=',
        direction: '@',
        inverse: '@',
        speed: '@',
        height: '@',
        delay: '@',
        filter: '@'
      },
      link: function postLink(scope, element, attrs) {
        scope.$watch(function(scope) {
          return scope.items;
        }, function(newValue) {
          // Elastic grid directive logic
          element.elastic_grid({
            hoverDirection: scope.direction || true,
            hoverDelay: scope.delay || 0,
            hoverInverse: scope.inverse || false,
            expandingSpeed: scope.speed || 500,
            expandingHeight: scope.height || 500,
            filterEffect: function() {
              if (OPTION_FILTERS.indexOf(scope.filter) > -1) { return scope.filter; }
              return OPTION_FILTERS[OPTION_FILTERS.indexOf('none')];
            }(),

            items: newValue || [{
              title: 'Title 1',
              description: 'This is a description.',
              thumbnail: ['http://placehold.it/350x150'],
              large: ['http://placehold.it/450x350', 'http://placehold.it/450x350', 'http://placehold.it/450x350'],
              button_list: [
                { title: 'Demo', url: 'http://placehold.it/450x350'},
                { title: 'Download', url: 'http://placehold.it/450x350'}
              ],
              tags: ['Test']
            }, {
              title: 'Title 2',
              description: 'This is a description.',
              thumbnail: ['http://placehold.it/350x150'],
              large: ['http://placehold.it/450x350', 'http://placehold.it/450x350', 'http://placehold.it/450x350'],
              button_list: [
                { title: 'Demo', url: 'http://placehold.it/450x350'},
                { title: 'Download', url: 'http://placehold.it/450x350'}
              ],
              tags: ['Test, Title2']
            }, {
              title: 'Title 3',
              description: 'This is a description.',
              thumbnail: ['http://placehold.it/350x150'],
              large: ['http://placehold.it/450x350', 'http://placehold.it/450x350', 'http://placehold.it/450x350'],
              button_list: [
                { title: 'Demo', url: 'http://placehold.it/450x350'},
                { title: 'Download', url: 'http://placehold.it/450x350'}
              ],
              tags: ['Test, Title1']
            }]
          });
        });
      }
    };
  }
);
