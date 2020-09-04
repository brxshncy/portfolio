$(document).ready(function(){

   var offset = 400;
   var duration = 500;
   $(window).scroll(function(){
        if($(this).scrollTop() > offset){
            $('.back-top').fadeIn(duration);
        }else{
            $('.back-top').fadeOut(duration);
        }
   })
   $('.back-top').click(function(){
       $('body').animate({
           scrollTop:0
       }, 1000);
   })
})