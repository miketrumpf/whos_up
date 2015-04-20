App.Collections.Users = Backbone.Collection.extend({
  initialize: function() {
    console.log("users collection created");
    
  },

  url:"/users",


  model: App.Models.User

});