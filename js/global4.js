/* Save user information */

$("#userInformationSaveBtn").click(
	   function()
	   {
		var database = firebase.database();
		var ref = database.ref('users');
		
		var user = firebase.auth().currentUser;
		
	if (user != null) {
		  uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
						   // this value to authenticate with your backend server, if
						   // you have one. Use User.getToken() instead.
	}
		
		var Vgender=$("#userGender").val();
		var Vlastname=$("#lastName").val();
		var Vname=$("#userName").val();
		var Vphone=$("#userPhone").val();
		var Vphoto=$("#userPhoto").val();
		alert(Vgender + Vlastname  + Vname + Vphone + Vphoto + user.uid);
		var sent = 0;
	
	if(Vgender != "" && Vlastname != "" && Vname != "" && Vphone != "" && Vphoto != ""){
		
		var data = {	
			gender: Vgender,
			lastname: Vlastname,
			name: Vname,
			phone: Vphone,
			photo: Vphoto,
			userId: user.uid

		};
		
		ref.push(data);
		alert("User information saved!");
		var sent = 1;
		if (sent) == 1 {
		window.location = 'index.html';
		}
		
	} else {
		alert("All fields are required!");
	}
	

});

/* End save user information */