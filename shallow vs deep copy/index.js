// 🔹 1. Shallow Copy
// 👉 Definition

// A shallow copy copies only the first level, but nested objects still share reference.

// 🔹 Example
// let obj1 = {
//   name: "Bhavishya",
//   address: {
//     city: "Jaipur"
//   }
// };

// let obj2 = { ...obj1 }; // shallow copy
// 🔹 What happens?
// obj2.name = "Aman";

// 👉 Only obj2 changes ✅

// obj2.address.city = "Delhi";

// 👉 BOTH change ❌

// 🔹 Output
// console.log(obj1.address.city); // "Delhi"

// 👉 Why?
// Because nested object shares same memory reference

// 🔥 Diagram (Important)
// obj1.address  ───► { city: "Jaipur" }
// obj2.address  ───► same reference ❗
// 🔹 Ways to Create Shallow Copy
// { ...obj }
// Object.assign({}, obj)
// arr.slice()
// [...arr]
// 🔹 2. Deep Copy
// 👉 Definition

// A deep copy creates a completely new copy, including nested objects.

// 👉 No shared reference

// 🔹 Example
// let obj1 = {
//   name: "Bhavishya",
//   address: {
//     city: "Jaipur"
//   }
// };

// let obj2 = JSON.parse(JSON.stringify(obj1)); // deep copy
// 🔹 Now
// obj2.address.city = "Delhi";

// 👉 Only obj2 changes ✅
// 👉 obj1 remains same ✅

// 🔹 Output
// console.log(obj1.address.city); // "Jaipur"
// 🔥 Diagram
// obj1.address  ───► { city: "Jaipur" }
// obj2.address  ───► { city: "Jaipur" } (new copy)
// 🔹 Key Difference (Interview Answer)
// Feature	Shallow Copy ❌	Deep Copy ✅
// First level	copied	copied
// Nested object	shared ❗	new copy
// Memory	same ref	new ref
// 🔥 Interview Questions
// 1. Output Based
// let a = { x: { y: 10 } };
// let b = { ...a };

// b.x.y = 20;

// console.log(a.x.y); // ?

// 👉 Answer: 20 (shallow copy)

// 2. Trick Question
// let a = { x: 10 };
// let b = { ...a };

// b.x = 20;

// console.log(a.x); // ?

// 👉 Answer: 10 (primitive → separate)

// 🔥 Important Note (Very Important)
// ❌ JSON method limitation
// JSON.parse(JSON.stringify(obj))

// 👉 Problems:

// removes functions
// removes undefined
// removes Date
// ✅ Better Way (Modern JS)
// structuredClone(obj)

// 👉 Best deep copy method

// 🔹 Real Life Use (React 🚀)

// 👉 React needs immutability

// setState(prev => ({
//   ...prev,
//   address: {
//     ...prev.address,
//     city: "Delhi"
//   }
// }));

// 👉 This is shallow copy + manual deep copy

// 🔹 Simple Way to Remember 🧠

// 👉 Shallow copy:

// "Outer copy, inner same"

// 👉 Deep copy:

// "Everything new"