// What is Array: special type of Data which holds more than one value such as a Team, Class
// Arrays are ZERO indexed data structures
// how we create Arrays

let team = new Array(); // declare arrays, create an empty array
let studentClass = [];  // declare arrays, create an empty array

team[0] = "Seyfullah";
team[1] = "Ercan";
team[2] = "Aynur";
team[3] = "Nora";
team[4] = "Javid";
team[5] = "Nisar";

console.log(team);
// replace an element in the Array
team[0] = "Zeynep";
console.log(team);

studentClass[0] = "Study Room";
studentClass[1] = 20;
studentClass[2] = true;
studentClass[3] = "Oscar";
console.log(studentClass);

// to get the size of Array we use length statement
console.log("Number of elements in team Array : " + team.length ); // 6

// connect Arrays with Loops:
// print each element of team Array to console: use loops
for(let i = 0; i < team.length ; i++ ){
    console.log(team[i]);  // i represents the index of the element in team array
}


