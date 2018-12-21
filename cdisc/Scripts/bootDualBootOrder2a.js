/*
 * boot Dual Boot Order #2a.js
 */

'use strict';

document.addEventListener("keyup", function (e) {
    var key = e.which || e.keyCode;
    switch (key) {
        // Esc
        case 27:
            window.location.replace("bootDualBootOrder2.html");
            break;
       
        // Enter
        case 13:
            window.location.replace("bootDualBootOrder2.html");
            break;
    }
});