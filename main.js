// Array Challenge

let zero = 0;
 let counter = 3;

 let my = ["Ahmed","Mazero","Osama","Gamal","Ameer"];
 // don't write numbers
 // use variables

 // Write Code Here
 
 my.reverse().splice(zero,--counter);
 my.splice((counter / counter),zero,'Elham')
 

 console.log(my); // ["Osama","Elham","Mazero,"Ahmed"]
 console.log(my.slice(++zero,++counter)); // ["Elham","Mazero"]
 console.log(`"${my[counter / counter].slice(--zero,--counter)}${my[counter].slice(counter)}"`); // "Elzero"
 console.log(`${my[counter][counter * counter]}${my[counter][counter * counter + ++zero].toUpperCase()}`); // "rO"