const form = document.querySelector("form");
const formInput = document.querySelector("form__text");
const localStorageKey = "form-text";
const delBtn = document.querySelector("form__btn--delete");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (e.submitter.classList.contains("form__btn")) {
    localStorage.setItem("test", e.target.elements.text.value);
  } else {
    localStorage.removeItem("test");
  }
});
