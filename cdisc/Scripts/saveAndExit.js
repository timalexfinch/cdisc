/*
 * save & exit.js
 */

'use strict';

document.addEventListener("keyup", function (e) {
    var key = e.which || e.keyCode;
    switch (key) {
        //left arrow
        case 37:
            window.location.replace("boot.html");
            break;
        //down arrow
        case 40:
            window.location.replace("saveandexitrestoredefaults.html");
            break;
        // Enter
        case 13:
            window.location.replace("SaveConfigAndExit.html");
            break;
    }
});