/*
 * save & exit Restore Defaults.js
 */

'use strict';

document.addEventListener("keyup", function (e) {
    var key = e.which || e.keyCode;
    switch (key) {
        // Enter
        case 13:
            window.location.replace("saveAndExit3.html");
            break;
        // up arrow
        case 38:
            window.location.replace("saveAndExit.html");
            break;
        // down arrow
        case 40:
            window.location.replace("saveAndExitSaveAsUserDefaults.html");
            break;
    }
});