/**
 * Introduction to javascript  Computed Property
 */

// example 1
let propName = 'c';
const rank = {
  a: 1,
  b: 2,
  [propName]: 3 // computed property
};

console.log(rank[propName]); // 3

// example 2
let fullName = 'fullName';

class Person {
  constructor(fname, lname) {
    this.fname = fname;
    this.lname = lname;
  }

  get [fullName]() {
    return `${this.fname} ${this.lname}`;
  }
}

let person = new Person('John', 'Doe');
console.log(person.fullName); // John Doe
