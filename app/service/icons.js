'use strict';

angular.module('CookItUp.service', [])
.service('Icon', function($http){
  return{
    getDescription: function(description){
      return $http.get();
    },
    mealPrep: function(prep) {
      return $http.get();
    },
    getIngredients: function(ingredients){
      return $http.get();
    }

  }
});