//ADD BUTTON
const loginButton = document.querySelector(".login__button");

//ADD INPUT
const input = document.getElementById("loginInputEmail");

//ADD EVENT LISTENER TO BUTTON
loginButton.addEventListener("click", function(event){
    event.preventDefault();
	
	//DECLARE EMAIL
    const email = input.value;
	
	//ADD LOGIN FORM
	const loginForm = document.querySelector(".login__form");
	
	//INSERT TEXT TO LOGIN FORM ON HTML
    loginForm.innerHTML = `You have successfully logged in as ${email}!!`;
})