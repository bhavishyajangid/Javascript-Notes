// print a table of 2 using while loop

// let i = 1;

// while (i <= 10) {
//   let table = i * 2;
//   console.log("2 * " + i + " = " + table);
//   i++;
// }

// checking factorial of the given number using while loop

// let number = 10;
// let j = 2;
// let i = 1;
// while (i <= number) {
//   while (j <= number) {
//     console.log(`factorial of ${number} is = ${i*=j}`);
//     j++;
//   }
//   i++;
// }

//Create a guessing game where the computer generates a random number between 1 and 100, and the user has to guess the number. The program should give hints like "Too high" or "Too low" until the user guesses the correct number.
// Generate a random number between 1 and 100
// const randomNumber = Math.floor(Math.random() * 100) + 1;

// // Function to start the game
// function startGame() {
//     let guess = parseInt(prompt("Guess a number between 1 and 100:"));

//     while (guess !== randomNumber) {
//         if (guess < randomNumber) {
//             alert("Too low. Try again!");
//         } else {
//             alert("Too high. Try again!");
//         }
//         guess = parseInt(prompt("Guess again:"));
//     }

//     alert("Congratulations! You guessed the correct number: " + randomNumber);
// }

// startGame();

// let arr = [
//   "jai",
//   {
//     friends: {
//       name: "nitin",
//       age: 26,
//       add: [
//         "a",
//         "b",
//         "c",
//         "d",
//         {
//           city: {
//             vill: ["x", "y", "z", "m", "n", "o"],
//           },
//         },
//       ],
//     },




//   },
// ];

// for (let i = 0; i < arr[1].friends.add[4].city.vill.length; i++) {
//   console.log(arr[1].friends.add[4].city.vill[i]);
// }


// Write a function that takes an object as an argument and prints out all its key-value pairs using a for...in loop.

// let obj = {
//   name: "jai",
//   age: 26,  
// } ;

// for(let keys in obj ){
//     console.log(keys); // its only print keys
// console.log(obj[keys]); // its only print value
// console.log(keys + ":" + obj[keys]); // its print both value
// }

// and like this its works in array 

// let array = [1,2,3,4,5,6,7,8,9,10];

// for(let i in array){
    // console.log(i); // only prints index 
    // console.log(array[i]);// print index element
// }

// lets discuss about for of loop
// const fruits = ["apple", "banana", "orange"];

// for (const i of fruits) {
//     console.log(i);  // this print all elements 
//     console.log(fruits[i]); // this print undefined because in for of loop only elements are print not its index  
// }


// lets see how for in loop work in object 

// let obj = {
//   name : "bhavishya" ,
//   age : 21 
// }

// for(let i in obj){
//   console.log( "key = " + i + " and value is =  " + obj[i]);
// }


// Sum of Array Elements: Write a program to calculate the sum of all elements in an array using a for...of loop.

// let make this 

// let arr = [1,2,3,4,5,6,7,8,9,10];
// let sum = 0 ;

// for(let i of arr){
//   sum += i
// }
// console.log(sum);



