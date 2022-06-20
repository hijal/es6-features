/**
 * Introduction to the JavaScript object destructuring assignment
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment}
 */

// example 1
let person = {
  firstName: 'John',
  lastName: 'Doe'
};

let firstName = person.firstName;
let lastName = person.lastName;

console.log(firstName, lastName); // John Doe

// alternative example 1 with destructuring
let { firstName: fname, lastName: lname } = person;
console.log(fname, lname); // John Doe

/**
 * Destructuring function arguments
 */

// example 2
let display = ({ firstName, lastName }) =>
  console.log(`${firstName} ${lastName}`);

let person2 = {
  firstName: 'John',
  lastName: 'Doe'
};

display(person2);

/**
 * Nested object destructuring assignment
 */

// example 3
let employee = {
  id: 1001,
  name: {
    fname: 'John',
    lname: 'Doe'
  }
};

let {
  name: { fname: fname2, lname: lname2 }
} = employee;

console.log(fname2, lname2); // John Doe

/**
 * Setting default values for object destructuring
 */

// example 4
let person4 = {
  firstName: 'John',
  lastName: 'Doe',
  middleName: 'C.',
  currentAge: 28
};

let { middleName = '', currentAge: age = 18 } = person4;

console.log(middleName); // 'C.'
console.log(age); // 28
