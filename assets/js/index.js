$(function(){

  // ===== Scroll to Top ===== 
  $(window).scroll(function() {
      if ($(this).scrollTop() >= 450) {        // If page is scrolled more than 450px
          $('#return-to-top').fadeIn(200);    // Fade in the arrow
      } else {
          $('#return-to-top').fadeOut(200);   // Else fade out the arrow
      }
  });
  $('#return-to-top').click(function() {      // When arrow is clicked
      $('body,html').animate({
          scrollTop : 0                       // Scroll to top of body
      }, 500);
  });

});

// ===== Toggle play/pause =====
  $("#audio-play-pause").click( function (){
    if( $("#audio").paused ) {
        $("#audio").play();
        $("i", this).toggleClass("fa-volume-off fa-volume-up");
        $(this).css("color", "#db5945");
    } else {
        $("#audio").pause();
        $("i", this).toggleClass("fa-volume-off fa-volume-up");
        $(this).css("color", "rgba(125, 125, 125, 0.5)");
    }
  });

function toggleNav() {

  var x = document.getElementById('videoNav');
  var y = document.getElementById('btnNav');

    if (x.style.width === '280px') {
        x.style.width = '0px';
        y.style.left = '0px';
        y.innerHTML='&#9776;';
    } else {
        x.style.width = '280px';
        y.style.left = '280px';
        y.innerHTML='&#9932;';
    }
}