/**
 * Introduction to the javascript for..of loop
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of}
 */

/**
 * Syntax
 * for (variable of iterable) {
 *  // body
 * }
 */

/**
 * Javascript for..of loop examples
 */

// example 1 - iterating over an array if you want to change the variable value
let numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
  number *= 10;
  console.log(number);
}

// example 2 - iterating over an array if you don't to change the variable value
for (const number of numbers) {
  console.log(number);
}

// example 3 - access the index of the array
for (const [index, number] of numbers.entries()) {
  console.log(number + ' is at index [' + index + ']');
}

// example 4 - In-place object destructuring with for..of
const ratings = [
  { name: 'John', score: 3 },
  { name: 'Jane', score: 5 },
  { name: 'Mary', score: 4 }
];

let sum = 0;

for (const { score } of ratings) {
  sum += score;
}

console.log('Total scores: ', sum);

// example 5 - Iterating over string
let str = 'Hello World';

for (let char of str) {
  console.log(char);
}

// example 6 - Iterating over Map object
let map = new Map();

map.set('1', 'one');
map.set('2', 'two');
map.set('3', 'three');
map.set('4', 'four');
map.set('5', 'five');

for (let m of map) {
  console.log(m);
}

for (let [key, value] of map) {
  console.log(key + ': ' + value);
}

// example 7 - Iterating over Set object
let set = new Set(); // let set = new Set([1, 2, 3, 4, 5]);
set.add('1');
set.add('2');
set.add('3');
set.add('4');
set.add('5');

for (let s of set) {
  console.log(s);
}
