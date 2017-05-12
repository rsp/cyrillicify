'use strict';

const m = {
  A: 'А',
  B: 'В',
  C: 'С',
  E: 'Е',
  H: 'Н',
  I: 'І',
  J: 'Ј',
  K: 'К',
  M: 'М',
  O: 'О',
  P: 'Р',
  S: 'Ѕ',
  T: 'Т',
  X: 'Х',
  a: 'а',
  e: 'е',
  i: 'і',
  o: 'о',
  p: 'р',
  c: 'с',
  y: 'у',
  x: 'х',
};

const all = str => str.split('').map(c => m[c] || c).join('');

const random = (str, t) => str.split('').map(c => (Math.random() < t) ? m[c] || c : c).join('');

module.exports = { all, random };
