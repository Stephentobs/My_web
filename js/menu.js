let mobile_menu_icon = document.querySelector(".mobile_menu_icon");
let ul=document.querySelector("ul");
let top_line = document.querySelector(".top_line");
let middle_line = document.querySelector(".middle_line");
let bottom_line = document.querySelector(".bottom_line");
let menu_status = "off";

mobile_menu_icon.addEventListener("click", ()=>{
    if(menu_status === "off"){
    ul.style.display = "block";
    menu_status = "on";

    top_line.classList.add("top_line_twist");
    middle_line.classList.add("middle_line_twist");
    bottom_line.classList.add("bottom_line_twist");
}
else{
    ul.style.display = "none";
    menu_status = "off";

    top_line.classList.remove("top_line_twist");
    middle_line.classList.remove("middle_line_twist");
    bottom_line.classList.remove("bottom_line_twist");
}
});





let search_icon = document.querySelector(".search_icon");
let search_icon_mobile=document.querySelector(".search_icon_mobile");
let search_bar = document.querySelector(".search_bar");
let close = document.querySelector(".close");

search_icon.addEventListener("click", ()=>{
    search_bar.style.top="0";
}); 

close.addEventListener("click", ()=>{
    search_bar.style.top="-82px";
});

search_icon_mobile.addEventListener("click", ()=>{
    search_bar.style.top="0";
});


let switchColour = document.querySelector(".switchColour");
let header = document.querySelector("header");
let a = document.querySelectorAll("a");
let drop_down_menu = document.querySelector(".drop_down_menu");
let drop_drop = document.querySelector(".drop_drop");
let x = 0;

switchColour.addEventListener("click", ()=>{
    if(x < 1){
        header.style.background="#fcfcfc";
        drop_down_menu.style.backgroundColor="#fcfcfc";
        drop_down_menu.style.color="#333";
        drop_drop.style.backgroundColor="#fcfcfc";
        drop_drop.style.color="#333";
        a.forEach(a => {
        a.style.color = "#333";
        
        });
        x = 1;
    }else{
        header.style.background="#333";
        drop_down_menu.style.backgroundColor="#333";
        drop_down_menu.style.color="#fcfcfc";
        drop_drop.style.backgroundColor="#333";
        drop_drop.style.color="#fcfcfc";
        a.forEach(a => {
        a.style.color = "#d5d5d5";
       
        });
        x = 0;
    }
});
