App.Collections.Fun_posts = Backbone.Collection.extend({

  initialize: function() {
    console.log("Fun_posts collection created");

  },

  url: "/fun_posts",

  model: App.Models.Fun_posts

});