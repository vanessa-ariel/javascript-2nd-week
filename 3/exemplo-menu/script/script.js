const buttonMenu = document.querySelector(".sidebar-menu__button");
const sidebarMenu = document.querySelector(".sidebar-menu");

buttonMenu.addEventListener("click", function(){
    if (sidebarMenu.style.left === "-430px"){
        sidebarMenu.style.left = "0px";
        
        // sidebarMenu.setAttribute(
        //     "style", "all css inside the string"    
        // )

        sidebarMenu.setAttribute(
            "style", "font-size: 100px; font-style: italic; color: #ff0000;"    
        )
    }else{
        sidebarMenu.style.left = "-430px";
    }
})


// const button = document.querySelector(".sidebar-menu__button");
// const sidebarMenu = document.querySelector(".sidebar-menu");

// let counter =1;
// button.addEventListener("click",function(event){
//     event.preventDefault();

//     sidebarMenu.style.left = "-435px"
//     counter++
//     if (counter % 2 !==0){
//         sidebarMenu.style.left = "0px"
//     }
// })