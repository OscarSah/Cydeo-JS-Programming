// Declare Variable
let num1,num2,sum;
num1 = 30; // assign a value: no user interaction
num2 = 50; // assign a value : hard coded
sum = num1 + num2;  // arithmetic operator
// concatenating expression and variable
console.log("Total is : " + sum); 

console.log(3+5*4-6); // 17

let a = 50;
a = --a + a++ + a-- + a++;//49 + 49 + 50 +49= 197
console.log(a);
// let a = 20;
a = 20; // re-assing is OK

let b = 1; // b=1->0->1
b = -b-- + b++ / -b-- * --b;//-1+0/-1*-1 = -1
console.log(b);

// last task with if else
let age = 25;
if(age >= 18){
    console.log("Eligible to vote");
}else{
    console.log("Not Eligible to vote");
}

/*
Common Mistakes:
html and .js files have to be in the same folder; otherwise provide path
so our javascript file has only .js extension, not pre-JS
declaring variables twice is mistake, only declare once, however you can re-assign value many times
when you have errors in the code, your live server or running the code will not work
*/

