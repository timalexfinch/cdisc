/*
 * security.js
 */

'use strict';

document.addEventListener("keyup", function (e) {
    var key = e.which || e.keyCode;
    switch (key) {
        //left arrow
        case 37:
            window.location.replace("ipmi.html");
            break;
        // right arrow
        case 39:
            window.location.replace("boot.html");
            break;
    }
});