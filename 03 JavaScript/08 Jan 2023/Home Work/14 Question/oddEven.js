// 14. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript? Create a program which checks that the given number is even or odd.

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let checkEven;

rl.question('Enter the Number: ', (answer) => {
  checkEven = answer;
  if(checkEven % 2 == 0) {
    console.log(`${checkEven} is Even`)
  } else {
    console.log(`${checkEven} is Odd`)
  }
  rl.close();
});