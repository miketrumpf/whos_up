App.Views.PersonalPostView = Backbone.View.extend({
  el: "#posts",



  initialize: function() {
    this.personalTemplate = Handlebars.compile($("#post-template").html());
   
    this.render();
  },


  render: function() {
    var data = this.model;
    var compiledTemplate = this.personalTemplate(data);
    this.$el.append(compiledTemplate);
  },

});