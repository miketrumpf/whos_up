App.Views.UserView = Backbone.View.extend({
  className: "user",

  initialize: function() {
    console.log("user view created")
    // this.listenTo("this.model", "change", this.saveUser());
    // // this.listenTo("this.model", "reset", this.saveUser());
    // this.listenTo("this.model", "add", this.saveUser());
  },

  saveUser: function() {
    console.log("SAVE SAVE SAVE")
   
    //post route to save user
  }


})