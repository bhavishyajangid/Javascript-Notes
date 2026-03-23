//function are  is the block of code which is used to perform a particular task
//typeof function

//  1. named function
//  2. arrow function
//  3. annoymous function
//  4. callback fucntion
//  5. fucntion expression
//  6. named funcation expression
//  7. IIFE (Immediately Invoked Function Expression)


// 1. named function {   // also know as funcation statement ot funcation declaration
//     syntax :- ()
// }

//******************* */ function expression******************


// let data = function name(a , b){
//    return a+ b
// }
// console.log(data(20,40))

// ************************ FUNCATION EXPRESSION ******************

// A function expression is a way to define a function and assign it to a variable. It can be anonymous or named. Function expressions are not hoisted, meaning they cannot be called before their declaration.
let namedFunction = function (a, b) {
    return a + b;
};
// Function expressions are often used when you want to pass a function as an argument or return a function from another function.

// *************** difference between named function and funcation expression**

// the diffrence is the hoisting the named function can be called before the declaration but function expression can not be called before the declaration

namedFunction(10, 20); // This will work because namedFunction is hoisted
// a(10, 20); // This will throw an error because 'a' is not hoisted

// because when it store into the memory it stored like an varible and in the first varible saved as undefined so it throw errro 





// ************************** annoynimious function *******************
// An anonymous function is a function that does not have a name. It is often used as a callback or in situations where the function is not needed to be reused.
// Anonymous functions are typically defined inline and can be assigned to variables or passed as arguments to other functions.

// let data = function (a, b) {}  
// annoynimous funaction is used when we need to assign a function to a variable or pass it as an argument to another function.
// let data = function (a, b) {return a + b;}

// ************************ named funcation expression ****************
// A named function expression is a function that has a name and is assigned to a variable. It can be useful for debugging and recursion.
// let data = function namedFunction(a, b) {
//     return a + b;
// }
// console.log(data(20, 40)); // Output: 60
// when we call namedFuncation directly it will throw an error because it is not hoisted in the global scope, it is only accessible within the scope of the variable it is assigned to.


// ******************* diffrence between parameters and arguments ****************
// Parameters are the variables listed in a function's definition, while arguments are the values passed to the function when it is called.
// Parameters are like placeholders, while arguments are the actual values you provide when calling the function.

Ex : - function sum(parameters) {
//     return a + b;
}
sum(arguments); // Here, arguments are the values passed to the function when it is called.


// ************************* first class function ****************
// In JavaScript, functions are first-class citizens, meaning they can be treated like any other value. This means you can assign functions to variables, pass them as arguments to other functions, and return them from functions.
// This allows for powerful programming techniques like higher-order functions, callbacks, and functional programming patterns.

// Example of first-class function
// let add = function (a, b) {  
//     return a + b;
// };
// let multiply = function (a, b) {
//     return a * b;
// };
// let calculate = function (operation, a, b) {
//     return operation(a, b); // Here, 'operation' is a function passed as an argument
// };

// console.log(calculate(add, 5, 3)); // Output: 8
// console.log(calculate(multiply, 5, 3)); // Output: 15


// ************************* callback function ****************
// A callback function is a function that is passed as an argument to another function and is executed after some operation is completed. Callbacks are commonly used in asynchronous programming to handle events or results when they become available.
// Example of a callback function
// function fetchData(callback) {
//     // Simulating an asynchronous operation
//     setTimeout(() => {
//         const data = "Data fetched";
//         callback(data); // Calling the callback function with the fetched data
//     }, 1000);
// }
// fetchData((data) => {
//     console.log(data); // Output: Data fetched (after 1 second)
// });


// ************************* IIFE (Immediately Invoked Function Expression) ****************
// An IIFE is a function that is defined and immediately executed. It is often used to create a private scope and avoid polluting the global namespace. IIFEs are useful for encapsulating code and preventing variable conflicts.
// Example of an IIFE
// (function () {
//     console.log("This is an IIFE");
// })(); // Output: This is an IIFE

// ********************* pure function ****************

// A pure function is a function that always produces the same output for the same input and does not have any side effects (i.e., it does not modify any external state or variables). Pure functions are predictable and easier to test, making them a fundamental concept in functional programming.

// Example of a pure function
// function add(a, b) {
//     return a + b; // This function is pure because it always returns the same result for the same inputs
// }

// ******************************* arrow function **********************
// An arrow function is a concise way to write a function in JavaScript. It uses the `=>` syntax and does not have its own `this` context.
// Arrow functions are often used for short, single-expression functions and can be more readable in certain situations.
// arrow funcation not use function keyword and it is always anonymous function
// let data = (a, b) => {
//     return a + b;
// }
// console.log(data(20, 40)); // Output: 60












// ************************* QUESTIONS ************************


// 1. Write a function called sum_numbers that takes two numbers as parameters and returns their sum

// function sum_numbers(a, b){
//         return a +b
// }
// console.log(sum_numbers(10 , 20));

// 2 . Create a function called calculate_average that takes a list of numbers as input and returns the average of those numbers.

// const sum = (a , b)=>{
//     return a+ b
// }
// // sum(2 , 3)

// const sub = (b, c)=>{
//    return b-c
// }

// // sub(3,4)

// const mul = (a, b)=>{
//     return a*b
// }

// // mul(4,5)

// const div = (a, b)=>{
//     return a/b
// }
// // div(5,6)

// const rem = (a, b)=>{
//   return a%b
// }
// // rem(7,8)/

// const all = (a, b, c, d,f)=>{

//   return a(2,2)*b(2,2)*c(2, 2)*d(2,2)*f(2,2) ;
// }
//  console.log(all(sum,sub,mul,div,rem));

// Write a function called isEven that takes a number as input and returns true if the number is even and false otherwise.
//  function iseven(num){

//   if(num%2==0){
//     return true;
//   }
//   else{
//     return false;
//   }
//  }
// console.log(iseven(10));

// Write a function called findMax that takes an array of numbers as input and returns the maximum number in the array.

// function findMax(numbers) {
//   if (numbers.length === 0) {
//       return undefined; // Return undefined if the array is empty
//   }

//   let max = numbers[0];
//    // Initialize max with the first element of the array

//   for (let i = 1; i < numbers.length; i++) {
//       if (numbers[i] >
//          max) {
//           max = numbers[i]; // Update max if a larger number is found
//       }
//   }

//   return max; // Return the maximum number
// }

// Example usage:
// const numbersArray = [3, 7, 2, 9, 15];
// console.log(findMax(numbersArray)); // Output: 9

// Define functions for addition, subtraction, multiplication, division, etc. These functions could take two numbers as parameters and return the result of the operation.

// function add(a, b) {
//   console.log(a + b);
//   return a + b;
// }

// function sub(b, c) {
//   return b - c;
// }

// function mul(a, b) {
//   return a * b;
// }

// function div(a, b) {
//   return a / b;
// }

// let all = (a, b, c, d) => {
//   return a(2, 2) * b(2, 2) * c(2, 2) * d(2, 2);
// };

// console.log(all(add, sub, mul, div));




let arr = [1,2,3,4,5,6,];

for(let i of arr){
    console.log(i);
}