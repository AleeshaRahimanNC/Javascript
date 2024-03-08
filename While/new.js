let readlineSync = require("readline-sync");
let num = readlineSync.question("Enter the number: ");
let i=1;
let j=1;

console.log("Below mentioned are the sequence of Even Numbers till:",num);

while(i<=num)
{
    if(i%2==0)
    {
        console.log(i);
    } 
    i++;
}

console.log("Below mentioned are the sequence of Odd Numbers till:",num);
while(j<=num)
{
    if(j%2!==0)
    {
        console.log(j);
    } 
    j++;
}





