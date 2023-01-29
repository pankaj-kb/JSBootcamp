// 28. Write a program to print the given patterns using the loops-

// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
//    ***
for (let i = 1; i <= 3; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
        str += "*"
    }
    console.log(str);
}

console.log("\n");

// 	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***


for (let i = 1; i <= 3; i++) {
    let str = "";
    for (let j = 1; j <= 3; j++) {
        str += "*"
    }
    console.log(str);
}

console.log("\n");

// 	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
// 	     *
// 	    ***
//     *****

for (let i = 1; i <= 3; i++) {
    let str = "";
    for (let j = 1; j <= 3 - i; j++) {
        str += " ";
    }
    for (let k = 1; k <= i; k++) {
        str += "* ";
    }
    console.log(str);
}