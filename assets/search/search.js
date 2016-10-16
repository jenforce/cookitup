'use strict';
console.log(' in here');
angular.module('CookItUp.search', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    
 $routeProvider.when('/', {
        templateUrl: '/search/search.html',
        controller: 'searchCtrl'
    });

    $routeProvider.when('/search', {
        templateUrl: '/search/search.html',
        controller: 'searchCtrl'
    });
}])

.controller('searchCtrl', function($scope, ApiSearch) {
    console.log('in search ctrl');
    ApiSearch.getRecipes('ingredients').then(function(recipeApiData) {
      console.log('recipeApiData', recipeApiData);
        
          $scope.recipes = recipeApiData.data.recipes.map(function(recipe) {
            console.log('recipe', recipe);
            return {
              title: recipe.title,
              description: recipe.f2f_url,
              'thumbnail'     : [recipe.image_url],    
              'large'         : [recipe.image_url],
              button_list: [],
              tags: ['food']      
            }
          });
          console.log('scope.recipes', $scope.recipes);
  
        })
        .catch(function(err) {
            console.log('err', err);
        });
});