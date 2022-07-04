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
