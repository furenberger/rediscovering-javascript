//Your code goes here
let canVote = function(name, age) {
    // console.log("age", age >= 18)

  if(typeof age === 'number'  && age >= 18){
    return true;
  }else {
      return false;
  }
};

let getVoters = function(voters) {
  let validVoters = [];

  // voters.forEach(voter => {
  //     if(canVote(voter[0],voter[1])){
  //         validVoters.push(voter[0]);
  //     }
  // });

  voters.forEach(voter => {
      canVote(voter[0],voter[1]) ? validVoters.push(voter[0]) : null;
  });

  // validVoters = voters.reduce(function(voterList,currentVoter){
  //     if(!canVote(currentVoter[0], currentVoter[1])){
  //         return voterList;
  //     }
  //     voterList.push(currentVoter[0]);
  //     return voterList;
  // },[]);

  // validVoters =  voters
  //       .filter(voter => canVote(voter[0], voter[1]))
  //       .map(voter => voter[0]);

  return validVoters;
};


module.exports = {
  canVote: canVote,
  getVoters: getVoters
};
