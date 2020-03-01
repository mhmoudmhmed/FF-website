// menu fixed js code
$(window).scroll(function () {
  var window_top = $(window).scrollTop() + 1;
  if (window_top > 50) {
    $('.navbar').addClass('menu-fixed animated fadeInDown');
  } else {
    $('.navbar').removeClass('menu-fixed animated fadeInDown');
  }
});

$(document).ready(function(){

  'use strict';
  
  //smoth scroll
  $("nav ul li a, .about .sim-btn").on('click', function(e) {
		
		var full_url = this.href;
		var parts = full_url.split("#");
		var trgt = parts[1];
		var target_offset = $("#"+trgt).offset();
		var target_top = target_offset.top;
		
		$('html,body').animate({scrollTop:target_top -100}, 1000);
			return false;
		
  });
});
