$(document).ready(function () {
    $(".mobile-burger").click(function () {
        $(".mobile-burger span").toggleClass("active")
        $(".nav").toggleClass("open")
        $(".menu").toggleClass("active")
    })
    let headerBottom = $('.header-bottom')
    $(document).scroll(function () {
        // console.log($(window).scrollTop());
        if ($(this).scrollTop() > 890) {
            headerBottom.addClass('fixed');
        } else if ($(this).scrollTop() < 795) {
            headerBottom.removeClass('fixed');
        }
        if ($(this).scrollTop() > 890) {
            headerBottom.addClass('isVuew');
        } else if ($(this).scrollTop() < 835) {
            headerBottom.removeClass('isVuew');
        }
    })
    $('.header-scroll').click(function (e) {
        e.preventDefault()
        $('html, body').animate({
            scrollTop: $('.header-bottom').offset().top
        }, 800)
    })
});
