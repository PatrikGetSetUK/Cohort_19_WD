const slides = document.querySelectorAll(".carousel-slide img");
const bullets = document.querySelectorAll(".carousel-bullets .bullet");
let currentSlide = 0;

function showSlide(number) {
  slides.forEach((slide) => slide.classList.remove("active"));
  bullets.forEach((bullet) => bullet.classList.remove("active"));

  if (number >= slides.length) {
    currentSlide = 0;
  } else if (number < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = number;
  }

  slides[currentSlide].classList.add("active");
  bullets[currentSlide].classList.add("active");
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);

bullets.forEach((bullet, index) => {
  bullet.addEventListener("click", () => {
    showSlide(index);
  });
});

function autoSlide() {
  nextSlide();
}

setInterval(autoSlide, 2000);
