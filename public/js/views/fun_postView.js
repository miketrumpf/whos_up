 App.Views.Fun_postView = Backbone.View.extend({
  className: "fun_post",


  initialize: function() {
    console.log("fun post 2")
    this.funTemplate = Handlebars.compile($("#post-template").html());
    this.render();
    //modal template for users connected to posts
    // this.modalTemplate = Handlebars.compile($("#modal-template").html())
  },


  render: function() {
    this.$el.empty()
    var data = this.model.toJSON();
    var compiledTemplate = this.funTemplate(data);
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
        url: "/fun_posts/" + postId + "/users",
        method: "PUT",
        data: { 
          facebook_id: facebook_id,
         
        }
      }).done(App.fun_posts.fetch());


  },

  getAllPosts: function() {
    console.log("clicked getAllPosts")
    this.$el.empty();
    var facebookId = this.model.attributes.facebook_id;
    $("#posts").empty()
      $.ajax({
      url: "/users/" + facebookId + "/fun_posts",
        method: "GET"
      }).done(function(user) {
        
       var collection = user.fun_posts;
       
       for(var i = 0; i < collection.length; i++) {
        
        var one = collection[i]
        
         var newPostView = new App.Views.PersonalPostView({model: one})
         // $("#fun_posts").empty();
         
         // this.$el.append(newPostView.el);
       }
     
      });  
  },

  whoIsIn: function() {
    console.log("clicked who is in")
  var postId = this.model.id;
  
    $.ajax({
      url:"/fun_posts/" + postId,
      method: "GET",
    }).done(function(post) {
      
      var collection = post.users;
      
      for(var i=0; i < collection.length; i++) {
        var one = collection[i]
        
        var newModalView = new App.Views.ModalPostView({model: one})
      }
    
    });
  }

  // renderOne: function() {
  //   debugger
  //   var newPostView = new App.Views.Fun_postView({model: one})
  //   this.$el.append(newPostView.el)
  // }

  
});