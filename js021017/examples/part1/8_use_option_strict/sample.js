"use strict";

var foo = function() {
  var local1 = 1;
  local2 = 4; //ERROR
  
  console.log(local1);
}        


foo();
