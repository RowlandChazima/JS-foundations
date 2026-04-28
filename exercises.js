// =======EXERCISE 1================
// Create two number variables and calculate their sum, difference, product, and quotient. Display all results.

let number1 = 16;
let number2 = 60;

/* ==SUM=== */
let sum = number1 + number2;
let difference = number2 - number1;
let product = number1 * number2;
let quotient = number2 / number1;

/* ===RESULTS== */
console.log("The answer is" + " " + sum); // 70
console.log("The answer is" + " " + difference); //44
console.log("The answer is" + " " + product); //960
console.log("The answer is" + " " + quotient); //4

//  ====EXERCISE 2=====
// Find the remainder when 17 is divided by 5 and display the result.
let remainder = 17 % 5;
console.log("The answer is" + " " + remainder); // 2

// ==EXERCISES 3====
// Create a variable x with a value of 10. Add 5 to it using a shorthand operator, then multiply the result by 2 using another shorthand operator. Display the final value.
let x = 10;
x += 5; //
x *= 2; //
console.log("The result is" + " " + x);

//===EXERCISE 4=====
// 4. Perform the following operations and display the results:
//    - A string "5" plus a number 2

let additionAnswer = "5" + 2;
console.log(additionAnswer); //Result is 52 due to concatenation

// ====EXERCISE 4======
//    - A string "5" minus a number 2
let subtractionAnswer = "5" - 2; //Result is 3

// ==EXERCISE 5=====
// Convert a string "100" into a number and display the result. Then convert a number 50 into a string and display the result.
let number = parseInt("100");
console.log("The answer is" + " " + number);

// ===EXERCISE 6=====
// Compare the values 5 and "5" using both loose equality and strict equality. Display both results.
let varA = "5";
let varB = 5;

/* LOOSE INEQUALITY */
console.log(5 == "5"); //Console prints out a true cause the loose inequality only cross checks whether the values are the same and ignores the data types.

/* STICT INEQUALITY */
console.log(5 === "5"); // FALSE---CAUSE one is a string

// ===LAST EXERCISES===
// 7. Create variables for principal, rate, and time. Calculate the simple interest and display the result.
let principal = 1000;
let rate = 5;
let time = 2;

let simpleInterest = (principal * rate * time) / 100;
console.log(simpleInterest); // answer is  100
