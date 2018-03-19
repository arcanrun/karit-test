$('.hamburger').on('click', function(){
	$('.hamburger > .hamburger__bar').toggleClass('hamburger__bar_active_true');
	$('.page').toggleClass('page_scroll_false');
	$('.menu-mobile').toggleClass('menu-mobile_visible_true');

});

