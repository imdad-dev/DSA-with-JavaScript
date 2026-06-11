//type coercion 
console.log("4 "-1); // 3 

//chrome Dev tools trick if console.log shows Black color then it is string and if it shows blue color then it is number.


//static variable & dynamic variable
let a=10;

let age=prompt("Enter your age");
console.log(age); 

console.log(typeof age);  // String

age=Number(age); 
console.log(typeof age); // Number

//Type casting means converting one data type to another data type.

let score="100";
console.log(score+1); // 1001
score=Number(score);
console.log(score+1); // 101 