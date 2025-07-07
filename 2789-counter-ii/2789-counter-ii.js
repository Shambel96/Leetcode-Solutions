/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let value = init;
  return {
    increment: () => ++value,
    decrement: () => --value,
    reset: () => value = init
  };
};

const counter = createCounter(8);  // ✅ store the counter object

console.log(counter.increment());  // 9
  // 10
console.log(counter.decrement());  // 9
console.log(counter.reset());      // 8

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */