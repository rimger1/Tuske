document.querySelectorAll("input[type=button]").forEach(btn => {
  btn.addEventListener("click", () => {
    last = btn.id;
  });
});

let last;



//cutsceene
const box = document.getElementById("bkar");
let x = 0;

function animate() {
  x += 0;                     // speed
  box.style.left = x + "px";  // move the div

  if (x < 400) {              // stop at 400px
    requestAnimationFrame(animate);
  }
}

animate();


//
const fade = document.getElementById("fade");

fade.addEventListener("animationend", () => {
  console.log("Fade finished, start the game");
  startGame();
});

function startGame() {
  // your game logic here
}
