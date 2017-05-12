const cyrillicify = require('.');

const a = 'abc';
const b = cyrillicify.all(a);

console.log('a:', a);
console.log('b:', b);
console.log('a === b:', a === b);

