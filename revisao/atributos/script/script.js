const button = document.querySelector("button"); //WHAT ABOUT GET ELEMENTS BY NAME
const link = document.getElementById("externo");
const divArticle = document.querySelector(".article");

button.addEventListener("click", function(event){
	event.preventDefault();
//	console.log(link.attributes)//ATTRIBUTES PROPERTY
	
//	console.log(link.attributes.length)
	
	for(let i=0; i<link.attributes.length; i++){
		let newParagraph = document.createElement("p");
		//console.log(link.attributes[i].name)
		newParagraph.innerHTML = (`${link.attributes[i].name}:${link.attributes[i].value}`);
		//console.log(link.attributes[i].value);
		
		divArticle.appendChild(newParagraph);
	}
})




 