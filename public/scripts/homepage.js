function detectMob() {
  if($(window).width() <= 992) {
    return true;
  } else {
    return false;
  }
}

$(window).scroll(function() {
  if ($(this).scrollTop() > 275) {
      $('.to-left').stop().animate({ left: '60%' }, 1000);
      $('.to-right').stop().animate({ left: '2%' },1000);
  } 
});