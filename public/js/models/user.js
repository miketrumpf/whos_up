App.Models.User = Backbone.Model.extend({
  initialize: function() {
    console.log("User model created")
  },

  url:"/user"

});