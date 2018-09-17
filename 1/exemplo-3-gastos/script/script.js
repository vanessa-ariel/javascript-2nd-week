//ADD BUTTON
const button = document.querySelector(".transacao__button");


button.addEventListener("click",function(event){
    event.preventDefault();

//alert("Congrats!"); test each step before going forward
    const table = document.querySelector(".extrato__table");
    //console.log(table) test if table is working
    
    //ADD LINE
    const line = document.createElement("tr");
    console.log(line) //test if line is working
    
    //ADD COLUMNS
    const columnName = document.createElement("td");
    const columnValue = document.createElement("td");
    const columnDate = document.createElement("td");
    // console.log(columnName)

    //DECLARE VARIABLES TO USE ON THE NEXT STEP
    const inputName = document.getElementById("transacaoInputName");
    const inputValue = document.getElementById("transacaoInputMoney");
    const inputDate = document.getElementById("transacaoInputDate");
    
    //ADD CONTENT TO LINES
    columnName.innerHTML = (inputName.value) //inputName.value changes the value inside input name element 
    columnValue.innerHTML = (inputValue.value)
    columnDate.innerHTML = (inputDate.value)

    //ADD COLUMNS TO LINE
    line.appendChild(columnName);
    line.appendChild(columnValue);
    line.appendChild(columnDate);

    //ADD LINE TO TABLE
    table.appendChild(line);
})
    
    
  