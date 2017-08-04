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
			  
			 
					//Firebase Login or Logout Status
					firebase.auth().onAuthStateChanged(firebaseUser => 
					{
					if(firebaseUser)
					{
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
				  .then(e=> window.location.href="../weather/frmWeather.html" )
				  //.then(e=> $.mobile.changePage("../weather/frmWeather.html",{transition:"flip"}))
				  .catch(e => alert("계정정보를 확인해 주세요.")); 

			  });
			  

		}());











