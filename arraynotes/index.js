// //  shift methid is used to remove first element from in an array
// let a= [1,2,3,4]
// // a.shift()
// //  console.log(a);

// //  unshift methid is used to add element in the first of an array
// a.unshift(5)
// console.log(a);

// // pop method is used to remove last element form an array
// a.pop()
// console.log(a);

// // push is used to add an element in the last of an array
// a.push(20) // output : [1,2,3,4,20]
// console.log(a);

// // indexOf is used to find number where the element are present in the array

// console.log(a.indexOf(2)); // output : 2

// // includes is used to check element are present in the array
// console.log(a.includes(2)) //output : true

// // join is used to merge any thing in an array like - , "" , . ,
// let arr = [1,2,3,4,5,6]
// console.log(arr.join("-")); // output : 1-2-3-4-5-6

// // reverse is used to reverse an array
// let b = [1,2,3,4,5,6]
// console.log(b.reverse()); // output : [6,5,4,3,2,1,]

// // concate is used to add to or more array
// console.log(arr.concat(b));

// // for each is used to set a condition on an array

// let foarr = [1,2,3,4,5,6,8]

// foarr.forEach((value , index) => {
//  console.log(value , index); // In  This Value Is Knows An 1234568 And Index Is 0123456

//   }

// )

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];

// }

// let arr = [{name : "bhavishay"} , 'jai' , 'vijay' ,  25 , true ]
//  let [name , surname , age ,honesty] = arr ;
//  honesty = "ram" ;
// s

//  console.log(typeof arr);
//  console.log(honesty);
//  console.log(arr.length-1);
//  console.log(arr[2]);
//  console.log(arr[0]);

// let obj = {
//   // allDetail: [(name = "bhavishay"), (age = 25), (country = "india")],
//   class: 12,
//   name: "mohit",

// };

// let keys = Object.keys(obj);
// let allpair = keys.length ;
// console.log(allpair);
// console.log(typeof allpair);

// let allpairs = keys.length;
// console.log(typeof keys);
// console.log(allpairs);

// let arr = [1,2,3,4,5,6,7,8,9,10];
// //  let arr2 = arr.map((e) => {
// //     return e*2
// // });

// let arr2 = arr.forEach((e) => {
//     console.log(e * 2);
// })

// // console.log(arr2);
// console.log(arr);

// Check Palindromes: Create a function to check if each string in an array is a palindrome using a foreach loop.

// let array = ["radar", "noon", "racecar", "vikash", "moon"];

// let palidromen = [];

// let nonpalidromen = [];
// array.forEach((e) => {
//   let str = e.split("").reverse().join("");
//   e == str ? truevalue(e) : falsevalue(str);
// });

// function truevalue(e) {
//   palidromen.push(e);
// }

// function falsevalue(str) {
//   let str2 = str.split("").reverse().join("");
//   nonpalidromen.push(str2);
// }

// console.log(palidromen);
// console.log(nonpalidromen);

// Merge Arrays: Write a program to merge multiple arrays into one using nested foreach loops

// let arr = [1,2,3,4,5];
// let arr2 = ["name" , "age" , "address" , "caste" , "lastname"];

// function allarray(arrays){
//     let newarr = [];

//     arrays.forEach((array)=>{
//         array.forEach((Element)=>{
//             newarr.push(Element);
//         })
//     })

//     return newarr
// }

// let result = allarray([arr, arr2])
// console.log(result);

// let arr = [1,2,3,4,5,6,"feb",8,9,10];

// let data = arr.map((e , i ,arr)=>{
//     return  e // its only take one elements not take all e , i , arr
// })
// console.log(data);

// let data = arr.map((e)=> e).filter((e)=>{
//     return e > 8
// })

// let data = arr.filter((e)=>{
//     return e > 8
// })

// let data = arr.find((e)=>{
//     return e > 5
// })
// let data = arr.findIndex((e)=>{
//     return e > 5
// })
// let data = arr.findLastIndex((e)=>{
//     return e > 5
// })

// let data = arr.reduce((a , c , i, arr)=>{
//     return a + c
// })

// let data = arr.indexOf("feb");
// function find(data){
//     (data == -1) ? console.log("not found"): console.log(data);

// }

// find(data)

// filter method in array

// let array = ['ram' , "shyam" , "ghanshyam" , "radheshyam" ]

// let result = array.filter((e)=>{
//     // return e.length >  5 ;
// })

// console.log(result);

// Filtering Arrays: Given an array of numbers, write a function to filter out all even numbers and return a new array with only the odd numbers.

// let arr3 = [1,2,3,4,5,6,7,8,9,10];

// const result = arr3.filter((e)=>{
//     return e % 2 == 0;
// })

// console.log(result);

// let array = ['ram' , "shyam" , "ghanshyam" , "radheshyam" ];

// const result = array.map((e, i )=>{
//     return e.length;
// })

// console.log(result);

// let array = [

//     {
//         name : "bhavishay" ,
//         age  : 25 ,
//         address : "ratangarh" ,
//     }
// ]

// const result = array.find((e)=>{
//     console.log(e.name == "bhavishay");
// })
// console.log(result);

// const inventory = [
//     { name: "apples", quantity: 2 },
//     { name: "bananas", quantity: 0 },
//     { name: "cherries", quantity: 5 },
//   ];

//   const result = inventory.find(({ name }) => name === "cherries");

//   console.log(result); // { name: 'cherries', quantity: 5 }

// let arr1 = [1,2,3,4,5,];
// let arr2 = ["a","b","c","d","e"];
// function allarray(arr1 , arr2){

//    let result = arr1.map((e)=>{

//           let sum = arr2.map((g)=>{
//                 return g
//           })

//    })
//    return result

// }

// console.log(allarray(arr1 , arr2));

// let arr = ["a", "b" , "c" , "D" ,   {
//     name : "bhavishya" ,
// }];
// console.log(arr.push(1, 2)); // add elements in the end
// console.log(arr.unshift(0));// add elements in the start
// console.log(arr.pop()); //  remove elements from end
// console.log(arr.shift());// remove elements from start
// console.log(arr); // print array

// let arr = [1,2,3,4,5,];
// // let arr2 = [6,7,8,9,10,];
// let arr3 = [11,12,13,14,15];

// let data = [arr + arr2 + arr3];
// console.log(data);
// let data2 = [...arr , ...arr2 , ...arr3];
// console.log(data2);

// let data3 = arr.concat(arr2 , arr3)
// console.log(data3);

// let data  = {
//     name : "bhavishya" ,
//     email : "jai@email.com"
// }

// let obj = {...data , city : "jaipur"} // this is spread method
// console.log(obj);

// let arr = [1,2,3,4,5,15, 50 ,1000, 10000 , 11 , 111];
// // let arr2 = [6,7,8,9,10,];
// let arr3 = [11,12,13,14,15];

// console.log(arr.sort());

// let data5 = arr.sort((a, b )=>{
//   return  a - b
// })
// console.log(data5);



// let input = "A" ;
// let data2 = bollywoodMovies.map((e) =>{
//     return e.charAt(0);
// } )

// console.log(data2);
// let data = bollywoodMovies.filter((item)=>{
//    let allstring = item.split();
//    console.log(allstring);
// })

// console.log(data);

// let arrkjh = [1,2,3,[5,6,],[7,8,9,[10,[11]],], [354,354] ]
// console.log(arrkjh.flat(2));




// let salaryof =  {
//      delhi : 5000,
//      mumbai :000,
//      jaipur: 7000,
//      delhi : 6000,
//      delhi : 5000,
//      delhi : 4000,
//      delhi : 3000,
//      delhi : 2000,
// }

// let arr = [
//   "jai",
//   "vijay",
//   {
//     name: "bhavishya",
//         branch: ["delhi", "jaipur" , "ratangarh" , "skadjhf" ,]
//   },
// ];
// let branchprice  = 1000 ;
// let newarr = [];

// for(let i = 0 ; i<arr[2].branch.length; i++ ){
//     newarr.push((arr[2].branch[i]));

// }

// splice method is used to delete or create a element on the given parameters like this in this example first parameter define from where the splic methode is start working in this ex first parameter is 2 which mean its start from 2 index and second parameter is for which element you want to delete or where to add element like second parater is 2 so its start from 2 index and deleter 2 elements after 2 index and the last parameter is used to after the delet element which element is made
// let arr = ['a','b','c','d','e','f']
// arr.splice(2 , 2 , "jai")
// console.log(arr);

// // console.log(arr.join("*"));
// // console.log(arr.join(" "));
// let j = arr.join(" ") ;
// console.log(j);
// console.log(typeof j);
// arr.join(" ")
// console.log(arr);


// let obj = {
//     name: "jai",
//     age: 20,
// }
// let newobj = {...obj}
// newobj.address = "jaipur"
// console.log(newobj);



   