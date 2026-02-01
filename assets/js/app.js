$('.srcInMob').click(function(){
    $('.mblsrcarea').toggleClass('d-none');
}) 


$(document).ready(function(){
  $('.SliderBase').slick({
    dots: true,          // Shows the pagination dots
    dotsClass:'my-dots',
    infinite: true,
    speed: 500,
    fade: true,          // Smooth fade transition
    cssEase: 'linear',
    arrows: false,       // Hide side arrows if you only want dots
    autoplay: true,
    autoplaySpeed: 2000    
  });
});

$(document).ready(function(){
    $('.sliderNother .row').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: true,
        dots: false,
        infinite: true,

        prevArrow: $('.sliderMother .leftArrow'),
        nextArrow: $('.sliderMother .rightArrow'),

        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});

/*$(document).ready(function(){
    $('.sliderNother .row').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,

        prevArrow: $('.sliderNother .leftArrow'),
        nextArrow: $('.sliderNother .rightArrow'),

        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 4 } },
            { breakpoint: 768,  settings: { slidesToShow: 2 } },
            { breakpoint: 480,  settings: { slidesToShow: 1 } }
        ]
    });
}); */ 


$(document).ready(function(){
    $('.testimonial-grid').slick({
        dots: false,                // Enable pagination dots
        infinite: true,
        speed: 1000,
        slidesToShow: 3,           // 3 cards on desktop
        slidesToScroll: 1,
        prevArrow: $('.prev'),     // Link custom left arrow
        nextArrow: $('.next'),     // Link custom right arrow
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    // Toggle 'active' class on arrows for styling
    $('.arrow-btn').click(function() {
        $('.arrow-btn').removeClass('active');
        $(this).addClass('active');
    });
});