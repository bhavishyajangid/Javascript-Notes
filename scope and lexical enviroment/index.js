// ************************ SCOPE AND LEXICAL ENVIRONMENT **********************

// 1. SCOPE:
// Scope refers to the current context of execution — it determines which variables are accessible at any given point in your code.
// Scope defines where a variable can be accessed from.

// 2. LEXICAL ENVIRONMENT:

// A Lexical Environment is created every time a function is invoked.
// It contains two parts:
//    a. Local memory (variables and functions declared inside the function)
//    b. A reference to its parent Lexical Environment (where the function was defined, not called)

// Example:

function a() {
    var x = 10;
    function b() {
        console.log(x); // ✅ 10
    }
    b();
}

a();
console.log(x); // ❌ ReferenceError: x is not defined

// ------------------ EXPLANATION ------------------

// STEP 1:
// Global Execution Context is created.
// In memory phase, it stores `a` as a function.

// STEP 2:
// `a()` is invoked → a new Execution Context is created.
// In the memory phase of `a()`:
//   - `x` is allocated as `undefined`
//   - `b` is stored as a function
// The Lexical Environment of `a()` points to the Global Environment.

// STEP 3:
// `x` is assigned value `10` during the execution phase.

// STEP 4:
// `b()` is invoked → new Execution Context is created for `b`.
// Its Lexical Environment points to `a()`'s Lexical Environment.

// STEP 5:
// Inside `b()`, we try to log `x`.
// - `x` is not found in `b()`'s local scope.
// - Looks up the parent lexical environment (which is `a()`).
// - `x = 10` is found and printed.

// ✅ This is how Lexical Environment and Scope Chain work together.
