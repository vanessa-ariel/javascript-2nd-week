const button = document.querySelector(".select__button");
//const caixinha = document.querySelector(".select")
const selector = document.getElementById("selectInputArea");


button.addEventListener("click", function(event){
  event.preventDefault();
  const selectedItem = selector [selector.selectedIndex];
  console.log(selector);
  console.log(selector.selectedIndex)
  selectedItem.remove();
})

