$(document).ready(function(){
  var burger          = $('.burger'),
      mobileMenu      = $('.mobile-menu'),
      opacity         = $('.opac'),
      body            = $('body');

  $('body').delegate('.burger, .opac','click',  function(){
    burger.toggleClass('burger-active');
    mobileMenu.toggleClass('show');
    opacity.toggleClass('active');
    body.toggleClass('no-scroll');
  });

  $(".carousel").owlCarousel({
    loop: true,
    pagination: true,
    autoHeight:false,
    smartSpeed: 700,
    items: 4,
    // autoplay: 3000,
    responsiveClass: true,
    responsive: {
      0:{
      items: 1
      }
    }
  });

  $(window).scroll(function() {
    var scroll_top = $(this).scrollTop();
    scroll_top > 900 ? $('#toTop').fadeIn() : $('#toTop').fadeOut(); 
  });

  $('#toTop').click(function() {
    $('body, html').animate({scrollTop: 0}, 400);
    return false;
  });


  $('body').delegate('.primary-button, .pop-overlay, .hidden','click',  function(){
      $('.wrapper').toggleClass('show');
      $('.pop-overlay').toggleClass('active');
      body.toggleClass('no-scroll');
    });
});