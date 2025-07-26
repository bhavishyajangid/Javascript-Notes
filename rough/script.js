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


let students = [
  {name : 'bhavishya' , rollnumber  : 7  , marks : 20} ,
  {name : 'ram' , rollnumber  : 8  , marks : 50} ,
  {name : 'shyam' , rollnumber  : 9  , marks : 80} ,
  {name : 'ghanshyam' , rollnumber  : 10  , marks : 100} ,
]


let result = students.filter((item) => item.marks > 60 ).reduce((acc ,item) => {
           return acc + item.marks
} , 0)

console.log(result);
