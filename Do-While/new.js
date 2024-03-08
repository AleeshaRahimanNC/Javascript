let readlineSync = require("readline-sync");
let num = readlineSync.question("Enter the number: ");
let i=1;
let j=1;

console.log("Below mentioned are the sequence of Even Numbers till:",num);

do{
    if(i%2==0)
    {
        console.log(i);
    } 
    i++;
}while(i<=num);


console.log("Below mentioned are the sequence of Odd Numbers till:",num);

do{
    if(j%2!==0)
    {
        console.log(j);
    } 
    j++;
}while(j<=num);



