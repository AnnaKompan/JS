// const form = document.getElementById("loginForm");
const openBtn = document.querySelector(".open-modal");
const closeBtn = document.querySelector(".close-btn");
const backdrop = document.querySelector(".backdrop");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   const { email, phone, password } = e.target.elements;
//   console.log(
//     `Email: ${email.value} Phone: ${phone.value} Password: ${password.value}`,
//   );
// });

openBtn.addEventListener("click", () => {
  backdrop.classList.remove("is-hidden");
});
closeBtn.addEventListener("click", () => {
  backdrop.classList.add("is-hidden");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    backdrop.classList.add("is-hidden");
  }
});
