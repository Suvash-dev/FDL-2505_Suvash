

$('.hide p').click(function(){
    $(this).hide();
}) 

function reloadPage() {
    location.reload();
}


$('.colorChange p').click(function(){
    $(this).css({
       'background-color': 'lightgreen',
       'color':'red',
       'display': 'inline-block',
       'margin': '5px'
       
    });
}) 


$('.hidebtn').click(function(){
    $('.box').hide(400);
}) 

$('.showbtn').click(function(){
    $('.box').show(400);
}) 

$('.hideShowbtn').click(function(){
    $('.box').toggle(500);
}) 




$('.slideHide').click(function(){
    $('.slideBox').slideUp(300);
}) 

$('.slideShow').click(function(){
    $('.slideBox').slideDown(300);
}) 

$('.slideHideShow').click(function(){
    $('.slideBox').slideToggle();
}) 

/*active*/


$('.slideOut').click(function(){
    $('.customedBox').removeClass('active');
}) 

$('.slideIn').click(function(){
    $('.customedBox').addClass('active');
}) 

$('.slideInOut').click(function(){
    $('.customedBox').toggleClass('active');
}) 



$('.animationRun').click(function(){
    $('.animationBox').toggleClass('active');
}) 

$('.animationRun').click(function(){
    $('.animationBox2').toggleClass('active1');
}) 