// 24. Write a program to create two array "even" and "odd"
// having even and odd number between the 0 to 100(0 and 100 included).

let evenArr = [];
let oddArr = [];

for (i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
        evenArr.push(i);
    }
    if (i % 3 == 0) {
        oddArr.push(i)
    }
}

console.log(evenArr)
console.log(oddArr)