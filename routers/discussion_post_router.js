var express    = require("express");
var models     = require("../models");
var User            = models.users;
var FoodPost       = models.food_posts;
var FunPost        = models.fun_posts;
var DiscussionPost = models.discussion_posts;

var discussion_postRouter = express.Router();

//create discussion post
discussion_postRouter.post("/", function (req, res) {
 //add user's Picture to posts?
var title = req.body.title;
var content = req.body.content;
var genre = req.body.genre;
var start_date = req.body.start_date;
var exp_date   = req.body.exp_date;
var facebook_id = req.body.facebook_id;
var user_name   = req.body.user_name;
  DiscussionPost.create({
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

//get discussion posts
discussion_postRouter.get("/", function (req, res) {
  // DiscussionPost.findAll()
  //   .then(function(posts) {
  //     res.send(posts)
  //   });


//This is where I would also make sure it searches for posts by their friends only.  
  DiscussionPost.findAll({
    where: {
      exp_date: {
        gt: new Date()
      }
    }
  }).then(function(discussionPosts) {
    res.send(discussionPosts)
  })
});

//get specific discussion post
discussion_postRouter.get("/:id", function (req, res) {
  DiscussionPost
    .findOne({
      where: {id: req.params.id},
      include: [User]
    })
      .then(function(post) {
        res.send(post)
      });
});


//user joins a food post
discussion_postRouter.put("/:id/users", function (req, res) {
  var facebook_id = req.body.facebook_id;
  DiscussionPost
    .findOne({
      where: {id: req.params.id}
    })
      .then(function(discussionPost) {
        User
          .findOne({
            where: {facebook_id: facebook_id}
          })
          .then(function(newUser) {
            discussionPost.addUser(newUser)
            res.send(newUser)
          });
      });
});


module.exports = discussion_postRouter;