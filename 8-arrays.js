/* An Array is basically a single variable that can hold a whole bunch of values at once.
 Instead of having item1, item2, item3... you just have one big cart. */

//  when forming an array think of a Carton of eggs.... where each egg has a specific slot.... if you remove one egg from the tray,.... the slot is still there but just empty

// THE FIRST ITEM IN AN ARRAY HAS AN INDEX= 0;

// --- CREATING THE SHELF ---
// We use square brackets [ ] to signify an array.
let shoppingList = ["Bread", "Milk", "Eggs", "Honey"];

// --- ACCESSING STUFF (The Zero-Trap) ---
// Remember: Computers are weird. They start counting at 0.
console.log(shoppingList[0]); // Output: "Bread" (The first item!)
console.log(shoppingList[2]); // Output: "Eggs" (The third item!)

// --- CHANGING STUFF ---
// If we want to swap Milk for Mayo:
shoppingList[1] = "Mayo";
// Now the list is ["Bread", "Mayo", "Eggs", "Honey"]

/* ====ARRAY METHODS ======*/
/* 1. .push()
  — Adds an item to the very end. (Like tossing a last-minute chocolate bar into your cart). */

/*2.  .pop()
   — Removes the last item. (Like realizing you don't have enough money and putting the last item back). */

/* 3. .length 
  — Tells you exactly how many items are inside.
  */

let cart = ["Apple", "Pear"];

cart.push("Mango"); // Cart is now ["Apple", "Pear", "Mango"]
console.log(cart.length); // Output: 3

cart.pop(); // Bye bye, Mango!
