/*
 * boot Dual Boot Order #2.js
 */

'use strict';

document.addEventListener("keyup", function (e) {
    var key = e.which || e.keyCode;
    switch (key) {
        // Esc
        case 27:
            window.location.replace("boot.html");
            break;
        // up arrow
        case 38:
            window.location.replace("boot.html");
            break;
        // down arrow
        case 40:
            window.location.replace("bootHardDiskBBS.html");
            break;
        // Enter
        case 13:
            window.location.replace("bootDualBootOrder2a.html");
            break;
    }
});