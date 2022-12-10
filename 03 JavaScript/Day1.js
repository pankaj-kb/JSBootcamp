// Data Types

// Number

let myNumber = 15;

let thisNumber = 1.5;

console.log(`${myNumber} and ${thisNumber} both are of Number Data type`);

// String

let myString = "this is an String";

console.log(myString);


// Undefined and Null

let a = undefined;

console.log(a);

let b = null;

console.log(b);


// Array []

let myArray = ["this", "is", "an", "Array"];

console.log(myArray);

// getting a value from specific index

console.log(myArray[1] + "from index 1");

// Object {}

let myObject = {
    hello: "this is from an Object",
    hey : "this is also from Object"
}

console.log(myObject);

console.log(myObject.hello + " using '.' to get an specific value");

// If else 

let score = 99;
let playerStatus = " ";

if (score >= 100) {
    playerStatus = "Century";
} else {
    playerStatus = "Under 100";
}

console.log(playerStatus)