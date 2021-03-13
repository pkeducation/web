function detectMob() {
    if($(window).width() <= 992) {
      return true;
    } else {
      return false;
    }
 }

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
  
  $("#toTopBtn").on('click', function(){
    $("html, body").animate({scrollTop: $("#top").offset().top}, 500);
  })

  
var featuresSection = "#features";
if(detectMob()){
  featuresSection +="2";
}

$(".pricing-link").on('click', function() {
  $('html, body').animate({
      scrollTop: $("#pricing").offset().top
  }, 2000);
});

$(".whyUs-link").on('click', function() {
  $('html, body').animate({
      scrollTop: $(featuresSection).offset().top
  }, 2000);
});
