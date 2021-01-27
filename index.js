
function detectmob() {
    if($(window).width() <= 1200 || $(window).height() <= 1000) {
      return true;
    } else {
      return false;
    }
 }

if (!detectmob()) {
 
  $(window).scroll(function() {
    if ($(this).scrollTop() > 275) {
        $('.to-left').stop().animate({ right: '-60%' }, 1000);
    } else {
        $('.to-left').stop().animate({ right: '-120%' }, 1000);
    }
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 275) {
            $('.to-right').stop().animate({ left: '20%' },1000);
        } else {
            $('.to-right').stop().animate({ left: '-40%' }, 1000);
        }
        });
}
/* else {
    window.reload();
    $("#features").css("display","none");
    $("#features2").css("display","block");

} */