// const button = document.querySelector("button");
// const paragraph = document.querySelector(".paragraph")

// button.addEventListener("click",function(event){
//   event.preventDefault();
//     const pChildren = paragraph.children[0];
//     const attribute = pChildren.attributes
//     //console.log(attribute[0].name , attribute[0].value);

//     for(i=0; i< attribute.length; i++){
//       const list = (attribute[i].name, attribute[i].value);
//       const newDiv = document.createElement("div")
//       newDiv.innerHTML = (list)
//       newDiv.appendChild(list);
//     }
//   })


  const button = document.querySelector("button");
  const attribute = document.getElementById("externo");
  const newParagraph = document.createElement("p");
  const textAttribute = document.querySelector(".");

  button.addEventListener("click",function(event){
    event.preventDefault();

    for(i=0; i< attribute.length; i++){
      const list =(attribute[i].name, attribute[i].value);
      newParagraph.innerHTML = list
      newParagraph.appendChild(list);
    }
  })

  