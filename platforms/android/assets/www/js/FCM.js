
		var config = {
				apiKey: "AIzaSyA0KOFph4tqOmUmFj4zPV3KTms2tjDB1Ig",
			    authDomain: "thisskin-ebdc9.firebaseapp.com",
			    databaseURL: "https://thisskin-ebdc9.firebaseio.com",
			    projectId: "thisskin-ebdc9",
			    storageBucket: "thisskin-ebdc9.appspot.com",
			    messagingSenderId: "254934759497"
			  };
			  firebase.initializeApp(config);

			  
			  const messaging = firebase.messaging();
			  messaging.requestPermission()
			  .then(function()
			  {
				  console.log("Have Permission");
				  return messaging.getToken();
			  })
			  .then(function(token)
			  {
				  firebase.database().ref(token).set
				  (
					{
						token
					}	  
				  )
				  console.log(token);
			  })
			  .catch(function(err)
			  {
				  console.log("error Occured");
			  })
			  
			  messaging.onMessage(function(payload)
			  {
				  console.log('onMessage: ', payload);
			  })
			  
			  
			  
			  