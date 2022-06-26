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
