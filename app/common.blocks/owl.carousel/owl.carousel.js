$('.owl-carousel').owlCarousel({
    loop:true,
    margin: 30,
    nav : true,
    autoWidth:true,
    navText: ['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>'],
    navClass: ['btn owlCarousel-left','btn owlCarousel-right'],
    center:true,
    lazyLoad: true,
    dots: false,
    items: 3,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }
    }
});

