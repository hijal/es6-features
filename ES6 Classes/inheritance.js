/**
 * Introduction javascript inheritance
 */

// example 1 (prior to ES6)
function Animal(legs) {
  this.legs = legs;
}

Animal.prototype.walk = function () {
  console.log('Walking on ' + this.legs + ' legs');
};

function Bird(legs) {
  Animal.call(this, legs);
}

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Animal;

Bird.prototype.fly = function () {
  console.log('Flying');
};

const pigeon = new Bird(2);

pigeon.walk();
pigeon.fly();

// example 2 (ES6 class inheritance)
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  displayDetails() {
    console.log(`Name: ${this.name}\nAge: ${this.age}`);
  }
}

class Employee extends Person {
  constructor(name, age, dept) {
    super(name, age);
    this.department = dept;
  }
  // constructor(...args) {
  //   super(...args);
  //   this.department = args[args.length - 1];
  // }
  showDetails() {
    super.displayDetails();
    console.log(`Department: ${this.department}`);
  }
}
const emp = new Employee('John', 30, 'IT');
emp.showDetails();

/**
 * Shadowing methods
 */

class Banker extends Employee {
  constructor(...args) {
    super(...args);
  }
  showDetails() {
    super.displayDetails();
    console.log(`Department: ${this.department}`);
  }
}

const banker = new Banker('John Doe', 20, 'Cashier');
banker.showDetails();

/**
 * Static methods
 */

class A {
  helloFromA() {
    console.log('Hello from A');
  }
  static staticMethod() {
    console.log("Hello, I'm Static method");
  }
}

class B extends A {
  helloFromB() {
    console.log('Hello from B');
  }
}

B.staticMethod();

/**
 * Inheriting from built-in classes
 */

class Queue extends Array {
  enQueue(e) {
    super.push(e);
  }
  deQueue() {
    return super.shift();
  }
  peek() {
    return !this.empty() ? this[0] : undefined;
  }
  empty() {
    return this.length === 0;
  }
}

const customers = new Queue();
customers.enQueue('John');
customers.enQueue('Jane');

console.log(customers.length);

while (!customers.empty()) {
  console.log(customers.deQueue());
}
