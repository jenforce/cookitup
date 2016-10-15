console.log('process.env.PORT', process.env.PORT);
var port = process.env.PORT || 3010;

var express  = require('express');
var app      = express();
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var MongoStore = require('connect-mongo')(session);

var configDB = require('./config/database.js');

console.log('connecting to',process.env.MLAB || configDB.url);
// configuration ===============================================================
mongoose.connect(process.env.MLAB || configDB.url); // connect to our database

require('./config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch', store: new MongoStore({ mongooseConnection: mongoose.connection }) })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session


app.use(express.static(process.cwd() + '/assets'));

app.get('/', function(req, res) {
  res.render('home', {
    user: req.user
  });
});

app.get('/login', function(req, res) {
  res.render('index', {
    user: req.user
  });
});

app.get('/logout', function(req, res) {
  if (req.user) {
    req.logout();
  }
  res.redirect('/');
})


app.get('/profile', function(req, res) {
  if (!req.user) {
    return res.redirect('/login');
  }
  res.render('profile', {
    user: req.user
  })
})

// Submit to the DB
// app.post('/home', function(req,res){
//     var body = req.body;
//     db.Recipes.create({
//         title: body.title,
//         description: body.description,
//         ingredients: body.ingredients,
//         intructions: body.instructions,
//         directions: body.directions,
//         comments: body.comments,
//         image:body.image  
//       }).then(function(data){
//         console.log('data',data);
//     res.render('index');

//   })
// });

// collection.insert(req.body, function (err, data) {
//   if (err) {
//     res.send("There was a problem adding the information to the database.");
//   }
//   else {
//     res.location("home");
//     res.redirect("/");
//   }
// });



//to solve heroku load up
// function sessionCleanup() {
//     sessionStore.all(function(err, sessions) {
//         for (var i = 0; i < sessions.length; i++) {
//             sessionStore.get(sessions[i], function() {} );
//         }
//     });
// }

// $interval(sessionCleanup, 10000);
//-- heroku end

// routes ======================================================================
require('./routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);