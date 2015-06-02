var express                = require("express");
var path                   = require("path");
var morgan                 = require("morgan");
var bodyParser             = require("body-parser");
var request                = require("request");
var session                = require("express-session");
var bcrypt                 = require("bcrypt");
var userRouter             = require("./routers/user_router.js");
var fun_postRouter         = require("./routers/fun_post_router.js");
var discussion_postRouter  = require("./routers/discussion_post_router.js");
var food_postRouter        = require("./routers/food_post_router.js");

//Express
var app = express();


//middleware
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/users', userRouter);
app.use('/fun_posts', fun_postRouter);
app.use('/discussion_posts', discussion_postRouter);
app.use("/food_posts", food_postRouter);

// var restrictAccess = function(req, res, next) {
//   var sessionID = parseInt(req.session.currentUser);
//   var reqID     = parseInt(req.params.id);

//   sessionID === reqID ? next() : res.status(401).send({err: 401, msg: "No dice bro"});
// };

// var authenticate = function(req, res, next) {
//   req.session.currentUser ? next() : res.stat(400).send({err:400, msg: "Login troll"});
// }


// app.get("/check_for_user", function (req, res) {
//   var facebook_id = req.body.facebook_id;
//   User
//     .findOne({
//       where: {facebook_id: facebook_id}
//     })
//     .then(function(user) {
//       console.log(user)
//       res.send(user)
//     });
// });

app.use(express.static("./public"))

app.listen(process.env.PORT || 3000, function() {
  console.log("running on port 3000")
});