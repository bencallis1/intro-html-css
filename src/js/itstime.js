/**
 * Created by ben on 1/30/16.
 */
window.addEventListener('DOMContentLoaded', function () {
    var emailSubmit = document.querySelector('#submitEmail'),
        emailInput = document.getElementById("submitEmailInput"),
        htmlIntro = document.getElementById("html-intro-main"),
        cssIntro = document.getElementById("css-intro-main");



    emailSubmit.addEventListener('click', function () {
            var email =  emailInput.value;
            /*if(email === "password") {*/

        document.location.href = "file:///Users/ben/Desktop/DevMountain-Intro-Html5-Css3/src/views/css3-intro.html";

                console.log('hey');


                /*}*/

        })




});
