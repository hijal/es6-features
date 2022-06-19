/**
 * Introduction to JavaScript Array Destructuring
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment}
 */

// example 1
function getScores() {
  return [55, 90, 100];
}

let scores = getScores();
let x = scores[0],
  y = scores[1],
  z = scores[2];

console.log(x, y, z); // 55, 90, 100

// alternative example 1 with destructuring
let [a, b, c] = getScores(); // [] look like the array syntax but they are not.
console.log(a, b, c); // 55, 90, 100

// example 2
function list() {
  return [1, 2];
}

let [one, two, three] = list();
console.log(one, two, three); // 1, 2, undefined

// example 3
function list2() {
  return [1, 2, 3];
}

let [one2, two2] = list2(); // remaining elements are discarded
console.log(one2, two2); // 1, 2

/**
 * Array Destructuring with Rest Operator
 */

// example 4
function getScores2() {
  return [55, 90, 99, 60, 77, 88];
}

let [x2, y2, ...rest] = getScores2();
console.log(x2, y2, rest); // 55, 90, [99, 60, 77, 88]

// example 5
let i, j;
[i, j] = [100, 200];
console.log(i, j); // 100, 200

/**
 * Setting default values for array destructuring
 */

// example 6
function getItems() {
  return ['Javascript', 'Node.js', 'Express.js'];
}

let items = getItems();
let fourthItem = items[3] !== undefined ? items[3] : 'Koa.js';
console.log(fourthItem); // Koa.js

let [item1, item2, item3, item4 = 'Koa.js'] = getItems();
console.log(item1, item2, item3, item4); // Javascript, Node.js, Express.js, Koa.js

// example 7

function notReturnArray() {
  return null;
}
let [q = 1, w = 2] = notReturnArray() || []; // Error occurs if we don't set an empty array
console.log(q, w); // 1, 2

/**
 * Nested Array Destructuring
 */

// example 8
function profile() {
  return ['John', 'Doe', ['red', 'blue', 'green']];
}
let [fName, lName, [c1, c2, c3]] = profile();

console.log(fName, lName, c1, c2, c3); // John, Doe, red, blue, green

/**
 * Array Destructuring assignment applications
 */

// example 9 (swap variables value without using a third variable)
let p = 100,
  l = 200;

[p, l] = [l, p];

console.log(p, l); // 200, 100

// example 10 (functions that return multiple values)

function calculation(a, b) {
  return [a + b, a - b, (a + b) / 2];
}

let [sum, difference, average] = calculation(20, 20);
console.log(sum, difference, average); // 40, 0, 20

/**
 * Ignoring some returned values
 */

function f() {
  return [1, 2, 3];
}

// [, ,] = f(); // ignored all values
let [first, , third] = f();
console.log(first, third); // 1, 3

/**
 * Unpacking values from a regular expression match
 */

function parseProtocol(url) {
  const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
  if (!parsedURL) {
    return false;
  }
  const [, protocol, fullHost, fullPath] = parsedURL;
  return protocol;
}
console.log(
  parseProtocol('https://developer.mozilla.org/en-US/docs/Web/JavaScript')
); // https
