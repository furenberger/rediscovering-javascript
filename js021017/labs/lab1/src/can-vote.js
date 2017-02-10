//Your code goes here
let canVote = function(name, age) {
    // console.log("age", age >= 18)

  if(typeof age === 'number'  && age >= 18){
    return true;
  }else {
      return false;
  }
};

let getVoters = function(arr) {
  let len = arr.length;
  let validVoters = [];

  for(let i =0; i<len; i++){
    console.log(arr[i]);
    let cur = arr[i];
    if(canVote(cur[0],cur[1])){
      validVoters.push(cur[0]);
    }
  }
  return validVoters;

};


module.exports = {
  canVote: canVote,
  getVoters: getVoters
};
