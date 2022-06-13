/**
 *
 * @param  {...any} args
 * @returns
 */

function sum(...args) {
  let total = 0;

  for (const a of args) {
    total += a;
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5)); // 15

/**
 * pass arguments with various kinds of data types
 */

// example 1
function add(...args) {
  return args
    .filter(function (e) {
      return typeof e === 'number';
    })
    .reduce(function (a, b) {
      return a + b;
    });
}

let result = add(20, 'hello', undefined, undefined, 40);

console.log(result); // 60

// example 2
function multiplication() {
  return Array.prototype.filter
    .call(arguments, function (e) {
      return typeof e === 'number';
    })
    .reduce(function (a, b) {
      return a * b;
    });
}

let ans = multiplication(20, 'hello', undefined, undefined, 40);

console.log(ans); // 800

// example 3
function filterByType(type, ...args) {
  return args.filter(function (e) {
    return typeof e === type;
  });
}

let filteredTypes = filterByType('string', 'hello', undefined, undefined, 40);

console.log(filteredTypes); // hello

/**
 * JavaScript rest parameters and arrow function
 */

const combineString = (...args) => {
  return args.reduce(function (cur, prev) {
    return cur + ' ' + prev;
  });
};

let message = combineString('JavaScript', 'Rest', 'Parameters'); // =>
console.log(message); // JavaScript Rest Parameters

const logStuff = (arg1, arg2, ...args) => {
  console.log('arg1 = ', arg1);
  console.log('arg2 = ', arg2);
  console.log('args = ', args);
};

logStuff('chicken', 'tuna', 'chips', 'cookie', 'soda', 'delicious');

/**
 * JavaScript rest parameter in a dynamic function
 */

const showNumbers = new Function('...numbers', 'console.log(numbers)');
showNumbers(1, 2, 3);
