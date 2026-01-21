$('.srcInMob').click(function(){
    $('.mblsrcarea').toggleClass('d-none');
}) 

/*banner Slider*/


$(document).ready(function(){
  $('.SliderBase').slick({
    dots: true,          
    dotsClass:'my-dots',
    infinite: true,
    speed: 500,
    fade: true,          
    cssEase: 'linear',
    arrows: false,       
    autoplay: true,
    autoplaySpeed: 2000    
  });
});


/*product Slider*/

$(document).ready(function(){
  $('.featuredSlideBase1').slick({
    dots: true,          
    dotsClass:'my-dots',
    infinite: true,
    speed: 500,
    fade: true,          
    cssEase: 'linear',
    arrows: false,       
    autoplay: true,
    autoplaySpeed: 2000    
  });
});
