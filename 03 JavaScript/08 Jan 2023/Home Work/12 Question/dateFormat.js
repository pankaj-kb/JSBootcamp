// 12. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

const date = new Date();

let currentYear = date.getFullYear();
let currentMonth = date.getMonth() + "1";
let currentDay = date.getDate();
let currentHours = date.getHours();
let currentMinutes = date.getMinutes();

let format1 = `${currentYear}-${currentMonth}-${currentDay} ${currentHours}:${currentMinutes}`;
console.log(format1)

let format2 = `${currentDay}-${currentMonth}-${currentYear} ${currentHours}:${currentMinutes}`;
console.log(format2)

let format3 = `${currentDay}/${currentMonth}/${currentYear} ${currentHours}:${currentMinutes}`;
console.log(format3)