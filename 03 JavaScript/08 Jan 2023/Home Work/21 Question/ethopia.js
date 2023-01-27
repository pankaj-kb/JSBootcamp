// 21. In countries array check
// if 'Ethiopia'
// exists in the array
// if it exists print 'ETHIOPIA'.If it does not exist add to the countries list.

let countries = ["India", "USA", "China", "Russia", "Greece", "Bhutan", "Vietnam", "Ethopia"];
let exist = false;
for(i=0; i < countries.length; i++) {
    if (countries[i] == "Ethopia") {
        console.log("ETHOPIA")
        exist = true;
    }
}

if (!exist) {
    countries.push("Ethopia")
}

console.log(countries)