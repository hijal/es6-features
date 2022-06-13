/**
 * Introduction to the JavaScript let keyword
 */

let x = 10;

if (x === 10) {
  let x = 20;
  console.log(x); // 20
}

console.log(x); // 10

/**
 * JavaScript let and callback function in a for loop
 */

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i); // 5 5 5 5 5
  }, 1000);
}

// solution of previous problem - 1

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

// solution of previous problem - 2

for (var i = 0; i < 5; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j);
    }, 1000);
  })(i);
}

/**
 * Re-declaration
 */

var counter = 0;
var counter;
console.log(counter); // 0

let number = 0;
let number; // Uncaught SyntaxError: Identifier 'counter' has already been declared
console.log(number);

/**
 * Temporal death zone
 */

{
  // enter new scope, TDZ starts
  let log = function () {
    console.log(message);
  };

  let message = 'Hello World'; // TDZ ends
  log(); // called outside TDZ
}

/**
 * let vs var in for loop
 */

for (var i = 0; i < 10; i++) {
  console.log('inside for loop => ', i); // 0 1 2 3 4
}
console.log('outside for loop => ', i); // 5

for (let i = 0; i < 5; i++) {
  console.log('inside for loop => ', i); // 0 1 2 3 4
}
console.log('outside for loop => ', i); // Uncaught ReferenceError: i is not defined
