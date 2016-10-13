angular
.module('recipeForm', []);
.controller('recipeEntry', function($scope) {
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