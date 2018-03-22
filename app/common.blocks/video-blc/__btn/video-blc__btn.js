$('.video-blc__btn').on('click', function(e){
	e.preventDefault();
	$('.video-blc__iframe').toggleClass('video-blc__iframe_visible_false').css('z-index', '1');
});