const menuIcon=document.querySelector(".menuIcon");
const overlay=document.querySelector(".overlay");

menuIcon.addEventListener("click",function(evt){
    if(overlay.classList.contains("hidden"))
        overlay.classList.remove("hidden");
    console.log(evt.target.alt)    
    toggleMenu(evt.target.alt)
});

function toggleMenu(menuStatus){
    overlay.classList.toggle("hide");
    menuIcon.setAttribute("alt",menuStatus=="openMenu"?"closeMenu":"openMenu");
    if(menuStatus=="openMenu")
        return menuIcon.setAttribute("src","images/icon-close.svg");
    menuIcon.setAttribute("src","images/icon-hamburger.svg");
}

function checkViewSize(query){
    if (query.matches && menuIcon.alt=="closeMenu"){ 
        toggleMenu("closeMenu")
    }
}
const query=window.matchMedia("(min-width:786px)");
query.addListener(checkViewSize);