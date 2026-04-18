const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const fetchBtn = document.getElementById("fetch-btn");
const usersList = document.querySelector(".users-list");
let timerId = null;

// function onClick() {
//   setTimeout(() => {
//     console.log("clicked");
//   }, 2000);
// }

function onStart() {
  timerId = setInterval(() => {
    console.log(`Interval working... ${Math.random()}`);
  }, 2000);
}

function onStop() {
  clearInterval(timerId);
  console.log(`Interval ${timerId} stopped`);
}

startBtn.addEventListener("click", onStart);
stopBtn.addEventListener("click", onStop);

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 2000);
});

promise
  .then((val) => {
    console.log(val);
    return val * 2;
  })
  .then((val) => {
    console.log(val);
    return val * 3;
  })
  .then((val) => {
    console.log(val);
  })
  .finally(() => {
    console.log("DONE!!!");
  });

const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    const isSuccess = false;
    if (isSuccess) {
      resolve("ok");
    } else {
      reject("rejected");
    }
  }, 2000);
});

promiseTwo
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.log(err);
  });

// Promise.all - приймає масив промісів і повертає новий проміс, який виконується, коли всі проміси в масиві виконуються

const makePromise = (text, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(text), delay);
  });
};

const promiseA = makePromise("promise1", 2000);
const promiseB = makePromise("promise2", 3000);

Promise.all([promiseA, promiseB])
  .then((vale) => console.log(vale))
  .catch((err) => console.log(err));

const fastestPromise = (text, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(text), delay);
  });
};

const slowPromise = fastestPromise("never seeen", 5000);
const fastPromise = fastestPromise("you'll see me", 3000);

Promise.race([slowPromise, fastPromise])
  .then((val) => console.log(val))
  .catch((err) => console.log(err));

const makeGreeting = (name) => {
  if (name === "" || name === undefined) {
    return Promise.reject("No name entered");
  }
  return Promise.resolve(`Hi ${name}`);
};

makeGreeting("Jeffrey")
  .then((val) => console.log(val))
  .catch((err) => console.log(err));
makeGreeting("")
  .then((greeting) => console.log(greeting))
  .catch((err) => console.log(err));

// function fetchUsers() {
//   return fetch("https://jsonplaceholder.typicode.com/users?_limit=3").then(
//     (response) => response.json(),
//   );
// }

async function fetchUsers() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users?_limit=5",
  );
  const data = await response.json();
  return data;
}

function renderUsers(users) {
  const markup = users
    .map((user) => {
      return `<li>
      <p><b>Name: </b>${user.name}</p>
      <p><b>Email: </b>${user.email}</p>
      <p><b>Company: </b>${user.company.name}</p>
      </li>`;
    })
    .join("");
  usersList.insertAdjacentHTML("beforeend", markup);
}

fetchBtn.addEventListener("click", () => {
  fetchUsers()
    .then((users) => renderUsers(users))
    .catch((err) => console.log(err));
});
