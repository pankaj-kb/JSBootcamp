// 22. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

let maxAge = ages[0];
let minAge = ages[0];
let total = 0;
let average = 0;


for (let i = 0; i < ages.length; i++) {
    if (ages[i] < minAge) {
        minAge = ages[i]
    }
    if (ages[i] > maxAge) {
        maxAge = ages[i]
    }
}

let medianAge;

for (let i = 0; i < ages.length; i++) {
    for (let j = 0; j < ages.length; j++) {
        if (ages[i] < ages[j]) {
            let temp = ages[i];
            ages[i] = ages[j];
            ages[j] = temp;
        }
    }
}

if (ages.length % 2 === 0) {
    medianAge = (ages[ages.length / 2 - 1] + ages[ages.length / 2]) / 2;
} else {
    medianAge = ages[Math.floor(ages.length / 2)];
}

for (let i = 0; i < ages.length - 1; i++) {
    total += ages[i];
    average = total / ages.length;
}

let range = maxAge - minAge;

let abs1 = (minAge - average);
let abs2 = (maxAge - average);

console.log(ages)
console.log(maxAge)
console.log(minAge)
console.log(medianAge)
console.log(average)
console.log(range)
console.log(Math.abs(abs1))
console.log(Math.abs(abs2))