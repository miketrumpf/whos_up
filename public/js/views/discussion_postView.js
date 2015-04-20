App.Views.Discussion_postView = Backbone.View.extend({
  initialize: function() {
    this.discussionTemplate = Handlebars.compile($("post-template").html())
    this.render();
  },

  render: function() {
    var data = this.model.toJSON();
    var compiledTemplate = this.discussionTemplate(data)
    this.$el.append(compiledTemplate);
  }
  
});