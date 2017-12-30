/* Save user information */
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
		alert(Vgender + Vlastname  + Vname + Vphone + Vphoto + user.uid);
	
	if(Vgender != "" && Vlastname != "" && Vname != "" && Vphone != "" && Vphoto != ""){
		
		var data = {	
			gender: Vgender,
			lastname: Vlastname,
			name: Vname,
			phone: Vphone,
			photo: Vphoto,
			userId: user.uid
		};
		
		ref.set(data);
		alert("User information saved!");

		//window.location = 'index.html';
		
		
	} else {
		alert("All fields are required!");
	}
	

});

/* End save user information */


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

  $('#userName').text(name);
  $('#userLastname').text(lastname);
  $('#userPhone').text(phone);
  
  // document.querySelector('img').src = photoAdress;
  // alert(photoAdress);

 // $('#photo').text(photoAdress);
  
  
});

		}
});


/* End retrieve user's information */

