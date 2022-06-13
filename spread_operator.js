/**
 * Introduction to the JavaScript spread operator
 */

const odd = [1, 3, 5, 7, 9];
const even = [2, 4, 6, 8, 10];
const combined = [...odd, ...even];
console.log(combined);

function f(a, b, ...args) {
  console.log(args);
}

f(1, 2, 3, 4, 5);

// The spread operator (...) unpacks the elements of an iterable object.
// The rest parameter (...) packs the elements into an array.

/**
 * JavaScript spread operator and apply() method
 */

function compare(a, b) {
  return a - b;
}

// method 1
let result = compare.apply(null, [1, 2]);
console.log(result); // -1

//method 2
let result2 = compare(...[1, 2]);
console.log(result2); // 1

/**
 * A better way to use the Array’s push() method example
 */

const alpha = ['a', 'b', 'c'];
const numbers = [1, 2, 3];

[].push.apply(alpha, numbers);

console.log(alpha);
