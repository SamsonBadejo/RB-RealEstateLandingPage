const menuBtn = document.getElementById("menu");
const nav = document.getElementById("nav");
const closeBtn = document.getElementById("close");

let btnClicked = false;

menuBtn.addEventListener("click", (e) => {
  btnClicked = !btnClicked;
  if (btnClicked) {
    nav.style.display = "block";
    console.log("clicked");
  } else {
    nav.style.display = "none";
    console.log("unclicked");
  }
});

closeBtn.addEventListener("click", (e) => {
  // nav.style.display = "none";
  nav.animate([{ opacity: 1 }, { opacity: 0 }], 800);
  setTimeout(() => {
    nav.style.display = "none";
  }, 800);
});

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".card-wrapper", {
    loop: true,
    autoplay: {
      delay: 3000,
    },
    centeredSlides: true, // Ensures the middle slide is the focus
    slidesPerView: "auto", // Allows slides to auto-size properly
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 20 },
      768: { slidesPerView: 2, spaceBetween: 40 },
      1024: { slidesPerView: 3, spaceBetween: 50 },
    },
    on: {
      slideChangeTransitionEnd: function () {
        // Remove active class from all slides
        document.querySelectorAll(".swiper-slide").forEach((slide) => {
          slide.classList.remove("active-slide");
        });

        // Add active class to the currently centered slide
        const activeSlide = this.slides[this.activeIndex];
        activeSlide.classList.add("active-slide");
      },
    },
  });
});

// scrollLINk Effect

const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800,
  speedAsDuration: true,
});

// Reveal animation effects

document.addEventListener("DOMContentLoaded", function () {
  // steps-services section
  ScrollReveal().reveal(".steps-services div", {
    origin: "bottom",
    distance: "40px",
    duration: 800,
    delay: 400,
    easing: "ease-in-out",
    interval: 200, // Staggers animation for each box
    reset: true,
  });

  ScrollReveal().reveal(".aboutus-text", {
    origin: "bottom", // Animation starts from the left
    distance: "50px", // Moves 50px before appearing
    duration: 1000, // Animation duration (in milliseconds)
    delay: 200, // Delay before animation starts
    easing: "ease-in-out",
    reset: true, // Repeats animation when you scroll back
  });

  ScrollReveal().reveal(".aboutus-img", {
    origin: "bottom",
    distance: "50px",
    duration: 1200,
    delay: 300,
    easing: "ease-in-out",
    reset: true,
  });

  ScrollReveal().reveal(".reviews div", {
    origin: "bottom",
    distance: "40px",
    duration: 800,
    easing: "ease-in-out",
    delay: 400,
    interval: 200, // Staggers animation for each box
    reset: true,
  });

  // agents section
  ScrollReveal().reveal(".agents div", {
    origin: "bottom",
    distance: "40px",
    duration: 800,
    easing: "ease-in-out",
    delay: 400,
    interval: 200, // Staggers animation for each box
    reset: true,
  });

  // form section

  ScrollReveal().reveal(".form-title", {
    origin: "left",
    distance: "50px",
    duration: 1200,
    delay: 300,
    easing: "ease-in-out",
    reset: true,
  });

  ScrollReveal().reveal(".form-title", {
    origin: "bottom",
    distance: "50px",
    duration: 1200,
    delay: 300,
    easing: "ease-in-out",
    reset: true,
  });

  ScrollReveal().reveal("form", {
    origin: "bottom",
    distance: "50px",
    duration: 1200,
    delay: 300,
    easing: "ease-in-out",
    reset: true,
  });
});
