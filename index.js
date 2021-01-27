if ($(window).width() >= 1200) {
 
  $(window).scroll(function() {
    if ($(this).scrollTop() > 275) {
        $('.to-left').stop().animate({ right: '-60%' });
    } else {
        $('.to-left').stop().animate({ right: '-120%' });
    }
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 275) {
            $('.to-right').stop().animate({ left: '20%' });
        } else {
            $('.to-right').stop().animate({ left: '-40%' });
        }
        });

}