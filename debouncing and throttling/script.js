// 🔹 Debouncing (Wait until user stops)

// 👉 Definition:
// Debouncing ensures that a function runs only after a certain delay once the event stops happening.

// 👉 Simple meaning:
// "Run the function only when the user stops doing something."

// 👉 Example:

// User typing in search bar
// API call happens after user stops typing for 500ms

// 👉 Code:

// function debounce(func, delay) {
//   let timer;
//   return function () {
//     clearTimeout(timer);
//     timer = setTimeout(() => {
//       func();
//     }, delay);
//   };
// }

// 👉 Use case:

// Search input
// Auto-save
// Form validation
// 🔹 Throttling (Limit execution rate)

// 👉 Definition:
// Throttling ensures that a function runs at most once in a fixed interval of time.

// 👉 Simple meaning:
// "Run the function every X milliseconds, no matter what."

// 👉 Example:

// Scroll event → function runs every 500ms (not continuously)

// 👉 Code:

// function throttle(func, delay) {
//   let lastCall = 0;
//   return function () {
//     let now = Date.now();
//     if (now - lastCall >= delay) {
//       lastCall = now;
//       func();
//     }
//   };
// }

// 👉 Use case:

// Scroll events
// Window resize
// Button click prevention
// 🔥 Key Difference
// Feature	Debouncing	Throttling
// Execution	After user stops action	At regular intervals
// Frequency	Only once (after delay)	Multiple times (limited rate)
// Best for	Input, search, typing	Scroll, resize, continuous events
// Behavior	Resets timer on every event	Ignores events within delay
// 🧠 Easy Way to Remember
// Debounce = Delay + Wait
// Throttle = Limit + Control speed