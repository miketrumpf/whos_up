var App = {
  Models:      {},
  Collections: {},
  Views:       {}
};

$(function() {
  console.log("loaded, bro");

  App.fun_posts = new App.Collections.Fun_posts;

  App.food_posts = new App.Collections.Food_posts;

  App.disucssion_posts = new App.Collections.Discussion_posts;

  
})