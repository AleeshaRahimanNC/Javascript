let readlineSync = require("readline-sync");
let num = readlineSync.question("Enter the range: ");
console.log("Below mentioned are the sequence of Even Numbers till:",num);
for (var i = 1; i <= num; i++) {

    if (i % 2 == 0) {
        console.log(i);
    }

}

console.log("Below mentioned are the sequence of Odd Numbers till:",num);
for (var i = 1; i <= num; i++) {

    if (i % 2 !== 0) {
        console.log(i);
    }

}