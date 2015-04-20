App.Views.UsersView = Backbone.View.extend({
  className: "user",

  initialize: function() {
    //not doing anything
    console.log("users view created")
    this.listenTo(this.collection, "add", this.saveUser);
    // this.listenTo(this.collection, "change", this.saveUser);
  },

   saveUser: function() {
    console.log("REACHED SAVE USER FUNCTION")
    var user = this.collection.toJSON();
debugger
 
    
    // //app.user has the info I need already.  Do I need to pass it anything?
    // App.user = new App.Models.User

    App.user.save(({name: user.name, facebook_id: user.facebook_id, picture: user.picture}))
    

  }
})