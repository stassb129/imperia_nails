$(document).ready(function () {

    new WOW().init();
    const rellax = new Rellax('.rellax', {
        speed: -2,
        center: false,
        round: true,
        vertical: true,
        horizontal: false
    });

    $('.portfolio_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        cssEase: 'ease-out'
    });

});