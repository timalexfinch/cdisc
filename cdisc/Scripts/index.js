/*
 * Index.js
 */

'use strict';

document.addEventListener("keyup", function (e) {
    var key = e.which || e.keyCode;
    switch (key) {
        // enter key
        case 13:
            window.location.replace("page2.html");
            break;      
    }
});