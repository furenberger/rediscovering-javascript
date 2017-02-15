var foo = function(n) {
  if(n > 5)
    return n; 
  else {
    return n
      * 2;
  }
}            
//if a line does not have ; and if the
//next line can stand on its own, then
//JavaScript puts a ; at the end of the line
console.log(foo(6));
console.log(foo(3));