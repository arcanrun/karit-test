function moveToSelected(element) {

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