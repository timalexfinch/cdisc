﻿/*
 * Page3.js
 */

'use strict';

document.addEventListener("keyup", function (e) {
    var key = e.which || e.keyCode;
    switch (key) {
        //left arrow
        case 37:
            window.location.replace("page2.html");
            break;
        //right arrow
        case 39:
            window.location.replace("page4.html");
            break;
    }
});