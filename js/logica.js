$(document).ready(function(){

	var mySwiper = new Swiper ('.swiper-container', {
	    // Optional parameters
	    direction: 'horizontal',
	    loop: true,
	    // If we need pagination
	    pagination: {
	      el: '.swiper-pagination',
	    },
	    // Navigation arrows
	    navigation: {
	      nextEl: '.swiper-button-next',
	      prevEl: '.swiper-button-prev',
	    },
	    // And if we need scrollbar
	    scrollbar: {
	      el: '.swiper-scrollbar',
	    }
	});

	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	        600:{
	            items:3,
	            nav:false
	        },
	        1000:{
	            items:5,
	            nav:true,
	            loop:true
	        }
	    }
	});

	$(window).scroll(function() {
		scroll = $(window).scrollTop();
	    if (scroll > 300) {
	      	$("#up-all").fadeIn('fast');
	    } else {
	      	$("#up-all").fadeOut('fast');
	    }
	    /*console.log($(window).scrollTop());*/
	});

	$("#up-all").click(function(){
		 $('html, body').animate({scrollTop:0}, '100');
	});

});
