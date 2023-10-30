let upBtn = document.querySelector(".up-button");
let downBtn = document.querySelector(".down-button");
let sidebarDiv = document.querySelectorAll(".sidebar div");
let sidebar = document.querySelector(".sidebar");
let mainSlide = document.querySelector(".main-slide");
let slidesCount = mainSlide.querySelectorAll("div").length;
let activeSlideIndex = 0;
const container = document.querySelector(".container").clientHeight;

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener("click", () => {
  changeSlide("up");
});
downBtn.addEventListener("click", () => {
  changeSlide("down");
});
function changeSlide(direction) {
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex === slidesCount) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesCount - 1;
    }
  }

  mainSlide.style.transform = `translateY(-${activeSlideIndex * container}px)`;
  sidebar.style.transform = `translateY(${activeSlideIndex * container}px)`;
}
