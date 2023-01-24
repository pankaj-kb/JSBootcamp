// 13. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let age;

rl.question('Enter your age: ', (answer) => {
    age = answer;
    console.log(`Your age is ${age}!`);
    if (age >= 18) {
        console.log("You are old enough to drive");
    } else {
        console.log(`wait for ${18-age} years`);
    }
    rl.close();
});