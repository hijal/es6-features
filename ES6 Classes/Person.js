/**
 * Class prior to ES6 revisited.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */

function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

const john = new Person('john doe');
console.log(john.getName());

console.log(john instanceof Person); // true
console.log(john instanceof Object); // true

/**
 * Class ES6
 */
class Author {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

console.log(typeof Person); // function

const author = new Author('John Doe');
console.log('Author name is ', author.getName());