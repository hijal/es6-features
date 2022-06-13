/**
 * Introduction to the JavaScript const keyword
 * const CONSTANT_NAME = value;
 */

let x = 10;
x = 20;
x = x + 10;
console.log(x); // 30

const RATE = 0.8;
RATE = 0.9; // TypeError: Assignment to constant variable.

// SyntaxError: Missing initializer in const declaration
const RED; 

/**
 * JavaScript const and Objects
 */

const person = {
    age : 20
};
person.age = 25;
console.log(person.age); // 25

person = { age: 50 }; // TypeError: Assignment to constant variable.

const user = Object.freeze({
    age: 55
});

user.age = 60; // TypeError

const company = Object.freeze({
    name: 'Google',
    address: {
        street: '1600 Amphitheatre Pkwy',
        city: 'Mountain View',
        state: 'CA',
        zip: 94043
    }
});

/**
 * JavaScript const and Arrays
 */

const colors = ['red'];
colors.push('blue');

console.log(colors); // ['red', 'blue']

colors.pop();
colors.pop();
console.log(colors); // []

colors = []; // TypeError: Assignment to constant variable.

/**
 * JavaScript const in a for loop
 */

let scores = [90, 85, 80, 75, 70];

// If you intend to modify the score variable inside the loop, you must use let
for(let score of scores) {
    console.log(score); // 90 85 80 75 70
}

// If you don't intend to modify the score variable inside the loop, you can use the const keyword instead of let
for(const score of scores) {
    console.log(score); // 90 85 80 75 70
} 

for(const i = 0; i < scores.length; i++) {
    console.log(scores[i]); // Error: Assignment to constant variable.
}