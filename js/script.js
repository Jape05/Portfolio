$(document).ready(function () {
  $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.getElementById('menu_icon');
  const menuBar = document.getElementById('menu_bar');

  menuIcon.addEventListener('click', function () {
    menuBar.classList.toggle('active');
  });
});

window.onload = function(){
  $('#preloader').fadeOut();
  $('body').removeClass('hidden');
}


