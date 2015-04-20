App.Views.Food_postView = Backbone.View.extend({
  initialize: function() {
    this.foodTemplate = Handlebars.compile($("post-template").html())
    this.render()
  },

  render: function() {
    var data = this.model.JSON();
    var compiledTemplate = this.foodTemplate(data);
    this.$el.append(compiledTemplate)
  }
});