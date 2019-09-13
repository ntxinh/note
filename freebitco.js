// ==UserScript==
// @name         Freebitco.in auto collector
// @namespace    https://www.youtube.com/channel/UCoeYrdjYyuG_EN-_C7F6Nww
// @version      1.0.0
// @description  Autoclaim Freebitco.in
// @description  Please use my Referal-Link https://freebitco.in/?r=25137207
// @author       Xinh Nguyen
// @match        https://freebitco.in/
// @match        https://freebitco.in/?op=home
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// ==/UserScript==


(function() {
    'use strict';

var count_min = 1;

$(document).ready(function(){
    console.log("Status: Page loaded.");
    setTimeout(function(){
        waitForElement();
    }, random(2000,4000));
    setInterval(function(){
        console.log("Status: Elapsed time " + count_min + " minutes");
        count_min = count_min + 1;
    }, 60000);
    setTimeout(function(){
        var btnModal = $('.close-reveal-modal')[0];
        if (btnModal) {
            btnModal.click();
            console.log("Status: Button CLOSE POPUP clicked.");
        }
    }, random(12000,18000));
    setInterval(function(){
        $('#free_play_form_button').click();
        console.log("Status: Button ROLL clicked again.");
    }, random(3605000,3615000));
});
function random(min,max){
   return min + (max - min) * Math.random();
}
function waitForElement(){
    var v = grecaptcha.getResponse();
    if(v.length == 0) {
        setTimeout(waitForElement, 250);
    } else {
        $('#free_play_form_button').click();
        console.log("Status: Button ROLL clicked.");
    }
}
})();
