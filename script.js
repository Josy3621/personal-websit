$(document).ready(function () {
    $(window).scroll(function () {
        // sticky home on scroll script
        if (this.scrollY > 20) {
            $('.home').addClass("sticky");
        } else {
            $('.home').removeClass("sticky");
        }

    });
    $('.home .menu li a').click(function () {
        // slide for mobile
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/about script
    $('.menu-btn').click(function () {
        $('.home .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });



});