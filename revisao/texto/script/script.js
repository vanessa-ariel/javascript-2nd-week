const buttonIncreaseFont = document.querySelector(".btn-increase-font-size");
const buttonDecreaseFont = document.querySelector(".btn-decrease-font-size");
const text = document.querySelector(".article");

let textSize = 16; // IT DOES NOT ACCEPT PIXELS AS A VALUE BECAUSE IT'S A NUMBER 
let subHeadingSize = 24;
let headingSize = 32;

buttonIncreaseFont.addEventListener("click", function(){
	textSize = textSize + 1; 
	subHeadingSize = subHeadingSize + 1;
	headingSize = headingSize + 1;
	//console.log(textSize)
	
	document.querySelector(".article").style.fontSize = textSize + "px"; //REVIEW THIS LINE
	document.querySelector(".article__subtitle").style.fontSize = subHeadingSize + "px";
	document.querySelector(".article__title").style.fontSize = headingSize + "px";
})

buttonDecreaseFont.addEventListener("click", function(){
	textSize = textSize - 1; 
	subHeadingSize = subHeadingSize - 1;
	headingSize = headingSize - 1;
	
	document.querySelector(".article").style.fontSize = textSize + "px"; 
	document.querySelector(".article__subtitle").style.fontSize = subHeadingSize + "px";
	document.querySelector(".article__title").style.fontSize = headingSize + "px";
})