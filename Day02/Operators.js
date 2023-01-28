console.log("Hello World!");

// actions with Javascript
// alert("Hello World ! "); commented out my first alert

// review of variables and data types
let number1 = 10; // declare and assign values to variables
let number2 = 3; 

// Math operations: +,-,/,* and % (modulus) 
// create a result variable:
let result;  // declare: does it have any value? NO

// I will use result variable to hold math operations result
/*
In Javascript we use = sign as an assignment operator
*/
// addition:
result = number1 + number2;
// alert(result);
console.log("result of addition");  // line 1
console.log(result);                // line 2

// if you want to see line1 and line2 together 
// we have to CONCATENATE these two statements
console.log("number 1 : "+number1);
console.log("number 2 : "+number2);
console.log("result of addition : "+result);

// substraction:
result = number1 - number2;
console.log("result of substraction : "+result);

// multiplication
result = number1 * number2;
console.log("result of multiplication : "+result);

// division
result = number1 / number2;
console.log("result of division : "+result);

// Modulus: % gives you after you divide two numbers- remaining value
result = number1 % number2;
console.log("result of modulus : "+result);

// constant declaration: these values can not be changed later
const MAXNUMBER = 5000; // number dataType
console.log("Maximum number is : "+MAXNUMBER); 
// MAXNUMBER = 10000; Gives Error, you can NOT reassign
const userName = "Oscar"; // string dataType
// userName = "Akbar"; Gives Error, you can NOT reassign

// Increament and Decreament Operators
// we will use these operators at the LOOPS topics
// post Increament and Decreament Operators
let counter = 2;
counter++; // works like counter = counter + 1; but shorter
console.log(counter);

counter--;
console.log(counter); // works like counter = counter - 1; but shorter

// pre Increament and Decreament Operators
let counter2 = 2;
++counter2;
console.log(counter2);
--counter2;
console.log(counter2);

// difference between pre and post 
let counter3 = 2;
console.log(counter3++); 
// 2 : reason: when you use post increament, first use value then increase
// post inc/dec ---> using OLD value
let counter4 = 2;
console.log(++counter4); 
// pre inc/dec ---> using NEW value

// Comparison Operators: result is always boolean 
console.log(2 > 1); // true
console.log(2 == 1); // false
console.log("oscar" == "OSCAR"); // false
console.log(2 != 1); // if they are not equal != operator gives true result

let truth = 2 > 1; // I can assign comparison result to a variable
console.log(truth);

// Logical Operators
// OR operator
console.log(true || false); // true
console.log(false || true); // true
console.log(true || true ); // true
console.log(false || false ); // false

// AND operator
console.log(true && false); // false
console.log(false && true); // false
console.log(true && true ); // true
console.log(false && false ); // false

// compare numbers:
console.log(5 > 2 || 3 > 5); // if one of them is true result is true
console.log(2 == 2 && 5 > 2); // true: both statement must be TRUE

/*
you will get a seat in the BUS if you are 
ELDERLY  OR   PREGNANT  == True

You will have access to Cydeo classes if you 
Enrolled AND Paid for the class  == both has to be true 
*/

// A very important and Huge Topic: Conditions in Programming
// if , if else , switch 

let score = 75; // exam result
let conditionOfPass = score > 50; // boolean result
if( score > 50){
    console.log("Passed the exam"); 
    // this code only executes if the condition is true
}

if( conditionOfPass ){
    console.log("Passed the exam"); 
    // this code only executes if the condition is true
}


