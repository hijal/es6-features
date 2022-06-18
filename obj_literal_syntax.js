/**
 * Object property initializer shorthand.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer}
 */

// example 1
function createMachine(name, age) {
  return {
    name: name,
    age: age
  };
}

// alternative of example 1
function _createMachine(name, age) {
  return {
    name,
    age
  };
}

// example 2
let hello = 'hello',
  world = 'world';

const helloWorld = {
  hello: hello,
  age: world
};

// alternative of example 2
let _hello = 'hello',
  _world = 'world';

const _helloWorld = {
  _hello,
  _world
};

/**
 * Computed property names.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names}
 */

// example 1
let title = 'machine one';

let machine = {
  [title]: 'abc-1',
  'machine hour': 1000
};

// logging the machine object
console.log(machine);
console.log(machine[title]);
console.log(machine['machine hour']);

// example 2
let prefix = 'machine';

let _machine = {
  [prefix + ' name']: 'abc-1',
  [prefix + ' hour']: 1000
};

// logging the _machine object
console.log(_machine);
console.log(_machine[prefix + ' name']);
console.log(_machine[prefix + ' hour']);

console.log(_machine['machine name']);
console.log(_machine['machine hour']);

/**
 * Concise method syntax.
 * @see {@link https://www.demo2s.com/javascript/javascript-object-concise-method-syntax.html}
 */

// example 1
let server = {
  name: 'server-one',
  restart: function () {
    console.log('The  ' + this.name + ' is restarting...');
  }
};

// alternative of example 1
let _server = {
  name: 'server-one',
  restart() {
    console.log('The  ' + this.name + ' is restarting...');
  }
};

// example 2
let person = {
  name: 'John',
  'sayName'() {
    console.log('My name is ' + this.name);
  }
};

person['sayName'](); // object_name[property_name]()