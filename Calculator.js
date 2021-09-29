var readlineSync = require("readline-sync")

var num1 = readlineSync.questionInt('Please enter your first number ');

var num2 = readlineSync.questionInt('Please enter your second number ');

var userOperation = readlineSync.question('Please enter the operation to perform (add, sub, mul, div): ');


function addition(num1, num2) {
    return (num1 + num2)
}
function subtraction(num1, num2) {
    return (num1 - num2)
}
function multiplication(num1, num2) {
    return (num1 * num2)
}
function division(num1, num2) {
    return (num1 / num2)
}

function calculator(num1, num2, userOperation){

    if (userOperation == "add"){
        console.log("The result is: " + addition(num1, num2))
}
    else if (userOperation == "mul"){
        console.log("The result is: " + multiplication(num1, num2))
}
    else if (userOperation == "div"){
        console.log("The result is: " + division(num1, num2))
}
    else if (userOperation == "sub"){
        console.log("The result is: " + subtraction(num1, num2))
}
    else{
        console.log("Invalid entry")
}
}
calculator(num1, num2, userOperation);