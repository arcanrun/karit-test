$(document).ready(function(){function moveToSelected(element) {

  if (element == "next") {
    var selected = $(".selected").next();
  } else if (element == "prev") {
    var selected = $(".selected").prev();
  } else {
    var selected = element;
  }

  var next = $(selected).next();
  var prev = $(selected).prev();
  var prevSecond = $(prev).prev();
  var nextSecond = $(next).next();
  var prevSecond_2 = $(prevSecond).prev();
  var nextSecond_2  = $(nextSecond).next();

  $(selected).removeClass().addClass("selected");

  $(prev).removeClass().addClass("prev");
  $(next).removeClass().addClass("next");

  $(nextSecond).removeClass().addClass("nextRightSecond");
  $(prevSecond).removeClass().addClass("prevLeftSecond");

  $(nextSecond_2).removeClass().addClass('nextRightSecond_2');
  $(prevSecond_2).removeClass().addClass('prevLeftSecond_2');

  $(nextSecond_2).nextAll().removeClass().addClass('hideLeft');
  $(prevSecond_2).prevAll().removeClass().addClass('hideRight');


}

// Eventos teclado
$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        moveToSelected('prev');
        break;

        case 39: // right
        moveToSelected('next');
        break;

        default: return;
    }
    e.preventDefault();
});

$('#carousel div').click(function() {
  moveToSelected($(this));
});

$('#prev').click(function(e) {
  e.preventDefault();
  moveToSelected('prev');
});

$('#next').click(function(e) {
  e.preventDefault();
  moveToSelected('next');
});
$('.owl-test').owlCarousel({
    loop:true,
    margin: 0,
    nav:true,
    center:true,
    lazyLoad: true,
  
    responsive:{
        0:{
            items:5
        },
        600:{
            items:5
        },
        1000:{
            items:5
        }
    }
});


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



$('.hamburger').on('click', function(){
	$('.hamburger > .hamburger__bar').toggleClass('hamburger__bar_active_true');
	$('.page').toggleClass('page_scroll_false');
	$('.menu-mobile').toggleClass('menu-mobile_visible_true');

});

});