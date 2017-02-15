"use strict";

const person = Object.freeze({ first: 'Sam', age: 2 });
console.log(person);

//person = { first: 'Sara', age: 3 }; //ERROR

person.age = 4; //ERROR (but only if option strict, otherwise 
  //ignore the change)

console.log(person);