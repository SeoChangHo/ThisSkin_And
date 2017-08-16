(
		function()
		{
			$("#TwitterLogin").click(
					function()
					{
						var provider = new firebase.auth.TwitterAuthProvider();
						
						firebase.auth().signInWithRedirect(provider).then(function() {
							  firebase.auth().getRedirectResult().then(function(result) {
							    // This gives you a Google Access Token.
							    // You can use it to access the Google API.
							    var token = result.credential.accessToken;
							    // The signed-in user info.
							    var user = result.user;
							    // ...
							    window.location.href="../weather/frmWeather.html";
							  }).catch(function(error) {
							    // Handle Errors here.
							    var errorCode = error.code;
							    var errorMessage = error.message;
							  });
							});
						
//						  firebase.auth().signInWithRedirect(provider);
//						  
//						  firebase.auth().getRedirectResult().then(function(result) {
//							  if (result.credential) {
//							    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
//							    var token = result.credential.accessToken;
//							    // ...
//							  }
//							  // The signed-in user info.
//							  var user = result.user;
//							}).catch(function(error) {
//							  // Handle Errors here.
//							  var errorCode = error.code;
//							  var errorMessage = error.message;
//							  // The email of the user's account used.
//							  var email = error.email;
//							  // The firebase.auth.AuthCredential type that was used.
//							  var credential = error.credential;
//							  // ...
//							});
					});
		}
());