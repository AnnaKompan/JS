/**
 * async/await is allows write asynchronous code in a synchronous way.
 *
 * async - makes function return a promise
 * await - makes function wait for a promise
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

const a = 1000;
const b = 10 * 100;
const c = int("1000");
const d = 500 + 500;

console.log(a == b, a == c, a == d);
