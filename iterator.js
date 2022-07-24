/**
 * Javascript Iterator
 */

// for loop issue
let ranks = ['A', 'B', 'C'];

for (let i = 0; i < ranks.length; i++) {
  console.log(ranks[i]);
}

// alternative way of for loop
for (let rank of ranks) {
  console.log(rank);
}

/**
 * Iterators
 */

class Sequence {
  constructor(start = 0, end = Infinity, interval = 1) {
    this.start = start;
    this.end = end;
    this.interval = interval;
  }

  [Symbol.iterator]() {
    let counter = 0;
    let nextIndex = this.start;

    return {
      next: () => {
        if (nextIndex <= this.end) {
          let result = { value: nextIndex, done: false };
          nextIndex = nextIndex + this.interval;
          counter = counter + 1;
          return result;
        }
        return {
          value: counter,
          done: true
        };
      },
      return: () => {
        console.log('cleaning up......');
        return {
          value: undefined,
          done: true
        };
      }
    };
  }
}

let evenNumbers = new Sequence(2, 10, 2);

for (const num of evenNumbers) {
  console.log(num); // 2 4 6 8 10
  if (num == 2) break;
}

let iterator = evenNumbers[Symbol.iterator]();

let result = iterator.next();

while (!result.done) {
  console.log(result.value); // 2, 4, 6, 8, 10
  result = iterator.next();
}

let oddNumbers = new Sequence(1, 10, 2);

for (const num of oddNumbers) {
  if (num > 7) break;
  console.log(num); // 1 3 5 7
}
