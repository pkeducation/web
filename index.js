
function detectMob() {
    if($(window).width() <= 992) {
      return true;
    } else {
      return false;
    }
 }


$(window).scroll(function() {
  if ($(this).scrollTop() > 275) {
      $('.to-left').stop().animate({ right: '-60%' }, 1000);
  } 
});
$(window).scroll(function() {
    if ($(this).scrollTop() > 275) {
        $('.to-right').stop().animate({ left: '2%' },1000);
    } 
}); 



$(".pricing-link").click(function() {
  $('html, body').animate({
      scrollTop: $("#pricing").offset().top
  }, 2000);
});

var featuresSection = "#features";
if(detectMob()){
  featuresSection +="2";
}
$(".whyUs-link").click(function() {
  $('html, body').animate({
      scrollTop: $(featuresSection).offset().top
  }, 2000);
});

$(".contactUs-link").click(function() {
  $('html, body').animate({
      scrollTop: $("#contactUs").offset().top
  }, 2000);
});