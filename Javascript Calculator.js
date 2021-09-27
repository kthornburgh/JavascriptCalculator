const readline = require("readline-sync")

var num1 = parseInt(prompt('Please enter your first number '));

var num2 = parseInt(prompt('Please enter your second number '));

var operation = prompt('Please enter the operation to perform: add, sub, mul, div ');

var add = num1 + num2

var sub = num1 - num2

var mul = num1 * num2
    
var div = num1 / num2

function math(){

if (operation == "add")
console.log("The result is: " + (add))

else if (operation == "mul")
console.log("The result is: " + (mul))

else if (operation == "div")
console.log("The result is: " + (div))

else
console.log("The result is: " + (sub))
}
math();