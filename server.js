var express    = require("express");
var path       = require("path");
var logger     = require("morgan");
var bodyParser = require("body-parser");
var request    = require("request");
var models     = require("./models");



//Express
var app = express();


//middleware
app.use(logger("dev"));
app.use(bodyParser());
app.use(express.static(__dirname + "/public"));





app.listen(3000, function() {
  console.log("running on port 3000")
});