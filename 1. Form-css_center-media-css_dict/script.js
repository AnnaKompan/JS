const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = form.elements.email.value;
  const password = form.elements.password.value;
  console.log(email, password);
  message.textContent = `Email: ${email}, Password: ${password}`;
});
