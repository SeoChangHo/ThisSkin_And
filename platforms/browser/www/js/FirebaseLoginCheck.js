(
		function()
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
			
			  const con_btnLogout = document.getElementById("btnLogout");
			  const con_goLogin = document.getElementById("goLogin");
			  
			    //Logout Click
			    con_btnLogout.addEventListener("click", e=>
			    {    	
					if (!firebase.apps.length)
					{                               
						firebase.initializeApp(config);
					}
			  	  firebase.auth().signOut();
			  	  $("[data-role=panel]").panel("close");
			  	  
			  	  var msg = "로그아웃되었습니다.";
			  	  
			  	  toast(msg);
			  	
			    })
			    
			    		    //Login Click
			    con_goLogin.addEventListener("click", e =>
			    {
				   location.href = "../login/loginSelect.html"
				})
				
				
  //Firebase Login or Logout Status
  firebase.auth().onAuthStateChanged(firebaseUser => 
  {
		if (!firebase.apps.length)
		{                               
			firebase.initializeApp(config);
		}
		
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
}());



function toast(msg){

		$("<div class='ui-loader ui-overlay-shadow ui-body-e ui-corner-all'><h3>"+msg+"</h3></div>")
		.css({ display: "block", 
			opacity: 0.9, 
			position: "fixed",
			padding: "7px",
			"text-align": "center",
			width: "270px",
			background: "white",
			left: ($(window).width() - 284)/2,
			top: window.innerheight/2 })
		.appendTo( $.mobile.pageContainer ).delay( 1500 )
		.fadeOut( 400, function(){
			$(this).remove();
		});
	}
