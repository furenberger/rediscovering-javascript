"use strict";

let foo = function() {
  let local1 = 1;
      
  {
    let local2 = 2;
    console.log(local2);
  } 
  
  console.log(local1);
  //console.log(local2); //ERROR
}

foo();