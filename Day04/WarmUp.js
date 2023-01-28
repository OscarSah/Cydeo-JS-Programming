// Warp up task with switch and if-else
// when we provide which month it is, our code will say to us how many days that month has
// month = 1  then response of the code will be days = 31
// month = 4  then response of the code will be days = 30

 let month = 4; // Hard coded Entry
// let month = prompt("Enter the number of the month");
let dayCount; // just declared a variable (container) NO VALUE, and value will be assigned according to condition

if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)
{
    dayCount = 31;
}
else if(month == 2)
{
    dayCount = 28;
}
else if(month == 4 || month == 6 || month == 9 || month == 11)
{
    dayCount = 30;
}
else{
    dayCount = -1; // wrong input error statement
}

console.log(dayCount);

// With Switch statement
let dayCountWithSwitch;
switch(month)
{
case 1: case 3 : case 5: case 7: case 8: case 10: case 12:
    dayCountWithSwitch = 31;
    break;
case 2:
    dayCountWithSwitch = 28;
    break;
case 4: case 6: case 9: case 11:
    dayCountWithSwitch = 30;
    break;
default:
    dayCountWithSwitch = -1;
}
console.log(dayCountWithSwitch);