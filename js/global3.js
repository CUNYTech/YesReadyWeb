/* Save user information */

$("#userInformationSaveBtn").click(
	   function()
	   {

		var user = firebase.auth().currentUser;
		
		if (user != null) {
			  uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
							   // this value to authenticate with your backend server, if
							   // you have one. Use User.getToken() instead.
		}
	
		var database = firebase.database();
		var ref = database.ref('users/' + user.uid);
		
		var Vgender=$("#userGender").val();
		var Vlastname=$("#lastName").val();
		var Vname=$("#userName").val();
		var Vphone=$("#userPhone").val();
		var Vphoto=$("#userPhoto").val();
		var VstreetAddress=$("#streetAddress").val();
		var VcityAddress=$("#cityAddress").val();
		var VzipCode=$("#zipCode").val();
		var VstateAdress=$("#stateAdress").val();
	//	alert(Vgender + Vlastname  + Vname + Vphone + Vphoto + user.uid);
	
	if(Vgender != "" && Vlastname != "" && Vname != "" && Vphone != "" && Vphoto != "" && VstreetAddress != "" && VcityAddress != "" && VzipCode != "" && VstateAdress != "" ){
		
		var data = {	
			gender: Vgender,
			lastname: Vlastname,
			name: Vname,
			phone: Vphone,
			photo: Vphoto,
			userId: user.uid,
			streetAddress: VstreetAddress,
			cityAddress: VcityAddress,
			zipCode: VzipCode,
			stateAdress: VstateAdress,

		};
		
		ref.set(data);
		alert("User information saved!");
		
		setTimeout(mainPageRed, 100);
		//window.location = 'index.html';
		
		
	} else {
		alert("All fields are required!");
	}
	

});

/* End save user information */


/* Main page redirection */
	function mainPageRed() {
		window.location = 'index.html';
	}

/* End main page redirection */


/* Retrieve user's information */

	 $(document).ready(function () {
		setTimeout(userInfo, 100);
		function userInfo() {

	var user = firebase.auth().currentUser;
		
	if (user != null) {
		  uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
						   // this value to authenticate with your backend server, if
						   // you have one. Use User.getToken() instead.
	}		 
		   
return firebase.database().ref('/users/' + user.uid).once('value').then(function(snapshot) {
  //var name = (snapshot.val() && snapshot.val().name) || 'Anonymous';
  var name = snapshot.child('name').val();
  var lastname = snapshot.child('lastname').val();
  var phone = snapshot.child('phone').val();
  var photoAdress = snapshot.child('photo').val();
  var streetAddress = snapshot.child('streetAddress').val();
  var cityAddress = snapshot.child('cityAddress').val();
  var stateAdress = snapshot.child('stateAdress').val();
  var zipCode = snapshot.child('zipCode').val();

  $('#userName').text(name);
  $('#userLastname').text(lastname);
  $('#userPhone').text(phone);
  $('#streetAddress').text(streetAddress);
  $('#cityAddress').text(cityAddress);
  $('#stateAdress').text(stateAdress);
  $('#zipCode').text(zipCode);
  
  // document.querySelector('img').src = photoAdress;
  // alert(photoAdress);

  // $('#photo').text(photoAdress);
  
});

		}
});


/* End retrieve user's information */


/* Request */

function setGroceries(){
	document.getElementById("requestType").value = "groceries";
}

function setLaundry(){
	document.getElementById("requestType").value = "laundry";
}

function setHospital(){
	document.getElementById("requestType").value = "hospital";
}

function setWalkDog(){
	document.getElementById("requestType").value = "walkDog";
}

function setSpecialRequest(){
	document.getElementById("requestType").value = "specialRequest";
}
 
/* end Request  */

/* Save request information */

$("#requestBtn").click(function(){
	var user = firebase.auth().currentUser;
		
	if (user != null) {
		  uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
						   // this value to authenticate with your backend server, if
						   // you have one. Use User.getToken() instead.
	}
	
	//	var reqId = Math.random(); // Generate a random number for the request id
	
		var database = firebase.database();
		var ref = database.ref('requests/');
	
		var requestTitle=$("#requestTitle").val();
		var requestType=$("#requestType").val();
		var requestDescription=$("#requestDescription").val();
		var requestPrice=$("#requestPrice").val();
		
	//	alert(requestTitle + requestType  + requestDescription + requestPrice + user.uid);
	
	if(requestTitle != "" && requestType != "" && requestDescription != "" && requestPrice != ""){
		
		var data = {	
			description: requestDescription,
			price: requestPrice,
			title: requestTitle,
			type: requestType,
			userId: user.uid
		};
		
		ref.push(data);
		alert("Request information saved!");
		document.getElementById('request-form').style.display='none';
		//setTimeout(mainPageRed, 100);
		
		
	} else {
		alert("All fields are required!");
	}
	

});

/* End save request information*/


