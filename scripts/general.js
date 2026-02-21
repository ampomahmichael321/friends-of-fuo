const menuButton = document.querySelector(".menu-button");
const hiddenMenu = document.querySelector(".hidden-menu");
const closeButton = document.querySelector(".close-button");
const navLinks = document.querySelectorAll(".nav-link");

menuButton.addEventListener("click", () => {
  hiddenMenu.style.transform = "translateX(0)";
});

closeButton.addEventListener("click", () => {
  hiddenMenu.style.transform = "translateX(200em)";
});
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    hiddenMenu.style.transform = "translateX(200em)";
    navLinks.forEach((link) => link.classList.remove("active-link"));
    event.target.classList.add("active-link");
  });
});

AOS.init({
  duration: 1500,
  easing: "ease-in-out",
  once: true,
});

const ourStorySwiper = new Swiper(".our-story-swiper", {
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
