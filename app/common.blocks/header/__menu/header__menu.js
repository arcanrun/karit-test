// on resize
	//function : if width add modidicator
var win = $(window);
var width = win.width();
var height = win.height();
function menuToMobileAndBack(){
	var win = $(window);
	var width = win.width();
 	var burger = $('.hamburger');
 	var burgerBar = $('.hamburger > .hamburger__bar');
	var menu = $('.header__menu');
	var mobileMnu = $('.menu-mobile');
	

  
	if( width < 660 ) {
		burger.addClass('hamburger_visible_true');
		menu.addClass('header__menu_visible_none');
		

	}
	else {
		burgerBar.removeClass('hamburger__bar_active_true');
		mobileMnu.removeClass('menu-mobile_visible_true');
		burger.removeClass('hamburger_visible_true');
		menu.removeClass('header__menu_visible_none');
		menu.removeClass('header__menu_mobile_true');
		
		$('.header__menu > .menu__item').removeClass('menu__item_mobile_true');
		$('.header__menu > .menu__item > .menu__link').removeClass('menu__link_mobile_true');

	}
}

// touchScroll('scroller')



menuToMobileAndBack();	




win.resize(function(){
	
	// console.log('new' + $(this).width() + "   old" + width)
	if($(this).width() != width){
		width = $(this).width();
		menuToMobileAndBack();
	}

	
})


