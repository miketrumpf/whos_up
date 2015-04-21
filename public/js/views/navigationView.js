App.Views.NavigationView = Backbone.View.extend({
  el: "#nav",

  initialize: function() {
    console.log("navigation view created")
    this.template = function() {
      return $("#navigation").html();
    };
    this.render()
  },

  events: {
    "click #get-fun-posts"        : "getFunPosts",
    "click #get-food-posts"       : "getFoodPosts",
    "click #get-discussion-posts" : "getDicussionPosts"
  },

  render: function() {
    this.$el.html(this.template());
  },


  fbLogin: function() {
    //if statement in server.js  If already a user login, else create user route.
    console.log("facebook login button clicked")
  },

  getFunPosts: function() {
    console.log("get fun posts button clicked")
  },

  getFoodPosts: function() {
    console.log("get food posts button clicked")
  },

  getDiscussionPosts: function() {
    console.log("get discussion posts button clicked")
  }


});
