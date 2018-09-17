/*const title = document.getElementById("formTitle"); 
//create new variable and save the dom method in it using an existing ID in the html file

console.log(title);
*/

//STEPS

//const input = document.getElementById("newsInputEmail"); //selects only ID's
//const button = document.querySelector(".news__button"); //Query Selector selects any kind of elements

/* this method listen to the event. In this case, the click and uses an empty function - when there is no function name 
button.addEventListener("click", function(event){
    event.preventDefault()
    const email = input.value; 
    alert(`Your email ${email} was saved successfully!`)
}); 
*/  

const input = document.getElementById("newsInputEmail");
const button = document.querySelector(".news__button");

button.addEventListener("click", function(event){
    event.preventDefault();

    const answer = document.createElement("span");
    const messageAnswer = document.createTextNode("Email cadastrado com sucesso!");
    answer.appendChild(messageAnswer);
    const newsForm = document.querySelector(".news__form");
    newsForm.insertBefore(messageAnswer, newsForm.childNodes[0]);//the selection is similar to arrays
})