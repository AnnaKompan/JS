function debounce(func, wait) {
  // save timer id
  let timer;

  // return new f(x) that will be called instead of original
  return function (...args) {
    clearTimeout(timer);

    // set new timer to call original "func" after "wait" ms
    //   "this" is a context of the returned function, so we need to save it
    timer = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

const debouncedFunction = debounce(() => {
  console.log("Debounced function executed!");
}, 1000);

// Example usage:
debouncedFunction(); // Call the debounced function
debouncedFunction(); // Call it again before the wait time expires
// Only one "Debounced function executed!" will be logged after 1 second
