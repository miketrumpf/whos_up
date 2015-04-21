var App = {
  Models:      {},
  Collections: {},
  Views:       {}
};

$(function() {
  console.log("loaded, bro");

  App.user = new App.Models.User;
  App.userView = new App.Views.UserView({model: App.user});
  
  App.users = new App.Collections.Users;
  App.usersView = new App.Views.UsersView({collection: App.users});
  

 App.fun_posts = new App.Collections.Fun_posts;

// App.food_posts = new App.Collections.Food_posts;

// App.discussion_posts = new App.Collections.Discussion_posts;
     
App.food_posts = new App.Collections.Food_posts;   
// App.navigationView = new App.Views.NavigationView();
     
 App.disucssion_posts = new App.Collections.Discussion_posts;   
   
// App.facebookLoginView = new App.Views.FacebookLoginView();

  
})