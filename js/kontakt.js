// Script.js 
function validate() { 
	let name = 
		document.getElementById("name").value; 
	let subject = 
		document.getElementById("subject").value; 
	let email = 
		document.getElementById("email").value; 
	let message = 
		document.getElementById("message").value; 
	let error_message = 
		document.getElementById("error_message"); 

	error_message.style.padding = "10px"; 

	let errors = []; 

	if (name.length < 2) { 
		errors.push("Indtast navn");} 
	if (subject.length < 10) { 
		errors.push("Indtast et mere specifikt emne");} 
	if (email.indexOf("@") == -1 || email.length < 6) { 
		errors.push( 
			"Indtast din email");} 
	if (message.length <= 20) { 
		errors.push( 
			"Indtast et mere specifikt ønske");} 

	if (errors.length > 0) { 
		error_message.innerHTML = 
			errors.join("<br>"); 
		return false;} 
	else { 
		alert( 
			"Ønske er nu sendt!"); 
		return true;}}
