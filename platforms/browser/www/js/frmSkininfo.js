//(function() { 
//	  
//	  const config = {
//        		   apiKey: "AIzaSyA0KOFph4tqOmUmFj4zPV3KTms2tjDB1Ig",
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
//	  console.log("start");
//	  
//	  console.log($("#isClick").val());
//	  
//	  
//	  if($("#isClick").val()=="true")
//	  {
//		  
//		  console.log($("#isClick").val());
//		  
//	  
//		var categorytype =$("#setCategory").val();
//
//		console.log(categorytype);
//	  
//
//	  
//	  //Get Elements  
//	  const preObject = document.getElementById('articleView');
//	 
//
//	  
//	  //Create references
//	  const dbRefObject = firebase.database().ref().child('Category');
//	  const dbRefList =  dbRefObject.child(categorytype);
//	  
//	  
//	  
//	  
//	  
//	  dbRefList.on('child_added', snap =>
//	  {  
//		  document.getElementById('articleView').innerHTML+=
//        	   	"<li id="+snap.child('id').val()+">"
//      	   		+"<a href ='#' >"
//      	   			+"<img src="+snap.child('ImgSrc1').val()+" height='100%'/>"
//      	  			+"<h3>"+snap.child('Title').val()+"</h3>"
//      				+"<p>"+snap.child('MiniTitle').val()+"</p>"
//      			+"</a>"
//      	+"</li>"
//      	
//      $("#articleView").listview("refresh");
//      ArticleListClick();
//	  })
//	  
//	  dbRefList.on('child_changed', snap =>
//	  {
//		  const liChanged = document.getElementById(snap.child('id').val());
//		  
//		  liChanged.innerHTML = 
//			"<a href ='#' >"
//      	   			+"<img src="+snap.child('ImgSrc1').val()+" height='100%'/>"
//      	  			+"<h3>"+snap.child('Title').val()+"</h3>"
//      				+"<p>"+snap.child('MiniTitle').val()+"</p>"
//      			+"</a>"
//      	
//      	$("#articleView").listview("refresh");
//	  })
//	  
//	  dbRefList.on('child_removed', snap =>
//	  {
//		  const liRemoved = document.getElementById(snap.child('id').val());
//		  
//		 liRemoved.remove();
//	  })
//	  
//	  }
//	 
//
//}());
//
//function ArticleListClick()
//{
//	
//	$("#articleView").children().click(function()
//			{
//		
//		var thishref = location.href
//		var temp  = thishref.split("?");
//		var data = temp[1].split("=");
//		var categorytype = data[1];		
//		
//		
//				var SelectSeq=this.id;
//				
//				console.log(SelectSeq);
//	
//		        $.mobile.changePage("../article/frmarticle.html?Categotytype="+categorytype+"&SelectSeq="+SelectSeq, {transition:"slideup"});
//			});
//}
