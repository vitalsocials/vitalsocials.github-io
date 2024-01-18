var navbar = document.querySelector('.hero-section header');

var sticky = navbar.offsetTop;

function setSticky() {

    if (window.innerWidth <= 1110) {

        // console.log("innerWidth");

        if (window.pageYOffset > sticky) {
            // console.log("add sticky");
            navbar.classList.add("sticky")
            document.body.style.paddingTop = "80px";
            document.querySelector('.hamburger-bg').style.zIndex = "-1";
            document.querySelector('.hamburger-bg').style.borderRadius = "0";
        } else {
            // console.log("remove sticky");
            navbar.classList.remove("sticky");
            document.body.style.paddingTop = "0";
            document.querySelector('.hamburger-bg').style.borderRadius = "0 0 0 100%";
        }

    }
    else {
        // console.log("else");
        if (navbar.classList.contains("sticky")) {
            // console.log("else remove sticky");
            navbar.classList.remove("sticky");
            document.body.paddingTop = "0";
        }
    };

}

window.onscroll = function() {
    if (window.innerWidth <= 1110) {

        // console.log("innerWidth");

        if (window.pageYOffset > sticky) {
            // console.log("add sticky");
            navbar.classList.add("sticky")
            document.body.style.paddingTop = "80px";
            document.querySelector('.hamburger-bg').style.zIndex = "-1";
            document.querySelector('.hamburger-bg').style.borderRadius = "0";
        } else {
            // console.log("remove sticky");
            navbar.classList.remove("sticky");
            document.body.style.paddingTop = "0";
            document.querySelector('.hamburger-bg').style.borderRadius = "0 0 0 100%";
        }

    }
    else {
        // console.log("else");
        if (navbar.classList.contains("sticky")) {
            // console.log("else remove sticky");
            navbar.classList.remove("sticky");
            document.body.paddingTop = "0";
        }
    };
};