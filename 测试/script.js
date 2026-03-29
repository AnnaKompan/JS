const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = form.elements.email.value;
  const password = form.elements.password.value;
  console.log(email, password);
  message.textContent = `Email: ${email}, Password: ${password}`;
});

// next: password validation, center element within div
// JS filter numbers, map find remove duplicates(Set()) reverse string
