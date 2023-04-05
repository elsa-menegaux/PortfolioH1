const slider = document.querySelector(".slider");
const leftArrow = document.querySelector(".leftArrow");
const rightArrow = document.querySelector(".rightArrow");
const sliderWidth = slider.clientWidth;
let slideIndex = 0;

function showSlide() {
  slider.style.transform = `translateX(-${slideIndex * sliderWidth}px)`;
}

function nextSlide() {
  slideIndex++;
  if (slideIndex > 2) {
    slideIndex = 0;
  }
  showSlide();
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = 2;
  }
  showSlide();
}

let timer = setInterval(nextSlide, 3000);

slider.addEventListener("mouseover", () => {
  clearInterval(timer);
});

slider.addEventListener("mouseout", () => {
  timer = setInterval(nextSlide, 3000);
});

leftArrow.addEventListener("click", prevSlide);
rightArrow.addEventListener("click", nextSlide);
