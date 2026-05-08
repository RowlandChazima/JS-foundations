/* Think of a loop like a iriterative process that 
keeps going on until you stop it.You tell the computer to do one thing, and it just keeps doing it until you scream "STOP!" (or until a condition is met). */

// In our shopping cart, a loop is basically the cashier's hand grabbing one item after another until the belt is empty.

/*  If you have 50 items in your cart, you could write scanItem() 50 times... but that’s a waste of life. 
Instead, we use a loop to say: "Hey, see this pile? Scan every single thing in it."*/

// We use "for" to write a loop
// Since forming an array of 50 items would be intense lets deal with 4 instead

// Where myCart = just your shopping cart
let myCart = ["Milk", "Bread", "Eggs", "Honey"];

// .length tells the computer how many items are in the list (4)
for (let i = 0; i < myCart.length; i++) {
  // 'i' is our counter. It starts at 0 (the first item).
  // myCart[i] grabs the item at that position.

  console.log("Scanning: " + myCart[i]);
}

// Round 1: i=0. Scans myCart[0] (Milk)
// Round 2: i=1. Scans myCart[1] (Bread)
// ...and so on!
// until there are no more items in the cart....===THIS IS WHERE THE LOOP STOPS!!!

/* NOTES TO SELF :
You’ll see experienced programmers use i all the time. It just stands for "Index" or "Iterator." It’s just a shortcut name for our counter.
Remember, arrays start at 0
DO NOT FORGET THIS : like forgetting i++.  WHAT WILL HAPEEN IS SIMPLE: the condition will never be false...and by that it means that...
The computer will try to scan "Milk" forever until your browser crashes or your laptop starts smoking something like that
*/

/* ====ANOTHER WAY== IS USING THE "While" loop which just tells the computer:"While this is true, keep doing this"  */

// Lets say i wanted to buy some sweets like candy which costs 20 and in my pocket i have 200.... So long as money in my pocket is greater than the cost of the candy i can buy it..

let moneyInPocket = 100;
let candyPrice = 20;

while (moneyInPocket >= candyPrice) {
  console.log("Buying candy... 🍬");
  moneyInPocket = moneyInPocket - candyPrice; // Spend the money!
}

console.log("I'm broke now. Time to go home. Msoto!!!Kaza Kamba");
