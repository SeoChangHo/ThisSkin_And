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

				
           	const JoinSuccess = document.getElementById("JoinSuccess");
           	
           	JoinSuccess.addEventListener("click", e =>
   			  {
   	   			  if (!firebase.apps.length)
   	   			  {				  
   	           		  firebase.initializeApp(config);
   	          	  }
   	   			  
   				//Get email and pass
   				  var email = $("#txtEmail").val();
   				  var pass = $("#txtPassword").val();
   				  var pass2 = $("#txtPassword").val();
   				  var auth = firebase.auth();
   				  
   				  if(pass!=pass2)
   					  {
   					  alert("비밀번호 중복체크를 확인해주세요.");
   					  return;
   					  }
   				  
   				  
   				  //Sign in
   				
   				  
   				  const promise = auth.createUserWithEmailAndPassword(email, pass);  
   				  
   				  promise
   				  .then(e => joinOK())
   				  .catch(e => 
   				  {
					  if(e.code=="auth/invalid-email")
						  {
						  alert("이메일 형식을 확인해 주세요");
						  }
					  else if(e.code=="auth/weak-password")
						  {
						  alert("비밀번호는 6자리 이상으로 설정해주세요.");
						  }
					  else if(e.code=="auth/email-already-in-use")
					  	{
					  alert("이미 등록된 계정입니다.");
					  	}
					  else
						  {
						  console.log(e);
						  }
   				  }
					  ); 
   			  })
		}());

function joinOK()
{
	alert("회원가입이 완료되었습니다.");
	window.location.href="../weather/frmWeather.html";
}