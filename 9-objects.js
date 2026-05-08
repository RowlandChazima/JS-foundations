/*  like an array which was just simply a LIST of items but for objects they hold like the barcode info.. of like lets say honey....
for honey it has the NAME of the brand, WEIGHT, PRICE etc.... */

// for like its anatomy We use curly braces { } and "Key: Value" pairs.

// --- THE  OUR HONEY  ---
let honeyJar = {
  brand: "BeeWild", // 'brand' is the Key, 'BeeWild' is the Value
  price: 500, // Numbers don't need quotes
  isOrganic: true, // Booleans are welcome here!
  weight: "500g",
};

// to get very specific info from our object we use the Dot notation after the name of the object
// --- GETTING INFO OUT (Dot Notation) ---
// We use a dot (.) to "drill into" the object.
console.log(honeyJar.brand); // Output: "BeeWild"
console.log(honeyJar.price); // Output: 500

/* FOR like BEST practices make sure like you're shopping cart is not just a list of names.... but a list of product objects like this:
 */

let myCart = [
  { name: "Bread", price: 150 },
  { name: "Milk", price: 200 },
  { name: "Eggs", price: 300 },
];

// THIS IS HOW WILL GET ANY INFO WE NEED BY TARGETING THE POSITION OF OUR OBJECT IN THE ARRAY
// To get the price of the Milk:
console.log(myCart[1].price); // Output: 200

/* ===NOTES TO SELF====
1. Use [ ] for Lists (Arrays). Use { } for Descriptions (Objects). If you mix them up, i get errors from my code.

2. Every item in a list or every property in an object MUST have a comma after it, except for the very last one.
*/
