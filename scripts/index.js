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
  link.addEventListener("click", () => {
    hiddenMenu.style.transform = "translateX(200em)";
  });
});

AOS.init({
  duration: 1500,
  easing: "ease-in-out",
  once: true,
});

const photoHighlightSwiper = new Swiper(".photo-highlights-swiper", {
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

const desktopPhotoHighlightSwiper = new Swiper(".desktop-photo-swiper", {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 0,
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 3000, // time between slides (ms) → 3000ms = 3 seconds
    disableOnInteraction: false, // keeps autoplay running after user swipes
  },
});

const projectsSwiper = new Swiper(".latest-projects-swiper", {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 0,
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const campaignsSwiper = new Swiper(".ongoing-campaigns-swiper", {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 0,
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const learnMoreButtons = document.querySelectorAll(".learn-more-link");
const popUpWindow = document.querySelector(".pop-up-window-hidden");
const popUpCloseButton = document.querySelector(".close-pop-up-button");
learnMoreButtons.forEach((button) => {
  button.addEventListener("click", () => {
    popUpWindow.style.display = "flex";
  });
});

popUpCloseButton.addEventListener("click", () => {
  popUpWindow.style.display = "none";
});
