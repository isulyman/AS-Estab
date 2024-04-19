"use strict";
// 01
// let greeting; // Assign "Hello, World!" to this variable and print it.
let greeting = "Helo, World!";
console.log(greeting);
//02
// let num1, num2; // Assign integer values and perform arithmetic operations.
let num1 = 10;
let num2 = 2;
let sum = num1 + num2;
let differ = num1 - num2;
let prod = num1 * num2;
let quotient = num1 / num2;
let modulous = num1 % num2;
//03
// let a = 1, b = 2; // Swap these values without using a new variable.
let a = 10;
let b = 20;
[a, b] = [b, a];
console.log(a);
console.log(b);
//04
// let message: string; // Now try assigning a number to it and see what happens.
let myVar = "hello world";
// When a variable is assigned string type value, number type value will never be allowed by typescript in that variable. 
// 05
// let num1, num2; // Use the modulus operator (%) to find the remainder.
let numb1 = 10;
let numb2 = 5;
let module1 = numb1 % numb2;
console.log(module1);
//06
// let counter = 0; // Increment this value by 1 in two different ways.
let counter = 0;
counter += 1;
console.log(counter);
//07
// let a = true,  b = false,  c = true; // Write expressions using these.
let bool1 = true, bool2 = false, bool3 = true;
//AND
console.log(bool1 && bool3 && bool2);
//OR
console.log(bool1 || bool2 || bool3);
//NOT
console.log(!bool1 || (!bool2 && bool3));
//08
// let num = 10; // Use +=, -=, *=, and /= on this variable.
let num = 10;
num += 5;
num -= 5;
num *= 2;
num /= 5;
console.log(num);
//09
// let num; // Determine if this is even or odd.  
let num3 = 11;
if (num3 % 2 == 0) {
    console.log("Even");
}
else {
    console.log("Odd");
}
//10
// let age; // Check if age is 18 or older to determine voting eligibility.
let age = 18;
if (age >= 18) {
    console.log("Eligible for Voting");
}
else {
    console.log("Not Eligible for Voting");
}
//11
// let score; // Use conditionals to assign and print grades A, B, C, D, or F.
let score = 45;
if (score >= 80) {
    console.log("Grade A");
}
else if (score >= 70) {
    console.log("Grade B");
}
else if (score >= 60) {
    console.log("Grade C");
}
else if (score >= 50) {
    console.log("Grade E");
}
else {
    console.log("Fail");
}
//12
// let x, y, z; // Determine the largest among these.
let dig1 = 10;
let dig2 = 20;
let dig3 = 30;
if (dig1 > dig2 && dig1 > dig3) {
    console.log("Dig 1 is Maximum");
}
else if (dig2 > dig1 && dig2 > dig3) {
    console.log("Dig 2 is Maximum");
}
else {
    console.log("Dig 3 is Maximum");
}
//13
// let year; // Determine if this is a leap year.
const leapYear = 2000;
if ((leapYear % 4 == 0 && leapYear % 100 !== 0) || leapYear % 400 == 0) {
    console.log("Leap Year ");
}
else {
    console.log("Isn't Leap Year");
}
//14
// let fahrenheit; // Convert this to Celsius and print the result.
const fahren = 98;
let result = ((fahren - 32) * 5) / 9;
console.log(result);
// 15
// let number; // Determine the sign of this number.
let randomNum1 = -10;
if (randomNum1 >= 0) {
    console.log("Positive");
}
else {
    console.log("Negative");
}
// // let randomNum = 0;
// // const numb1 = Math.sign(randomNum);
// // if (numb1 === -1) {
// //   console.log("Number is Negative");
// // } else if (numb1 === 0) {
// //   console.log("Number is Zero");
// // } else {
// //   console.log("Number is Positive");
// // }
// //16
// // let number; // Print the multiplication table for this number up to 10.
// const tabNum = 3;
// for (let i = 1; i <= 10; i++) {
//   console.log(`${tabNum} X ${i} = ${tabNum * i}`);
// }
