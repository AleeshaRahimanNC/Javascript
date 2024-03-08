let readlineSync = require("readline-sync");

let num = readlineSync.question("Enter the number of elements: ");

console.log(num);

switch(num % 2) 
{

    case 0:
        console.log("This is a Even Number!");
        break;

    case 1:
        console.log("This is a Odd Number!");
        break;

}