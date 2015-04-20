var express    = require("express");
var path       = require("path");
var logger     = require("morgan");
var bodyParser = require("body-parser");
var request    = require("request");
var models     = require("./models");

//Models
var User            = models.users;
var FoodPost       = models.foodPosts;
var FunPost        = models.funPosts;
var DiscussionPost = models.discussionPosts;

//Express
var app = express();


//middleware
app.use(logger("dev"));
app.use(bodyParser());
app.use(express.static(__dirname + "/public"));


//users

app.get("/users", function (req, res) {
  User 
    .findAll()
    .then(function(users) {
      res.send(users)
    })
});
//Create user. route not being reached
app.post("/users", function (req, res) {
  debugger
  var user = req.body;

  User
  .create(user)
    .then(function(newUser) {    
      res.send(newUser)
    });
});

//Fun Post Routes
//create fun post
app.post("/fun_posts", function (req, res) {
  var user_name = req.user_name;
  var title = req.title;
  var genre = req.genre;
  var content =req.content;
  var start_date= req.start_date;
  var exp_date = req.exp_date;
  var facebook_id = req.facebook_id;
  var user_id = req.user_id;

  FunPost.create({
    title: title,
    genre: genre,
    content: content,
    start_date: start_date,
    exp_date: exp_date,
    facebook_id: facebook_id,
    user_id: user_id
  })
    .then(function(newPost) {
      res.send(newPost)
    })
});


app.listen(3000, function() {
  console.log("running on port 3000")
});