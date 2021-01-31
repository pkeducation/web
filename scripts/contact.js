/* top button functionality */
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