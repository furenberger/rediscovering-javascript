"use strict";
//privitive (number, string,...) are const when
//defined
//references are const, but not the objects they
//refer to

const person = { first: 'Sam', age: 2 };
console.log(person);

//person = { first: 'Sara', age: 3 }; //ERROR

person.age = 4;
console.log(person); //does not stop