﻿/*
 * advanced.js
 */

'use strict';

document.addEventListener("keyup", function (e) {
    var key = e.which || e.keyCode;
    switch (key) {
        // Esc
        case 27:
            window.location.replace("advancedPCIe1OnboardLan1Oprom1.html");
            break;
        // up arrow
        case 38:
            window.location.replace("advancedPCIe1OnboardLan1Oprom1.html");
            break;
        // Enter
        case 13:
            window.location.replace("advancedPCIe1OnboardLan2Disabled.html");
            break;
    }
});