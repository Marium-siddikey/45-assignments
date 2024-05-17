//DEFINE VARIABLES
let apple = "apple";
let uppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;

//test for equality and unequality with strings

console.log("Is apple is equal to apple");
console.log(apple == "apple");

console.log("Is apple is not equal to apple");
console.log(apple != "apple");

//using of lower case function
console.log("IS APPLE is equal to apple after converting to lowerCase");
console.log(uppercaseApple.toLowerCase() == "apple");


console.log("\n Is APPLE is not equal after converting to lowerCase?");
console.log(uppercaseApple.toLowerCase() != "apple");

//numericals tests
console.log("\n is ten is equal to twenty?");
console.log(ten == twenty);


console.log("Is ten is not equals to twenty?");
console.log(ten != twenty);

console.log("\n Is ten is greater than zero?");
console.log(ten > 0);

console.log("\n Is twenty is less than 10");
console.log(twenty < 10);

console.log("\n IS ten is greater than or equal to 5?");
console.log(ten >= 5);

console.log("\n twenty is less than or equals to 10?");
console.log(twenty <= 10);

console.log("\n twenty is less than or equals to 10?");
console.log(twenty <= 10);

//tests using "and" & "or" opertors
console.log("\n twenty is not equals to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);
//using &&
console.log("\n twenty is not equals to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 30);

//using || (or)
console.log ("\n 20 is greater than 50 or 20 is equals to 20");
console.log(20 > 50 || 20 == 20);

// using not equals to
console.log ("\n 20 is greater than 50 or 20 is equals to 20");
console.log(20 > 50 || 20 != 20);

//test wheather an item is include in array
console.log("Is orange include in my fruits array");
console.log(fruits.includes("orannge"));
//not included?
console.log("Is orange include in my fruits array");
console.log(! fruits.includes("orange"));
