 // Function to validate form fields and display a summary if all fields are filled.
 function check(myForm){
	// Extract form field values.
	  let myName=myForm.name.value;
	  let myMail=myForm.mail.value;
	  let myQuery=myForm.query.value;
	  let radioValue=getRadioValue(myForm.subject);

	  
	//check if any required fields are empty and display an alert accordingly.		  
	if(myName==""){
		alert("Hey you didn't write your name!");
						 
	}else if(myMail==""){
		alert("Hey you didn't write your E-mail!");
		
	}else if(myQuery==""){
		alert("Hey you didn't write your query!");
						
	}else {
		// Hide the form container and show the summary section.
						   
		document.getElementById("container").style.display = "none";				  
		document.getElementById("summary").style.display = "block";

		// Display the form field values in the summary section.				  
		document.getElementById("names").innerHTML = "Name: "+myName;
		document.getElementById("mails").innerHTML = "E-mail: "+myMail;
		document.getElementById("subjects").innerHTML = "Subject: "+radioValue;
		document.getElementById("querys").innerHTML = "Query: "+myQuery;
						  
						  
	}
	}
	
	//Function to retrieve the value of the selected radio button from an array of radio buttons.				  
	function getRadioValue( RadioArray ){
		for( let i=0; i<RadioArray.length; i++){
			if( RadioArray[i].checked){
				return RadioArray[i].value;
			   }
			}
			// If no radio button is selected, return an empty string.
				return "";
						
			}
			// Function to edit the form by hiding the summary section and showing the form container again 
	function edit(){
		document.getElementById("summary").style.display = "none";
		document.getElementById("container").style.display = "block";
					   
	}
