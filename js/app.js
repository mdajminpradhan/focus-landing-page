autoplay: false,
$(document).ready(function () {
  //for proejcts
  $(".latest_body").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    margin: 50,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
      1300: {
        items: 4,
      },
    },
  });

  //for testimonials
  $(".owl-two").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  //faq
  $( "#accordion" ).accordion();


});


// responsive mainmenu
let headerTop = document.querySelector('.header-top');
let myMenu = document.querySelector('.mymenu').addEventListener('click', (event)=> {
  headerTop.classList.toggle('myMenuShow');
});