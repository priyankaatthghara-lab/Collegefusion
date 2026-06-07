let menuicon=document.querySelector(".ri-menu-line");
let navlinks=document.querySelector(".navlinks");
menuicon.addEventListener("click",()=>{
    navlinks.classList.toggle("active");
   if(navlinks.classList.contains("active")){
    menuicon.classList.replace("ri-menu-line","ri-close-line");

   }
   else{
    menuicon.classList.replace("ri-close-line","ri-menu-line");
   }

})