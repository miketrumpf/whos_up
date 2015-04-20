var express    = require("express");
var path       = require("path");
var logger     = require("morgan");
var bodyParser = require("body-parser");
var request    = require("request");
var models     = require("./models");

//Models
var User            = models.users;
var FoodPosts       = models.foodPosts;
var FunPosts        = models.funPosts;
var DiscussionPosts = models.discussionPosts;

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
//Create user
app.post("/users", function (req, res) {
  var user = req.body;
  User.create(user)
    .then(function(newUser) {
      res.send(newUser)
    });
});



app.listen(3000, function() {
  console.log("running on port 3000")
});