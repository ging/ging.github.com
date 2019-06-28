$(document).ready(
    function () {

$(".show").click(function () {
    $(".menu").show();
    $(".show").hide();
    $(".close").show();
});

$(".close").click(function () {
    $(".menu").hide();
    $(".show").show();
    $(".close").hide();
});

});

window.onscroll = function () {
    myFunction();
};
document.getElementById("parallax").onscroll = function () {
    myFunction2();
};



function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").className = "navBar border_navbar";
    } else {
        document.getElementById("header").className = "navBar";
    }
};


function myFunction2() {
    if (document.getElementById("parallax").scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header_home").className = "navBar border_navbar";

    } else {
        document.getElementById("header_home").className = "navBar";
    }
};
