App.Models.Food_post = Backbone.Model.extend({
  initialize: function() {
    console.log("food post model created")
  },
  url: "/food_posts"
});