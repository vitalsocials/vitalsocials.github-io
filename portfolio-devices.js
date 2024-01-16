document.addEventListener("DOMContentLoaded", function() {

    function setDevicesPosition() {
        const categories = document.querySelectorAll(".category");

        if (window.innerWidth > 1110) {
            
            const positions = [
                [50, 0, 30, 0],
                [20, 60, 0, 40],
                [70, 20, 50, 0],
                [0, 30, 55, 10],
                [60, 0, 50, 30],
            ];
            
            var c = 0, d = 0;
            categories.forEach((category) => {
                var devices = category.querySelectorAll(".device");
            
                devices.forEach((device) => {
                    device.style.transform = `translateY(${positions[c][d]}px)`;
                    if (d < 3) d++;
                    else d = 0;
                });
            
                c++;
        
            });
        } else {
            categories.forEach((category) => {
                var devices = category.querySelectorAll(".device");
            
                devices.forEach((device) => {
                    device.style.transform = `translateY(0)`;
                });
        
            });
        }
    };

    setDevicesPosition();

    window.onresize = function() { setDevicesPosition(); };

});