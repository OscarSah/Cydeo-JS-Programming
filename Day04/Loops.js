// Loops are: repeated if statements, as long as the condition is true the code block is repeated

// for loop:
console.log("-----without loops-----");
console.log(0); // only one line keeps repeating
console.log(1);
console.log(2);
console.log(3);
console.log(4);

 // let fake = 0;
 console.log("-----with for loop-----");
for(let i = 0; i < 5 ; i++)
{
    console.log(i);
}
/*
let i = 0 : begining or initial condition
i < 5     : condition of the loop
i++       : increament/decreament should be able to change/effect the condition
*/

// while loop
console.log("-----with while loop-----");
let j = 0; // begin
while(j < 5){      // condition
    console.log(j);
    j++; // step
}

// do while loop: at least executes one time before checking condition
console.log("-----with DO while loop-----");
let n = 0; // begin
do{
    console.log(n);
    n++;   // step
}while (n < 5)  // condition

let x = 5;
while(x < 5){  // condition false
    console.log("number from while loop : "+ x); // not executed
    x++;
}
console.log("Value of X after loop"+x);  // 5 

let y = 5;
do{
    console.log("number from DO while loop : "+ y);  // even if the condition is wrong 
    y++;                                             // gets executed one time
}while(y < 5)
console.log("Value of y after loop"+y); // 6
