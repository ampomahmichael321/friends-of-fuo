const donationStorySwiper = new Swiper(".mobile-impact-in-action-swiper", {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 20,
  direction: "horizontal",
  loop: false,
  autoplay: {
    delay: 4000, // time between slides (ms) → 4000ms = 4 seconds
    disableOnInteraction: false, // keeps autoplay running after user swipes
  },
});

const desktopDonationStorySwiper = new Swiper(
  ".desktop-impact-in-action-swiper",
  {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 20,
    direction: "horizontal",
    loop: false,
    autoplay: {
      delay: 4000, // time between slides (ms) → 4000ms = 4 seconds
      disableOnInteraction: false, // keeps autoplay running after user swipes
    },
  },
);
