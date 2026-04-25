// In the anology used earlier Shopping cart was the--VARIABLE and the food stuff that went inside the shopping cart were the --DATA TYPES.

// The data types determine the kind of stuff that get inside the shopping cart which is our --VARIABLE.

// IN JS THE MOST COMMON TYPES OF DATA ARE:

/*  ...1. STRINGS --Which represent the 'textual data' such as words, texts and sentences.

-> Strings are always enclosed in either single quotes (' '), double quotes (" ") or backticks (` `) in JavaScript.
-SO if i went to naivas supermarket to buy the foodstuff then i can say that in JS like:..
*/
let supermarket = "Naivas"; //This is a string data type because it is enclosed in double quotes (" ").

/*  ...2. NUMBERS --Which represent the 'numerical data' such as integers(whole numbers) and decimals 

-> Numbers are written without any quotation marks in JavaScript.
-SO if I bought 5-litres of milk from the supermarket at Ksh 500 then i van say that in JS like:..
*/

let milkQuantity = 5; //This is a number data type because it is written without any quotation marks and it represents the quantity of milk bought.
let milkPrice = 500; //This is a number data type because it is written without any quotation marks and represents the price of the milk bought.

/* ...3. BOOLEANS --Which represent the 'logical data' such as true or false values.
-> Booleans can only have two possible values: true or false in JavaScript.
-SO if I bought the milk from the supermarket then I can say that in JS like:..
 */
let isMilkBought = true; //This is a boolean data type because it represents a true or false value.
let isMilkBought = false; //This is a boolean data type and i would term it false if i did not buy the milk from the supermarket.

/* ...4. UNDEFINED --Which represent the 'absence of value' or 'uninitialized variable'.
-> Undefined is a data type that represents the absence of a value or an uninitialized variable in JavaScript.
-SO if I declare a variable without assigning it a value then it will have the data type undefined.
 */
let undefinedVariable; //This is an undefined data type because it is declared without being assigned a value.

/* ...5. NULL --Which represent the 'intentional absence of any object value'.
-> Null is a data type that represents the intentional absence of any object value in JavaScript.
-SO if I want to indicate that there is no value for a variable then I can assign it the value null.
 */
let nullVariable = null; //This is a null data type because it represents the intentional absence of any object value.

// ----------------JAVA SCRIPT CONSOLE------------------
/* In JavaScript, the console is a tool that provides a way to log information, display messages, and interact with the JavaScript code. It is commonly used for debugging purposes and to check the values of variables and data types.
In simple terms, it is a tool that allows developers to see the output of their code in the browser's developer console. */

// To check the data type of a variable in JavaScript, we can use the typeof operator in the console. For example:
console.log(typeof supermarket); //This will output "string" because supermarket is a string data type with the quotation marks.
console.log(typeof milkQuantity); //This will output "number" because milkQuantity is a number data type with no quotation marks.
console.log(typeof milkPrice); //This will output "number" because milkPrice is a number data type with no quotation marks.
console.log(typeof isMilkBought); //This will output "boolean" because isMilkBought is a boolean data type.
console.log(typeof undefinedVariable); //This will output "undefined" because undefinedVariable is an undefined data type.
console.log(typeof nullVariable); //This will output "object" because nullVariable is a null data type.

// --------CONCATENATION OF STRINGS------------------
/* Concatenation is the process of combining two or more strings together to create a new string. In JavaScript, we can concatenate strings using the + operator(ADDITION). For example: */
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName; //This will concatenate the firstName and lastName variables with a space in between.
console.log(fullName); //This will output "John Doe" because it concatenates the firstName and lastName variables with a space in between.The purose of the string with no variable name in between the firstName and secondName is to create space between the two names..... if the space wasn't there then the output would look like from the console:

let fullNameWithoutSpace = firstName + lastName; //This will concatenate the firstName and lastName variables without a space in between.
console.log(fullNameWithoutSpace); //This will output "JohnDoe" because it concatenates the firstName and lastName variables without a space in between.

// THIS will be something will be covering in the next chapter NO 3 on OPERATORS....
