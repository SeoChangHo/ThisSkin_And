(function()
		{	
	var PushPermission = "On";
	
	if(localStorage.getItem("PushVal")!=null);
	{
		PushPermission = localStorage.getItem("PushVal");
	}
	
	$("#switch").val(PushPermission);
	
	
	//서창호 팀장///////////
	var height = (window.innerHeight*0.75).toFixed(0);
	var slider = (window.innerWidth*0.25).toFixed(0);
	$("#SetService").click(function()
			{
				$.mobile.changePage('Appinfo.html' ,{transition:"pop"});
			});
	
	$("#settingmain").css("height", height);
	
	$(".slider").css({left: slider*3 + "px"});
	
	$("#SetFineinsight").click(function(){
		try{
		FCMPlugin.getToken(function(token){
		    alert(token);
		});
		}
		catch(e)
		{
			alert(e.message);
		}
//		try{
//		console.log("진동");
//		cordova.InAppBrowser.open('http://www.fineinsight.kr', '_blank', 'location=yes');
//
//		}
//		catch(e)
//		{
//			alert(e.message);
//		}
	});

	
	
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
		
		
		 const messaging = firebase.messaging();
		  messaging.requestPermission()
		  .then(function()
		  {
			  console.log("Have Permission");
			  return messaging.getToken();
		  })
		  .then(function(token)
		  {
			 localStorage.setItem('myToken' , token);
		  })
		  .catch(function(err)
		  {
			  console.log("error Occured");
		  });
		  
//		  FCMPlugin.getToken(
//				  function(token){
//					  localStorage.setItem('myToken' , token);
//				  },
//				  function(err){
//					console.log('error retrieving token: ' + err);
//				  }
//				  );
		  

		
		$("#switch").change(function()
				{
					localStorage.setItem('PushVal',$("#switch").val())
					
					var topic = $("#switch").val();
					var token = localStorage.getItem('myToken');
					console.log(token);
					console.log(topic);
					
					fetch('https://iid.googleapis.com/iid/v1/'+token+'/rel/topics/'+topic, {
				    method: 'POST',
				    headers: new Headers({
				      'Authorization': 'key=AAAAO1tLuEk:APA91bFGCBJ8ChOxCMTafDVMYRX8XNswaLjMABWO4jHW83bDocRG4deTekdd0zlvL7ODcMyrY3wKwCTDpy4Bv2KnoYwjufMS81dLdvWenejZW_9P3IDZh1t0tQsDnIxGWtI-NoN5XJew'
				    })
				}).then(response => {
				    if (response.status < 200 || response.status >= 400) {
				    	console.log(response.text());
				        throw 'Error subscribing to topic: '+response.status + ' - ' + response.text();
				      }
				      console.log('Subscribed to "'+topic+'"');
				    }).catch(error => {
				      console.error(error);
				    })
				})
		
		}
());




