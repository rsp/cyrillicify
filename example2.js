const cyrillicify = require('.');

const a = 'abc';
const b = cyrillicify.random(a, 0.25);

console.log('a:', a);
console.log('b:', b);
console.log('a === b:', a === b);

