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
    "click #get-fun-posts"          : "getFunPosts",
    "click #get-food-posts"         : "getFoodPosts",
    "click #get-discussion-posts"   : "getDiscussionPosts",
    "click #create-new-post"        : "makePost",
    "click #submit-post"            : "submitPost",
    "click #back"                   : "back"

  },

  back: function() {
    console.log("back button clicked")
      this.$el.html(this.template());
  },

  render: function() {
    this.$el.html(this.template());
  },

  makePost: function() {
    console.log("create fun post button clicked")
    var createPostTemplate = Handlebars.compile($("#create-post").html());
    this.$el.html(createPostTemplate)

  },

  submitPost: function() {
    console.log("submit post button clicked");
    var type = $("#create-type").val();
    var title = $("#create-title").val();
    var genre = $("#create-genre").val();
    var content = $("#create-content").val();
    var startDate = $("#create-start-date").val();
    var expDate   = $("#create-exp-date").val();
    var facebookId = App.user.attributes.facebook_id;
    var picture    = App.user.attributes.picture;
    var user_name   = App.user.attributes.name;
    var postModel = ({title: title, genre: genre, content: content, start_date: startDate , exp_date: expDate, facebook_id: facebookId, user_name: user_name})

    
    if (type === "fun" || type ==="Fun") {
      
      $.ajax({
        url: "/users/" + facebookId + "/fun_posts",
        method: "POST",
        data: {
          title: title,
          genre: genre,
          content: content,
          start_date: startDate,
          exp_date: expDate,
          facebook_id: facebookId,
          user_name: user_name,
          picture: picture
        }
      }).done(App.fun_posts.fetch());


      // App.fun_post.save(postModel)
      // App.fun_posts.fetch();
      alert("fun post created")
      
    } else if (type === "food"|| type === "Food") {
      
    $.ajax({
        url: "/users/" + facebookId + "/food_posts",
        method: "POST",
        data: {
          title: title,
          genre: genre,
          content: content,
          start_date: startDate,
          exp_date: expDate,
          facebook_id: facebookId,
          user_name: user_name,
          picture: picture
        }
      }).done(App.food_posts.fetch());

      alert("food post created")
      
    } else {
      
    $.ajax({
        url: "/users/" + facebookId + "/discussion_posts",
        method: "POST",
        data: {
          title: title,
          genre: genre,
          content: content,
          start_date: startDate,
          exp_date: expDate,
          facebook_id: facebookId,
          user_name: user_name,
          picture: picture
        }
      }).done(App.discussion_posts.fetch());


      alert("discussion post created")
    }
  },


  getFunPosts: function() {
    console.log("fun post 1")

    App.fun_posts.fetch({reset:true});

  },

  getFoodPosts: function() {
    console.log("1")
    // var foodPosts = new App.Collections.Food_posts
    
    App.food_posts.fetch({reset:true});
  },

  getDiscussionPosts: function() {
    App.discussion_posts.fetch({reset:true});
  }


});