/*
 * boot HardDisk BBS 2.js
 */

'use strict';

document.addEventListener("keyup", function (e) {
    var key = e.which || e.keyCode;
    switch (key) {
        // Esc
        case 27:
            window.location.replace("bootHardDiskBBS2.html");
            break;
       
        // Enter
        case 13:
            window.location.replace("bootHardDiskBBS2.html");
            break;
    }
});