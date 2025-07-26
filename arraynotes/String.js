// the string is made by two type 
// 1 . simple string like  ( string "this is a string")
// 2. second is with new keyowrd the string made with new keyowrd is making string object like ( new string("this is a string"))

// ex 
let string = String("this is a string") ;
let str  = new String ("this is new keyword string")
  console.log(typeof string);// string
  console.log(typeof str); // object

//   so this is string constuctor



// NOW STUDY ABOUT SOME STRING METHODS
// 1. at(parameter) : this method find the element present in the given index number this is used both in array or string but the charat only work in array 
// ex :
 let sentence = "this is a strig and this is a at method";
// console.log(sentence.at(5));// output is i

// but when we give a negative number to it its start from the end of the string like 
// ex :
let sentence2 = "this is a strig and this is a at method";
// console.log(sentence2.at(-1));// output is d
  
const myString = "Every green bus drives fast.";

// Using length property and charAt() method
// const lengthWay = myString.charAt();
// console.log(lengthWay); // 't'

// Using slice() method
// const sliceWay = myString.slice(-2, -1);
// console.log(sliceWay); // 't'

// // Using at() method
// const atWay = myString.at(-2);
// console.log(atWay); // 't'



// 2. concate method : this method is used to join the two string ;
//  ex :- 
 const str1 = 'Hello';
const str2 = 'World';

// console.log(str1.concat( " " ,  str2));
// // Expected output: "Hello World"

// console.log(str2.concat(', ', str1));
// Expected output: "World, Hello"


// 3. endwith : this method is use dto find the element given parameter and its return true or false only 
// ex : 
const stri = 'Hello, world!';

// console.log(stri.endsWith('world!')); // Output: true
// console.log(stri.endsWith('world')); // Output: false





// for(let i = 0; i< string.length ; i++){
//     // console.log(string[i]);
    

// }


// console.log(string.charAt(2));// to find out what elements are present in the given index number 
// console.log(string.replace( "at" , "Number"));// replace the string and put the number on the position of string



// console.log(string.split(" "))
// console.log(string.split(" ").length)
// console.log(string.split(" ").length - 1) 
// console.log(string);


// let data = "this is a string ";
// // console.log(data.slice(0 , 4));
// console.log(data.substring(-3 , -5));

// let a = '10+20+30+40';
// console.log(parseInt(a));
// console.log(typeof a);

// console.log(eval(a));

// console.log(data.trim());

let h = 25.99;
// let data2 = Math.round(h)
// let data2 = Math.floor(h)
// let data2 = Math.ceil(h)
// let data2 = Math.trunc(h)
// let data2 = Math.abs(h)
// let data2 = Math.sqrt(h)
// let data2 = Math.pow(5 , 55)
// let data2 = Math.floor(Math.random()*10000)



console.log(data2);










