importScripts('https://www.gstatic.com/firebasejs/4.1.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.1.3/firebase-messaging.js'); 

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
	  
	  messaging.setBackgroundMessageHandler(function(payload)
		  {
		  const title = "Hello World";
		  const options = 
			  {
				  body: payload.data.status
			  };
		  return selt.registration.showNotification(title, options);
		  });