'use strict';

console.log("****app.js******")
angular.module('CookItUp', [
   'angular-elastic-grid',
   'CookItUp.service',
   'ngRoute',
   'CookItUp.search',
   'CookItUp.recipe',
  // 'CookItup.view2',
  ]).controller('MainController', function($scope, $location) {
   $scope.search = function(searchQuery) {
      console.log('in search button click', searchQuery);
        $location.path('search/' + searchQuery);

   }
   console.log('in main controller');
}).config(['$routeProvider', function($routeProvider) {
    
 $routeProvider.when('/', {
        templateUrl: '/search/search.html',
        controller: 'searchCtrl'
    });


}]);