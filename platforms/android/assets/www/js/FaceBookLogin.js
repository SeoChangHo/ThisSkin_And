(
      function()
      {
         $("#FaceBookLogin").click(
               function()
               {
                  var provider = new firebase.auth.FacebookAuthProvider();
                  provider.addScope('user_birthday');
                  
                  provider.setCustomParameters({
                       'display': 'popup'
                     });
                  
                  firebase.auth().signInWithPopup(provider).then(function(result) {

                       var token = result.credential.accessToken;
                       var user = result.user;
                       //$.mobile.changePage("../weather/frmWeather.html",{transition:"flip"})
                       window.location.href="../weather/frmWeather.html";

                     }).catch(function(error) {

                       
                     
                     });
                  
                    firebase.auth().signInWithRedirect(provider);
                    
                    firebase.auth().getRedirectResult().then(function(result) {
                       if (result.credential) {
                         // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                         var token = result.credential.accessToken;
                         // ...
                       }
                       // The signed-in user info.
                       var user = result.user;
                     }).catch(function(error) {
                       // Handle Errors here.
                       var errorCode = error.code;
                       var errorMessage = error.message;
                       // The email of the user's account used.
                       var email = error.email;
                       // The firebase.auth.AuthCredential type that was used.
                       var credential = error.credential;
                       // ...
                     });
                  
               
               });
      }
());