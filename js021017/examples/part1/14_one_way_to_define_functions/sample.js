"use strict";

function foo() {
  console.log('foo called...');
}

foo();

function foo() {
  console.log('redefined foo called...');
}

foo();  

