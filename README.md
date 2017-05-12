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

Another example:
```
const a = 'abc';
const b = cyrillicify.random(a, 0.25);

console.log('a:', a);
console.log('b:', b);
console.log('a === b:', a === b);
```
Sometimes prints:
```
a: abc
b: abс
a === b: false
```
and sometimes:
```
a: abc
b: abc
a === b: true
```
