$(function () {

  $(".star ").rateYo({
    readOnly: true,
    starWidth: "13px",
    ratedFill: "#FFBF60"
  });

  $(".comments__star ").rateYo({
    readOnly: true,
    starWidth: "22px",
    ratedFill: "#FFBF60"
  });
});

let menuOpen = document.querySelector('.header__menu-open');
let menuClose = document.querySelector('.MobileMenu__close');
let menu = document.querySelector('.MobileMenu__inner');


menuOpen.addEventListener('click', () => {
  menu.classList.add('MobileMenu__inner--active');
});

menuClose.addEventListener('click', () => {
  menu.classList.remove('MobileMenu__inner--active');
});