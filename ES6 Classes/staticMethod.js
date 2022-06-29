/**
 * Introduction to the javascript static methods
 */
// example 1 before es6
function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

Person.createAnonymous = function (gender) {
  var name = gender == 'male' ? 'john doe' : 'jane doe';
  return new Person(name);
};

var staticMethod = Person.createAnonymous('male');
console.log(staticMethod.getName()); // john doe

// example 2 in ES6
class PersonES6 {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  static createAnonymous(gender) {
    let name = gender === 'male' ? 'john doe es6' : 'jane doe es6';
    return new PersonES6(name);
  }
}

let staticMethod2 = PersonES6.createAnonymous('male');

console.log(staticMethod2.name);
console.log(staticMethod2.getName());
