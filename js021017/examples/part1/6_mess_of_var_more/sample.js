var f1 = function() {
  for(i = 0; i < 10; i++) {
    f2();
  }
}        

var f2 = function() {
  for(i = 0; i < 5; i++) {
    console.log(i);
  }
}

f1(); //don't even go there i is global