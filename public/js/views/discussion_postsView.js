App.Views.Discussion_postsView = Backbone.View.extend({
  el: "#posts",

  initialize: function() {
    console.log("discussion post collection view created")
    this.listenTo(this.collection, "reset", this.renderAll)
    // this.listenTo(this.collection, "change", this.renderAll)
  },

  renderAll: function() {
    this.$el.empty();

    this.collection.each(this.renderOne, this)
  },

  renderOne: function(one) {
    
    var newPostView = new App.Views.Discussion_postView({model: one})
    this.$el.append(newPostView.el)
  }
})