(function($){
  $(function(){

    $('.button-collapse').sideNav({
	      menuWidth: 240, // Default is 240
	      edge: 'left', // Choose the horizontal origin
	      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
	    }
	);

	$('.carousel').carousel({
		time_constant: 200,
		dist: -100,
		shift: 0,
		padding: 80,
		indicators: true,
		no_wrap: false
	});

	// Next slide
	$('.carousel').carousel('next');
	$('.carousel').carousel('next', 3); // Move next n times.
	// Previous slide
	$('.carousel').carousel('prev');
	$('.carousel').carousel('prev', 4); // Move prev n times.
	// Set to nth slide
	$('.carousel').carousel('set', 4);

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
	});

  }); // end of document ready
})(jQuery); // end of jQuery name space