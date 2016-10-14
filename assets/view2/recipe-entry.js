angular
.module('recipeForm', []);
controller('recipeEntry',['$scope', function($scope) {
    $scope.recipe = {
        title: "",
        description: "",
        ingredients:"",
        prepInstructions: "",
        cookingDirections: "",
        comments: ""
        image:""
      };
    $scope.recipeSubmit() = function(){
      console.log("I've been clicked")
    };
  }]);