// app/models/user.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var recipeSchema = mongoose.Schema({
    name: String,
    recipe_id: String,
    recipeData: {}
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Recipe', recipeSchema);