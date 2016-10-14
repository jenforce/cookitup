'use strict';
console.log(' in here');
angular.module('CookItUp.search', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/search', {
        templateUrl: '/search/search.html',
        controller: 'searchCtrl'
    });
}])

.controller('searchCtrl', function($scope, ApiSearch) {
    console.log('in search ctrl');
    ApiSearch.getRecipes('ingredients').then(function(recipeApiData) {
      console.log('recipeApiData', recipeApiData);
          //$scope.recipes = recipeApiData.data.recipes; 
          //$scope.recipes = [];
          $scope.recipes = recipeApiData.data.recipes.map(function(recipe) {
            console.log('recipe', recipe);
            return {
              title: recipe.title,
              description: 'test',
              'thumbnail'     : ['/img/images/thumbs/1.jpg'],    
              'large'         : ['/img/images/1.jpg'],
              button_list: [],
              tags: ['food']      
            }
          });
          console.log('scope.recipes', $scope.recipes);

            // $scope.recipes = [
            //     {
            //         'title'         : 'Crown Roast of Pork with Chestnut-Rye Stuffing',
            //         'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage. Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage. ',
            //         'thumbnail'     : ['/img/images/thumbs/1.jpg'],
            //         'large'         : ['/img/images/1.jpg'],
            //         'button_list'   :
            //         [
            //             { 'title':'<i class="material-icons">assignment_turned_in</i>', 'description' : 'Ingredients'},
            //             { 'title':'<i class="material-icons">timer</i>', 'description' : 'Cooking Directions'},
            //             { 'title':'<i class="material-icons">shopping_basket</i>','description' : 'Shopping List'},
            //             { 'title':'<i class="material-icons">share</i>', 'description' : 'Share With Friends'}
                        
            //         ],
            //         'tags'          : ['food']
            //     },

            //     {
            //         'title'         : 'Second Recipe',
            //         'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage. Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage. ',
            //         'thumbnail'     : ['/img/images/thumbs/1.jpg'],
            //         'large'         : ['/img/images/1.jpg'],
            //         'button_list'   :
            //         [
            //             { 'title':'<i class="material-icons">assignment_turned_in</i>', 'description' : 'Ingredients'},
            //             { 'title':'<i class="material-icons">timer</i>', 'description' : 'Cooking Directions'},
            //             { 'title':'<i class="material-icons">shopping_basket</i>','description' : 'Shopping List'},
            //             { 'title':'<i class="material-icons">share</i>', 'description' : 'Share With Friends'}
                        
            //         ],
            //         'tags'          : ['food']
            //     },

            //     {
            //         'title'         : 'Third Recipe',
            //         'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage. Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage. ',
            //         'thumbnail'     : ['/img/images/thumbs/1.jpg'],
            //         'large'         : ['/img/images/1.jpg'],
            //         'button_list'   :
            //         [
            //             { 'title':'<i class="material-icons">assignment_turned_in</i>', 'description' : 'Ingredients'},
            //             { 'title':'<i class="material-icons">timer</i>', 'description' : 'Cooking Directions'},
            //             { 'title':'<i class="material-icons">shopping_basket</i>','description' : 'Shopping List'},
            //             { 'title':'<i class="material-icons">share</i>', 'description' : 'Share With Friends'}
                        
            //         ],
            //         'tags'          : ['food']
            //     },

            //     {
            //         'title'         : 'Fourth Recipe',
            //         'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage. Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage. ',
            //         'thumbnail'     : ['/img/images/thumbs/1.jpg'],
            //         'large'         : ['/img/images/1.jpg'],
            //         'button_list'   :
            //         [
            //             { 'title':'<i class="material-icons">assignment_turned_in</i>', 'description' : 'Ingredients'},
            //             { 'title':'<i class="material-icons">timer</i>', 'description' : 'Cooking Directions'},
            //             { 'title':'<i class="material-icons">shopping_basket</i>','description' : 'Shopping List'},
            //             { 'title':'<i class="material-icons">share</i>', 'description' : 'Share With Friends'}
                        
            //         ],
            //         'tags'          : ['food']
            //     },

            //     {
            //         'title'         : 'Fifth Recipe',
            //         'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage. Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage. ',
            //         'thumbnail'     : ['/img/images/thumbs/1.jpg'],
            //         'large'         : ['/img/images/1.jpg'],
            //         'button_list'   :
            //         [
            //             { 'title':'<i class="material-icons">assignment_turned_in</i>', 'description' : 'Ingredients'},
            //             { 'title':'<i class="material-icons">timer</i>', 'description' : 'Cooking Directions'},
            //             { 'title':'<i class="material-icons">shopping_basket</i>','description' : 'Shopping List'},
            //             { 'title':'<i class="material-icons">share</i>', 'description' : 'Share With Friends'}
                        
            //         ],
            //         'tags'          : ['food']
            //     },



            // ]          
        // $("#search_grid").elastic_grid({
        //     'showAllText' : 'All',
        //     'filterEffect': 'popup', // moveup, scaleup, fallperspective, fly, flip, helix , popup
        //     'hoverDirection': true,
        //     'hoverDelay': 0,
        //     'hoverInverse': false,
        //     'expandingSpeed': 500,
        //     'expandingHeight': 500
        // });
      
      // $scope.recipes = [                {
      //               'title'         : 'Crown Roast of Pork with Chestnut-Rye Stuffing',
      //               'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage. Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage. ',
      //               'thumbnail'     : ['/img/images/thumbs/1.jpg'],
      //               'large'         : ['/img/images/1.jpg'],
      //               'button_list'   :
      //               [
      //                   { 'title':'<i class="material-icons">assignment_turned_in</i>', 'description' : 'Ingredients'},
      //                   { 'title':'<i class="material-icons">timer</i>', 'description' : 'Cooking Directions'},
      //                   { 'title':'<i class="material-icons">shopping_basket</i>','description' : 'Shopping List'},
      //                   { 'title':'<i class="material-icons">share</i>', 'description' : 'Share With Friends'}
                        
      //               ],
      //               'tags'          : ['food']
      //           }];
              
        })
        .catch(function(err) {
            console.log('err', err);
        });
});