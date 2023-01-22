// 11. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

const date = new Date();

let currentYear = date.getFullYear();
console.log(currentYear)

let currentMonth = date.getUTCMonth();
console.log(currentMonth + 1)

let currentDate = date.toString();
console.log(currentDate);

let currentDay = date.getDate();
console.log(currentDay)

let currentHours = date.getHours();
console.log(currentHours)

let currentMinutes = date.getMinutes();
console.log(currentMinutes)

let totalSeconds = date.getTime() / 1000;
console.log(totalSeconds)
