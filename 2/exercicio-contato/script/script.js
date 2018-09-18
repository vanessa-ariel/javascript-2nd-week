//DECLARE VARIABLES
const inputName = document.getElementById ("contatoInputNome");
const inputEmail = document.getElementById ("contatoInputEmail");
const inputPhone = document.getElementById("contatoInputPhone");
const inputMessage = document.getElementById("contatoInputMessage");

const button = document.querySelector(".contato__button");
button.addEventListener("click", function(event){ // click is an event type
    event.preventDefault();
    //inputName.value === undefined
    //inputName.value === null
    //inputName.value ===""
    //inputName.value ===" "
    if (inputName.value === undefined || inputName.value === null || inputName.value ==="" || inputName.value ===" "){    
        inputName.focus();
        return false; //to escape the loop and focus on each element that is missing

    } else if(inputEmail.value === undefined || inputEmail.value === null || inputEmail.value === "" || inputEmail.value ===" " ){
        inputEmail.focus();
        return false;

    } else if(inputPhone.value === undefined || inputPhone.value === null || inputPhone.value === "" || inputPhone.value === " " ){
        inputPhone.focus();
        return false;

    } else if (inputMessage.value === undefined || inputMessage.value === null || inputMessage.value === "" || inputMessage.value ===" " ){
        inputMessage.focus();
        return false;
    }
    alert("Deu certo!")
    return true;


})