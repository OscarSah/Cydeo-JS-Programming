let hour = 9;

// condition: if time is outside of 10AM-18PM (0-24) 
// then write at the console "The Office is closed"
if(hour<10 || hour>18){
    console.log("The Office is closed");
}else{
    console.log("Office is open");
}

// ask the user his/her age  : prompt command
// then assign it to a variable 
// create if/else condition (bigger than 18) 
// accessAllowed = true

// how to get user input dynamically
let age = prompt("Enter your age"); 
let accessAllowed;
if (age>18) {
    accessAllowed = true;
} else {
    accessAllowed = false;
}
console.log("Access allowed : "+accessAllowed);

// Ternary Operator
// let result = condition ? value1 : value2;

accessAllowed = (age>18) ? true : false;
console.log("Ternary/Access allowed : "+accessAllowed);

// Multi-branch if else statements
let value = 10;

if(value > 0){
    console.log(1);
}else if(value < 0){
    console.log(-1);
}else{
    console.log(0);
}

let login = prompt("Enter your login userName : "); // according to userName message will change
let message;  

if(login == 'Employee') {
    message = 'Hello';
}else if(login == 'Director'){
    message = 'Greetings';
}else if(login == 'Outsider'){
    message = 'Forbidden';
}else{
    message = 'Nothing';
}
console.log(message);

// lets change above example with switch statement
// after every case we need to break so when the condition is true, it can get out
switch (login) {
    case  'Employee' :
        message = 'Hello';
        break;
    case 'Director' :
        message = 'Greetings';
        break;
    case 'Outsider' :
        message = 'Forbidden';
        break;
    default:
        message = 'Nothing';
        break; // this last break is optional
}
console.log("message from Switch statement : "+message);


