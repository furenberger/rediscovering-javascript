var foo = function() {
  var local1 = 1;

  local2 = 2;  //terrible, global
  console.log(local1);
  console.log(local2);
}

foo();
console.log(local2);