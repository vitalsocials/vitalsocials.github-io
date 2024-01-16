const hamburger = document.querySelector(".hamburger");
const menuItems = document.querySelectorAll(".mobile-menu ul a");

hamburger.onclick = function() { toggleMobileMenu(); };
menuItems.forEach((item) => {
    item.onclick = function() { toggleMobileMenu(); };
});

function toggleMobileMenu() {
    console.log('func');
    if (document.querySelector(".mobile-menu").classList.contains("active")) {
        let heroBlob = document.querySelector("#hero-blob");
        heroBlob.style.zIndex = "-1";
        heroBlob.style.scale = "1";
        document.querySelector(".mobile-menu").classList.remove("active");
        document.body.style.overflow = "visible";
    } else {
        let heroBlob = document.querySelector("#hero-blob");
        heroBlob.style.zIndex = "2";
        heroBlob.style.scale = "12";
        document.querySelector(".mobile-menu").classList.add("active");
        document.body.style.overflow = "hidden";
    }
}