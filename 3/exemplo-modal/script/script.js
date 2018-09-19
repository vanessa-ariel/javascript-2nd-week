const button = document.querySelector(".login__button");
// const popScreen = document.querySelector(".login-modal").style
const popScreenCloseButton = document.querySelector(".login-modal__button-close");

button.addEventListener("click",function(event){
    event.preventDefault(); 
    document.querySelector(".login-modal").style.display = "flex";
})

popScreenCloseButton.addEventListener("click",function(){
    document.querySelector(".login-modal").style.display = "none";
})

