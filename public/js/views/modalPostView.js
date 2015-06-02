App.Views.ModalPostView = Backbone.View.extend({
el: "#modal",

  initialize: function() {
    console.log("modal single view created")
    this.template = Handlebars.compile($("#modal-post-template").html())
    this.render()
  },

  events: {
    "click #close-modal": "hide"
  },

  hide: function() {
    this.$el.empty();
    this.$el.hide();
  },

  show: function() {
    this.$el.show();
  },

  render: function() {
    
    this.$el.append(this.template(this.model))
    this.show();
  }
})