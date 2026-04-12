// Debounce executes after the user stops triggering events.
// Throttle limits execution to once per interval.
// For example: use debounce for search input and throttle for scroll.
// Throttle це функція, яка обмежує кількість викликів функції за певний проміжок часу.
// Вона гарантує, що функція буде викликана не частіше, ніж зазначений інтервал часу.
function throttle(fn, limit) {
  let inThrottle;

  return function (...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
// Debounce це функція, яка затримує виклик функції до тих пір, поки не пройде певний проміжок часу після останнього виклику.
// Вона гарантує, що функція буде викликана лише після того, як користувач перестане викликати її протягом зазначеного інтервалу часу.
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeoue(() => {
      fn.apply(this.args);
    }, delay);
  };
}
const search = debound((value) => {
  console.log(value);
}, 500);
