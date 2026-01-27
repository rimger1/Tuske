//cutsceene
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

/* 
document.querySelectorAll("input[type=button]").forEach(btn => {
  btn.addEventListener("click", () => {
    last = btn.id;
  });
});

let last;
*/
