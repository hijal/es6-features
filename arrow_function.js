/**
 * Introduction to javascript arrow function
 */

// example 1 - normal function
let add = function (a, b) {
  return a + b;
};
console.log(add(1, 1)); // 2

// example 2 - arrow function
let sum = (a, b) => a + b;
console.log(sum(1, 1)); // 2

console.log(typeof sum); // function
console.log(sum instanceof Function); // true

/**
 * Arrow functions with multiple parameters
 */

// example 1 - normal function
let descendingNumbers = [3, 2, 0, 1, -1, 4];
descendingNumbers.sort(function (a, b) {
  return b - a;
});
console.log(descendingNumbers); // [ 4, 3, 2, 1, 0, -1 ]

// example 2 - arrow function
let _descendingNumbers = [3, 2, 0, 1, -1, 4];
_descendingNumbers.sort((a, b) => b - a);
console.log(_descendingNumbers); // [ 4, 3, 2, 1, 0, -1 ]

/**
 * Arrow functions with single parameter
 */

// example 1
let names = ['John', 'Jane', 'Mary', 'Bob', 'Tom'];
let lengths = names.map((name) => name.length);
console.log(lengths); // [ 4, 4, 4, 3, 3 ]

/**
 * Arrow functions with no parameters
 */

// example 1
let date = () => new Date();
console.log(date()); // 2022-07-17T15:14:00.618Z

// example 2
let sayHello = () => console.log('Hello');
sayHello(); // Hello

// example 3
let _sayHello = (_) => console.log('Hello');
_sayHello(); // Hello

/**
 * Arrow functions and object literal
 */
// example 1
let setColor = (color) => {
  value: color;
};
let bgColor = setColor('red');

console.log(bgColor); // undefined

let _setColor = (color) => ({ value: color });
let _bgColor = _setColor('red');
console.log(_bgColor); // { value: 'red' }

/**
 * Javascript arrow functions and this value
 */

// example 1
function Car() {
  this.speed = 0;

  this.speedUp = function (spd) {
    this.speed = spd;
    setTimeout(function () {
      console.log(this.speed); // undefined
    }, 1500);
  };
}

let car = new Car();
car.speedUp(10);

// example 2
function Car2() {
  this.speed = 0;
  this.speedUp = function (spd) {
    this.speed = spd;
    let self = this;

    setTimeout(function () {
      console.log(self.speed); // 10
    }, 1500);
  };
}

let car2 = new Car2();
car2.speedUp(10);

// example 3
function Car3() {
  this.speed = 0;

  this.speedUp = function (spd) {
    this.speed = spd;
    setTimeout(() => {
      console.log(this.speed); // 10
    }, 1500);
  };
}

let car3 = new Car3();
car3.speedUp(10);

/**
 * Arrow functions and the prototype property
 */

// example 1
function dummy(msg) {
  console.log(msg);
}
console.log(dummy.hasOwnProperty('prototype')); // true

// example 2
let dump = (msg) => console.log(msg);
console.log(dump.hasOwnProperty('prototype')); // false
