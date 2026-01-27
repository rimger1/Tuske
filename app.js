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
  intro.remove();
});


// cutscene 1

const karakter = document.getElementById("karakter");

function animacio()
{
  karakter.style.left = x + "px";
  requestAnimationFrame(animacio)
}


















/* 
document.querySelectorAll("input[type=button]").forEach(btn => {
  btn.addEventListener("click", () => {
    last = btn.id;
  });
});

let last;
*/
