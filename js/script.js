$(document).ready(function () {
   $('.header__burger').click(function () {
      $('.header__burger, .header__list').toggleClass('active');
      $('body').toggleClass('lock');
   });

   $('.header__menu').click(function () {
      $('.header__burger, .header__list').removeClass('active');
      $('body').removeClass('lock');
   });

   $('.slider').slick({
      arrows: true,
      dots: true,
      slidesToShow: 1,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 1500,
      responsive: [
         {
            breakpoint: 1199,
            settings: {
               arrows: false,
            }
         },
         {
            breakpoint: 768,
            settings: {
               arrows: false,
               slidesToShow: 2
            }
         },
         {
            breakpoint: 550,
            settings: {
               arrows: false,
               slidesToShow: 1
            }
         }
      ]
   }
   );
});

