$(document).ready(function(){
  $('.your-class').slick({
     slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow:$('.leftArrow'),
  nextArrow:$('.rightArrow'),
  centerMode: true,
  centerPadding: '0',
  dots:true,
  dotsClass:'my-dots',
  });
});