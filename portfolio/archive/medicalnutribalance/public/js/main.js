$(function() {

	$('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	});


	var height = $(window).height();
	var width = $(window).width();


	$(".background_title").height(height);


	$(".navbar-nav li a").click(function(event) {
	    if (!$(this).parent().hasClass('dropdown'))
	        $(".navbar-collapse").collapse('hide');
	});


	$(window).scroll(function() {
	    if ($(this).scrollTop() >= 420) {
	        $('#return-to-top').fadeIn(200);
	    } else {
	        $('#return-to-top').fadeOut(200);
	    }
	});	


	if (width > 992) {
		$('.navbar-fixed-top').addClass('navbar-fixed-top_height');

		$(window).scroll(function() {
		    if ($(this).scrollTop() >= height) {
		        $('nav').fadeIn(200);
		    } else {
		        $('nav').fadeOut(200);
		    }
		});
	};


	$('body').scrollspy({target: '.navbar'});
	

	var offset = 50;

	$('.navbar li a').click(function(event) {
	    event.preventDefault();
	    $($(this).attr('href'))[0].scrollIntoView();
	    scrollBy(0, -offset);
	});


	$('#return-to-top').click(function() {
	    $('body,html').animate({
	        scrollTop : 0
	    }, 500);
	});


	$('#button_map').click(function() {
	    $('.overlay_map').addClass('overlay_map_after');
	});

	$('#button_map').click(function() {
	    $('.button_map').addClass('button_map_after');
	});

});