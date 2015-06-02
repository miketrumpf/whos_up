App.Views.Discussion_postView = Backbone.View.extend({
  className: "discussion_post",

  initialize: function() {
    console.log("discussion post view created")
    this.discussionTemplate = Handlebars.compile($("#post-template").html());
    this.render();
  },


  render: function() {

    var data = this.model.toJSON();
    var compiledTemplate = this.discussionTemplate(data);
    this.$el.append(compiledTemplate);
  },

  events: {
    "click #join": "joinPost",
    "click #username": "getAllPosts",
    "click #attending": "whoIsIn"
  },

  joinPost: function() {
    console.log("clicked join post")
    //adds user to this post vice versa.  they become linked on join table
    // var user_name = App.user.attributes.name;
    // this.$el.append("<li>").html(user_name + " is up for it!")

   var facebook_id = App.user.attributes.facebook_id;
   var postId = this.model.attributes.id;

     $.ajax({
        url: "/discussion_posts/" + postId + "/users",
        method: "PUT",
        data: { 
          facebook_id: facebook_id,
         
        }
      }).done(App.discussion_posts.fetch());


  },

  getAllPosts: function() {
    this.$el.empty();
    var facebookId = this.model.attributes.facebook_id
    $("#posts").empty()
      $.ajax({
        url: "/users/" + facebookId + "/discussion_posts",
        method: "GET"
      }).done(function(user) {
        var collection = user.discussion_posts;

        for(var i = 0; i < collection.length; i++) {
          var one = collection[i]

          var newPostView = new App.Views.PersonalPostView({model: one
          })
        }
      });
  },

  whoIsIn: function() {
    var postId = this.model.id;

    $.ajax({
      url: "/discussion_posts/" + postId,
      method: "GET" 
    }).done(function(post) {
      var collection = post.users;

      for(var i=0; i < collection.length; i++) {
        var one = collection[i]

        var newModalView = new App.Views.ModalPostView({model: one})
      }
    });
  }























  
});