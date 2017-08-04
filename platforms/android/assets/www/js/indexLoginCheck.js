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
//  try{
//  const messaging = firebase.messaging();
//    messaging.requestPermission()
//    .then(function()
//    		{
//    			console.log('Have Permission');
//    			return messaging.getToken();
//    		}) 
//    	.then(function(token)
//    		{
//    			console.log(token);
//    		})
//    	.catch(function(err)
//    		{
//    				console.log('Err Occured');
//    		})
//    messaging.onMessage(function(playload)
//    		{
//    			colole.log("onMessage: " , playload);
//    		})
//  }
//  catch(e)
//  {
//	  alert(e.message);
//  }
  
					try{
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
//						const con_goLogin = document.getElementById("goLogin");
//						const con_btnLogout = document.getElementById("btnLogout");
//  
//  
//						//Login Click
//						con_goLogin.addEventListener("click", e =>
//						{
//						location.href = "login/loginSelect.html"
//						})
//  
//  
//						//Logout Click
//						con_btnLogout.addEventListener("click", e=>
//						{
//						firebase.auth().signOut();
//						})
					}
					catch(e)
					{
							console.log(e.message);
					}
		}());