var express    = require("express");
var models     = require("../models");
var User            = models.users;
var FoodPost       = models.food_posts;
var FunPost        = models.fun_posts;
var DiscussionPost = models.discussion_posts;

var food_postRouter = express.Router();

//get food posts
food_postRouter.get("/", function (req, res) {
  // FoodPost.findAll()
  //   .then(function(posts) {
  //     res.send(posts)
  //   });

  FoodPost.findAll({
    where: {
      exp_date: {
        gt: new Date()
      }
    }
  }).then(function(foodPosts) {
    res.send(foodPosts)
  })
});

//create food post
food_postRouter.post("/", function (req, res) {
 //add user's Picture to posts?
var title = req.body.title;
var content = req.body.content;
var genre = req.body.genre;
var start_date = req.body.start_date;
var exp_date   = req.body.exp_date;
var facebook_id = req.body.facebook_id;
var user_id     = req.body.user_id;
var user_name   = req.body.user_name;
  FoodPost.create({
    title: title,
    content: content,
    genre: genre,
    start_date: start_date,
    exp_date: exp_date,
    facebook_id: facebook_id,
    user_name: user_name
  })
    .then(function(newPost) {
      res.send(newPost)
    })
});

//get specific food post
food_postRouter.get("/:id", function (req, res) {
  FoodPost
    .findOne({
      where: {id: req.params.id},
      include: [User]
    })
      .then(function(foodPost) {
        res.send(foodPost)
      });
});


//user joins a food post
food_postRouter.put("/:id/users", function (req, res) {
  var facebook_id = req.body.facebook_id;
  FoodPost
    .findOne({
      where: {id: req.params.id}
    })
      .then(function(foodPost) {
        User
          .findOne({
            where: {facebook_id: facebook_id}
          })
          .then(function(newUser) {
            foodPost.addUser(newUser)
            res.send(newUser)
          });
      });
});

module.exports = food_postRouter;