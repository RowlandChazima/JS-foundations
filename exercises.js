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

// EXERCISE 7
/* 1. Mobile Airtime Purchase Validator
   A telecom system needs to validate airtime purchases. Write a function that:
   - Takes phoneNumber, amount, and balance
   - Checks:
     - Phone number must be 10 digits
     - Amount must be greater than 0
     - User must have enough balance
   - Deducts the amount if valid and returns the new balance
   - Otherwise returns an error message */

function validateAirtimePurchase(phoneNumber, amount, balance) {
  const phone = String(phoneNumber);
  if (phone.length != 10 || isNaN(phone)) {
    return `Phone number must be 10 digits`;
  }

  // amount
  if (amount <= 0) {
    return `Amount must be greater than 0`;
  }

  // Balance
  if (amount > balance) {
    return `You do not have enough balance`;
  }

  let newBalance = balance - amount;
  return `Your new balance is ${newBalance}`;
}
console.log(validateAirtimePurchase("0715207383", 50, 20));
console.log(validateAirtimePurchase("0720592674", 3000, 5000));

// EXERCISE 8
/* 4. Parking Fee Calculator
   A parking system charges based on hours parked. Write a function that:
   - Takes number of hours parked
   - Charges:
     - First 2 hours → KES 50/hour
     - Additional hours → KES 30/hour
   - Uses conditionals to calculate total cost */

function ParkingFee(hours) {
  if (hours <= 2) {
    return hours * 50;
  } else {
    return hours * 50 + (hours - 2) * 30;
  }
}
console.log(ParkingFee(4));
console.log(ParkingFee(2));

// EXERCISES 9
/* 3. Supermarket Discount Calculator
   A supermarket applies discounts based on total purchase. Write a function that:
   - Takes an array of item prices
   - Calculates total cost using a loop
   - Applies:
     - 10% discount if total > 5000
     - 5% discount if total > 2000
   - Returns final payable amount */

function calculateDiscount(prices) {
  let total = 0;
  for (let i = 0; i < prices.length; i++) {
    total += prices[i];
  }
  // DISCOUNT
  let discount = 0;

  if (total > 5000) {
    discount = 0.1;
  } else if (total > 2000) {
    discount = 0.05;
  }

  const discountAmount = total * discount;
  const totalAmount = total - discountAmount;

  console.log(discountAmount);
  console.log(totalAmount);

  return `THE AMOUNT PAYABLE IS ${totalAmount}`;
}

console.log(calculateDiscount([100, 300, 5000, 300]));
console.log(calculateDiscount([500, 6000, 300, 50]));

// EXERCISE 10
/*  2. Student Grade Processing System
   A school wants to automate grading. Write a function that:
   - Accepts an array of student scores
   - Uses a loop to:
     - Assign grades: 70+ → A, 60–69 → B, 50–59 → C, Below 50 → Fail
   - Returns a summary:
     - Total students
     - Number of passes and fails
*/

function processingGrades(scores) {
  let passes = 0; //FOR TRACKING OUR STATS
  let fails = 0; //FOR TRACKING OUR STATS

  for (let i = 0; i < scores.length; i++) {
    const score = scores[i]; //PULLS OUT EACH STUDENTS RESULT IN THE ARRAY
    let grade; //Empty varialble and its values are declared below

    // GRADE LIMITS : which checks scores and assigns the grades
    if (score >= 70) {
      // From 70 + above
      grade = "A";
    } else if (score >= 60) {
      //From 60-69
      grade = "B";
    } else if (score >= 50) {
      //From 50-59
      grade = "C";
    } else {
      // From 50 and below is a fail
      grade = "Fail";
    }

    // CHECKS THE GRADE THAT WAS ASSIGNED ADDS THEM TO THE CATEGORY OF WHETHER IT IS A fail OR A pass
    if (grade === "Fail") {
      fails++;
    } else {
      passes++;
    }

    // Prints the result for each student due to the (i+1)
    console.log(`Student ${i + 1}: Score ${score} Grade ${grade}`);
  } // for loop closes here

  return {
    //When the loop is done it returns 3 values as our statistics
    totalStudents: scores.length,
    passes: passes,
    fails: fails,
  };
}

const result = processingGrades([85, 60, 90, 70, 50, 30]); //Calling the function to process these scores
console.log(result); //PRINTS OUT OUR RESULT STATISTICS

/* EXERCISE 11
1. Ride-Hailing Fare & Acceptance System

You are given:  
- ride object: distance, baseFare, perKmRate, isPeakTime  
- driver object: isAvailable, rating

Calculate total fare (apply surge if peak time).  
Determine if driver should accept the ride only if:  
- Driver is available  
- Rating is above a threshold  
- Distance is within an acceptable range
 */

//  WE NEED INFORMATION ABOUT THE DRIVER AND THE CUSTOMER(ride)
const ride = {
  distance: 12,
  baseFare: 100,
  perKmRate: 20,
  isPeakTime: true,
};

const driver = {
  rating: 4.5,
  isAvailable: true,
};

// The fare is the base charge. if theres a rush hour,i can charge 50% extra.
/* fare = baseFare +(distance * perKmRate)
if theres a peak i multiply the total by 50%(1.5) */

function calculateFare(ride) {
  let fare = ride.baseFare + ride.distance * ride.perKmRate;

  if (ride.isPeakTime) {
    fare = fare * 1.5;
  }
  return fare;
  // FUNCTION ends here.
}

/* The driver should accept if some conditions are met:
- Driver is available  
- Rating is good enough maybe lets say above 4.0
- The trip is not tooo far
 */
// The function needs info about the driver and the ride
function shouldAcceptRide(ride, driver) {
  const isAvailable = driver.isAvailable;
  const ratingIsGood = driver.rating >= 4.0;
  const distanceIsOk = ride.distance <= 30;

  // if all the conditions meet the criteria/conditions above he accepts if not REJECTS
  if (isAvailable && ratingIsGood && distanceIsOk) {
    return "Driver has accepted the ride. He is coming in a few🙂";
  } else {
    return "Driver has rejected your ride.";
  }
  // FUNCTION ends here
}

// CALLING OUR TWO FUNCTIONS
const totalFare = calculateFare(ride);
const decision = shouldAcceptRide(ride, driver);

console.log(`Total fare is ${totalFare}`);
console.log(decision);

/* EXERCISE 12
2. Banking Transaction Validator

You are given:  
- account object: balance, isActive  
- transaction object: amount, type

Determine if a withdrawal should go through only if:  
- Account is active  
- Balance is sufficient  
- Amount is within a daily limit  

Also update the balance accordingly.

 */

//  WE NEES INFO ABOUT THE ACCOUNT INFO AND THE TRANSACTION THAT THE USER WANTS TO MAKE
const account = {
  balance: 50000, //User's current balance
  isActive: true,
};

const transaction = {
  amount: 40000,
  type: "withdrawal",
};

function canWithdrawMoney(account, transaction) {
  /* 
   IN ORDER TO WITHDRAW MONEY SOME CONDITIONS MUST BE MET
  - Driver is available  
  - Rating is good enough maybe lets say above 4.0
  - The trip is not tooo far
 */

  const accountActive = account.isActive;
  const hasMoney = account.balance >= transaction.amount;
  const dailyLimit = transaction.amount <= 40000;

  // if all the conditions are met then:
  if (accountActive && hasMoney && dailyLimit) {
    account.balance -= transaction.amount; //To deduct the money
    return `Withdrawal request accepted ✔. New Balance is KSH ${account.balance}`;
  } else {
    // LEARNED NEW THING: i can include a reason why the request was denied(***TERNARY OPERATOR***)
    return `Withdrwal request denied 🛑❌. Reason: ${!accountActive ? "Account inactive" : !hasMoney ? "Insufficient Funds" : "Exceeds Daily Limit"}`;
  }
  // Function ends here.
}

console.log(canWithdrawMoney(account, transaction));

/* 3. Smart Inventory Management

You are given an array of products, each with:  
stock, minStockLevel, isDiscontinued

Identify which products need restocking only if:  
- Stock is below minimum  
- Product is not discontinued
 */





