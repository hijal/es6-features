/**
 * basic template literal
 */

let tl = `Hello, Javascript`;

console.log(tl);
console.log(tl.length);
console.log(typeof tl);

let strWithBacktick = `Hello, \` Javascript`;

console.log(strWithBacktick);

/**
 * Multi-line template literal
 */

let msg = `
  Hello,
  Javascript
`;

console.log(msg);

let p = [`Hello,`, `Javascript`, `World`];
console.log(p.join('\n'));

const post = {
  title: 'Javascript Template Literal',
  excerpt: 'Introduction to Javascript Template Literal in ES6',
  body: 'Content of the post will be here',
  tags: ['javascript', 'es6', 'template literal']
};

let { title, excerpt, body, tags } = post;
let postHTMl = `
  <article>
    <header>
      <h1>${title}</h1>
    </header>
    <section>
      <p>${excerpt}</p>
      <div>${body}</div>
    </section>
    <footer>
      <ul>
        ${tags.map((tag) => `<li>${tag}</li>`).join('')}
      </ul>
    </footer>
  </article>
`;

console.log(postHTMl);

/**
 * Variable and expression substitution
 */

let fName = 'John',
  lName = 'Doe';

let fullName = `${fName} ${lName}`;

console.log(fullName);

let price = 10.99,
  quantity = 2,
  tax = 0.5;

let netPrice = `Net Price: $${price * quantity * (1 + tax).toFixed(2)}`; //;

console.log(netPrice);

/**
 * Tag templates
 */

function tag(strings, ...substitutions) {
  return `${strings[0]} ${substitutions[0]}`;
}

let greeting = tag`Hi ${'John Doe'}`;
console.log(greeting);

function format(literals, ...substitutions) {
  // literals is an array of strings -> [ '', ' items cost $', '' ]
  // substitutions is an array of values -> [ 10, '164.85' ]
  let result = '';
  for (let i = 0; i < substitutions.length; i++) {
    result += literals[i];
    result += substitutions[i];
  }
  // add the last literal
  result += literals[literals.length - 1];
  return result;
}

let _quantity = 10,
  _price = 10.99,
  _tax = 0.5;
result = format`${_quantity} items cost $${(
  _price *
  _quantity *
  (1 + _tax)
).toFixed(2)}`;

console.log(result);
