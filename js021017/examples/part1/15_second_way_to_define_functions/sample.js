"use strict";

let foo = function() {
  console.log('foo called...');
}

foo();

foo = function() {
  console.log('redefined foo called...');
}

foo();  

