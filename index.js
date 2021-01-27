
function detectmob() {
    if($(window).width() <= 1200 || $(window).height() <= 1000) {
      return true;
    } else {
      return false;
    }
 }

if (!detectmob()) {}
else{
  $(window).scroll(function() {
    if ($(this).scrollTop() > 275) {
        $('.to-left').stop().animate({ right: '-60%' }, 1000);
    } 
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 275) {
            $('.to-right').stop().animate({ left: '5%' },1000);
        } 
        });
}
 



$(".pricing-link").click(function() {
  $('html, body').animate({
      scrollTop: $("#pricing").offset().top
  }, 2000);
});

$(".whyUs-link").click(function() {
  $('html, body').animate({
      scrollTop: $("#features").offset().top
  }, 2000);
});

$(".contactUs-link").click(function() {
  $('html, body').animate({
      scrollTop: $("#contactUs").offset().top
  }, 2000);
});