/*
 * supermicro.js
 */

'use strict';

document.addEventListener("keyup", function (e) {
    var key = e.which || e.keyCode;
    switch (key) {
        // enter key
        case 13:
            window.location.replace("antillion.html");
            break;      
    }
});

// IE sometimes doesn't support addEventListener:

//if (document.addEventListener) {
//    document.addEventListener("keyup", function (e) {
//        var key = e.which || e.keyCode;
//        switch (key) {
//            // enter key
//            case 13:
//                window.location.replace("antillion.html");
//                break;
//        }
//    });
//} else if (document.attachEvent) {
//    document.attachEvent('keyup', function (e) {
//        var key = e.which || e.keyCode;
//        switch (key) {
//            // enter key
//            case 13:
//                window.location.replace("antillion.html");
//                break;
//        }
//    });
//}


