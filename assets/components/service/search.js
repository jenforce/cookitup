'use strict';

angular.module('CookItUp.service', [])
.service('Search', function($http){
  return {
    getRecipes: function(recipes){
      return $http.get();
    }
  }
});