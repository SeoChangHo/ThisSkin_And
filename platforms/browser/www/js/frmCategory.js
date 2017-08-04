(function()
		{	
			PreLoad();
			
			var headersection = ((window.innerHeight*0.10).toFixed(0));
			var slider = (window.innerWidth*0.25).toFixed(0);
			$(".slider").css({left: slider + "px"});
			
			$("#frmHeader").css("height",headersection);
			$("#category").children().click(getArticle);
			
			$(document).on("pageshow","#PageCategory",function(){
				document.addEventListener("deviceready", onDeviceReady, false);
			});
			
			$(document).on("pageshow","#PageSkininfo",function(){
				document.removeEventListener("backbutton", onBackKeyDown, false);
			});

		}());

function onDeviceReady() {
    document.addEventListener("backbutton", onBackKeyDown, false);
}

function onBackKeyDown(){
	navigator.notification.confirm('앱을 종료하시겠습니까?', onBackKeyDownMsg, '이런피부', '취소, 종료');
}

function onBackKeyDownMsg(button) {
    if(button == 2) {
        navigator.app.exitApp();
    }
}

function PreLoad()
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
	var categorytype ="head"

	  // Get Elements
	  const preObject = document.getElementById('articleView');

	  // Create references
	  const dbRefObject = firebase.database().ref().child('Category');
	  const dbRefList =  dbRefObject.child(categorytype);

	  dbRefList.on('child_added', snap =>
	  {  
		  document.getElementById('articleView').innerHTML+=
  	   		"<li id="+snap.key+" class='listmenu' style='display:none'>"
  	      				+"<div class='divlist1'>"+snap.child('Title').val()+"</div>"
  	      	+"</li>"
	      
  	  $(".divlist img").css("height", (window.innerHeight*0.17).toFixed(0));
	    

	  })
	  

	  

}

var getArticle = function()
	{
    		var SelectType = this.id;
    		
    		
    		$("#articleView").empty();
    		
    		console.log(SelectType);
    		
    		$("#setCategory").val(SelectType);  
    		$("#isClick").val("true");

         $.mobile.changePage("#PageSkininfo", {transition:"slide"});

    		  


    			  var categorytype =$("#setCategory").val();
    			  


    			  // Get Elements
    			  const preObject = document.getElementById('articleView');
    		  
    			  // Create references
    			  const dbRefObject = firebase.database().ref().child('Category');
    			  const dbRefList =  dbRefObject.child(categorytype);
    			  var count = 0;
 
    			  dbRefList.on('child_added', snap =>
    			  {  
    				 count++;
    				 console.log(snap.key)
    				  $("#loadIMG").show();
    				  document.getElementById('articleView').innerHTML+=
    	        	   		"<li id="+snap.key+" class='listmenu'>"
			    	        	   			+"<div class='divlist'>"
			    	        	   			+"<img src="+snap.child('ImgMain').val()+" width='100%' style='border-radius: 5%' />"
			    	      	  			+"</div>"
			    	      				+"<div class='divlist1'>"+snap.child('Title').val()+"</div>"
			    	      				+"<div class='divlist2'>"+snap.child('Tag').val()+"</div>"
			    	      	+"</li>"
			    	      	
			    	  $(".divlist img").css("height", (window.innerHeight*0.17).toFixed(0));
    		  	      
		    	      $("#articleView").listview("refresh");
		    	      
		    	      
		  
		    	      
		    	      ArticleListClick(count);
		    	      
		    	      $("#loadIMG").hide(); 
    		
    		  })
    		  
    		  
    		  dbRefList.on('child_changed', snap =>
    		  {
    			  const liChanged = document.getElementById(snap.key);
    			  
    			  liChanged.innerHTML =
    				  "<div class='divlist'>"
      	   			+"<img src="+snap.child('ImgMain').val()+" width='100%'/>"
    	  			+"</div>"
    				+"<div class='divlist1'>"+snap.child('Title').val()+"</div>"
    			  +"<div class='divlist2'>"+snap.child('Tag').val()+"</div>";
    	      	
    			  $(".divlist img").css("height", (window.innerHeight*0.17).toFixed(0));
    	      	$("#articleView").listview("refresh");
    		  })
    		  
    		  dbRefList.on('child_removed', snap =>
    		  {
    			  const liRemoved = document.getElementById(snap.key);
    			  
    			 liRemoved.remove();
    		  })

    	}


      

function ArticleListClick(count)
{
	
	$("#articleView").children().click(function()
			{
		

				var type = $("#setCategory").val();
		
		
				var seq=this.id;
				
				console.log(type);
				console.log(seq);
				
	
		        $.mobile.changePage("#PageArticle", {transition:"slideup"});
		        
		      //Get Elements  
		  	  const preObject = document.getElementById('articleLoad');
		  	  const preTitle = document.getElementById('articleTitle');
		  	 

		  	  
		  	  //Create references
		  	  const dbRefObject = firebase.database().ref().child('Category');
		  	  const dbRefList =  dbRefObject.child(type);
		  	  
		  	  var random = Math.random() * (1000 - (1000-count)) + (1000-count);
		  	  var realrandom = Math.floor(random) + 1;
		  	  console.log(count +"카운트구여" + realrandom+"번하단");
		  	  
		  	  dbRefList.on('value', snap =>
		  	  {  
		  		  if(realrandom==seq){
		  			  if(realrandom==1000){
		  				realrandom--;
		  			  }else{
		  				realrandom++;
		  			  }
		  		  }
		  		  
		  		  preObject.innerHTML = "<Img src="+snap.child(seq).child('ImgTitle').val()+" width=100%> <br><br>"+snap.child(seq).child('Remark').val()+"<br><br><div id=gogosing><Img src="+snap.child(realrandom).child('ImgBottom').val()+" width=100%></div>";
		  		  preTitle.innerText = snap.child(seq).child('Title').val();
		  		  ArticleListClick2(type, realrandom, count);
		  		  //<Img src="+snap.child(seq).child('ImgBottom').val()+" width=100%>
		  	  })
		  	  
		  	  
		  	    firebase.auth().onAuthStateChanged(firebaseUser => 
		  	    	{

		  	    		if(firebaseUser)
		  	    		{
		  	    		try{
		  	    			//즐겨찾기 여부 확인
		  	    			const isFavorite = firebase.database().ref().child('Favorite').child(firebaseUser.uid).child(type).child(seq);
		  	    			
		  	    			isFavorite.on('value', snapcount =>
		  	    			{
		  	    				var btn = document.getElementById("FavoriteTest");
		  	    				var btn2= document.getElementById("FavoriteTest");
		  	    				
		  	    				var count = snapcount.numChildren();
		  	    				if(count==0)
		  	    					{ 
		  	    						$("#FavoriteTest").html("<img src='../img/bookmark1.png' width='100%'>");
		  	    						
				  	    				//즐겨찾기 버튼 클릭
		  	    						
		  	    						btn.onclick = function()
		  			  	  				{
			  			  	  		  		var uid = firebaseUser.uid;
			  			  	  		  		firebase.database().ref().child("Favorite").child(uid).child(type).child(seq).set(
			  			  	  		  				{  					
			  			  	  		  						seq
			  			  	  		  				});	
			  			  	  				console.log("글이 즐겨찾기에 등록되었습니다.");
			  			  	  			$("#FavoriteTest").html("<img src='../img/bookmark2.png' width='100%'>");
			  			  	  				}
		  	    						
		  	    						
//		  			  	  		  	$("#FavoriteTest").click()
		  			  	  				
		  	    					}
		  	    				else if(count==1)
		  	    					{
		  	    					$("#FavoriteTest").html("<img src='../img/bookmark2.png' width='100%'>");
		  	    					
		  	    				
		  	    					btn2.onclick = function()
	  			  	  				{
		  			  	  		  		var uid = firebaseUser.uid;
		  			  	  		  		firebase.database().ref().child("Favorite").child(uid).child(type).child(seq).remove();	
		  			  	  				console.log("글이 즐겨찾기에서 삭제되었습니다.");
		  			  	  			$("#FavoriteTest").html("<img src='../img/bookmark1.png' width='100%'>");

		  			  	  			}
		  	    					
//		  	    					$("#FavoriteTest").click()		  
		  	    					}
		  	    			});
		  	    		}
		  	    		catch(e)
		  	    		{
		  	    			alert(e.message);
		  	    		}
		  	    		}
		  	    		else
		  	    		{	  	    			
		  	    			$("#FavoriteTest").hide();
//		  	    			$("#FavoriteTest").click(function()
//				  	  				{
//			  	    			console.log("즐겨찾기는 로그인이 필요한 서비스 입니다.");  		
//				  	  				})
//		  	    			$("#FavoriteTest").click(function(){
//		  	    				alert("즐겨찾기는 로그인이 필요한 서비스 입니다.");
//		  	    			})
		  	    		}
		  	    	})

			});
}

function ArticleListClick2(clicktype, clicknum, count)
{
	$("#gogosing").click(function()
			{
				var type=clicktype;
				var seq=clicknum;
				
				console.log(type);
				console.log(seq);			
	
		        $.mobile.changePage("#PageArticle", {transition:"slidup"});
		        $('html, body').animate({scrollTop:0}, 400);
		        
		      //Get Elements  
		  	  const preObject = document.getElementById('articleLoad');
		  	  const preTitle = document.getElementById('articleTitle');
		  	 

		  	  
		  	  //Create references
		  	  const dbRefObject = firebase.database().ref().child('Category');
		  	  const dbRefList =  dbRefObject.child(type);
		  	  
		  	  var random = Math.random() * (1000 - (1000-count)) + (1000-count);
		  	  var realrandom = Math.floor(random) + 1;
		  	  console.log(count +"카운트구여" + realrandom+"번하단");
		  	  
		    
		  	  dbRefList.on('value', snap =>
		  	  {  
		  		 if(realrandom==seq){
		  			  if(realrandom==1000){
		  				realrandom--;
		  			  }else{
		  				realrandom++;
		  			  }
		  		  }
		  		 
		  		  preObject.innerHTML = "<Img src="+snap.child(seq).child('ImgTitle').val()+" width=100%> <br><br>"+snap.child(seq).child('Remark').val()+"<br><br><div id=gogosing><Img src="+snap.child(realrandom).child('ImgBottom').val()+" width=100%></div>";
		  		  preTitle.innerText = snap.child(seq).child('Title').val();
		  		  ArticleListClick2(type, realrandom, count);
		  	  })	  	  
		  	  
		  	    firebase.auth().onAuthStateChanged(firebaseUser => 
		  	    	{

		  	    		if(firebaseUser)
		  	    		{
		  	    		try{
		  	    			//즐겨찾기 여부 확인
		  	    			const isFavorite = firebase.database().ref().child('Favorite').child(firebaseUser.uid).child(type).child(seq);
		  	    			
		  	    			isFavorite.on('value', snapcount =>
		  	    			{
		  	    				var btn = document.getElementById("FavoriteTest");
		  	    				var btn2= document.getElementById("FavoriteTest");
		  	    				
		  	    				var count = snapcount.numChildren();
		  	    				if(count==0)
		  	    					{ 
		  	    					$("#FavoriteTest").html("<img src='../img/bookmark1.png' width='100%'>");
		  	    						
				  	    				//즐겨찾기 버튼 클릭
		  	    						
		  	    						btn.onclick = function()
		  			  	  				{
			  			  	  		  		var uid = firebaseUser.uid;
			  			  	  		  		firebase.database().ref().child("Favorite").child(uid).child(type).child(seq).set(
			  			  	  		  				{  					
			  			  	  		  						seq
			  			  	  		  				});	
			  			  	  				console.log("글이 즐겨찾기에 등록되었습니다.");
			  			  	  			$("#FavoriteTest").html("<img src='../img/bookmark2.png' width='100%'>");
			  			  	  				
			  			  	  				
			  			  	  				}
		  	    			
		  			  	  				
		  	    					}
		  	    				else if(count==1)
		  	    					{
		  	    					$("#FavoriteTest").html("<img src='../img/bookmark2.png' width='100%'>");
		  	    					
		  	    				
		  	    					btn2.onclick = function()
	  			  	  				{
		  			  	  		  		var uid = firebaseUser.uid;
		  			  	  		  		firebase.database().ref().child("Favorite").child(uid).child(type).child(seq).remove();	
		  			  	  				console.log("글이 즐겨찾기에서 삭제되었습니다.");
		  			  	  			$("#FavoriteTest").html("<img src='../img/bookmark1.png' width='100%'>");
		  			  	  				}	  	    					  
		  	    					} 	    				
		  	    			});
		  	    		}
		  	    		catch(e)
		  	    		{
		  	    			alert(e.message);
		  	    		}
		  	    		}
		  	    		else
		  	    		{	  	    			
			  	    			$("#FavoriteTest").hide();		  	  				 
		  	    		}
		  	    	})
			});
}
			



$(document).ready(function()
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
})