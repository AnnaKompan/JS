const list = document.querySelector("ul");
const listItem = document.createElement("li");
const btn = document.querySelector(".btn");
const formInput = document.querySelector(".form-input");
const select = document.querySelector(".lang-select");
const textOutput = document.querySelector(".lang-list-text");
const valueOutput = document.querySelector(".lang-list-value");

listItem.textContent = "hi";
listItem.classList.add("list-item");
listItem.style.fontSize = "24px";
list.append(listItem);
btn.addEventListener("click", (event) => {
  console.log(event.type);
  console.log(event.currentTarget);
});

formInput.addEventListener("keydown", (e) => {
  keys = e.key;
  code = e.code;
  console.log(keys);
  console.log(code);
});

function setOutput(event) {
  const selectedOptionValue = event.currentTarget.value;
  const selectedOptionIndex = event.currentTarget.selectedIndex;
  const selectedOptionText =
    event.currentTarget.options[selectedOptionIndex].text;
  textOutput.textContent = selectedOptionText;
  valueOutput.textContent = selectedOptionValue;
}
select.addEventListener("change", setOutput);

// njdfnsjkdfnsfjndsfjks
// function setOutput(event) {
//   const selectedOptionValue = event.currentTarget.value;
//   const selectedOptionIndex = event.currentTarget.selectedIndex;
//   const selectedOptionText =
//     event.currentTarget.options[selectedOptionIndex].text;

//   textOutput.textContent = selectedOptionText;
//   valueOutput.textContent = selectedOptionValue;
// }
