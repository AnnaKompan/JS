/**
 * async/await is allows write asynchronous code in a synchronous way.
 *
 * async - makes function return a promise
 * await - makes function wait for a promise
 *
 * try/catch is used in async/await to handle errors
 */

function walkDog() {
  return new Promise((resolve, reject) => {
    const dogWalked = true;
    setTimeout(() => {
      if (dogWalked) {
        resolve("Dog is walked");
      } else {
        reject("Didn't walk the dog");
      }
    }, 2000);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    const cleaned = true;
    setTimeout(() => {
      if (cleaned) {
        resolve("The kitchen is cleaned");
      } else {
        reject("Didn't clean the kitchen");
      }
    }, 2000);
  });
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    const tookTrash = true;
    setTimeout(() => {
      if (tookTrash) {
        resolve("Trash is taken out");
      } else {
        reject("You didn't take the trash");
      }
    }, 2000);
  });
}
// Methods chaining

// walkDog()
//   .then((value) => {
//     console.log(value);
//     return cleanKitchen();
//   })
//   .then((value) => {
//     console.log(value);
//     return takeOutTrash();
//   })
//   .then((value) => {
//     console.log(value);
//     console.log("done");
//   })
//   .catch((error) => console.log(error));

async function doChores() {
  try {
    const walkDogResult = await walkDog();
    console.log(walkDogResult);

    const cleanKitchenRes = await cleanKitchen();
    console.log(cleanKitchenRes);

    const tookTrashRes = await takeOutTrash();
    console.log(tookTrashRes);

    console.log("Finished all chores");
  } catch (err) {
    console.log(err);
  }
}

// doChores();

async function fetchUsers() {
  const baseUrl = "https://jsonplaceholder.typicode.com";
  const usersId = [1, 2, 3];
  const users = usersId.map(async (id) => {
    const response = await fetch(`${baseUrl}/users/${id}`);
    return response.json();
  });
  const promise = await Promise.all(users);
  console.log(promise);
}
fetchUsers();
