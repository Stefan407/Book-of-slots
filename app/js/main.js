$(function () {

  $(".star ").rateYo({
    readOnly: true,
    fullStar: true,
    starWidth: "13px",
    normalFill: "#FFFFFF",
    ratedFill: "#FFBF60",
    starSvg: '<svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M10.877 0.481713C10.8826 0.468219 10.8894 0.462064 10.8951 0.458448C10.902 0.454095 10.9118 0.450915 10.9232 0.450914C10.9346 0.450914 10.9444 0.454095 10.9513 0.458447C10.957 0.462063 10.9638 0.468218 10.9694 0.481712L13.6057 6.82022C13.6849 7.01065 13.864 7.14076 14.0696 7.15724L20.9125 7.70584C20.9271 7.707 20.935 7.71155 20.9402 7.71587C20.9465 7.72108 20.9525 7.72935 20.9561 7.74023C20.9596 7.7511 20.9596 7.76134 20.9576 7.76924C20.9559 7.7758 20.9522 7.78414 20.9411 7.79365L15.7274 12.2597C15.5708 12.3938 15.5024 12.6044 15.5503 12.805L17.1431 19.4825C17.1465 19.4967 17.1446 19.5057 17.1421 19.512C17.1391 19.5196 17.1331 19.5279 17.1239 19.5346C17.1146 19.5413 17.1049 19.5444 17.0967 19.545C17.09 19.5454 17.0809 19.5444 17.0684 19.5368L11.2099 15.9584C11.0339 15.8509 10.8125 15.8509 10.6365 15.9584L4.77799 19.5368C4.76552 19.5444 4.75642 19.5454 4.74967 19.545C4.74154 19.5444 4.73179 19.5413 4.72254 19.5346C4.71329 19.5279 4.70729 19.5196 4.70427 19.512C4.70177 19.5057 4.6999 19.4967 4.7033 19.4825L6.29614 12.805C6.34399 12.6044 6.27559 12.3938 6.11895 12.2597L0.90535 7.79365C0.89425 7.78414 0.89049 7.7758 0.888819 7.76924C0.886808 7.76134 0.886791 7.7511 0.890324 7.74023C0.893858 7.72935 0.899891 7.72108 0.906158 7.71587C0.911366 7.71155 0.919313 7.70701 0.933881 7.70584L7.77683 7.15724C7.98241 7.14076 8.1615 7.01065 8.2407 6.82022L10.877 0.481713Z" stroke="#FF9900" stroke-width="0.5"/>' +
      '</svg>'
  });

  $(".comments__star").rateYo({
    readOnly: true,
    fullStar: true,
    starWidth: "22px",
    normalFill: "#FFFFFF",
    ratedFill: "#FFBF60",
    starSvg: '<svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M10.877 0.481713C10.8826 0.468219 10.8894 0.462064 10.8951 0.458448C10.902 0.454095 10.9118 0.450915 10.9232 0.450914C10.9346 0.450914 10.9444 0.454095 10.9513 0.458447C10.957 0.462063 10.9638 0.468218 10.9694 0.481712L13.6057 6.82022C13.6849 7.01065 13.864 7.14076 14.0696 7.15724L20.9125 7.70584C20.9271 7.707 20.935 7.71155 20.9402 7.71587C20.9465 7.72108 20.9525 7.72935 20.9561 7.74023C20.9596 7.7511 20.9596 7.76134 20.9576 7.76924C20.9559 7.7758 20.9522 7.78414 20.9411 7.79365L15.7274 12.2597C15.5708 12.3938 15.5024 12.6044 15.5503 12.805L17.1431 19.4825C17.1465 19.4967 17.1446 19.5057 17.1421 19.512C17.1391 19.5196 17.1331 19.5279 17.1239 19.5346C17.1146 19.5413 17.1049 19.5444 17.0967 19.545C17.09 19.5454 17.0809 19.5444 17.0684 19.5368L11.2099 15.9584C11.0339 15.8509 10.8125 15.8509 10.6365 15.9584L4.77799 19.5368C4.76552 19.5444 4.75642 19.5454 4.74967 19.545C4.74154 19.5444 4.73179 19.5413 4.72254 19.5346C4.71329 19.5279 4.70729 19.5196 4.70427 19.512C4.70177 19.5057 4.6999 19.4967 4.7033 19.4825L6.29614 12.805C6.34399 12.6044 6.27559 12.3938 6.11895 12.2597L0.90535 7.79365C0.89425 7.78414 0.89049 7.7758 0.888819 7.76924C0.886808 7.76134 0.886791 7.7511 0.890324 7.74023C0.893858 7.72935 0.899891 7.72108 0.906158 7.71587C0.911366 7.71155 0.919313 7.70701 0.933881 7.70584L7.77683 7.15724C7.98241 7.14076 8.1615 7.01065 8.2407 6.82022L10.877 0.481713Z" stroke="#FF9900" stroke-width="0.5"/>' +
      '</svg>'
  });

  $(".top__casino-star").rateYo({
    readOnly: true,
    fullStar: true,
    starWidth: "22px",
    normalFill: "#FFFFFF",
    ratedFill: "#FFBF60",
    starSvg: '<svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M10.877 0.481713C10.8826 0.468219 10.8894 0.462064 10.8951 0.458448C10.902 0.454095 10.9118 0.450915 10.9232 0.450914C10.9346 0.450914 10.9444 0.454095 10.9513 0.458447C10.957 0.462063 10.9638 0.468218 10.9694 0.481712L13.6057 6.82022C13.6849 7.01065 13.864 7.14076 14.0696 7.15724L20.9125 7.70584C20.9271 7.707 20.935 7.71155 20.9402 7.71587C20.9465 7.72108 20.9525 7.72935 20.9561 7.74023C20.9596 7.7511 20.9596 7.76134 20.9576 7.76924C20.9559 7.7758 20.9522 7.78414 20.9411 7.79365L15.7274 12.2597C15.5708 12.3938 15.5024 12.6044 15.5503 12.805L17.1431 19.4825C17.1465 19.4967 17.1446 19.5057 17.1421 19.512C17.1391 19.5196 17.1331 19.5279 17.1239 19.5346C17.1146 19.5413 17.1049 19.5444 17.0967 19.545C17.09 19.5454 17.0809 19.5444 17.0684 19.5368L11.2099 15.9584C11.0339 15.8509 10.8125 15.8509 10.6365 15.9584L4.77799 19.5368C4.76552 19.5444 4.75642 19.5454 4.74967 19.545C4.74154 19.5444 4.73179 19.5413 4.72254 19.5346C4.71329 19.5279 4.70729 19.5196 4.70427 19.512C4.70177 19.5057 4.6999 19.4967 4.7033 19.4825L6.29614 12.805C6.34399 12.6044 6.27559 12.3938 6.11895 12.2597L0.90535 7.79365C0.89425 7.78414 0.89049 7.7758 0.888819 7.76924C0.886808 7.76134 0.886791 7.7511 0.890324 7.74023C0.893858 7.72935 0.899891 7.72108 0.906158 7.71587C0.911366 7.71155 0.919313 7.70701 0.933881 7.70584L7.77683 7.15724C7.98241 7.14076 8.1615 7.01065 8.2407 6.82022L10.877 0.481713Z" stroke="#FF9900" stroke-width="0.5"/>' +
      '</svg>'
  });

  $(".free-slot__card-star").rateYo({
    readOnly: true,
    fullStar: true,
    starWidth: "18px",
    normalFill: "#FFFFFF",
    ratedFill: "#FFBF60",
    starSvg: '<svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">' +
      '<path d="M10.877 0.481713C10.8826 0.468219 10.8894 0.462064 10.8951 0.458448C10.902 0.454095 10.9118 0.450915 10.9232 0.450914C10.9346 0.450914 10.9444 0.454095 10.9513 0.458447C10.957 0.462063 10.9638 0.468218 10.9694 0.481712L13.6057 6.82022C13.6849 7.01065 13.864 7.14076 14.0696 7.15724L20.9125 7.70584C20.9271 7.707 20.935 7.71155 20.9402 7.71587C20.9465 7.72108 20.9525 7.72935 20.9561 7.74023C20.9596 7.7511 20.9596 7.76134 20.9576 7.76924C20.9559 7.7758 20.9522 7.78414 20.9411 7.79365L15.7274 12.2597C15.5708 12.3938 15.5024 12.6044 15.5503 12.805L17.1431 19.4825C17.1465 19.4967 17.1446 19.5057 17.1421 19.512C17.1391 19.5196 17.1331 19.5279 17.1239 19.5346C17.1146 19.5413 17.1049 19.5444 17.0967 19.545C17.09 19.5454 17.0809 19.5444 17.0684 19.5368L11.2099 15.9584C11.0339 15.8509 10.8125 15.8509 10.6365 15.9584L4.77799 19.5368C4.76552 19.5444 4.75642 19.5454 4.74967 19.545C4.74154 19.5444 4.73179 19.5413 4.72254 19.5346C4.71329 19.5279 4.70729 19.5196 4.70427 19.512C4.70177 19.5057 4.6999 19.4967 4.7033 19.4825L6.29614 12.805C6.34399 12.6044 6.27559 12.3938 6.11895 12.2597L0.90535 7.79365C0.89425 7.78414 0.89049 7.7758 0.888819 7.76924C0.886808 7.76134 0.886791 7.7511 0.890324 7.74023C0.893858 7.72935 0.899891 7.72108 0.906158 7.71587C0.911366 7.71155 0.919313 7.70701 0.933881 7.70584L7.77683 7.15724C7.98241 7.14076 8.1615 7.01065 8.2407 6.82022L10.877 0.481713Z" stroke="#FF9900" stroke-width="0.5"/>' +
      '</svg>'
  });
});

const menuOpen = document.querySelector('.header__menu-open');
const menuClose = document.querySelector('.MobileMenu__close');
const menu = document.querySelector('.MobileMenu__inner');

menuOpen.addEventListener('click', () => {
  menu.classList.add('MobileMenu__inner--active');
});

menuClose.addEventListener('click', () => {
  menu.classList.remove('MobileMenu__inner--active');
});

const reviewMore = document.querySelector('.review__more-btn');
const reviewTxt = document.querySelector('.review__block-text');

if (reviewMore.style.display == "none") {
  reviewMore.addEventListener('click', () => {
    reviewTxt.classList.toggle('review__block-text--active');
  });
}

const faqs = document.querySelectorAll('.faqs__item');
const faqsInfo = document.querySelectorAll('.faqs__item-info');

faqs.forEach((faq) => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('open');
  });
});