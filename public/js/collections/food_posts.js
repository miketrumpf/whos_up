App.Collections.Food_posts = Backbone.Collection.extend({

  initialize: function() {
    console.log("Food_posts collection created");
  },

  url: "/food_posts",

  model: App.Models.Food_post

});