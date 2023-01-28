console.log("Hello World");

// Single Comment Lines
// I can put my comments with this sign "//"
// Jacascript does not recognize these lines as codes

// How to put multiple comment lines in Javascript
/*
Anything in betwen
is a comment for Javascript
*/

// Declare Variables
let message;  // let is keyword in JS, message is my variable name

// Assign a value to variable
message = "Hello Everbody";

// Use the value inside my variable  
console.log(message);
/*
Variable Analogy
Water in the kitchen is value and you need to bring it to your table to drink
Your bottle is your Variable
And you store the water (value) to the bottle(variable)
and use it: drink
*/

// another way of declaring and assigning: you can do this at the same line
let student = "Nilufar";
console.log(student);
/*
shortcuts: type log then select second suggestion
write first couple of words of your variable, then click CTRL+Space or CMND+Space
*/

// multiple variables at the same line
// " " or ' ' does not matter
let user="Dildora", age = 25, role = 'student';

// concatinate variables: put them together at the console output
console.log(user+"   |   "+age+"    |   "+role);

// we can re-assign different value to our variables
user = 'Oscar'; 
age = 46;
role = 'instructor';
console.log(user+"   |   "+age+"    |   "+role);

// camelCase naming for long names
let saleforceBatchOneClass = "awesome";

let user1 = "Jaafar";
let user2 = "Sergey";
user1 = user2; // I assigned user2 value to user1, user1 changed to Sergey
console.log(user1);
// TASK from class
//Declare two variables: admin and firstName.
let admin,firstName;
//Assign the value "John" to firstName.
firstName = "John";
//Copy the value from firstName to admin.
admin = firstName;
//Show the value of admin using console.log (must output “John”).
console.log(admin);

// boolean variable
let isMarried = true;
console.log(user+" is married: "+isMarried);

// undefined data type
let powerUser;
console.log(powerUser);  // undefined

// assign null to variables
user = null; // since user is already declared I can assign value directly
console.log(user);

// arithmetic operators
console.log(5+10);
console.log(5-10);
