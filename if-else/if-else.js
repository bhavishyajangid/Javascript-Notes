// let num =  "$" ;

// if (num>="a" && num<="z"){

//     console.log("lowercase");
// }
// else if (num >= "A" && num <= "Z") {
//     console.log( "uppercase");
// }
// else if (!isNaN(num)){
//     console.log("number");

// }
// else if(num == null || num == undefined ) {
//     console.log("undefined or Null");

// }

// else if(typeof num ==Symbol) {
//     console.log("Symbol");
// }
//  else {
//     console.log("this is not a number");
//
let year = 2022;

// if(year<=3000 && year>1000){

//     if(year/4=== Math.floor(year/4) && year/100=== Math.floor(year/100) && year/400=== Math.floor(year/400)){
//         console.log("This is Leap Year");
//     }else if(year/100=== Math.floor(year/100) && year/400=== Math.floor(year/400) || year/4=== Math.floor(year/4)){
//         console.log("This is Leap Year");
//     }else if(year/4 !== Math.floor(year/4)){
//         console.log("Not a Leap Year");
//     }else if (year/100 === Math.floor(year/100 && year/400 !== Math.floor(year/400) )){
//               console.log("not a leap year");
//     }else if(year/4=== Math.floor(year/4) &&  year/100=== Math.floor(year/100) || year/400!== Math.floor(year/400)){
//         console.log("Tot a Leap Year");
//     }
//     else{
//         console.log("error");
//     }

// } else{
// console.log("enter a valid year ");
// }

//PROGRAMM TO FIND LEAP YEAR OR NOT
if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
  console.log("this is a leap year");
} else {
  console.log("not a leap year");
}

//Write a program that checks if a given number is positive, negative, or zero.

// let number = 0  ;
// if(number<0){
//     console.log("number is negative");

// } else if (number>0){
//     console.log("number is positive");

// }else{
//     console.log("number is zero");
// }

// Create a program that asks the user to input their exam score and then outputs their grade based on the following grading scale:

// 90 or above: A
// 80-89: B
// 70-79: C
// 60-69: D
// Below 60: F

// let score = 600 ;
// if(score>0 && score<=100){
// if(score<60){
//     console.log("F");

// }else if (score>=60 && score<69){
//     console.log("d grade");
// }else if (score>=70 && score<79){
//     console.log("c grade");
// }else if(score>=80 && score<89) {
//     console.log("b grade");
// }else if(score>=90 && score<100){
//     console.log("a grade");
// }
// }else{
//     console.log("enter a valid score");
// }

//Develop a program that calculates the total cost of a meal at a restaurant, including tax and tip. The program should ask the user for the cost of the meal and then apply a 7% tax and a user-specified tip percentage.

// let meal = 50 ;
// let taxPer = 0.70;
// let tip = 20;
// let mealWithTax = meal * taxPer
//  console.log(mealWithTax+meal+tip);

//Write a program that takes three numbers as input and prints the largest one.

// let a = -10 ;
// let b = -20 ;
// let c = -30 ;
//  if (a>b && a>c &&a) {
//     console.log(a+" is biggest number");
// }if (b>c && b>a ){
// console.log(b+" is biggest number");
// }if (c>a && c>b) {
//         console.log(c+" is biggest");
//     }

// Write a function that takes three integers as input and returns the largest one
// let num1 = 20;
// let num2 = 30;
// let num3 = 50;

// function greaternumber(a, b, c){
//     if (a>b ) {
//         console.log(a+ "is greater");
//     }else if(b>c){
//         console.log(b+ "is greater");

//     }
//     else if(c>a){
//         console.log( c+"is greater");
//     }

// }

// greaternumber(num1, num2 , num3)

// Implement a program that determines if a given number is prime or not.

// let no = 10 ;

// function prime(num){
//     for (let i = 2; i < num; i++) {
//         if (num%i==0) {
//          return false
//         }
//       }
//     return true
//   }
//  console.log(prime(no))

// Create a function that calculates the factorial of a given number.

let number = 5;
let sum = 1;

function factorial(num) {
  for (let i = 1; i <= number; i++) {
    sum *= i;
  }
}
console.log(sum);
factorial(number);

let marks = 55;

if (marks > 1 && marks < 100) {
  if (marks > 1 && marks <= 20) {
    console.log("fail");
  } else if (marks < 20 && marks >= 33) {
    console.log("third grade");
  } else if (marks < 33 && marks >= 45) {
    console.log("second grade");
  } else if (marks > 45 && marks <= 60) {
    console.log("third grade");
  } else if (marks > 60 && marks < 90) {
    console.log("topper");
  } else {
    console.log("this is not correct number");
  }
}

if (marks > 1 && marks < 100) {
  if (marks > 1 && marks <= 20) {
    console.log("fail");
  }

  if (marks > 33 && marks <= 45) {
    console.log("third grade");
  }
  if (marks > 45 && marks <= 60) {
    console.log("second grade");
  }
  if (marks > 60 && marks <= 90) {
    console.log("first grade");
  }
  if (marks > 90 && marks < 100) {
    console.log("topper");
  }
} else {
  console.log("not a correct number ");
}
let day = 2;
switch (day) {
  case 1:
    console.log("sunday");
    break;
  case 2:
    console.log("monday");
    
    break;
  case 3:
    console.log("tuesday");
    break;
  case 4:
    console.log("wednesday");
    break;
  case 5:
    console.log("thrusday");
    break;
  case 6:
    console.log("friday");
    break;
  case 7:
    console.log("saturday");

  default:
    console.log("invalid number");
}
