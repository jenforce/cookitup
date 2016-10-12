// app/models/user.js
// load the things we need
var mongoose = require('mongoose');

var recipeSchema = mongoose.Schema({
    count: Number,
    recipes: String,
    image_url: String,
    source_url: String,
    f2f_url: String,
    title: String,
    publisher: String,
    publisher_url: String,
    social_rank: Number,
});
// create the model for users and expose it to our app
module.exports = mongoose.model('Recipe', recipeSchema);