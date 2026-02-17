/**
 * Promise - obj, that manages asynchronous operations and their results (fetch data, perform tasks, etc.)
 * - wrap promise around any asynchronous operation,
 * and it will show when operation completes or fails (Pending -> Resolved, Rejected)
 * - with promise we don't need callbacks, we can use .then() and .catch() to handle results and errors
 *
 * new Promise((resolve, reject) => {
 *   // do something asynchronous
 *   if (success) {
 *     resolve(result);
 *   } else {
 *     reject(error);
 *   }
 * });
 */

// Do chores in order(1. walk dog, 2. clean kitchen, 3. take out trash)

function walkDog() {
  return new Promise((resolve, reject) => {
    const dogWalked = true;
    setTimeout(() => {
      if (dogWalked) {
        // make asynchronous by setting timer
        resolve("You walked the dog");
        // console.log("You walked the dog");
        // callback();
      } else {
        reject("You didn't walk the dog");
      }
    }, 1600);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    const cleanedKitchen = true;
    setTimeout(() => {
      if (cleanedKitchen) {
        resolve("You cleaned kitchen");
      } else {
        reject("You didn't clean the kitchen");
      }
    }, 2500);
  });
}

function takeTrash() {
  return new Promise((resolve, reject) => {
    trashEmpty = false;
    setTimeout(() => {
      if (trashEmpty) {
        resolve("You took all the trash");
      } else {
        reject("You didn't take the trash");
      }
    }, 800);
  });
}

// walkDog(() => {
//   cleanKitchen(() => {
//     takeTrash(() => {
//       console.log("You finished all the chores");
//     });
//   });
// });

// Method chaining
walkDog()
  .then((value) => {
    console.log(value);
    return cleanKitchen();
  })
  .then((value) => {
    console.log(value);
    return takeTrash().then((value) => {
      console.log(value);
      console.log("You finished all the chores");
    });
  })
  .catch((error) => {
    console.error(error);
  });
