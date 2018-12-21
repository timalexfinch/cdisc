/*
 * advancedBootFeature.js
 */

'use strict';

document.addEventListener("keyup", function (e) {
    var key = e.which || e.keyCode;
    switch (key) {
        // up arrow
        case 38:
            window.location.replace("advanced.html");
            break;
        // Esc
        case 27:
            window.location.replace("advanced.html");
            break;
    }
});