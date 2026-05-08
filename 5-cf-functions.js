// A Function is a REUSABLE block of code designed to perform a specific function such as in this case uko kwa supermarket pale kwa counter and the guy at the counter ana scan your items na the total cosst inakuwa calculated by the machine....

// Lets imagien this that umenunua eggs na ziko on discount ya 10 % on each egg instead ya msee kushinda akiandika the new price kama:
let eggPrice = 15;
let quantity = 10;
let eggTotal = eggPrice * quantity * 0.9;

console.log(eggTotal); // This prints out---- But none tech people may get tired of typing this every single time.... so we can summarize the whole procees using a function

/* Functions involve three main things :
        1. The PARAMETERS which we are dealing with and this is just the input 
        2. The Logic  -----This is where the ACTUAL maths happens
        3. The Return value --- Output*/

//Let's go back to our case above for the eggs where you've bought 10 eggs, at a price of ksh 15 each and a discount of 10%
// So first we need to define our function:

//  1. Define the function---- In this we will use the function attribute

function applyDiscount(price) {
  let discount = price * 0.1;
  return price - discount;
}

let finalPrice = applyDiscount(1000);

console.log(finalPrice);

function calculateEggPrice(count, pricePerEgg) {
  let total = count * pricePerEgg;
  return total;
}

let myBill = calculateEggPrice(12, 15);
console.log("My Bill is: " + myBill);

// ======FINAL SUMMARY======
/* Think of a function like a recipe card which contains a NAME , INGREDIENTS and what the function
does essentially is to take the ingredients and makes our meal behind the scenes and gives us an
already to eat curated meal */
// Let's make tea

function makeTea(water, teaBag, sugar) {
  // it prepares our ingredients and makes our tea
  return "a cup of tea ☕";
}

// Calling our function to make us our tea based on our preferences
console.log(makeTea("hot water", "earl grey", "5 full spoons"));
console.log(makeTea("hot water", "green tea ", "0 spoons"));
