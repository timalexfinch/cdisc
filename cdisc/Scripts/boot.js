/*
 * security.js
 */

'use strict';

document.addEventListener("keyup", function (e) {
    var key = e.which || e.keyCode;
    switch (key) {
        //left arrow
        case 37:
            window.location.replace("security.html");
            break;
        //right arrow
        case 39:
            window.location.replace("saveAndExit.html");
            break;
        // down arrow
        case 40:
            window.location.replace("bootDualBootOrder2.html");
            break;
    }
});