'use strict';
console.log(' in here');
angular.module('CookItUp.search', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/search/:query?', {
        templateUrl: '/search/search.html',
        controller: 'searchCtrl'
    });
}])

.controller('searchCtrl', function($scope, ApiSearch, $routeParams) {
    console.log('in search ctrl');
    ApiSearch.getRecipes($routeParams.query || 'ingredients')


    .then(function(recipeApiData) {
      console.log('recipeApiData', recipeApiData);
        
          $scope.recipes = recipeApiData.data.recipes.map(function(recipe) {
            console.log('recipe', recipe);


            return {
              title: [recipe.title],
            
              description: '<br/>' + 'Social Rank: ' + [recipe.social_rank],

              thumbnail: [recipe.image_url],
              large: [recipe.image_url],

              button_list: 
             [
              { title: 'Recipe', url: [recipe.source_url], new_window: '_blank'},
              { title: 'Publisher: ' + [recipe.publisher], url: [recipe.publisher_url], new_window: '_blank' },
              { title: 'Food2Fork Info', url: recipe.f2f_url, new_window: '_blank' }],
              tags: ['Test']
            }

          });
          console.log('scope.recipes', $scope.recipes);
  
        })
        .catch(function(err) {
            console.log('err', err);
        });
});