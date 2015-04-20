App.Views.Fun_postView = Backbone.View.extend({
  initialize: function() {
    this.funTemplate = Handlebars.compile($("post-template").html())
    this.render();
  },

  render: function() {
    var data = this.model.toJSON();
    var compiledTemplate = this.funTemplate(data);
    this.$el.append(compiledTemplate);
  }
  
});