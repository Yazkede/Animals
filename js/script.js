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
            breakpoint: 768,
            settings: {
               slidesToShow: 2,
               arrows: false,
            }
         },
         {
            breakpoint: 550,
            settings: {
               slidesToShow: 1,
               arrows: false,
            }
         },
         {
            breakpoint: 1199,
            settings: {
               arrows: false,
            }
         }
      ]
   }
   );
});

