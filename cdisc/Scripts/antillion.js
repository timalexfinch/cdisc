/*
 * Antillion.js
 */

'use strict';

document.addEventListener("keyup", function (e) {
    var key = e.which || e.keyCode;
    switch (key) {
        // the Del key
        case 46:
            window.location.replace("main.html");
            break;
        
    }
});