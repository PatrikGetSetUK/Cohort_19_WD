// JavaScript
// SYNTAX

// A comment on a single line.

/*
This is a 
multiple 
line comment.
*/

// LITERALS
10;
("Patrik");
("Patrik");

// VARIABLES
var firstName = "Joe";

let myName = "Anne";
const pi = 3.14;

console.log("Hello World!");

console.log(firstName);

firstName = "Tom";
console.log(firstName);

console.log(5 + 10 * 6);

function myFunction() {
  console.log("Hi there!");
  console.log("Another message");
}

myFunction();

// Keywords
// var, let, function, if, return, else

function addNumbers(a, b) {
  return a + b;
}

console.log(addNumbers(5, 10));
console.log(addNumbers(-5, -10));
console.log(addNumbers(80, 50));

function addWords(x, y) {
  return x + " " + y;
}

console.log(addWords("John", "Smith"));

// result: John Smith
