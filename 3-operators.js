// Back to our supermarket anology..... you're still at the supermarket.... and you've picked your itmes/foodstuff , they're in the shpping cart.... Now you're at the TILL ---The part where you pay for the items that you got

// The cashier scans everything and starts doing calculations--adding rices, checking if you have enough money whether you pay you use your debit card, applying discounts.....

// THE WHOLE OF THAT  is what OPERATORS do in JavaScript. They prform operations on your variables and values.

// ====== TYPES OF OPERATORS IN JAVASCRIPT ======
//   1...ARITHMETIC OPERATORS -- The cashier's calculator
// ====================================

// Imagine the cashier is adding up the items at the till/counter...
// With every beep.....

let milkPrice = 150;
let breadPrice = 80;
let eggsPrice = 600;

//  ADDITION OPERATOR (+) -- The cashier adds up the prices of the items to get the total amount to be paid by the customer.
let totalPrice = milkPrice + breadPrice + eggsPrice; //This will add up the prices of the items and give us the total price to be paid by the customer.
console.log(totalPrice); //This will output 830 because it adds up the prices of the items to get the total price to be paid by the customer.

// SUBTRACTION OPERATOR (-) --You had 1000 shillings, how much change do you get?
let myMoney = 1000;
let change = myMoney - totalPrice; //This will subtract the total price from the money you had to get the change you will receive after paying for the items.
console.log(change); // 170 shillings will be you change.

// MULTIPLICATION OPERATOR (*) -- Let's say you want 3 loaves of bread instead of just 1
let breadQuantity = 3;
let totalBreadPrice = breadPrice * breadQuantity; //This will multiply the price of bread by the quantity to get the total price for the bread.
console.log(totalBreadPrice); // 240

// DIVISION OPERATOR (/) -- Let's say you want to split the total price of the items equally among 4 friends, how much will each friend pay?
let numberOfFriends = 4;
let pricePerFriend = totalPrice / numberOfFriends; //This will divide the total price by the number of friends to get the price each friend will pay.
console.log(pricePerFriend); // 207.5 shillings will be the price each friend will pay.

// MODULUS OPERATOR (%) -- This is just the REMAINDER  after division.
// Let's say you're buying items in oacks of 3 , and you have 10 item - how may are left over that won't form a full pack?
let leftOver = 10 % 3;
console.log(leftOver); // 1 item will be left over after making 3 full packs.

//  EXPONENTIATION OPERATOR (**) -- The UNGRATEFUL compound interest on you Fuliza loan 😅
// if you borrowed ksh 100 at a rate that doubles every period lets say for three periods lets say each and every month
let borrowed = 100;
let doubled = borrowed ** 3; // 100 to the power of 3
console.log(doubled); // 1,000,000 shillings will be the amount you owe after three periods of doubling.---- ANOTHER REASON TO AVOID IT....
// PS : This is just an example to illustrate the use of the exponentiation operator, and it does not reflect actual interest rates or financial calculations.----- DON'T SUE ME FOR THAT...

// ====================
//  ====2 . ASSIGNMENT OPERATORS - Updating your cart as you shop
// ====================

// Of course the basic one:
let cartTotal = 0; // cart starts empty

// As you pick items, you ADD to the running total.

// ADDITION ASSIGNMENT (+=) — adding milk to the cart total
cartTotal += milkPrice; // This will add the price of milk to the cart total whic is same as: cartTotal + milkPrice
console.log(cartTotal); // 150

cartTotal += breadPrice; // This will add the price of bread to the cart total which is same as: cartTotal + breadPrice
console.log(cartTotal); // 230

cartTotal += eggsPrice; // This will add the price of eggs to the cart total which is same as: cartTotal + eggsPrice
console.log(cartTotal); // 830

// SUBTRACTION ASSIGNMENT (-=) — You put back the eggs (too expensive)
cartTotal -= eggsPrice; // This will subtract the price of eggs from the cart total which is same as: cartTotal - eggsPrice
console.log(cartTotal); // 230

// MULTIPLICATION ASSIGNMENT (*=) — You're buying double of everything
cartTotal *= 2;
console.log(cartTotal); // 460

// DIVISION ASSIGNMENT (/=) — Wait, splitting with your friend again
cartTotal /= 4;
console.log(cartTotal); // 115--YOUR SHARE THAT YOU HAVE TO PAY...

// INCREMENT (++) — Adding 1 item to your count
let itemCount = 0;
itemCount++; // same as: itemCount = itemCount + 1
console.log(itemCount); // 1

// DECREMENT (--) — Putting 1 item back on the shelf
itemCount--;
console.log(itemCount); // 0

// THIS IS WHERE IT STARTS TO GET TRICKY....
// ====================
// 3. COMPARISON OPERATORS — Making decisions at the till
// ====================

// These operators compare values to determine if an expression is TRUE OR FALSE, which is crucial for decision-making at the till. For example, checking if you have enough money to pay for your items.( a BOOLEAN)
// Think fo it like the voice in you head while you are shopping on a very tight budget..

let myBudget = 500;
let bill = 430;

// GREATER THAN (>) — Do I have MORE money than the bill?
console.log(myBudget > bill); // true — yes, I have enough
// For this the console returns a true value cause our budget is greater then the bill.

// LESS THAN (<) — Is the bill MORE than my budget?
console.log(bill < myBudget); // true — bill is less than budget
// For this the console returns a true value cause our bill is less than our budget.

// GREATER THAN OR EQUAL TO (>=)
console.log(myBudget >= 500); // true — I have exactly 500, which is >= 500
// PS -- VERY Important when we get to the section for CONDITIONALS AND LOOPS.

// LESS THAN OR EQUAL TO (<=)
console.log(bill <= 430); // true — bill is exactly 430
// PS -- VERY Important when we get to the section fOR CONDITIONALS AND LOOPS.

/* THE CHALLENGING STUFF BUT ALSO UNDERSTANDABLE WITH TIME */
// =====EQUALITY COMPARISON===
/* ---1. Loose Equality(==)
What this does it checks whether two values are EQUAL and IGNORES TYPES.(Numbers, Strings)
*/
console.log(430 == "430"); // The console prints out a true ... because the loose inequality ignores the data type and is only comparing the two values... which in this case it is true that the number 500 is equal on both ends of the ASSIGNMENT OPERATOR

/* ---2. STRICT INEQUALITY(===)
What it does it checks whether the values are equal or not and type is the SAME.
*/
console.log(430 === "430"); // false — 430 (number) is NOT the same as "430" (string)
console.log(430 === 430); // true — same value, same type

/* ---3.NOT EQUAL TO (!==)
What it does it checks if two values are NOT equal and ignores types
*/
console.log(myBudget !== bill); // The console prints out a true — 500 is not equal to 430

// ============================
// 5. STRING OPERATOR — Combining labels on your receipt
// ============================

// You already saw this in chapter 2 (data-types). The + operator also works on strings.
// Think of it like the cashier printing your receipt — combining your name with a message.

let customerName = "Rowland";
let receiptMessage = "Thank you for shopping at Naivas, " + customerName + "!";
console.log(receiptMessage); // "Thank you for shopping at Naivas, Rowland!"

// In modern JS (ES6+), template literals (backticks) are the cleaner way:----- REMEMBER THE CONCATENATION IN THE LAST CHAPTER
let betterReceipt = `Thank you for shopping at Naivas, ${customerName}! Your total was Ksh ${bill}.`;
console.log(betterReceipt); // "Thank you for shopping at Naivas, Rowland! Your total was Ksh 430."
