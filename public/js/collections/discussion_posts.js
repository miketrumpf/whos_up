App.Collections.Discussion_posts = Backbone.Collection.extend({

  initialize: function() {
    console.log("Discussion posts collection create");

  },

  url:"/discussion_posts",

  model: App.Models.Discussion_post
})