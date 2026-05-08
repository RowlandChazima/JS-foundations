/* This is called a Ternary Operator. It's a shortcut for writing if/else inside a string.

The Basic Idea
In plain English:

"Ask a question. If YES do this, if NO do that."

The syntax is:
condition ? "if true" : "if false"
Think of ? as "then" and : as "otherwise". */

// BACK KWA supermarket.... if you're supermarket is like mine then customers with only membership cards get a "MEMBER DISCOUNT"
// AND FOR computers they do not know like you have it or not.....
// We make it know by using conditionals such as the "if/else" which let's the computer make the decision on whether you should get a discount if you have a card and not if you do not have the membership card

// --- THE SHOPPING CART SETUP ---
let totalBill = 1200;
let isMember = true; // This is a Boolean (True/False). Are they in the "cool kids" club?

// --- THE "IF" CHECK ---
// We use ( ) for the test and { } for the action.
if (isMember === true) {
  // This code ONLY runs if the test above is TRUE.
  // It's like the "Member Only" lane at the checkout.
  console.log("Welcome back! Applying 10% discount...");
  totalBill = totalBill * 0.9;
}

// --- THE "ELSE" (The Backup Plan) ---
else {
  // If the test above is FALSE, the computer jumps straight here.
  // No membership? No problem, but no discount either!
  console.log("Guest checkout. Thank you for shopping!");
}

console.log("Your final total is: " + totalBill);

// it is just like saying if im thirsty i take serve myself some juice if it is there if it is not... i just drink some plain water

// =====CASE STUDY 2======
// If you've ever bought stuff on amazon that require shipping .... there's ussualy a shipping fee that is applied based on whether you meet a certain threshold depending on the value of the items you purchased
// Let's say this is the logic behind it
/* 1.Spend over 5000: Shipping is Free.

   2.Spend between 2000 and 5000: Shipping is 200.

   3.Spend less than 2000: Shipping is 500 (Expensive!). */

let spentAmount = 3500; // Let's say the user spent this much
let shippingFee = 0; // We start at 0 and let the "If" machine decide

if (spentAmount >= 5000) {
  shippingFee = 0; // High roller! Free shipping.
  console.log("You get FREE shipping!");
} else if (spentAmount >= 2000) {
  // This only checks if the FIRST one failed.
  // It's the "Middle Lane".
  shippingFee = 200;
  console.log("Standard shipping applied: 200");
} else {
  // If BOTH checks above failed, you end up here.
  shippingFee = 500;
  console.log("Small order fee applied: 500");
}
