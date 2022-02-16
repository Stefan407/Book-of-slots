// $(function () {

//   $(".star ").rateYo({
//     readOnly: true,
//     starWidth: "13px",
//     ratedFill: "#FFBF60"
//   });

//   $(".comments__star ").rateYo({
//     readOnly: true,
//     starWidth: "22px",
//     ratedFill: "#FFBF60"
//     // "starSvg":  "<svg xmlns="http://www.w3.org/2000/svg/" width="22" height="20" viewBox="0 0 22 20" fill="none">"+
//     //               "<path d="M8.62249 7.01819 L111.30198 L13.3775 7.01819 C13.4927"+
//     //                         "7.29518 13.7532 7.48444 14.0522 7.50841L20.2234 8.00315L15.5216" +
//     //                         "12.0307C15.2938 12.2259 15.1943 12.5321 15.2639 12.8239L16.7004" +
//     //                         "18.8459L11.417 15.6188C11.161 15.4624 10.839 15.4624 10.583" +
//     //                         "15.6188L5.29965 18.8459L6.73611 12.8239C6.80571 12.5321 6.70622" +
//     //                         "12.2259 6.47839 12.0307L1.77663 8.00315L7.94777 7.50841C8.2468" +
//     //                         "7.48444 8.50729 7.29518 8.62249 7.01819 Z"+
//     //                         "fill="#FFBF60" stroke="#FF9900"/>"+
//     //               "</svg>"
//   });

//   $(".top__casino-star").rateYo({
//     readOnly: true,
//     starWidth: "22.56px",
//     ratedFill: "#FFBF60"
//   });
// });

let menuOpen = document.querySelector('.header__menu-open');
let menuClose = document.querySelector('.MobileMenu__close');
let menu = document.querySelector('.MobileMenu__inner');


menuOpen.addEventListener('click', () => {
  menu.classList.add('MobileMenu__inner--active');
});

menuClose.addEventListener('click', () => {
  menu.classList.remove('MobileMenu__inner--active');
});

// let reviewMore = document.querySelector('.review__more-btn');
// let reviewTxt = document.querySelector('.review__block-text');

// reviewMore.addEventListener('click', () => {
//   reviewTxt.style.height = reviewTxt.style.height == 'auto' ? '407px' : 'auto';
// });

const faqs = document.querySelectorAll('.faqs__item');
const faqsInfo = document.querySelectorAll('.faqs__item-info');

faqs.forEach((faq) => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('open');
  });
});

// faqs.forEach((faq) => {
//   faq.addEventListener('click', () => {
//     faq.classList.toggle('active');
//   });

//   faq.addEventListener('click', () => {
//     faqsInfo.forEach((inf) => {
//       inf.style.display = inf.style.display === 'block' ? 'none' : 'block';
//       faq.style.flexDirection = faq.style.flexDirection === 'column' ? 'row' : 'column';
//     });
//   });
// });