//DECLARE ALL INPUTS
const inputName = document.getElementById("cadastroInputNome");
const inputEmail = document.getElementById("cadastroInputEmail");
const inputEmailConfirm = document.getElementById("cadastroInputEmail");
const inputPassword = document.getElementById("cadastroInputPassword");
const inputPasswordConfirm = document.getElementById("cadastroInputPassword");
const inputPhone = document.getElementById("cadastroInputPhone");
const inputArea = document.getElementById("cadastroInputArea");
const checkBox = document.getElementById("cadastroInputNews");

const inputLevel = document.getElementsByName("level");

const button = document.querySelector(".cadastro__button");
button.addEventListener("click",function(event){
    event.preventDefault();
        if (inputName.value === undefined || inputName.value === null || inputName.value ==="" || inputName.value ===" "){
            inputName.focus();
            return false;
    
        }else if (inputEmail.value === undefined || inputEmail.value === null || inputEmail.value === "" || inputEmail.value ===" " ){
            inputEmail.focus();
            return false;
            
        }else if (inputEmailConfirm.value === undefined || inputEmailConfirm.value === null || inputEmailConfirm.value === "" || inputEmailConfirm.value ===" " ){
            inputEmailConfirm.focus();
            return false;

        }else if (inputEmailConfirm.value !== inputEmailConfirm.value){
            alert ("The emails do not match!");
            
        }else if (inputPassword.value === undefined || inputPassword.value === null || inputPassword.value ==="" || inputPassword.value ===" "){
            inputPassword.focus();
            return false;

        }else if (inputPasswordConfirm.value === undefined || inputPasswordConfirm.value === null || inputPasswordConfirm.value ==="" || inputPasswordConfirm.value ===" " ){
            inputPasswordConfirm.focus();
            return false;

        }else if (inputPassword.value !== inputPasswordConfirm.value){
            alert ("The passwords do not match!");
        
        }else if (inputPhone.value === undefined || inputPhone.value === null || inputPhone.value === "" || inputPhone.value === " " ){
            inputPhone.focus();
            return false;
    
        }else if (checkBox.value !== checkBox.checked){
            checkBox.focus();
            return false;
        }
})

button.addEventListener("click",function(e){
    e.preventDefault();
    const optionSelect = inputArea.options[inputArea.selectedIndex]

    let radioItem;
    for(let i = 0; i < inputLevel.length; i++){
        if(inputLevel[i].checked){
            console.log(inputLevel[i])
            radioItem = inputLevel[i]
        }
    }
    if (radioItem.value === 0){
        console.log("0 - 2 anos de experiência");
    }else if (radioItem.value === 1){
        console.log("2 - 5 anos de experiência");
    }else if (radioItem.value === 2){
        console.log("5+ anos de experiência");
    }
})
