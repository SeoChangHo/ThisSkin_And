(function()
		{
	$("#loadIMG").hide();
	
	var headersection = ((window.innerHeight*0.10).toFixed(0));
	var slider = (window.innerWidth*0.25).toFixed(0);
	
	$("#frmHeader").css("height",headersection);
	$(".slider").css({left: slider*2 + "px"});
	
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
	 
			firebase.auth().onAuthStateChanged(firebaseUser => 
			{
				if(firebaseUser)
				{						
					const userFavorite = firebase.database().ref().child('Favorite/'+firebaseUser.uid);
					userFavorite.on('child_added', snap =>
					{			
						$("#loadIMG").show();
						const userFavoriteSeq = firebase.database().ref().child('Favorite/'+firebaseUser.uid).child(snap.key);				
						userFavoriteSeq.on('child_added', snapseq =>
						{		
							
							const FavoriteArticle = firebase.database().ref().child('Category').child(snap.key).child(snapseq.key);
							FavoriteArticle.on('value', snapArticle =>
							{
								var isExist = document.getElementById(snapArticle.child('id').val()+"_"+snap.key);
								if(isExist==null)
									{

				    				  document.getElementById('FavoriteView').innerHTML+=
				    	        	   		"<li id="+snapArticle.key+"_"+snap.key+">"
					    	      				+"<div class='divlist'>"
				    	        	   			+"<img src="+snapArticle.child('ImgMain').val()+" width='100%' style='border-radius: 5%' />"
				    	        	   			+"</div>"
				    	        	   			+"<div class='divlist1'>"+snapArticle.child('Title').val()+"</div>"
				    	        	   			+"<div class='divlist2'>"+snapArticle.child('Tag').val()+"</div>"
				    	        	   	   +"</li>"			 
				    	      			
				    	          $(".divlist img").css("height", (window.innerHeight*0.17).toFixed(0));
					    	      $("#FavoriteView").listview("refresh");
									}  
								
								$("#loadIMG").hide();
				    	      ArticleListClick();
							});	
							

				    		  });
	    				  userFavoriteSeq.on('child_removed', snapRemove =>
			    		  {
			    			  const liRemoved = document.getElementById(snapRemove.key+"_"+snap.key);
			    			  
			    			  if(liRemoved!=null)
			    			 {
			    			 liRemoved.remove();
			    			 }
						});
					});
				}
				else
				{
				  	  var msg = "즐겨찾기는 로그인 후 <br> 이용할 수 있습니다.";
				  	  
				  	  toast(msg);
				  	  
				  	$("#FavoriteView li").remove();
				  	  
				}
			})}())
			
function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

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

			
function ArticleListClick()
{
	$("#FavoriteView").children().click(function()
			{
				var splitval = this.id;
				var splitarray = splitval.split("_");
				var type=splitarray[1];
				var seq=splitarray[0];
				
				console.log(type);
				console.log(seq);			
	
		        $.mobile.changePage("#PageArticle", {transition:"slideup"});
		        
		      //Get Elements  
		  	  const preObject = document.getElementById('articleLoad');
		  	  const preTitle = document.getElementById('articleTitle');
		  	 

		  	  
		  	  //Create references
		  	  const dbRefObject = firebase.database().ref().child('Category');
		  	  const dbRefList =  dbRefObject.child(type);
		  	  
		    
		  	  dbRefList.on('value', snap =>
		  	  {  
		  		  preObject.innerHTML = "<Img src="+snap.child(seq).child('ImgTitle').val()+" width=100%> <br><br>"+snap.child(seq).child('Remark').val();
		  		  preTitle.innerText = snap.child(seq).child('Title').val();
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
		  	    			$("#FavoriteTest").click(function()
				  	  				{
			  	    			console.log("즐겨찾기는 로그인이 필요한 서비스 입니다.");  		
				  	  				})
				 
		  	    		}
		  	    	})
			});
}
			
			
			
			
function toast(msg){
	$("<div class='ui-loader ui-overlay-shadow ui-body-e ui-corner-all'><h3>"+msg+"</h3></div>")
	.css({ display: "block", 
		opacity: 0.5, 
		position: "fixed",
		padding: "7px",
		"text-align": "center",
		width: "270px",
		background: "white",
		left: ($(window).width() - 284)/2,
		top: window.innerheight/2 })
	.appendTo( $("#FavoriteView") ).delay( 1500 )
	.fadeOut( 400, function(){
		$(this).remove();
		
		
		
	});
}
			
			
			
			
			
			
			
			