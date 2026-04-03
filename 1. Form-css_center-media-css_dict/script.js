const form = document.getElementById("loginForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const { email, phone, password } = e.target.elements;
  console.log(
    `Email: ${email.value} Phone: ${phone.value} Password: ${password.value}`,
  );
});

const arr = [1, 2, 3, 3, 3, 2, 1, 4, 5, 8, 10, 20, 44, 20, 1];

const mapResult = arr.map((x) => x * 2);
// повертає новий масив з трансформованими елементами
console.log(`Mapping Result: ${mapResult}`);

// повертає новий масив з елементами які satisfy condition
const filterRes = arr.filter((x) => x < 3);
console.log(`Filtering Result: ${filterRes}`);

// return first element that fits condition
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Andrew" },
  { id: 3, name: "Andrew" },
];
const findRes = users.find((x) => x.name === "Andrew");
console.log("Fin Results: ", findRes);

// Used spead operator to transform set to array
// Set - це колекція унікальних значень.
const setRes = [...new Set(arr)];
console.log(`Removed duplicates from ${arr}, Result: ${setRes}`);

// reverse string
const str = "Language";
const reversed = str.split("").reverse().join("").toLowerCase();
console.log(`Reversed String: ${reversed}`);
