var express    = require("express");
var models     = require("../models");
var User            = models.users;
var FoodPost       = models.food_posts;
var FunPost        = models.fun_posts;
var DiscussionPost = models.discussion_posts;

var userRouter = express.Router();

//users

userRouter.get("/", function (req, res) {
  User 
    .findAll()
    .then(function(users) {
      res.send(users)
    })
});

//get specific user
userRouter.get("/:facebook_id", function (req, res) {
  User
    .findOne({
      where: {facebook_id: req.params.facebook_id}
    })
    .then(function(user) {
      res.send(user);
    });
});

//User makes a fun post. Calling all posts fun posts  Change this to makes any post
userRouter.post("/:facebook_id/fun_posts", function (req, res) {
var title = req.body.title;
var content = req.body.content;
var genre = req.body.genre;
var picture = req.body.picture;
var start_date = req.body.start_date;
var exp_date   = req.body.exp_date;
var facebook_id = req.body.facebook_id;
var user_name   = req.body.user_name;

  User
    .findOne({
      where: {facebook_id: req.params.facebook_id}
    })
    .then(function(user) {
      FunPost
        .create({
          title: title,
          content: content,
          genre: genre,
          start_date: start_date,
          exp_date: exp_date,
          facebook_id: facebook_id,
          user_name: user_name,
          picture: picture
        })
        .then(function(newPost) {
          user.addFun_post(newPost)
          res.send(newPost)
        });
    });
});

//get user and his fun posts
userRouter.get("/:facebook_id/fun_posts", function (req, res) {
  User.findOne({
    where: {facebook_id: req.params.facebook_id},
    include: [FunPost]
  })
  .then(function(user) {
    res.send(user);
  });
  
});

// //User make a food post
// userRouter.post("/:facebook_id/food_posts", function (req, res) {
// var title = req.body.title;
// var content = req.body.content;
// var genre = req.body.genre;
// var start_date = req.body.start_date;
// var exp_date   = req.body.exp_date;
// var facebook_id = req.body.facebook_id;
// var user_name   = req.body.user_name;
// var picture    = req.body.picture;

//   User
//     .findOne({
//       where: {facebook_id: req.params.facebook_id}
//     })
//     .then(function(user) {
//       FoodPost
//         .create({
//           title: title,
//           content: content,
//           genre: genre,
//           start_date: start_date,
//           exp_date: exp_date,
//           facebook_id: facebook_id,
//           user_name: user_name,
//           picture : picture
//         })
//         .then(function(newPost) {
//           user.addFood_post(newPost)
//           res.send(newPost)
//         });
//     });
// });

// //get user and his food posts
// userRouter.get("/:facebook_id/food_posts", function (req, res) {
//   User.findOne({
//     where: {facebook_id: req.params.facebook_id},
//     include: [FoodPost]
//   })
//   .then(function(user) {
//     res.send(user);
//   });
  
// });


// //user make a discussion post
// userRouter.post("/:facebook_id/discussion_posts", function (req, res) {
// var title = req.body.title;
// var content = req.body.content;
// var genre = req.body.genre;
// var start_date = req.body.start_date;
// var exp_date   = req.body.exp_date;
// var facebook_id = req.body.facebook_id;
// var user_name   = req.body.user_name;
// var picture     = req.body.picture;

//   User
//     .findOne({
//       where: {facebook_id: req.params.facebook_id}
//     })
//     .then(function(user) {
//       DiscussionPost
//         .create({
//           title: title,
//           content: content,
//           genre: genre,
//           start_date: start_date,
//           exp_date: exp_date,
//           facebook_id: facebook_id,
//           user_name: user_name,
//           picture : picture
//         })
//         .then(function(newPost) {
//           user.addDiscussion_post(newPost)
//           res.send(newPost)
//         });
//     });
// });

//get user and his discussion posts
// userRouter.get("/:facebook_id/discussion_posts", function (req, res) {
//   User.findOne({
//     where: {facebook_id: req.params.facebook_id},
//     include: [DiscussionPost]
//   })
//   .then(function(user) {
//     res.send(user);
//   });
  
// });


//Create New user 
userRouter.post("/", function (req, res) {
  var user = req.body;

  User
  .create(user)
    .then(function(newUser) {    
      res.send(newUser)
    });
});

//Get one user by their id
// userRouter.get("/:id", authenticate, restrictAccess, function (req, res) {
//   User
//     .findOne({
//       where: {facebook_id: req.params.facebook_id}
//     })
//     .then(function(user) {
//       res.send(user)
//     })
// });

//



module.exports = userRouter;