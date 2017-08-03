//(function() { 
//	  
//	  const config = {
//        		    apiKey: "AIzaSyA0KOFph4tqOmUmFj4zPV3KTms2tjDB1Ig",
//    authDomain: "thisskin-ebdc9.firebaseapp.com",
//    databaseURL: "https://thisskin-ebdc9.firebaseio.com",
//    projectId: "thisskin-ebdc9",
//    storageBucket: "thisskin-ebdc9.appspot.com",
//    messagingSenderId: "254934759497"
//	  };
//	  if (!firebase.apps.length) {
//	  firebase.initializeApp(config);
//	  }
//	  
//		var one = location.href
//		var two  = one.split("?");
//		var three= two[1].split("&");
//		var four = three[0].split("=");
//		var five = three[1].split("=");
//		
//		var type = four[1];
//		var seq = five[1];
//		
//		console.log(type);
//		console.log(seq);
//	  
//
//	  
//	  //Get Elements  
//	  const preObject = document.getElementById('articleLoad');
//	  const preTitle = document.getElementById('articleTitle');
//	 
//
//	  
//	  //Create references
//	  const dbRefObject = firebase.database().ref().child('Category');
//	  const dbRefList =  dbRefObject.child(type);
//	  
//  
//	  dbRefList.on('value', snap =>
//	  {  
//		  preObject.innerHTML = snap.child('Article'+seq).child('Remark').val()
//		  preTitle.innerText = snap.child('Article'+seq).child('Title').val()
//	  })
//}());


		//$(document).on("pagebeforeshow", init);
	  









