importScripts('https://www.gstatic.com/firebasejs/4.1.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.1.3/firebase-messaging.js'); 

var config = {
	    apiKey: "AIzaSyC7dacxlfyO_LqZ5qhzrEeIM7naGo9iveY",
	    authDomain: "thisskin-67466.firebaseapp.com",
	    databaseURL: "https://thisskin-67466.firebaseio.com",
	    projectId: "thisskin-67466",
	    storageBucket: "thisskin-67466.appspot.com",
	    messagingSenderId: "82536860167"
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