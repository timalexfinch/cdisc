/*
 * save & exit 3.js
 */

'use strict';

document.addEventListener("keyup", function (e) {
    var key = e.which || e.keyCode;
    switch (key) {
        // Enter
        case 13:
            window.location.replace("SaveAndExit.html");
            break;
        // Esc
        case 27:
            window.location.replace("SaveAndExit.html");
            break;
    }
});