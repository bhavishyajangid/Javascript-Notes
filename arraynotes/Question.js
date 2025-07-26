// THIS IS SEARCHING QUESTION IN WHICH WE HAVE TO SEARCH THE INPUT IN THE ARRAY AND RETURN THE OUTPUT
const bollywoodMovies = [
  "Dilwale Dulhania Le Jayenge",
  "Sholay",
  "Kabhi Khushi Kabhie Gham",
  "Lagaan",
  "3 Idiots",
  "Dil Chahta Hai",
  "Kuch Kuch Hota Hai",
  "Baahubali: The Beginning",
  "Baahubali 2: The Conclusion",
  "Queen",
  "Gully Boy",
  "PK",
  "Bajrangi Bhaijaan",
  "Rang De Basanti",
  "Zindagi Na Milegi Dobara",
  "Andhadhun",
  "Chak De! India",
  "Hera Pheri",
  "Swades",
  "Chennai Express",
  "Padmaavat",
  "Dhoom",
  "ga",
  "game",
  "Avengers Endgame",
];

let input = "dh";

function chechString(Array) {
  let result = [];
  for (let i = 0; i < Array.length; i++) {
    const movie = bollywoodMovies[i];
    let movieInLower = movie.toLowerCase();
    let inputInLower = input.toLowerCase();
    let space = movieInLower.split(" ");
    for (let i = 0; i < space.length; i++) {
      let char = space[i].slice(0, input.length);
      if (char == inputInLower) {
        result.push(movieInLower);
      }
    }
  }
  return result;
}

// console.log(chechString(bollywoodMovies));

// Removing Duplicates: Implement a function that removes duplicate elements from an array and returns a new array without duplicates.

// let array = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];

// let uniqueArray = array.filter((e, i, arr) => {
//   return arr.indexOf(e) === i;
// });

// console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6, 7];

// MERGE TWO ARRAY

// let arr = ["a" , "c" , "e" , "g", "i"];
// let arr2 = ["b" , "d" , "f" , "h", "j"];

// let newarr = arr.concat(arr2);
// console.log(newarr);
// // this is the normal method to merge two array

// for (let i = 0; i < arr.length; i++) {
// for (let j = i ; j <= i; j++) {

//   let merge = arr[i] + arr2[j];
// console.log(merge);

// }   }

// Implement a function that returns the intersection of two arrays
// let array = [1, 2, 3, 4, 5];
// let array2 = [6, 7, 3, 4, 8 , 2];

// function newarray(array, array2) {
//   let array3 = [];
//    array.map((item) => {
//    array2.map((e) => {
//       if (item == e) {
//       array3.push(item)
//       }
//     });
//   });
//   return array3
// }

// console.log(newarray(array, array2));

// Write a function to flatten a nested array.
let array = [1, [2, 3], 4, [5, [6, 7]]];

function flatarray(array) {
  let newarray = [];
  array.map((e, i, arr) => {
    if (typeof e === "object") {
      // console.log(e);
    }
    //  console.log(newarray);
  });
}

// flatarray(array);

// Write a function to find the maximum element in an array.
let arr = [1, 20, 50, 60, 70, 80, 10];
function fun(arr) {
  let maxElement = arr[0];
  arr.map((e) => {
    if (maxElement < e) {
      maxElement = e;
    }
  });
  return maxElement;
}
let newfun = fun(arr);
// console.log(`MaxElement present in this array is ${newfun}`);

// Write a function that takes an array of numbers and returns the sum of all the numbers in the array.
let arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function newfun2(arr) {
  let sum = 0;
  arr.map((e, i, arr) => {
    sum += arr[i];
  });
  return sum;
}
//  console.log(newfun2(arry));

// Given an array of strings, filter out all the strings that contain the letter 'a'.

let string = ["ram", "shyam", "ghanshyam", "mohn"];

function find(arr) {
  let newfilter = arr.filter((e) => {
    if (e.includes("a")) {
      return e;
    }
  });
  return newfilter;
}
// console.log(find(string));

// Given an array of objects representing students (each object containing name and age properties), filter out all students who are above 18 years old.
let students = [
  {
    name: "abhishek",
    age: 18,
  },
  {
    name: "jay",
    age: 29,
  },
  {
    name: "future",
    age: 15,
  },
];

function findName(students) {
  const adultstudents = students.filter((e) => e.age >= 18);
  return adultstudents;
}

// console.log(findName(students));

// Given an array of numbers, find the first occurrence of a number greater than 10.
let number = [20, 50, 100, 200, 8, 7, 5, 2, 1, 10];
function findNumber(number) {
  let newNumber = number.filter((num) => {
    return num > 10;
  });
  return newNumber[0];
}
// console.log(findNumber(number));

// Find the Second Largest Number: Write a function to find the second largest number in an array of integers
// let number = [20, 50, 100, 200, 8, 7, 5, 2, 1, 1000];

// let larget = function (number) {
//   let maxElement = number[0];
//   let newnum = number.filter((num, i, arr) => {
//     if (maxElement < num) {
//       return (maxElement = num);
//     }
//   });
//   console.log(newnum);
//   return newnum[newnum.length - 2];
// };
// console.log(larget(number));

// Sum of Two Numbers: Given an array of integers and a target sum, return indices of the two numbers such that they add up to the target.
let number2 = [1, 2,3, 4, 5, 6, 7, 8, 9, 10];
let target = 10;

function sumOfTwoNumbers(number2, target) {
  const sortedNums = number2.sort((a, b) => a - b);
  let sum = 0;
  let newNumber3 = sortedNums.filter((e, i, arr) => {
    sum = e + arr[i + 1];
    if (sum === target) {
      console.log(number2.indexOf(e) , number2.indexOf( arr[i+ 1]));
    }
    // let right = number2.length - 1
    // let left = 01
    
    // let merge = arr[left] + arr[left]
    // if (merge === target) {
    //   console.log(number2.indexOf(left), number2.indexOf(right));
    // }else if (merge < target){
    //           left++
    // }
    // else{
    //   right--
    // }

  
  
   
  });
  // console.log(newNumber3);
}
console.log(sumOfTwoNumbers(number2, target));






function twoSum(nums, target) {
  // Create a copy of the nums array and sort it
  const sortedNums = [...nums].sort((a, b) => a - b);
  
  // Initialize two pointers
  let left = 0;
  let right = sortedNums.length - 1;
 
  
  // Iterate until the pointers meet
  while (left < right) {
    // Calculate the sum of the two numbers at the pointers
      const sum = sortedNums[left] + sortedNums[right];
      console.log(sum);
      
      // If the sum is equal to the target, return the indices
      if (sum === target) {
          // Find the original indices of the sorted numbers
          const index1 = nums.indexOf(sortedNums[left]);
          let index2 = nums.indexOf(sortedNums[right]);
          
          // If both numbers are the same, find the index of the second occurrence
          if (sortedNums[left] === sortedNums[right]) {
              index2 = nums.indexOf(sortedNums[right], index1 + 1);
          }
          
          return [index1, index2];
      } 
      // If the sum is less than the target, move the left pointer to the right
      else if (sum < target) {
          left++;
      } 
      // If the sum is greater than the target, move the right pointer to the left
      else {
          right--;
      }
  }
  
  // If no such pair is found, return null
  return null;
}

// Example usage:
const nums = [15, 2, 7, 3];
// const target = 9;
// console.log(twoSum(nums, target)); // Output: [0, 1], because nums[0] + nums[1] = 2 + 7 = 9
