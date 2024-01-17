const hamburger = document.querySelector(".hamburger");
const hamburgerClose = document.querySelector(".hamburger-close");
const menuItems = document.querySelectorAll(".mobile-menu ul a");
const header = document.querySelector(".hero-section header");

hamburger.onclick = function() { toggleMobileMenu(); };
hamburgerClose.onclick = function() { toggleMobileMenu(); };
menuItems.forEach((item) => {
    item.onclick = function() { toggleMobileMenu(); };
});

let widthBefore, heightBefore;

function toggleMobileMenu() {
    if (header.classList.contains("sticky")) {
        if (document.querySelector(".mobile-menu").classList.contains("active")) {
            let hamburgerBg = document.querySelector(".hamburger-bg");
            hamburgerBg.style.zIndex = "-1";
            hamburgerBg.style.width = widthBefore;
            hamburgerBg.style.height = heightBefore;
    
            document.querySelector(".mobile-menu").classList.remove("active");
            document.body.style.overflowY = "visible";
    
            hamburgerClose.style.display = "none";
            hamburger.style.display = "block";
        } else {
            let hamburgerBg = document.querySelector(".hamburger-bg");
    
            widthBefore = hamburgerBg.style.width;
            heightBefore = hamburgerBg.style.height;
    
            hamburgerBg.style.zIndex = "2";
            hamburgerBg.style.width = "100%";
            hamburgerBg.style.height = "100vh";
    
            document.querySelector(".mobile-menu").classList.add("active");
            document.body.style.overflowY = "hidden";
    
            hamburgerClose.style.display = "block";
            hamburger.style.display = "none";
        }
    } 
    else {
        if (document.querySelector(".mobile-menu").classList.contains("active")) {
            let hamburgerBg = document.querySelector(".hamburger-bg");
            hamburgerBg.style.zIndex = "-1";
            hamburgerBg.style.width = widthBefore;
            hamburgerBg.style.height = heightBefore;
            hamburgerBg.style.borderRadius = "0 0 0 100%";
    
            document.querySelector(".mobile-menu").classList.remove("active");
            document.body.style.overflowY = "visible";
    
            hamburgerClose.style.display = "none";
            hamburger.style.display = "block";
        } else {
            let hamburgerBg = document.querySelector(".hamburger-bg");
    
            widthBefore = hamburgerBg.style.width;
            heightBefore = hamburgerBg.style.height;
    
            hamburgerBg.style.zIndex = "2";
            hamburgerBg.style.width = "100%";
            hamburgerBg.style.height = "100%";
            hamburgerBg.style.borderRadius = "0";
    
            document.querySelector(".mobile-menu").classList.add("active");
            document.body.style.overflowY = "hidden";
    
            hamburgerClose.style.display = "block";
            hamburger.style.display = "none";
        }
    }
}