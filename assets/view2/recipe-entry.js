angular
.module('recipeEntry', []);
.controller('recipeForm', function($scope) {
    $scope.recipe = {
        title: "",
        description: "",
        ingredients:"",
        prepInstructions: "",
        cookingDirections: "",
        comments: ""
        image:"",
      };
  });