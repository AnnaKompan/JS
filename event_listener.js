// eventListener - listen for specific events to create interactive elements on the page
// document.addEventListener('click', function(event)); => document.addEventListener(event, callback);

const btn = document.getElementById("btn");
const moveAmount = 10;
let x = 0; // horizontal movement
let y = 0; // vertical movement

document.addEventListener("keydown", (event) => {
  if (event.key.startsWith("Arrow")) {
    // event.preventDefault();
    switch (event.key) {
      case "ArrowUp":
        y -= moveAmount;
        break;
      case "ArrowDown":
        y += moveAmount;
        break;
      case "ArrowLeft":
        x -= moveAmount;
        break;
      case "ArrowRight":
        x += moveAmount;
        break;
    }
    btn.style.top = `${y}px`;
    btn.style.left = `${x}px`;
  }
});

document.addEventListener("keydown", (event) => {
  btn.textContent = "!";
  btn.style.backgroundColor = "red";
});

document.addEventListener("keyup", (event) => {
  btn.textContent = "🛑";
  btn.style.backgroundColor = "bisque";
});
