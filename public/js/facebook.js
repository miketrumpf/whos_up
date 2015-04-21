// <section id="facebook-login">
// <!-- facebook script -->
// <script>

  // This is called with the results from from FB.getLoginStatus().
  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      testAPI();
    } else if (response.status === 'not_authorized') {
      // The person is logged into Facebook, but not your app.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    } else {
      // The person is not logged into Facebook, so we're not sure if
      // they are logged into this app or not.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into Facebook.';
    }
  }

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
      console.log(response)
    });
  }

  window.fbAsyncInit = function() {
  FB.init({
    appId      : '101181323546481',
    cookie     : true,  // enable cookies to allow the server to access 
                        // the session
    xfbml      : true,  // parse social plugins on this page
    version    : 'v2.2' // use version 2.2
  });

  // Now that we've initialized the JavaScript SDK, we call 
  // FB.getLoginStatus().  This function gets the state of the
  // person visiting this page and can return one of three states to
  // the callback you provide.  They can be:
  //
  // 1. Logged into your app ('connected')
  // 2. Logged into Facebook, but not your app ('not_authorized')
  // 3. Not logged into Facebook and can't tell if they are logged into
  //    your app or not.
  //
  // These three cases are handled in the callback function.

  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });

  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me?fields=id,name,friends,picture', function(response) {
      console.log('Successful login for: ' + response.name + response.id + response.picture.data.url);
      var response = response;
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
    
        onLogin(response);
    });

  };

//create new user model and add to collection
  function onLogin(response) {
   //if user exists in db don't do this. else just get friends
   //hit a route in my server to check for facebook id in database?

   var facebook_id = response.id
   
   $.get("/check_for_user", {
    facebook_id: facebook_id
   }).done().fail(addUser)
  };   
    

  function addUser() {
    var newUser = ({name: response.name, facebook_id: response.id, picture: response.picture.data.url}); 
    //setting the model successfully.  Listener not picking up on it.
    // App.user.set({name: response.name, facebook_id: response.id, picture: response.picture.data.url});
    debugger
    App.user = new App.Models.User(newUser)

    var userModel = App.user;
    
    App.users.add(userModel);
  };
 


// </script>
// </section>