// JS Array Methods (MAP, FILTER, FIND, SET, REVERSE, PALINDROME)

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

// check if string is palindrome
const strPalindrome = "Dad";
const reversedStr = strPalindrome.split("").reverse().join("").toLowerCase();

console.log(
  `${strPalindrome} is Palindrom? ${
    strPalindrome.toLowerCase() === reversedStr ? "Yes" : "No"
  }`,
);

// JS Array Methods (MAP)
const planets = [
  "Mercury",
  "Venera",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Neptun",
  "Pluton",
];

console.log(planets.map((pl) => pl.toUpperCase()));

// JS Array Methods (FLATMAP)
const students = [
  { name: "James", score: 60, courses: ["geography", "math", "geometry"] },
  { name: "John", score: 66, courses: ["geography", "math"] },
  { name: "Andrew", score: 77, courses: ["geography", "math", "PE"] },
  { name: "Carlos", score: 99, courses: ["geography", "math", "history"] },
];
console.log(students.flatMap((st) => st.courses));

// JS Array Methods (map)
console.log(students.map((st) => st.courses));

// JS Array Methods (find)
console.log(students.find((st) => st.score > 66));

// JS Array Methods (every/some)
console.log(students.every((st) => st.score > 66));
console.log(students.some((st) => st.score > 66));

// JS Array Methods (reduce) = total is accumulator, st is current element
const totalScore = students.reduce((total, st) => st.score + total, 0);
console.log(`Total Score: ${totalScore}`);

// JS Array Methods (sort)
const nums = [22, 15, 23, 77, 11, 12, 99];
const names = ["Jane", "Josh", "Ann", "Frank", "Gloria", "Mike"];
const assendingNums = [...nums].sort((a, b) => a - b);
const descendingNums = [...nums].sort((a, b) => b - a);
const ascendingNames = [...names].sort((a, b) => a.localeCompare(b));
console.log(assendingNums, descendingNums, ascendingNames);

// Chaining Array Methods (sort names by score in ascending order)
const ascendingScore = [...students]
  .sort((a, b) => a.score - b.score)
  .map((st) => st.name);
console.log(ascendingScore);
