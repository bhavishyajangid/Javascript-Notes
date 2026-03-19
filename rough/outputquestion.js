// finsding longest in these sentence

// let str =
//   "i am bhavishya ";

// function longestStr(str) {
//   let str2 = str.split(" ");
//   let longestStr = "b";
//   str2.forEach((item) => {
//     if (item.length > longestStr.length) {
//       longestStr = item;
//     }
//   });
//   return longestStr;
// }

// let result = longestStr(str);
// console.log(result);

// convert hte string into a hastag ex #MyNameIsBhavishya

// let str = "my name is bhavishya";

// function makingHastag(str) {
//   let newstr = str.split(" ");
//   let string = newstr.map((item) => {
//     let str = item.replace(item[0], item[0].toUpperCase());

//     return str;
//   });

//   string = `#${string.join("")}`;

//   return string;
// }

// let result = makingHastag(str);
// console.log(result);


// let students = [
//   {name : 'bhavishya' , rollnumber  : 7  , marks : 20} ,
//   {name : 'ram' , rollnumber  : 8  , marks : 50} ,
//   {name : 'shyam' , rollnumber  : 9  , marks : 80} ,
//   {name : 'ghanshyam' , rollnumber  : 10  , marks : 100} ,
// ]


// let result = students.filter((item) => item.marks > 60 ).reduce((acc ,item)=> {
//            return acc + item.marks
// } , 0)

// console.log(result);

// ✅ PART 1: 15 Important Output Questions (with explanation)
// Q1
// console.log(a);
// var a = 10;

// Output: undefined
// Reason:
// var is hoisted → declaration moves up, but not initialization.

// Q2
// console.log(a);
// let a = 10;

// Output: ❌ ReferenceError
// Reason:
// let is hoisted but in Temporal Dead Zone (TDZ)

// Q3
// console.log(a);
// const a = 10;

// Output: ❌ ReferenceError
// Reason:
// Same as let → TDZ

// Q4
// var a = 10;
// function test() {
//   console.log(a);
//   var a = 20;
// }
// test();

// Output: undefined
// Reason:
// Local a is hoisted → shadows global a

// Q5
// var a = 10;
// function test() {
//   console.log(a);
// }
// test();

// Output: 10
// Reason:
// Lexical scope → function uses outer variable

// Q6
// let a = 10;
// function test() {
//   let a = 20;
//   console.log(a);
// }
// test();

// Output: 20
// Reason:
// Inner scope shadows outer

// Q7
// let a = 10;
// {
//   let a = 20;
// }
// console.log(a);

// Output: 10
// Reason:
// Block scope → different variables

// Q8
// var a = 10;
// {
//   var a = 20;
// }
// console.log(a);

// Output: 20
// Reason:
// var is NOT block scoped

// Q9
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

// Output: 3 3 3
// Reason:
// Same i shared → loop ends before timeout executes

// Q10
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

// Output: 0 1 2
// Reason:
// let creates new binding each iteration

// Q11
// console.log(this);

// Output: window (in browser)
// Reason:
// Global execution context → this = window

// Q12
// var a = 10;
// console.log(window.a);

// Output: 10
// Reason:
// var attaches to window

// Q13
// let a = 10;
// console.log(window.a);

// Output: undefined
// Reason:
// let doesn’t attach to window

// Q14
// function test() {
//   console.log(a);
// }
// var a = 10;
// test();

// Output: 10
// Reason:
// Execution time lookup (lexical scope)

// Q15
// function test() {
//   console.log(a);
//   var a = 10;
// }
// test();

// Output: undefined
// Reason:
// Local a hoisted → shadows outer

// 🚀 PART 2: 35 Practice Questions (IMPORTANT 🔥)

// 👉 Try yourself before asking me answers

// Q16
// var a = 5;
// function foo() {
//   console.log(a);
// }
// function bar() {
//   var a = 10;
//   foo();
// }
// bar();
// Q17
// let a = 10;
// function test() {
//   console.log(a);
//   let a = 20;
// }
// test();
// Q18
// const a = 10;
// a = 20;
// console.log(a);
// Q19
// var a = 10;
// function test() {
//   console.log(a);
//   if (true) {
//     var a = 20;
//   }
// }
// test();
// Q20
// let a = 10;
// {
//   console.log(a);
//   let a = 20;
// }
// Q21
// var a = 1;
// function test() {
//   console.log(a);
//   a = 5;
//   console.log(a);
//   var a;
// }
// test();
// Q22
// function test() {
//   console.log(a);
// }
// test();
// var a = 10;
// Q23
// let a = 10;
// function test() {
//   console.log(a);
// }
// function test2() {
//   let a = 20;
//   test();
// }
// test2();
// Q24
// var a = 10;
// (function () {
//   console.log(a);
//   var a = 20;
// })();
// Q25
// let a = 10;
// (function () {
//   console.log(a);
// })();
// Q26
// var a = 10;
// function test() {
//   a = 20;
//   console.log(a);
// }
// test();
// console.log(a);
// Q27
// let a = 10;
// function test() {
//   a = 20;
// }
// test();
// console.log(a);
// Q28
// var a = 10;
// function test() {
//   var a = 20;
// }
// test();
// console.log(a);
// Q29
// let a = 10;
// function test() {
//   let a = 20;
// }
// test();
// console.log(a);
// Q30
// console.log(a);
// var a = 10;
// console.log(a);
// Q31
// console.log(a);
// let a = 10;
// console.log(a);
// Q32
// function test() {
//   console.log(a);
// }
// let a = 10;
// test();
// Q33
// var a = 10;
// function test() {
//   console.log(this.a);
// }
// test();
// Q34
// let a = 10;
// function test() {
//   console.log(this.a);
// }
// test();
// Q35
// var a = 10;
// const obj = {
//   a: 20,
//   test: function () {
//     console.log(this.a);
//   },
// };
// obj.test();
// Q36
// var a = 10;
// const obj = {
//   a: 20,
//   test: () => {
//     console.log(this.a);
//   },
// };
// obj.test();
// Q37
// let a = 10;
// {
//   var a = 20;
// }
// console.log(a);
// Q38
// let a = 10;
// {
//   let a = 20;
//   {
//     console.log(a);
//   }
// }
// Q39
// var a = 10;
// function test() {
//   console.log(a);
//   a = 20;
// }
// test();
// Q40
// var a = 10;
// function test() {
//   console.log(a);
//   var a = 20;
//   console.log(a);
// }
// test();
// Q41
// let a = 10;
// function test() {
//   console.log(a);
//   let a = 20;
//   console.log(a);
// }
// test();
// Q42
// const a = { value: 10 };
// a.value = 20;
// console.log(a.value);
// Q43
// const a = { value: 10 };
// a = { value: 20 };
// console.log(a);
// Q44
// var a = 10;
// function test(a) {
//   console.log(a);
// }
// test(20);
// Q45
// var a = 10;
// function test(a) {
//   console.log(a);
// }
// test();
// Q46
// var a = 10;
// function test() {
//   console.log(a);
//   function inner() {
//     var a = 20;
//   }
// }
// test();
// Q47
// var a = 10;
// function test() {
//   function inner() {
//     console.log(a);
//   }
//   inner();
// }
// test();
// Q48
// let a = 10;
// function test() {
//   function inner() {
//     let a = 20;
//     console.log(a);
//   }
//   inner();
// }
// test();
// Q49
// var a = 10;
// (function () {
//   console.log(a);
// })();
// Q50
// (function () {
//   console.log(a);
//   var a = 10;
// })();