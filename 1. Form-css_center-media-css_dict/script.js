const form = document.getElementById("loginForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const { email, phone, password } = e.target.elements;
  console.log(
    `Email: ${email.value} Phone: ${phone.value} Password: ${password.value}`,
  );
});
