/*
 * advanced.js
 */

'use strict';

document.addEventListener("keyup", function (e) {
    var key = e.which || e.keyCode;
    switch (key) {
        // Esc
        case 27:
            window.location.replace("advancedPCIe1OnboardLan2Oprom1.html");
            break;
    }
});