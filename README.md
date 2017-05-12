cyrillicify
-

Example:

```js
const cyrillicify = require('cyrillicify');

const a = 'abc';
const b = cyrillicify.all(a);

console.log('a:', a);
console.log('b:', b);
console.log('a === b:', a === b);
```
Prints:
```
a: abc
b: аbс
a === b: false
```
