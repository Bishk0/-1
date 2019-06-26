$(function(){

    $('.slider__inner, .news__slider-inner').slick({
        nextArrow:'<button type="button" class="slick-next slick-btn"><i class="icon-angle-right"></i></button>',
        prevArrow:'<button type="button" class="slick-prev slick-btn"><i class="icon-angle-left"></i></button>',
        infinite: false
    });

    $('.burger-btn').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('burger-btn_active');
        $('.menu ul').slideToggle();
    });

    $('select').styler();

});