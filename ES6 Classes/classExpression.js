/**
 * Introduction to Javascript class expressions
 */

// example 1
let Person = class {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
};

const person = new Person('John');
console.log(person.getName()); // John
console.log(typeof Person); // function
console.log(typeof person); // Object

/**
 * First-class citizens
 */

// example 2

function factory(aClass) {
  return new aClass();
}

let greeting = factory(
  class {
    sayHello() {
      console.log('Hello First-class citizens!');
    }
  }
);

greeting.sayHello(); // Hello First-class citizens!
