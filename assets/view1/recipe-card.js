console.log('loading recipectrl');
'use strict';

angular.module('CookItUp.recipe', ['ngRoute'])

.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/recipe/:id', {
    templateUrl: 'view1/recipe-card.html',
    controller: 'RecipeCtrl'
  });
}])

.controller('RecipeCtrl', function($scope, ApiSearch, $routeParams) {
  ApiSearch.getRecipeDetail($routeParams.id).then(function(data) {
    $scope.recipe = data.data.recipe;
  })
  
})