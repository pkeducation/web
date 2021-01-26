if ($(window).width() >= 1200) {
 
  $(window).scroll(function() {
    if ($(this).scrollTop() > 250) {
        $('.to-left').stop().animate({ right: '-60%' });
    } else {
        $('.to-left').stop().animate({ right: '-100%' });
    }
    });

}


/*   $(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
        jQuery('.to-right').stop().animate({ right: '200px' });
    } else {
        $('.to-right').stop().animate({ right: '-20px' });
    }
    }); */