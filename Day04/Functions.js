
let ageOfCeyhun = 20;
let eligibleToVoteCeyhun;
if(ageOfCeyhun > 18){
    eligibleToVoteCeyhun = true;
}else{
    eligibleToVoteCeyhun = false;
}

// we are doing same action for another person, 
// imagine there are 100 people, and code is more lines of code

let ageOfSerdar = 15;
let eligibleToVoteSerdar;
if(ageOfSerdar > 18){
    eligibleToVoteSerdar = true;
}else{
    eligibleToVoteSerdar = false;
}


// how to create functions that handles these redundant codes

function vote(age){ // I am creating a fucntion that assess if a person can vote or not
    let eligibleToVote;
    if(age > 18){
        eligibleToVote = true;
    }else{
        eligibleToVote = false;
    }
    console.log("Person is eligible to vote : "+ eligibleToVote);
}

vote(20);  // calling the vote function
vote(15); // calling the vote function

let show = function() {
    console.log("This is a function");
}

show();

function average(num1, num2, num3){  // we can use functions to do an action and return result
    return (num1+num2+num3)/3 ;
}

console.log(average(15,20,25));

let result = average(15,20,25);
console.log("result is : " + result);
