/*
 * save & exit Save as user Defaults.js
 */

'use strict';

document.addEventListener("keyup", function (e) {
    var key = e.which || e.keyCode;
    switch (key) {
        // Esc
        case 27:
            window.location.replace("saveandexit.html");
            break;
        // up arrow
        case 38:
            window.location.replace("saveandexitRestoreDefaults.html");
            break;
    }
});