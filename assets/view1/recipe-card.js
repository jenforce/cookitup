'use strict';

angular.module('CookItUp', ['ngRoute'])

.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'ViewCtrl'
  });
}])

.controller('ViewCtrl', function($scope,Search) {
  
})