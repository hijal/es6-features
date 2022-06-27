/**
 * Introduction to the javascript getters and setters
 */
// example 1
class Person {
  constructor(name) {
    this.name = name;
  }
}

let person = new Person('John');
console.log(person.name); // John

// example 2
class Person1 {
  constructor(name) {
    this.setName(name);
  }

  setName(newName) {
    // check validations
    this.name = newName;
  }

  getName() {
    return this.name;
  }
}

const p1 = new Person1('hello');
console.log(p1.name); // hello

p1.setName('world!'); // we set a new name

console.log(p1.getName()); // get the new name -> world!

// example 3
class Person2 {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this._name;
  }
  set name(val) {
    this._name = val;
  }
}

const p2 = new Person2('hello');
console.log(p2.name); // hello
p2.name = 'world!';
console.log(p2.name); // world

// example 4

class Meeting {
  constructor() {
    this.attendees = [];
  }
  add(attendee) {
    console.log(`${attendee} has joined the meeting.`);
    this.attendees.push(attendee);
    return this;
  }
  get latest() {
    let length = this.attendees.length;
    return length > 0 ? this.attendees[length - 1] : 'No attendees yet.';
  }
}

const meeting = new Meeting();
meeting.add('John').add('Jane').add('Bob'); // John has joined the meeting. Jane has joined the meeting. Bob has joined the meeting.
console.log(meeting.latest); // Bob
