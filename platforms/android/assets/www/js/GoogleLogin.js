(function()
		{
			  const config = 
			  {
					  apiKey: "AIzaSyA0KOFph4tqOmUmFj4zPV3KTms2tjDB1Ig",
					    authDomain: "thisskin-ebdc9.firebaseapp.com",
					    databaseURL: "https://thisskin-ebdc9.firebaseio.com",
					    projectId: "thisskin-ebdc9",
					    storageBucket: "thisskin-ebdc9.appspot.com",
					    messagingSenderId: "254934759497"
			  };	
			  
			  
			  
			  if (!firebase.apps.length)
			  {				             
        		  firebase.initializeApp(config);
       		  }
			  
			  
			  //##################################################################
			  //#########################Google###################################
			  //##################################################################
				var googleBtn = document.getElementById("GoogleLogin");
				

//				googleBtn.addEventListener("click", e=>
//				  {
//					  console.log("d");
//						var provider = new firebase.auth.GoogleAuthProvider();
//						
//						
//						firebase.auth().signInWithPopup(provider).then(function(result)
//								{
//									var token = result.credential.accessToken;
//									var user = result.user;
//									$.mobile.changePage("../weather/frmWeather.html",{transition:"flip"})
//									
//								}).catch(function(error)									
//								{
//									var errorCode = error.code;
//									var errorMessage = error.message;
//									var email = error.email;
//									var credential = error.credential;
//								});
//				  });
				
				
	
				googleBtn.onclick = function()
						{
							var provider = new firebase.auth.GoogleAuthProvider();
							alert(provider);
							firebase.auth().signInWithPopup(provider).then(function() {
								  firebase.auth().getRedirectResult().then(function(result) {
									  if (result.credential) {
									    // This gives you a Google Access Token.
									    // You can use it to access the Google API.
									    var token = result.credential.accessToken;
									    // The signed-in user info.
									    var user = result.user;
									    // ...
									    window.location.href="../weather/frmWeather.html";
									  }
								  }).catch(function(error) {
								    // Handle Errors here.
								    var errorCode = error.code;
								    var errorMessage = error.message;
								    alert(errorCode + " " + errorMessage);
								  });
							});
						};
				
				
				
				
				//#################################################################
			  
			 
					//Firebase Login or Logout Status
					firebase.auth().onAuthStateChanged(firebaseUser => 
					{
					if(firebaseUser)
					{
					window.location.href="../weather/frmWeather.html";
					console.log(firebaseUser);
					$("#goLogin").hide();
					$("#btnLogout").show();
					}
					else
					{
					console.log("not logged in");
					$("#goLogin").show();
					$("#btnLogout").hide();
					}
					})
	
			  //Get Elements			  
			  const txtEmail = document.getElementById("txtEmail");
			  const txtPassword = document.getElementById("txtPassword");
			  const btnLogin = document.getElementById("btnLogin");
			  const btnSignUp= document.getElementById("btnSignUp");
			  const btnLogout = document.getElementById("btnLogout");
			  
			  
			  
			  //Add Login Event
			  btnLogin.addEventListener("click", e=>
			  {

				  if (!firebase.apps.length)
				  {				             
		        	  firebase.initializeApp(config);
		       	  }
				  //Get email and pass
				  const email = txtEmail.value;
				  const pass = txtPassword.value;
				  const auth = firebase.auth();
				  
				  
				  //Sign in
				  const promise = auth.signInWithEmailAndPassword(email, pass);  
				  
				  promise
				  //.then(e=> $.mobile.changePage("../weather/frmWeather.html",{transition:"flip"}))
				  .then(e=> window.location.href="../weather/frmWeather.html")
				  .catch(e => alert("계정정보를 확인해 주세요.")); 

			  });
			  

		}());











