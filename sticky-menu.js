var navbar = document.querySelector('.hero-section header');

var sticky = navbar.offsetTop;

window.onscroll = function() {

    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky")
        document.body.style.paddingTop = "80px";
        document.querySelector('.hamburger-bg').style.zIndex = "-1";
        document.querySelector('.hamburger-bg').style.borderRadius = "0";
    } else {
        navbar.classList.remove("sticky");
        document.body.style.paddingTop = "0";
        document.querySelector('.hamburger-bg').style.borderRadius = "0 0 0 100%";
    }

};