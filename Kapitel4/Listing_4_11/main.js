'use strict';
let item = new Item(
  'Schrödinger programmiert Java',
  44.90,
  'Philip Ackermann',
  '978-3836217408'
)
console.log(typeof item);           // object
console.log(item instanceof Item);  // true