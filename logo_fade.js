/*indul a jatek*/
const intro = document.getElementById("intro");
const logo = document.getElementById("tuske-feher");

setTimeout(() => {
  logo.style.opacity = 1;
}, 1000);

setTimeout(() => {
  intro.classList.add("fade-out");
}, 4000);

intro.addEventListener("animationend", () => {
  intro.style.zIndex=0;
});
