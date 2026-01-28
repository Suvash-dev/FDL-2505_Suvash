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


  $(document).ready(function() {
    $('.category-slider').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      dotsClass:'my-dots',
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 5
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    });
  });

