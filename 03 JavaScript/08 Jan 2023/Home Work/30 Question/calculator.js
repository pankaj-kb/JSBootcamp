// 30. Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.

function calculate(operation, number1, number2, ) {
    if (operation === "add") {
        return (number1 + number2);
    }
    if (operation === "substract") {
        return (number1 - number2)
    }
    if (operation === "multiply") {
        return (number1 * number2)
    }
    if (operation === "division") {
        return (number1 / number2)
    }
    if (operation === "moduler") {
        return (number1 % number2)
    }
}

console.log(calculate("add", 5, 5));
console.log(calculate("substract", 5, 5));
console.log(calculate("multiply", 5, 5));
console.log(calculate("division", 5, 5));
console.log(calculate("moduler", 5, 5));