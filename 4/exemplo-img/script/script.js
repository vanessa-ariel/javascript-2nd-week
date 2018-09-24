const links = document.querySelector(".gallery__nav");
const image = document.querySelector(".gallery__image");
const imgCaption = document.querySelector("figcaption"); // added the tag figcaption instead of the class

// console.log(links.length)
// console.log(links.children)

for(let i = 0; i < links.children.length; i++){
    console.log(links.children[i])
    const navChildren = links.children[i];
    navChildren.addEventListener("click", function(event){
        event.preventDefault();
        const img = this.dataset.image; // refers to data-image attribute inside navChildren
        //console.log(img);
        image.src = img; // changes the image displayed when clicked on the button

        const text = this.dataset.title;
        console.log(text);
        imgCaption.innerHTML = text;
    })
}

