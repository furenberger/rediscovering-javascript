let canVote = function(name, age) {
  if(typeof(age) !== 'number') return false;
  
  return age >= 18;
}

let getVoters = function(folks) {
  // let voters = [];
  // 
  // for(let i = 0; i < folks.length; i++) {
  //   let person = folks[i];
  //   if(canVote(person[0], person[1])) {
  //     voters.push(person[0]);
  //   }
  // }  
  // 
  // return voters;
  
  return folks
    .filter(person => canVote(person[0], person[1]))
    .map(person => person[0]);
}

module.exports = {
  canVote: canVote,
  getVoters: getVoters
};
