var express    = require("express");
var models     = require("../models");
var User            = models.users;
var FoodPost       = models.food_posts;
var FunPost        = models.fun_posts;
var DiscussionPost = models.discussion_posts;

var fun_postRouter = express.Router();

//Fun Post Routes

// get fun posts
// fun_postRouter.get("/", function (req, res) {
//   FunPost.findAll()
//     .then(function(posts) {
//       res.send(posts)
//     });
// });

//trying to create a route that only gets up to date posts. not expired
fun_postRouter.get("/", function (req, res) {
// var livePosts = [];
// var today = new Date();
  FunPost.findAll({
    where: {
//need to create a section attribute.  will search for fun food or discussion sections
       genre: {
        in: ["sports", "Sports"]
    //   exp_date: {
    //     gt: new Date()
      }
    }
  }).then(function(funPosts) {
    res.send(funPosts)
  })
    // .then(function(posts) {
     

      // posts.forEach(function(post) {
      //   // console.log("post is" + post)
      //   // console.log("post.exp_date is " + post.exp_date)
      //   // console.log("post.id is " + post.id)
      //   if(post.exp_date > today) {
      //     livePosts.push(post)
      //   } 
      //   else { 
      //   }
      // })
      // res.send(livePosts)
      // console.log("live Posts is"  + livePosts)
      // FunPost.findAll({
      //   where: {
      //     id: {
      //       $in: livePosts
      //     }
      //   }
      // }).then(function(livePosts) {
      //    res.send(livePosts)
      //  });
     
    // });
});


// //create fun post
// fun_postRouter.post("/", function (req, res) {
//  //add user's Picture to posts?
// var title = req.body.title;
// var content = req.body.content;
// var genre = req.body.genre;
// var picture = req.body.picture;
// var start_date = req.body.start_date;
// var exp_date   = req.body.exp_date;
// var facebook_id = req.body.facebook_id;
// var user_name   = req.body.user_name;
//   FunPost.create({
//     title: title,
//     content: content,
//     genre: genre,
//     start_date: start_date,
//     exp_date: exp_date,
//     facebook_id: facebook_id,
//     user_name: user_name,
//     picture: "https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-xfp1/t31.0-8/337478_3806830812877_1194328401_o.jpg"
//   })
//     .then(function(newPost) {
//       res.send(newPost)
//     })
// });

//get specific fun post
fun_postRouter.get("/:id", function (req, res) {
  FunPost
    .findOne({
      where: {id: req.params.id},
      include: [User]
    })
      .then(function(funPost) {
        res.send(funPost)
      });
});


//user joins a fun post
fun_postRouter.put("/:id/users", function (req, res) {
  var facebook_id = req.body.facebook_id;
  FunPost
    .findOne({
      where: {id: req.params.id}
    })
      .then(function(funPost) {
        User
          .findOne({
            where: {facebook_id: facebook_id}
          })
          .then(function(newUser) {
            funPost.addUser(newUser)
            res.send(newUser)
          });
      });
});


module.exports = fun_postRouter;