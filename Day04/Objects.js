// how to create objects: 2 ways

let user = new Object(); // object constructor syntax
let student = {}; // "Object Literal" syntax

user = {
    name:"John",
    age:30,
    isMarried:false
}

console.log(user);

// Objects are holding values in Key and Value Structure
console.log("Name of the user :" + user.name); // key : name , value : John
console.log("Age of the user : "+ user.age);  // key : age, value : 30
console.log("Mariage status of the user : "+ user.isMarried); // key is isMarried, value is false


