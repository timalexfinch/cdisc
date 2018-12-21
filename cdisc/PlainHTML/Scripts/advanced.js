/*
 * advanced.js
 */

'use strict';

document.addEventListener("keyup", function (e) {
    var key = e.which || e.keyCode;
    switch (key) {
        //left arrow
        case 37:
            window.location.replace("main.html");
            break;
        //right arrow
        case 39:
            window.location.replace("eventLogs.html");
            break;
        // down arrow
        case 40:
            window.location.replace("advancedPCIe1.html");
            break;
        // Enter
        case 13:
            window.location.replace("advancedBootFeature.html");
            break;
    }
});