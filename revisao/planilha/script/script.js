const button = document.querySelector(".feedback__button");
addEventListener("click", function(event){
  event.preventDefault();
  const table = document.querySelector(".respostas__table");
  //console.log(table);
  const newLine = document.createElement("tr");
  //console.log(newLine);
  
  const inputCompany = document.getElementById("feedbackInputCompany");
  const inputLocation = document.getElementById("feedbackInputLocation");
  const inputComment = document.getElementById("feedbackInputComment");

  const columnCompany = document.createElement("td");
  const columnLocation = document.createElement("td");
  const columnComment = document.createElement("td");
  //console.log(columnCompany, columnLocation, columnComment)

  columnCompany.innerHTML = inputCompany.value;
  //console.log(inputCompany.value);
  columnLocation.innerHTML = inputLocation.value;
  //console.log(inputLocation.value); 
  columnComment.innerHTML = inputComment.value;
  //console.log(inputComment.value);
  
    newLine.appendChild(columnCompany);
    newLine.appendChild(columnLocation);
    newLine.appendChild(columnComment);
    //console.log(newLine.value);

    table.appendChild(newLine);
})