// Day 2: Variables and Data Types in JavaScript

// Hello everyone! Welcome to Day 2 of our JavaScript learning journey.
// Today, we will learn about variables and data types in JavaScript.
// Variables help us store information, and data types tell us what kind of information it is.

// -------------------------
// 1. Declaring a variable
// -------------------------
let name = "Ghanashyam";
// 'name' is the variable
// It stores the text "Ghanashyam"

console.log(name);
// Prints the value stored in the variable
// Output: Ghanashyam

// -------------------------
// 2. Storing numbers
// -------------------------
let age = 25;
// 'age' is a variable that stores a number
console.log(age);
// Prints: 25
// Numbers can be used for calculations or comparisons

// -------------------------
// 3. Boolean values
// -------------------------
let isStudent = true;
// true means yes
let hasGraduated = false; 
// false means no

console.log(isStudent, hasGraduated);
 // Prints: true false
// Booleans are used for decision making in programs

// -------------------------
// 4. Undefined
// -------------------------
let address; // Variable declared but no value assigned
console.log(address); // Output: undefined
// Explanation: undefined means the variable exists but has no value yet

// -------------------------
// 5. Null
// -------------------------
let middleName = null; // Intentionally empty
console.log(middleName); // Output: null
// Null is used when we want to indicate that a variable has no value

// -------------------------
// 6. Objects
// -------------------------
let student = {
  name: "Ghanashyam", // Property 'name' stores a string
  age: 25, // Property 'age' stores a number
  course: "JavaScript", // Property 'course' stores a string
};

console.log(student); // Prints the whole object
console.log(student.name); // Prints a single property
// Objects store multiple related pieces of data together using key-value pairs

// -------------------------
// 7. Arrays
// -------------------------
let skills = ["Coding", "Writing", "Teaching"]; // Array stores multiple values
console.log(skills); // Prints the entire array
console.log(skills[0]); // Access the first item: Coding
// Arrays are useful when you want to store lists of items

// -------------------------
// 8. Changing variable values
// -------------------------
let level = 1; // Start with level 1
console.log("Starting level:", level); // Output: 1

level = 2; // Update the variable
console.log("After upgrade:", level); // Output: 2
// Variables declared with 'let' can be changed anytime

// -------------------------
// 9. Using const
// -------------------------
const country = "Nepal"; // 'const' means this value cannot be changed
console.log(country); // Output: Nepal
// country = "India"; // ❌ This will give an error
// Use const when you want a fixed value

// -------------------------
// 10. Summary
// -------------------------
// Variables store information that can be used later
// let : can change
// const : cannot change
// var : old style, still works but not recommended

// Data types include:
// - String : text, e.g., "Hello"
// - Number : numeric values, e.g., 42
// - Boolean : true/false
// - Undefined : variable declared but no value assigned
// - Null : intentionally empty
// - Object : key-value collection
// - Array :  list of items

// Congratulations! You now know how to create variables, assign values, and understand basic data types.

// In Day 3, we’ll explore variable scope, operators, and working with data more deeply.
