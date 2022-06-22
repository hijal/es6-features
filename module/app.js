// import message
import { message } from './message.js';

// import and call
import { foo } from './foo.js';
import { getMessage } from './log.js';

foo(); // foo
console.log(getMessage()); // Hi

const h1 = document.createElement('h1');

h1.textContent = message;

document.body.appendChild(h1);

// import greeting.js
import { message as msg, setMessage } from './greeting.js';

console.log(msg); // Hello,
console.log(setMessage('World!')); // Hello, World!

// import calculator.js
import { sum, sub, mul, div } from './calculator.js';

console.log(sum()); // 1500
console.log(sub()); // 500
console.log(mul()); // 500000
console.log(div()); // 2

/**
 * Import an entire module as an object
 */

import * as cal from './calculator.js';

console.log('a = ', cal.a); // 1000
console.log('b = ', cal.b); // 500

// import math
import { addition as total } from './math.js';

console.log('total = ', total(1, 2));

import './array.js';

let isFound = [1, 2, 3].contain(2);
let notFound = [1, 2, 3].contain(22);

console.log('found = ', isFound); // true
console.log('not found = ', notFound); // false
