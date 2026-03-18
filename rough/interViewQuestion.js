
// function triangle (a, b,c) {


//         if(a==b && b == c){
//             return 'equitatreal'
//         }else if(a==b || b==c || c==a){
//             return 'isosceles'
//         }else{
//             return "scalene"
//         }
   
    
// }

// let result = triangle(20 , 30 , 30)
// console.log(result);


// let arr = [5 , 10 , 50 , 20  , 65 , 45 , 1 , 9 , 80 , 7]
// function ascending (arr) {
//  return arr.sort((a, b) =>  a- b)
    
// }
// let result = ascending(arr)
// console.log(result);


// let str = "boob"
//  const palindrome = (str) => {
//       let reverse = str.split('').reverse().join('')
//       return (reverse === str) ? true : false
      
// }

// console.log(palindrome(str));
 

// find largets number in an array

// function largets (array) {
//     const result =  array.reduce((max , item) => {
//          return item > max ? item : max ;
//      }, array[0])

//      return result
// }

// result = largets([10,15,20,25,50,80,10])
// console.log(result);


// find factorial of given number 
// const factorial = (num) => {
// let factorial = 1
//     if(num === undefined){
//         throw new Error('function not be empty')
//     }else if(num <= 0){
//         return 1
//     }else{
//       for (let i = 1; i <=num; i++) {
//           factorial *= i    
//       }
//     }

//     return factorial
    
// }

// let result = factorial(10)
// console.log(result);


// find average of the given number 
// function average (arr) {
    
// if(arr.length === 0){
//     throw new Error('function not be empty')
// }
 
//    const result  =  arr.reduce((acc , item) => {
//           return acc += item
//      } , 0)

//      return result / arr.length

// }

// let result = average([1,2,3,4,5])
// console.log(result);


// find the given two arrya is same or not 
// function arraySame (arr1 , arr2) {
 
//     let result = false
//     if(arr1.length === arr2.length){
//      result =   arr1.reduce((acc , item , arr , i) =>  {
//             return item === arr2[i] ? true : false
//         } , false)
//     }
//     return result
// }

// let result = arraySame([2,4,5] , [2,4,5])
// console.log(result);



