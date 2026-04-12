const colorPalette = document.querySelector(".color-palette");
const output = document.querySelector(".output");
const throttleScrollOutput = document.querySelector(".throttle-scroll-output");
const vanillaScrollOutput = document.querySelector(".vanilla-scroll-output");

colorPalette.addEventListener("click", selectColor);

function selectColor(e) {
  // BUTTON бо назви тегів у верхньому регістрі
  if (e.target.nodeName !== "BUTTON") {
    return;
  }
  selectedColor = e.target.dataset.color;
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
    // dataset - дає доступ до атрибутів data-*
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

let eventCounter = {
  throttle: 0,
  vanilla: 0,
};

document.addEventListener(
  "scroll",
  _.throttle(() => {
    eventCounter.throttle += 1;
    throttleScrollOutput.textContent = eventCounter.throttle;
  }, 300),
);

document.addEventListener("scroll", () => {
  eventCounter.vanilla += 1;
  vanillaScrollOutput.textContent = eventCounter.vanilla;
});
