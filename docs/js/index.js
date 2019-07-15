$(document).ready(function() {

    $('.cont-carrousel').slick({
        infinite: true,
        speed: 300,
        dots: false,
        arrows: true,
        autoplay: true
    }
    );

    $('.slick-prev').click(function() {
        $(this).css('background', 'var(--color-1)');
    });

    $('.slick-next').click(function() {
        $(this).css('background', 'var(--color-1)');
    });

});