'use strict';

console.log("****app.js******")
angular.module('CookItUp', [
   'angular-elastic-grid',
   'CookItUp.service',
   'ngRoute',
   'CookItUp.search'
  // 'CookItUp.view1',
  // 'CookItup.view2',
  ]).controller('MainController', function($scope, $location) {
   $scope.search = function(searchQuery) {
      console.log('in search button click', searchQuery);
        $location.path('search');
   }
   console.log('in main controller');
}).config([function (){
  
}])