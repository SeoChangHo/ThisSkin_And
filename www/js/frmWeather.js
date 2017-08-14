$(document).ready(function(){
	
	var headersection = ((window.innerHeight*0.08).toFixed(0));
	var mainsection = ((window.innerHeight*0.50).toFixed(0));
	var item = ((window.innerHeight*0.18).toFixed(0));
	var slider = (window.innerWidth*0.25).toFixed(0);
	var mainwidth = (window.innerWidth*0.7).toFixed(0); 
	
	
	if(window.innerHeight <= 568){
		mainsection = ((window.innerHeight*0.45).toFixed(0));
		item = ((window.innerHeight*0.17).toFixed(0));
		$(".ondo").css("font-size","0.7em");
		$(".ondo1").css("font-size","1.6em");
		$(".ondo2").css("font-size","0.7em");
		
		$(".subdo").css("font-size","0.7em");
		$(".subdo1").css("font-size","1.6em");
		$(".subdo2").css("font-size","0.7em");
		
		$(".mise").css("font-size","0.7em");
		$(".mise1").css("font-size","1.6em");
		$(".mise2").css("font-size","0.6em");
	}
	
	$("#frmHeader").css("height",headersection);
	$("#mainsection").css("height", mainsection);
	$(".item").css("height",item);
	$(".slider").css({left: "0px"});
	$("#mapSection").css("width",mainwidth);
	
	loadPost();
	
	$("#owl-demo").owlCarousel({
		 
	      autoPlay: 9000, //Set AutoPlay to 3 seconds
	      
	      items : 2,
	      itemsTablet: [ window.innerWidth, 2], //2 items between 600 and 0;
	      itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
	  });

	$("#sido").change(function(){
		setGugun();
	});
	
	$("#gugun").change(function(){
		
		$.ajax({
		        url:"https://apis.daum.net/local/geo/addr2coord?apikey=b9ab1680e352b1d4c5fe2b578928060e&q=" +$("#sido").val() + " " + $("#gugun").val()+ "&output=json",
		        type: "get",
		        dataType:"jsonp",
		        success:function(data){
		           $(data).each(function(){
		        	   var lat = this.channel.item[0].lat;
		        	   var lng = this.channel.item[0].lng;
		        	   
		        	   weatherSystem(lat, lng, 1);
		           });
		        },
		        error: function(xhr, textStatus, errMsg){
		           alert("<p>" + textStatus + "(HTTP-" + xhr.status + " / " + errMsg + ") </p>");
		        }
		});

});
	
	var setGugun = function(){
		var gugun = document.getElementById("gugun");
		var area = new Array();
		
		   var area1 = ["구/군 선택","강남구","강동구","강북구","강서구","관악구","광진구","구로구","금천구","노원구","도봉구","동대문구","동작구","마포구","서대문구","서초구","성동구","성북구","송파구","양천구","영등포구","용산구","은평구","종로구","중구","중랑구"];
		   var area2 = ["구/군 선택","계양구","남구","남동구","동구","부평구","서구","연수구","중구","강화군","옹진군"];
		   var area3 = ["구/군 선택","대덕구","동구","서구","유성구","중구"];
		   var area4 = ["구/군 선택","광산구","남구","동구","북구","서구"];
		   var area5 = ["구/군 선택","남구","달서구","동구","북구","서구","수성구","중구","달성군"];
		   var area6 = ["구/군 선택","남구","동구","북구","중구","울주군"];
		   var area7 = ["구/군 선택","강서구","금정구","남구","동구","동래구","부산진구","북구","사상구","사하구","서구","수영구","연제구","영도구","중구","해운대구","기장군"];
		   var area8 = ["구/군 선택","고양시","과천시","광명시","광주시","구리시","군포시","김포시","남양주시","동두천시","부천시","성남시","수원시","시흥시","안산시","안성시","안양시","양주시","오산시","용인시","의왕시","의정부시","이천시","파주시","평택시","포천시","하남시","화성시","가평군","양평군","여주군","연천군"];
		   var area9 = ["구/군 선택","강릉시","동해시","삼척시","속초시","원주시","춘천시","태백시","고성군","양구군","양양군","영월군","인제군","정선군","철원군","평창군","홍천군","화천군","횡성군"];
		   var area10 = ["구/군 선택","제천시","청주시","충주시","괴산군","단양군","보은군","영동군","옥천군","음성군","증평군","진천군","청원군"];
		   var area11 = ["구/군 선택","계룡시","공주시","논산시","보령시","서산시","아산시","천안시","금산군","당진군","부여군","서천군","연기군","예산군","청양군","태안군","홍성군"];
		   var area12 = ["구/군 선택","군산시","김제시","남원시","익산시","전주시","정읍시","고창군","무주군","부안군","순창군","완주군","임실군","장수군","진안군"];
		   var area13 = ["구/군 선택","광양시","나주시","목포시","순천시","여수시","강진군","고흥군","곡성군","구례군","담양군","무안군","보성군","신안군","영광군","영암군","완도군","장성군","장흥군","진도군","함평군","해남군","화순군"];
		   var area14 = ["구/군 선택","경산시","경주시","구미시","김천시","문경시","상주시","안동시","영주시","영천시","포항시","고령군","군위군","봉화군","성주군","영덕군","영양군","예천군","울릉군","울진군","의성군","청도군","청송군","칠곡군"];
		   var area15 = ["구/군 선택","거제시","김해시","마산시","밀양시","사천시","양산시","진주시","진해시","창원시","통영시","거창군","고성군","남해군","산청군","의령군","창녕군","하동군","함안군","함양군","합천군"];
		   var area16 = ["구/군 선택","서귀포시","제주시"];
		   
		   if($("#sido").val()=="서울특별시"){
		   	   area = area1;
		   }else if($("#sido").val()=="인천광역시"){
			   area = area2;
		   }else if($("#sido").val()=="대전광역시"){
			   area = area3;
		   }else if($("#sido").val()=="광주광역시"){
			   area = area4;
		   }else if($("#sido").val()=="대구광역시"){
			   area = area5;
		   }else if($("#sido").val()=="울산광역시"){
			   area = area6;
		   }else if($("#sido").val()=="부산광역시"){
			   area = area7;
		   }else if($("#sido").val()=="경기도"){
			   area = area8;
		   }else if($("#sido").val()=="강원도"){
			   area = area9;
		   }else if($("#sido").val()=="충청북도"){
			   area = area10;
		   }else if($("#sido").val()=="충청남도"){
			   area = area11;
		   }else if($("#sido").val()=="전라북도"){
			   area = area12;
		   }else if($("#sido").val()=="전라남도"){
			   area = area13;
		   }else if($("#sido").val()=="경상북도"){
			   area = area14;
		   }else if($("#sido").val()=="경상남도"){
			   area = area15;
		   }else if($("#sido").val()=="제주특별자치도"){
			   area = area16;
		   }
		   
		   gugun.options.length=0;
		   
		for(i=0; i<area.length; i++){
			
			var gugunOption = document.createElement("option");
			gugunOption.text = area[i];
			gugunOption.value = area[i];
			
			gugun.options.add(gugunOption);
		}
	}
	
	$(".ssset4").click(function(){
			cordova.InAppBrowser.open('https://play.google.com/store/apps/details?id=com.phonegap.ThisSkin', '_blank', 'location=yes');
	});

});

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

function loadPost() {
	
	navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

}
	 
function errorCallback(error)
{
    console.log("오류 : " + error.message);
    var lat = 37.40209529907863;
    var lng = 127.10863694633468;
    
    weatherSystem(lat, lng, 0);
}    
	 
function successCallback(position) { 
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        
        weatherSystem(lat, lng, 0);
}

function weatherSystem(latitude, longtitude, gubun){
	var lat = latitude;
	var lng = longtitude;
	$(".messagetext").empty();
    
	$.ajax({
        url:"https://apis.daum.net/local/geo/coord2addr?apikey=b9ab1680e352b1d4c5fe2b578928060e&longitude=" + lng + "&latitude=" + lat + "&inputCoordSystem=WGS84&output=json",
        type: "get",
        dataType:"jsonp",
        success:function(data){
           $(data).each(function(){
        	  var sijuso = this.name1;   //시주소
              var gujuso = this.name2;  //구주소
              var name3 = this.name3; //동주소
              
              $("#mapicon").html("<img src='../img/mapicon.png' width='100%'>");
        	  if(gubun == 0){
        		  $(".location").html(gujuso + " " + name3);
        	  }else if(gubun==1){
        		  $(".location").html(sijuso + " " + gujuso);
        	  }
        	  
        	  var gugugu = encodeURIComponent(gujuso);
        	  
        	  $.ajax({
      	        url:"https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='"+gugugu +", il')&format=json",
      	        type: "get",
      	        dataType:"jsonp",
      	        success:function(data){
      	           $(data).each(function(){
      	              var weather = this.query.results.channel.item.condition.code;    //날씨코드
      	              var weathertext = this.query.results.channel.item.condition.text; //날씨텍스트
      	              var temp = this.query.results.channel.item.condition.temp;    //온도
      	              var high = this.query.results.channel.item.forecast[0].high; //최고온도
      	              var low = this.query.results.channel.item.forecast[0].low; //최저온도
      	              var humidity = this.query.results.channel.atmosphere.humidity;     //습도
      	              
      	            	  
      	              	var summergoondasub = "<img src='../img/message/summergoondasub.gif' id='firstimg' style='width:100%'>";
      	                var summergoonjusub = "<img src='../img/message/summergoonjusub.gif' id='firstimg' style='width:100%'>";
      	                var summerjuondasub = "<img src='../img/message/summerjuondasub.gif' id='firstimg' style='width:100%'>";
      	              	var summerjuonjusub = "<img src='../img/message/summerjuonjusub.gif' id='firstimg' style='width:100%'>";
      	              	var summerrain = "<img src='../img/message/summerrain.gif' id='firstimg' style='width:100%'>";
      	              	var summerhurim = "<img src='../img/message/summerhurim.gif' id='firstimg' style='width:100%'>";
      	              
      	              	
      	              	if(((temp-32)/1.8).toFixed(0) >30){
      	              		if(humidity>60){
      	              			$("#mainimg").html(summergoondasub);
      	              		}else{
      	              			$("#mainimg").html(summergoonjusub);
      	              		}
	            		}else{
	            			if(humidity>60){
	            				$("#mainimg").html(summerjuondasub);
	            			}else{
	            				$("#mainimg").html(summerjuonjusub);
	            			}
	            		}
      	              
      	            	  if(weather<=2){
      	            		  //허리케인
      	            		$(".blist1").html("<img src='../img/weather/thunderrain.png' >");
      	            	  }else if(weather<=4){
      	            		  //번개(근데..거의 구름많은날)
      	            		$(".blist1").html("<img src='../img/weather/mostlycloudy.png' >");
      	            	  }else if(weather<=7){
      	            		  //눈비, 진눈개비
      	            		$(".blist1").html("<img src='../img/weather/snow.png' >");
      	            	  }else if(weather<=8){
      	            		//얼어붙은 이슬비
      	            		$(".blist1").html("<img src='../img/weather/drizzle.png' >");
      	            	  }else if(weather<=10){
      	            		//이슬비
      	            		$(".blist1").html("<img src='../img/weather/drizzle.png' >");
      	            		$("#mainimg").html(summerrain);
      	            	  }else if(weather<=12){
      	            		//소나기
      	            		$(".blist1").html("<img src='../img/weather/shower.png' >");
      	            		$("#mainimg").html(summerrain);
      	            	  }else if(weather<=15){
      	            		//눈돌풍, 눈소나기
      	            		$(".blist1").html("<img src='../img/weather/drizzle.png' >");
      	            	  }else if(weather<=16){
      	            		//눈
      	            		$(".blist1").html("<img src='../img/weather/snow.png' >");
      	            	  }else if(weather<=17){
        	            		//우박
    	            		$(".blist1").html("<img src='../img/weather/drizzle.png' >");
        	              }else if(weather<=18){
      	            		//우박
      	            		$(".blist1").html("<img src='../img/weather/snow.png' >");
          	              }else if(weather<=20){
      	            		//먼지, 흐린
      	            		$(".blist1").html("<img src='../img/weather/mostlycloudy.png' >");
      	            		$("#mainimg").html(summerhurim);
      	            	  }else if(weather<=22){
      	            		//안개, 침침한
      	            		$(".blist1").html("<img src='../img/weather/haze.png' >");
      	            		$("#mainimg").html(summerhurim);
      	            	  }else if(weather<=23){
      	            		//세찬바람
      	            		$(".blist1").html("<img src='../img/weather/cloudwindy.png' >");
      	            	  }else if(weather<=23){
    	            		//바람
    	            		$(".blist1").html("<img src='../img/weather/windy.png' >");
    	            	  }else if(weather<=25){
      	            		//추운
      	            		$(".blist1").html("<img src='../img/weather/cloudy.png' >");
      	            	  }else if(weather<=28){
      	            		//대부분구름
      	            		$(".blist1").html("<img src='../img/weather/mostlycloudy.png' >");
      	            	  }else if(weather<=30){
      	            		//부분구름
      	            		$(".blist1").html("<img src='../img/weather/partlycloudy.png' >");
      	            	  }else if(weather<=31){
      	            		//밤 맑은
      	            		$(".blist1").html("<img src='../img/weather/cloudy.png' >");
      	            	  }else if(weather<=32){
      	            		//sunny
      	            		$(".blist1").html("<img src='../img/weather/sunny.png' >");
      	            	  }else if(weather<=33){
      	            		//맑은(밤)
      	            		$(".blist1").html("<img src='../img/weather/cloudy.png' >");
      	            	  }else if(weather<=34){
        	            	//맑은(낮)
    	            		$(".blist1").html("<img src='../img/weather/fair.png' >");
        	              }else if(weather<=35){
      	            		//비 +헤일
      	            		$(".blist1").html("<img src='../img/weather/rain.png' >");
      	            		$("#mainimg").html(summerrain);
      	            	  }else if(weather<=36){
      	            		//hot
      	            		$(".blist1").html("<img src='../img/weather/sunny.png' >");
      	            	  }else if(weather<=37){
      	            		//뇌우
      	            		$(".blist1").html("<img src='../img/weather/thunder.png' >");
      	            	  }else if(weather<=39){
    	            		//흩어져있는뇌우
    	            		$(".blist1").html("<img src='../img/weather/partlycloudy.png' >");
    	            	  }else if(weather<=40){
      	            		//흩어진 소나기
      	            		$(".blist1").html("<img src='../img/weather/rain.png' >");
      	            	  }else if(weather<=43){
      	            		//눈내리는 소나기 +폭설
      	            		$(".blist1").html("<img src='../img/weather/snow.png' >");
      	            	  }else if(weather<=44){
      	            		//부분적으로 흐린
      	            		$(".blist1").html("<img src='../img/partlycloudy.png' >");
      	            		$("#mainimg").html(summerhurim);
      	            	  }else if(weather<=45){
      	            		//눈소나기
      	            		$(".blist1").html("<img src='../img/weather/thunderrain.png' >");
      	            	  }else if(weather<=46){
      	            		//눈이내리는소나기
      	            		$(".blist1").html("<img src='../img/weather/snow.png' >");
      	            	  }else if(weather<=47){
    	            		//고립된천둥번개
    	            		$(".blist1").html("<img src='../img/weather/thunder.png' >");
    	            	  }
      	            	  
      	            	  $(".ondo").html("현재온도");
      	            	  $(".ondo1").html(((temp-32)/1.8).toFixed(0)+"℃");
      	            	  $(".ondo2").html(((high-32)/1.8).toFixed(0)+"℃/"+((low-32)/1.8).toFixed(0)+"℃");
      	            	  
      	            	$(".subdo").html("현재습도");
      	            	  if(humidity<=30){
      	            		$(".blist3").html("<img src='../img/Humidity/subdo1.png' >");  
      	            	    $(".subdo1").html("빠싹");
        	            	$(".subdo2").html(humidity+"%　");
      	            	  }else if(humidity<=40){
      	            		$(".blist3").html("<img src='../img/Humidity/subdo2.png' >");
      	            		$(".subdo1").html("푸석");
        	            	$(".subdo2").html(humidity+"%　");
      	            	  }else if(humidity<=60){
      	            		$(".blist3").html("<img src='../img/Humidity/subdo3.png' >");
      	            		$(".subdo1").html("촉촉");
        	            	$(".subdo2").html(humidity+"%　");
      	            	  }else if(humidity<=80){
      	            		$(".blist3").html("<img src='../img/Humidity/subdo4.png' >");
      	            		$(".subdo1").html("눅눅");
        	            	$(".subdo2").html(humidity+"%　");
      	            	  }else{
      	            		$(".blist3").html("<img src='../img/Humidity/subdo5.png' >");
      	            		$(".subdo1").html("축축");
        	            	$(".subdo2").html(humidity+"%　");
      	            	  }
      	            	  
      	           });
      	        },
      	        error: function(xhr, textStatus, errMsg){
      	           $("#weather").html("<p>" + textStatus + "(HTTP-" + xhr.status + " / " + errMsg + ") </p>");
      	        }
      	     })
        	  
        	  
           });
        },
        error: function(xhr, textStatus, errMsg){
           $("#juso").html("<p>" + textStatus + "(HTTP-" + xhr.status + " / " + errMsg + ") </p>");
        }
     })
     
     $.ajax({
    	url: "https://api.waqi.info/feed/geo:" + lat +";" + lng +"/?token=c5341d7416d6afdaa504f77aab84acc3c38bb8a8",
        type: "get",
        dataType:"jsonp",
        success:function(data){
           $(data).each(function(){
        	   var mise = this.data.iaqi.pm10.v;
        	   
        	  $(".mise").html("미세먼지");
        	  if(mise <= 30){
        		  $(".mise1").html("좋음");
        		  $(".bblist1").html("<img src='../img/mise/mise1.png' >");
        	  }else if(mise <= 80){
        		  $(".mise1").html("보통");
        		  $(".bblist1").html("<img src='../img/mise/mise2.png' >");
        	  }else if(mise<= 150){
        		  $(".mise1").html("나쁨");
        		  $(".bblist1").html("<img src='../img/mise/mise3.png' >");
        	  }else{
        		  $(".mise1").html("매우나쁨");
        		  $(".bblist1").html("<img src='../img/mise/mise4.png' >");
        	  }

          	  $(".mise2").html("농도:" + mise+"　　");
        	  
        	  
           });
        },
        error: function(xhr, textStatus, errMsg){
           $("#mise").html("<p>" + textStatus + "(HTTP-" + xhr.status + " / " + errMsg + ") </p>");
        }
     })
     
     /*
      $.ajax({
        url:"http://203.247.66.146/iros/RetrieveLifeIndexService/getUltrvLifeList?ServiceKey=DZ2bt4fg7QwJULCmQrMY0R1hRCJ8zNpPGzLWL7s1%2FpI04Ih5gF6ggxbvvBpBkCoYSFlAOccv2kVnMUc7BNMOIw%3D%3D&base_date=20170613&areaNo=1100000000&_type=json",
        type: "get",
        dataType:"json",
        success:function(data){
           $(data).each(function(){
        	   var uv = this.Response.body.indexModel.today; //자외선지수

        	if(uv<=2){
        		$(".wlist_txt4").html("자외선: 낮음");
        		$("<p>").html("자외선낮음").appendTo(".messagetext");
        	}else if(uv<=5){
        		$(".wlist_txt4").html("자외선: 보통");
        		$("<p>").html("자외선보통").appendTo(".messagetext");
        	}else if(uv<=7){
        		$(".wlist_txt4").html("자외선: 높음");
        		$("<p>").html("자외선높음").appendTo(".messagetext");
        	}else if(uv<=10){
        		$(".wlist_txt4").html("자외선:매우높음");
        		$("<p>").html("자외선매우높음").appendTo(".messagetext");
        	}else{
        		$(".wlist_txt4").html("자외선: 위험");
        		$("<p>").html("자외선위험").appendTo(".messagetext");
        	}
        	
           });
        },
        error: function(xhr, textStatus, errMsg){
           $("#uv").html("<p>" + textStatus + "(HTTP-" + xhr.status + " / " + errMsg + ") </p>");
        }
     })*/
}
