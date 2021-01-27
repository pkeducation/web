
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

/* adding back to top button */
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

var mybutton = document.getElementById("toTopBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function backToTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}