// const form = document.getElementById("loginForm");
const openBtn = document.getElementById("modal-popup");
const closeBtn = document.getElementById("close-btn");
const backdrop = document.querySelector(".backdrop");

// form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   const { email, phone, password } = e.target.elements;
//   console.log(
//     `Email: ${email.value} Phone: ${phone.value} Password: ${password.value}`,
//   );
// });

function openModal() {
  backdrop.classList.remove("is-hidden");
}

function closeModal() {
  backdrop.classList.add("is-hidden");
}
openBtn.addEventListener("click", openModal);

closeBtn.addEventListener("click", closeModal);

backdrop.addEventListener("click", (e) => {
  if (e.target === backdrop) {
    closeModal();
  }
});

// close по ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});
