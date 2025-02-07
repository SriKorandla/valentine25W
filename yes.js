const heartWrapper = document.getElementById("heart-wrapper");
const heart = document.getElementById("heart");

heart.addEventListener("click", () => {
  heart.classList.add("heart--active");
  heartWrapper.classList.add("heart__wrapper--active");
  setTimeout(() => {
    heart.classList.remove("heart--active");
    heartWrapper.classList.remove("heart__wrapper--active");
  }, 1500);
});
