
// Day 3: Operators and Expressions in JavaScript

// Hello everyone! Welcome to Day 3 of our JavaScript learning journey.
// Yesterday, we learned about variables and data types.
// Today, we'll learn how to work with those variables using operators and expressions.


// -------------------------
// 1. Arithmetic Operators
// -------------------------

let a = 10;
let b = 5;

console.log(a + b); // Addition : 10 + 5 = 15
console.log(a - b); // Subtraction : 10 - 5 = 5
console.log(a * b); // Multiplication : 10 * 5 = 50
console.log(a / b); // Division : 10 / 5 = 2
console.log(a % b); // Modulus (remainder) : 10 % 5 = 0
// Explanation: Arithmetic operators let us do basic math with numbers


// -------------------------
// 2. Assignment Operators
// -------------------------

let score = 10;
score += 5;  // Equivalent to: score = score + 5
console.log(score); // Output: 15

score -= 3;  // Equivalent to: score = score - 3
console.log(score); // Output: 12

score *= 2;  // Equivalent to: score = score * 2
console.log(score); // Output: 24

score /= 4;  // Equivalent to: score = score / 4
console.log(score); // Output: 6

// Explanation: Assignment operators let us update variable values easily


// -------------------------
// 3. Comparison Operators
// -------------------------

let x = 10;
let y = 20;

console.log(x == y);   // Equal : false
console.log(x != y);   // Not equal : true
console.log(x > y);    // Greater than : false
console.log(x < y);    // Less than : true
console.log(x >= 10);  // Greater or equal : true
console.log(y <= 20);  // Less or equal : true

// Explanation: Comparison operators are used to compare values and return true or false


// -------------------------
// 4. Logical Operators
// -------------------------

let isAdult = true;
let hasTicket = false;

console.log(isAdult && hasTicket); // AND : false (both must be true)
console.log(isAdult || hasTicket); // OR : true (either one is true)
console.log(!isAdult);             // NOT : false (opposite of true)

// Explanation: Logical operators help us combine or invert boolean values


// -------------------------
// 5. Combining Variables and Operators
// -------------------------

let price = 100;
let quantity = 3;

let total = price * quantity; // Multiply price by quantity
console.log("Total price:", total); // Output: Total price: 300

let discount = 50;
let finalPrice = total - discount; // Subtract discount
console.log("Final price after discount:", finalPrice); // Output: 250

// Explanation: Operators help us calculate values dynamically using variables.

// Next, in Day 4, we'll explore conditionals and decision-making in code.
