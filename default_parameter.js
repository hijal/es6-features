function greeting(message = 'hi') {
  console.log(message);
}

greeting(); // hi
greeting('hello'); // hello

/**
 * Arguments vs. Parameters
 */

function add(a, b) {
  return a + b;
}

add(1, 2); // 3

function say(message) {
  console.log(message);
}

say(); // undefined

/**
 * Setting JavaScript default parameters for a function
 */

function sayHello(name) {
  name = typeof name !== 'undefined' ? name : 'xyz';
  return `Hello ${name}`;
}
sayHello('John'); // Hello John
sayHello(); // Hello xyz
sayHello(undefined); // Hello xyz

/**
 * More JavaScript default parameter examples
 */

// 1) Passing undefined arguments

function createDiv(
  height = '100px',
  width = '100px',
  border = 'solid 1px blue'
) {
  let div = document.createElement('div');
  div.style.height = height;
  div.style.width = width;
  div.style.border = border;
  document.body.appendChild(div);
  return div;
}

createDiv(); // <div style="height:100px;width:100px;border:solid 1px blue"></div>
createDiv(undefined, undefined, undefined); // <div style="height:100px;width:100px;border:solid 1px blue"></div>
createDiv('200px', '200px', 'solid 2px red'); // <div style="height:200px;width:200px;border:solid 2px red"></div>

// 2) Evaluating default parameters

function put(toy, toyBox = []) {
  toyBox.push(toy);
  return toyBox;
}

console.log(put('car')); // [ 'car' ]
console.log(put('car', ['mouse'])); // [ 'mouse', 'car' ]

function date(d = today()) {
  console.log(d);
}

function today() {
  return new Date().toLocaleDateString('en-US');
}

date(); // 6/12/2022

function paramsRequired() {
  throw new Error('Missing required parameters');
}

function add(a = paramsRequired(), b = paramsRequired()) {
  return a + b;
}

add(10); // Error: Missing required parameters
add(10, 20); // 30

// 3) Using other parameters in default values

function sum(x = 1, y = x, z = x + y) {
  // x = 1, y = 1, z = 2
  return x + y + z;
}
console.log(sum()); // 4

function sub(x, y = x) {
  return x - y;
}
console.log(sub(10)); // 0

let taxRate = () => 0.08;
let getPrince = (price, tax = price * taxRate()) => price + tax;

let fullPrice = getPrince(100); // 108
console.log(fullPrice); // 108

function argsLength() {
  console.log(arguments);
  return arguments.length;
}
console.log(argsLength(1, 2, 3)); // 3

function argumentsLength(...args) {
  console.log(args);
  return args.length;
}