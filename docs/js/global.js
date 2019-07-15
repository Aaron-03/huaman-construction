$(document).ready(function() {

    $(window).scroll(function() {
        if($(window).scrollTop() < 10) {
            $('header').css("background", "none");
            $('header a').css("color", "white");
        } else {
            $('header').css("background", "white");
            $('header a').css("color", "black");
        }
    });
});