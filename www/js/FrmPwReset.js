(function()
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
			  
			  const txtEmail = document.getElementById("UserEmail");
			  const btnReset = document.getElementById("PwReset");
			  
			  var auth = firebase.auth();
			  
			  
			  //btnReset Click
			  btnReset.addEventListener("click", e =>
			  {
				  var email = txtEmail.value;
				  auth.sendPasswordResetEmail(email).then(function() {
					  alert (email +" 계정으로 비밀번호 재설정 이메일이 전송되었습니다.");
					}, function(error)
					{
						alert("계정정보가 없습니다.");
					});
			  })
		}());











