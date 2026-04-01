// What is Destructuring?

// 👉 Destructuring means:

// Extract values from array/object and store them in variables easily

// 🔹 1. Array Destructuring
// ✅ Basic Example
// let arr = [10, 20, 30];

// let [a, b, c] = arr;

// console.log(a, b, c); // 10 20 30
// ✅ Skip Values
// let [a, , c] = [10, 20, 30];

// console.log(a, c); // 10 30
// ✅ Default Values
// let [a = 5, b = 10] = [1];

// console.log(a, b); // 1 10
// ✅ Rest Operator
// let [a, ...rest] = [1,2,3,4];

// console.log(rest); // [2,3,4]
// 🔹 2. Object Destructuring
// ✅ Basic Example
// let user = {
//   name: "Bhavishya",
//   age: 21
// };

// let { name, age } = user;

// console.log(name, age);
// 🔥 Important Rule

// 👉 Variable name must match key name

// ✅ Rename Variable
// let { name: userName } = user;

// console.log(userName);
// ✅ Default Value
// let { city = "Jaipur" } = user;

// console.log(city); // Jaipur
// ✅ Nested Destructuring (VERY IMPORTANT)
// let user = {
//   name: "Bhavishya",
//   address: {
//     city: "Jaipur"
//   }
// };

// let { address: { city } } = user;

// console.log(city); // Jaipur
// ✅ Rest Operator
// let { name, ...rest } = user;

// console.log(rest); // remaining properties
// 🔥 Interview Tricks
// ❌ Wrong Way
// let { name } = user;

// 👉 Works only if key = "name"

// 🔥 Tricky Question
// let obj = { a: 1, b: 2 };

// let { a, b, c = 10 } = obj;

// console.log(c); // ?

// 👉 Answer: 10

// 🔥 Another Trick
// let obj = { a: 1 };

// let { a, b } = obj;

// console.log(b); // ?

// 👉 Answer: undefined

// 🔹 Destructuring in Function (VERY IMPORTANT)
// function printUser({ name, age }) {
//   console.log(name, age);
// }

// printUser({ name: "A", age: 20 });

// 👉 Used a lot in React props

// 🔹 Real Use in React 🚀
// function User({ name, age }) {
//   return <h1>{name}</h1>;
// }
// 🔹 Quick Comparison
// Without Destructuring ❌
// let name = user.name;
// let age = user.age;
// With Destructuring ✅
// let { name, age } = user;
// 🔥 Common Interview Topics
// Nested destructuring
// Default values
// Renaming variables
// Function parameters
// Rest operator
// 🔹 Simple Way to Remember 🧠

// 👉 Array → order matters
// 👉 Object → key name matters

// 🔥 Final Summary
// Destructuring = extract values easily
// Array → by position
// Object → by key name
// Supports default, rename, rest
// Used heavily in React