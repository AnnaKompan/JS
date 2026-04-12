const form = document.querySelector(".form");
const formInput = document.querySelector(".form-txt");
const localStorageKey = "form-text";
const delBtn = document.querySelector(".form-del-btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.setItem(localStorageKey, e.target.elements.text.value);
});
delBtn.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.removeItem(localStorageKey);
  form.reset();
});

formInput.value = localStorage.getItem(localStorageKey) ?? "";
