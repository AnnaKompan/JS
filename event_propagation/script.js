const colorPalette = document.querySelector(".color-palette");
const output = document.querySelector(".output");
const scrollOutput = document.querySelector(".scroll-output");

colorPalette.addEventListener("click", selectColor);

function selectColor(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }
  const selectedColor = event.target.dataset.color;
  output.textContent = `Selected Color: ${selectedColor}`;
  output.style.color = selectedColor;
}
createPaletteItems();

function createPaletteItems() {
  const items = [];
  for (let i = 0; i < 60; i++) {
    const color = getRandomHexColor();
    const item = document.createElement("button");
    item.type = "button";
    item.dataset.color = color;
    item.style.backgroundColor = color;
    item.classList.add("item");
    items.push(item);
  }
  colorPalette.append(...items);
}

function getRandomHexColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

// scroll counter logic
let scrollEventCounter = 0;
document.addEventListener("scroll", () => {
  scrollEventCounter += 1;
  scrollOutput.textContent = scrollEventCounter;
});
