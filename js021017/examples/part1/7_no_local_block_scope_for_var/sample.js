var foo = function() {
  var local1 = 1;
  //var local2 = undefined;

  {
    var local2 = 2; //this code literally does
    //what is show in comments.
    //local2 = 2; //assigns to the already defined variable    
    console.log(local2);
  }
  
  console.log(local1);
  console.log(local2);
}        


foo();
