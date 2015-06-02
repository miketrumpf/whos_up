App.Views.Fun_postsView = Backbone.View.extend({
  el: "#posts",

  initialize: function() {
    this.listenTo(this.collection, "reset", this.renderAll)
    // this.listenTo(this.collection, "change", this.renderAll)
  },

  renderAll: function() {
    // $("#food_posts").empty();
    // $("#discussion_posts").empty()
    debugger
    this.$el.empty();
    
    var collection = this.collection.models
    for (var i =0; i< collection.length; i++) {
      this.renderOne(collection[i])
    }
    // collection.each(this.renderOne, this)
  },

  renderOne: function(one) {
    
    var newPostView = new App.Views.Fun_postView({model: one})
    this.$el.append(newPostView.el)
  }
});