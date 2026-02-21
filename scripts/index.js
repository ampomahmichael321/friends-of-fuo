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
  loop: false,

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
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const learnMoreButtons = document.querySelectorAll(".learn-more-link");
const popUpWindow = document.querySelector(".pop-up-window-hidden");
const popUpWindowHeading = document.querySelector(".pop-up-heading");
const popUpWindowContent = document.querySelector(".pop-up-main-content");
const popUpCloseButton = document.querySelector(".close-pop-up-button");
learnMoreButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    popUpWindow.style.display = "flex";
    popUpWindow.style.transform = "translateX(0)";
    const campaign = event.target.dataset.campaign;
    if (campaign == "support-classroom") {
      popUpWindowHeading.innerHTML =
        "<h2>No Child Should Learn On The Floor</h2>";

      popUpWindowContent.innerHTML = `
        <p>This allows you to raise more per donor without pressure.</p>
        <p>Example Giving Levels</p>
        <ul>
          <li>$60 - Student desk (2 students)</li>
          <li>$120 - Teacher desk</li>
          <li>$150 - Whiteboard</li>
          <li>$500 - Equip a classroom</li>
          <li>$1,000 - Adopt a classroom</li>

        </ul>
        <a href="" class="button donate-button">DONATE</a>


        `;
    } else if (campaign == "no-child") {
      popUpWindowHeading.innerHTML =
        "<h2>No Child Should Learn On The Floor</h2>";
      popUpWindowContent.innerHTML = `
      <p>
        Right now, students at Fuo AME Zion Basic School in Tamale, Ghana are doing everything right-showing up, studying hard, dreaming big. But many are still sitting on the floor.
        Not because they lack intelligence. Not because they lack discipline. But because they lack desks.
        Friends of Fuo 2 Inc. exists to solve one simple solvable problem: dignity in learning.
      </p>
    
      <p>
      For every $60, you don’t just buy a desk. You restore posture, focus, pride, and possibility for two children-every single school day.
      </p>
    
      <p>
      This isn’t charity. <br>
      This is infrastructure for potential.<br>
      If you ever believed education changes lives, this is your moment to act
      </p>
      <p>Donate, Share, Stand with us. Because talent should never be limited by furniture</p>
      <a href="" class="button donate-button">DONATE</a>

      `;
    }
  });
});

popUpCloseButton.addEventListener("click", () => {
  popUpWindow.style.display = "none";
});

const copyrightText = document.querySelector(".copyright-text");
const currentYear = new Date().getFullYear();
copyrightText.innerHTML = `Copyright &copy; Friends of Fuo 2 Inc. ${currentYear}`;
