const ourImpactSwiper = new Swiper(".our-impact-swiper", {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 0,
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 3000, // time between slides (ms) → 3000ms = 3 seconds
    disableOnInteraction: false, // keeps autoplay running after user swipes
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
