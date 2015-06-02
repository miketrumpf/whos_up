var App = {
  Models:      {},
  Collections: {},
  Views:       {}
};

$(function() {
  console.log("loaded, bro");

  App.user = new App.Models.User;
  App.userView = new App.Views.UserView({model: App.user});
  
  // App.personalPostView = new App.Views.PersonalPostView();
  App.users = new App.Collections.Users;
  App.usersView = new App.Views.UsersView({collection: App.users});
  

  App.fun_post = new App.Models.Fun_post;
  App.fun_posts = new App.Collections.Fun_posts;
  App.fun_postsView = new App.Views.Fun_postsView({collection: App.fun_posts});
  // App.fun_posts.fetch();
  
  
  App.food_post = new App.Models.Food_post;
  App.food_posts = new App.Collections.Food_posts;
  App.food_postsView = new App.Views.Food_postsView({collection: App.food_posts})
  // App.food_posts.fetch();
 
  App.discussion_post = new App.Models.Discussion_post;
  App.discussion_posts = new App.Collections.Discussion_posts;
  App.discussion_postsView = new App.Views.Discussion_postsView({collection: App.discussion_posts});
  // App.discussion_posts.fetch();

  App.navigationView = new App.Views.NavigationView();

  // App.facebookLoginView = new App.Views.FacebookLoginView();

  
})