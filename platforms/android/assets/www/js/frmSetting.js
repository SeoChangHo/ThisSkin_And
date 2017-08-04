(function()
		{	
	var height = (window.innerHeight*0.75).toFixed(0);
	var slider = (window.innerWidth*0.25).toFixed(0);
	$("#SetService").click(function()
			{
				$.mobile.changePage('Appinfo.html' ,{transition:"pop"});
			});
	
	$("#settingmain").css("height", height);
	
	$(".slider").css({left: slider*3 + "px"});
	
	$(".ssset4").click(function(){
		cordova.InAppBrowser.open('https://play.google.com/store/apps/details?id=com.phonegap.ThisSkin', '_blank', 'location=yes');
	});
	
	
	if(localStorage.getItem('PushVal')!=null)
		{
			$("#switch").val(localStorage.getItem('PushVal'));
		}
	else
	{
		$("#switch").val("On");
	}
	
	$("#SetFineinsight").click(function(){
		
		cordova.InAppBrowser.open('http://www.fineinsight.kr', '_blank', 'location=yes');
	});
	
	$("#SetInfo").click(function(){
		
		cordova.InAppBrowser.open('https://thisskin-android.firebaseapp.com/imformation/FineInsight.html', '_blank', 'location=yes');
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
		
		

		
		$("#switch").change(function()
				{
			if($("#switch").val()=="On")
				{
				try{
					localStorage.setItem('PushVal',$("#switch").val());
					//window.FirebasePlugin.subscribe($("#switch").val());

					
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
			}
			catch(e)
			{
				alert(e.message);
			}
								
				}
			else
			{
				try
				{
					var topic = "On";
					var token = localStorage.getItem('myToken');
					localStorage.setItem('PushVal',$("#switch").val());
					
					fetch('https://iid.googleapis.com/iid/v1:batchRemove', {
					    method: 'POST',
					    headers: new Headers({
					    	'Authorization': 'key=AAAAO1tLuEk:APA91bFGCBJ8ChOxCMTafDVMYRX8XNswaLjMABWO4jHW83bDocRG4deTekdd0zlvL7ODcMyrY3wKwCTDpy4Bv2KnoYwjufMS81dLdvWenejZW_9P3IDZh1t0tQsDnIxGWtI-NoN5XJew'
					    }),
					    body: JSON.stringify({
					    	   "to": "/topics/On",
					    	   "registration_tokens": [""+token+""]
						})
					}).then(response => {
					    if (response.status < 200 || response.status >= 400) {
					    	console.log(response.text());
					        throw 'Error subscribing to topic: '+response.status + ' - ' + response.text();
					      }
					      console.log('UnSubscribed to "'+topic+'"');
					    }).catch(error => {
					      console.error(error);
					    })
					
					
				}
				catch(e)
				{
					alert(e.message);
				}
			}
			
				})
		
		}
());

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


