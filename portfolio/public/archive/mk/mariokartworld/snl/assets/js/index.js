$(function () {
  $('[data-toggle="tooltip"]').tooltip();

  $('.collapse').collapse();

  /*document.querySelectorAll('.war').forEach(function (war) {
    var scores = Array.from(war.getElementsByClassName("score"));
    var winIndex = scores.reduce((iMax, x, i, arr) => parseInt(x.innerText, 10) > parseInt(arr[iMax].innerText, 10) ? i : iMax, 0);
    scores.forEach((score, i) => score.classList.add(winIndex == i ? 'win' : 'lose'));
  });*/

$('.war').each(function(index, elem) {
    var $elem = $(elem);
    var warScores = [];
    $elem.find('.score').each(function(i,el) {
       var txt = $(el).text();
       var num = (txt && txt.length > 0) ? parseInt(txt) : null;
       if (num !== null) {
           warScores.push({
               elem: $(el),
               score: num
           });
       }
    });
    if (warScores.length === 2) {
       if (warScores[0].score > warScores[1].score) {
           warScores[0].elem.addClass('win');
           warScores[1].elem.addClass('lose');
       } else if (warScores[0].score === warScores[1].score) {
           warScores[0].elem.addClass('draw');
           warScores[1].elem.addClass('draw');
       } else if (warScores[0].score < warScores[1].score) {
           warScores[1].elem.addClass('win');
           warScores[0].elem.addClass('lose');
       }
    }
  });

  $('.nav-list-bricks').on('click', 'a', function () {
    $('.nav-list-bricks li a.active').removeClass('active');
    $(this).addClass('active');
  });

  /*
    $('a[href*="#"]:not([href="#"])').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  */

  $(window).on('hashchange load', function () {
    $('.tab-content .resultado-semanal').removeClass("active");
    var hash = window.location.hash.substr(1);
    var semanaId = document.getElementById(hash);
    semanaId.className += " active";

    $(".nav-list-bricks li a").each(function (i, obj) {
      if ($(this).attr('href') == '#' + hash) {
        $(this).addClass('active');
      }
    });
  });

  $('.war-info .table').click(function () {
    $('#table-modal-img').attr('src', $(this).data('img'));
    $('#table-modal').modal({ show: true })
  });
/*
  if($('.info span.score')) {
    $('$this.parent(".team"):nth-child(1) .name').css( "padding-right", "33px" );
    $('$this.parent(".team"):nth-child(2) .name').css( "padding-left", "33px" );
  }*/

})