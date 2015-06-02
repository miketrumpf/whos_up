App.Views.Food_postsView = Backbone.View.extend({
  el: "#posts",

  initialize: function() {
    console.log("food posts collection view created")
    this.listenTo(this.collection, "reset", this.renderAll)
    // this.listenTo(this.collection, "change", this.renderAll)
  },

  renderAll: function() {
  
    this.$el.empty();
    
    var collection = this.collection.models
    for (var i =0; i< collection.length; i++) {
      this.renderOne(collection[i])
    }
    // collection.each(this.renderOne, this)
  },

  renderOne: function(one) {
    
    var newPostView = new App.Views.Food_postView({model: one})
    this.$el.append(newPostView.el)
  }
})