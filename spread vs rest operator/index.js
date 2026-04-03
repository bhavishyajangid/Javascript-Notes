    // 🔹 Spread vs Rest Operator (...)

    // 👉 Both use same syntax:

    // ...

    // 👉 But meaning is different based on usage

    // 🔹 1. Spread Operator (Expand)
    // 👉 Definition:The spread operator takes a collection and spreads its values one by one.

    // Spread = expand values

    // 🔹 Array Example
    // let arr = [1, 2, 3];

    // let newArr = [...arr];

    // console.log(newArr); // [1,2,3]

    // 👉 It spreads elements

    // 🔹 Combine Arrays
    // let a = [1,2];
    // let b = [3,4];

    // let c = [...a, ...b];

    // console.log(c); // [1,2,3,4]
    // 🔹 Object Copy (Shallow Copy)
    // let obj = { name: "A" };

    // let newObj = { ...obj };

    // 👉 Used for copying (shallow copy)

    // 🔹 Add New Values
    // let user = { name: "A" };

    // let updatedUser = {
    //   ...user,
    //   age: 21
    // };
    // 🔥 Interview Point

    // 👉 Spread creates shallow copy

    // 🔹 2. Rest Operator (Collect)
    // 👉 Definition:The rest operator is used to collect multiple values into a single variable (as an array).

    // Rest = collect remaining values

    // 🔹 Array Example
    // let [a, ...rest] = [1,2,3,4];

    // console.log(a);    // 1
    // console.log(rest); // [2,3,4]

    // 👉 Collects remaining elements

    // 🔹 Object Example
    // let user = {
    //   name: "A",
    //   age: 21,
    //   city: "Jaipur"
    // };

    // let { name, ...rest } = user;

    // console.log(rest);
    // // { age: 21, city: "Jaipur" }
    // 🔹 Function (VERY IMPORTANT)
    // function sum(...numbers) {
    //   return numbers.reduce((acc, val) => acc + val, 0);
    // }

    // sum(1,2,3,4); // 10

    // 👉 Rest collects arguments into array

    // 🔥 Key Difference (Interview Answer)
    // Feature	Spread 🔥	Rest 🔥
    // Meaning	Expand	Collect
    // Use case	Copy / merge	Function params / destructuring
    // Position	Right side	Left side
    // 🔹 Trick to Remember 🧠

    // 👉 Spread:

    // [...arr]   // expand

    // 👉 Rest:

    // [a, ...rest]  // collect
    // 🔥 Interview Questions
    // 1. Output Based
    // let arr = [1,2,3];
    // let newArr = [...arr, 4];

    // console.log(newArr); // ?

    // 👉 [1,2,3,4]

    // 2. Trick Question
    // let arr = [1,2,3];

    // function test(a, b, c) {
    //   console.log(a, b, c);
    // }

    // test(...arr); // ?

    // 👉 1 2 3

    // 3. Very Important
    // function test(...args) {
    //   console.log(args);
    // }

    // test(1,2,3); // ?

    // 👉 [1,2,3]

    // 🔥 Real Use in React 🚀
    // setState(prev => ({
    //   ...prev,
    //   name: "Bhavishya"
    // }));

    // 👉 Spread used for updating state

    // 🔥 Common Mistake ❌
    // let obj = { a: 1 };
    // let newObj = obj;

    // 👉 This is NOT copy (same reference)

    // 👉 Correct:

    // let newObj = { ...obj };
    // 🔹 Final Summary
    // ... = spread/rest
    // Spread → expand values
    // Rest → collect values
    // Spread used in copy & merge
    // Rest used in destructuring & functions