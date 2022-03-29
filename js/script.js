jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  const swiper = new Swiper(".swiper", {
    // slider
    autoplay: {
      delay: 1000,
    },
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },
  });
});
