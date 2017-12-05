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
				window.location = 'index.html';
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
		   alert('I am not working! ');
			var email=$("#signUpEmail").val();
			var password=$("#signUpPassword").val();
			
			if(email != "" && password != ""){
					firebase.auth().createUserWithEmailAndPassword(email, password).then(function(user) {
						
						var user = firebase.auth().currentUser;
						window.location = 'userInformation.html';
						
					}, function(error) {
						// Handle Errors here.
						var errorCode = error.code;
						var errorMessage = error.message;
					});		
			}
			else {
				 $("#registerError").show().text('Fill all the fields!');
				document.getElementById('id02').style.display='block';
			}
				document.getElementById('id02').style.display='none';
				
				
				// //Redirecting when signing out
			// firebase.auth().onAuthStateChanged(function(user) {
			  // if (user) {
				// // User is signed in.
			  // } else {
			   // window.location = 'userInformation.html';
			  // }
			
			// });

});
				
	   
/* End sign up */


/* Reset Password */ 


$("#resetPwdButton").click(
	   function()
	   {
		
			var auth = firebase.auth();
			var emailAddress = $("#resetPwdEmail").val();

			auth.sendPasswordResetEmail(emailAddress).then(function() {
			  // Email sent.
			  alert("Email sent!");
			  window.location = "index.html";

			  
			}).catch(function(error) {
			  // An error happened.
			});
		
		
		
	   });


/* End Reset Password */ 

/* Image upload */
		
		var uploader = document.getElementById('uploader');
		var userPhoto = document.getElementById('userPhoto');
		  
		  
		  //Listen for file selection
		  userPhoto.addEventListener('change',function(e) {
			  //Get file 
			  var file = e.target.files[0];
			  
			  //Create a storage ref
			 var storageRef =  firebase.storage().ref('uploads/' + file.name);
			  
			  //Upload file
			 var task = storageRef.put(file);
			  
			  //Update progress bar
			  task.on('state_changed',
			  
				function progress(snapshot) {
					var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					uploader.value = percentage;
				},
				
				
				function error(err) {
					
				},
				
				function complete() {
					
				}
			 	  
			  );
		  });


/* End image upload */


/* Image retrieve */

var test = 'firebase_url';
document.querySelector('img').src = test;

/* End image retrieve */



