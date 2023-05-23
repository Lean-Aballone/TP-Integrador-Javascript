const NAV_BUTTON = document.querySelector("#toggle-button");
const NAV = document.querySelector("#mobile_nav"); 
const UL  = document.querySelector("#mob");
const nav2_Child_extra = document.querySelectorAll(".close_extra");
const CROSS = document.querySelectorAll(".cross");


let first_time = true;
NAV_BUTTON.addEventListener("click",function(){
    nav2_Child_extra.forEach((element) => (element.classList.toggle("nav2_opened")));
    CROSS[0].classList.toggle("cross_one");
    CROSS[1].classList.toggle("cross_two");
    
   
    if(first_time){
        NAV.classList.toggle("hidden");
        setTimeout(() => {
            UL.classList.toggle("nav_open");
      }, 500);  
    }else{
        UL.classList.toggle("nav_open");
        setTimeout(() => {
            NAV.classList.toggle("hidden");
      }, 2000);  
    }



    first_time = !first_time;
}); 