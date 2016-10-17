'use strict';

angular.module('CookItUp.service', [])
.service('ApiSearch', function($http){
  return {
    getRecipes: function(recipes){
      return $http.get('https://crossorigin.me/http://food2fork.com/api/search?key=781b0d28ced3c3fc106072fc1c859602&q=' + recipes);
    }
  }
});