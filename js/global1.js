$(document).ready(function(){
		
	/*Login*/
	firebase.auth().onAuthStateChanged(function(user) {
	  if (user) {
		// User is signed in.
	   //alert("in");
	   
	   var userName = firebase.auth().currentUser;
	   $(".pbody").show();
	   $("#signOutBtn").show();
	   $("#loginBtnMain").hide();
	   $("#signUpBtn").hide();
	   
	   
	   document.getElementById('pGreeting').innerHTML = "Hello, "+ +userName;

		var dialog = document.querySelector('#loginDialog');
		  if (! dialog.showModal) {
		  dialogPolyfill.registerDialog(dialog);
		}
		  dialog.close();
		  
	  } else {

		//alert("out");
		
		$("#signOutBtn").hide();
	   $("#loginBtnMain").show();
	   $("#signUpBtn").show();
		 
		  var dialog = document.querySelector('#loginDialog');
		  if (! dialog.showModal) {
		  dialogPolyfill.registerDialog(dialog);
		}
		  dialog.showModal();
	  }
		
		
	});



	$("#loginBtn").click(
	   function()
	   {
			var email=$("#loginEmail").val();
			var password=$("#loginPassword").val();
			
			if(email != "" && password != ""){
				  // $("#loginProgress").show();
				  // $("#loginBtn").hide();
				 
				 
				 firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
					  // Handle Errors here.
					  
					 $("#loginError").show().text(error.message);
					 document.getElementById('id01').style.display='block';
		
					 
				});
			}
			document.getElementById('id01').style.display='none';
	});


	/* Logout process */
	$("#signOutBtn").click (
		function() {
			firebase.auth().signOut().then(function() {
			  
			}).catch(function(error) {
			  alert(error.message);
			});	
	});



});

/* End Login */


/* Sign up */

$("#registerBtn").click(
	   function()
	   {
		//alert("Yes!");
			var email=$("#signUpEmail").val();
			var password=$("#signUpPassword").val();
			
			if(email != "" && password != ""){
	   
					firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
					  // Handle Errors here.
					  var errorCode = error.code;
					  var errorMessage = error.message;
					  // ...
					});
			document.getElementById('id02').style.display='none';
			}

	   });
/* End sign up */




