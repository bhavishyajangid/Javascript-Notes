// ******************************* EVENT lOOP **************************


//  1.  EVENT LOOP : -  event loop is the most important thing in js which mean when we run a Synchronous or aSynchronous  code how the js handle these code let see 

 // STEP 1 : -  when we run the every code first go into the callback stack and when its complte its pop out from stack stack is work on lifo last in first out mean the last thing is go into the stack come first 

 // STEP 2 :  if the code is synchrous if excute if the code is asynchrous then it pop out this code and give to the browser to handle it and stack run again and browser wait for completation of this asynchrous code but the stack not stop our work it still going forward and run another synchrous code 

 // STEP 3 :  when the asychronous code is complete which is handle by the browser it go into the callback queue callback quese store it and run this code when the stack is empty mean it run when the all code it run after the stack is empty it exucte the code asynchrous code result or funcation lets take an example


//  EX : =    

             console.log("start");

          setTimeout(function timeout() {
        console.log("timeout print");
      }, 5000);

      console.log("end ");


// STEP 1 : -   first the console.log run and it goes into the stack and this is synchrous code so it run immeditely and goes out from the stack then the timout goes into the stack this is asynchrous code so the stack delive it the browser and pop from the stack and go forward after again a synchrous code it goes into the stack the run it immeditely and print it 

// STEP 2 :  when the code goes to the browser browser wait when the code is complete when the code is complete the broswer send it to the callback queue it store it 

// STEP 3 :  when the stack is empty mean all the code excute then it run these code and print the timout print this is called the event loop in js 

// OUTPUT :=  "START"
        //    'END'
       //    'TIMOUT PRINT'


// NOTE : -  if not understand go to loupe website where it show how its work completey


// EX : 2 
console.log("start");

setTimeout(function timeout() {
  console.log("timeout print");
}, 5000);

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(function fetchData(data) {
    console.log("fetch data");
  });

console.log("end");

// ✅ Explanation of the Code (Concept + Flow)

// When this code runs, JavaScript first creates a Global Execution Context and starts executing line by line (synchronous first).

// console.log("start") runs immediately → prints start
// setTimeout is encountered:
// JavaScript sends this to Web APIs and starts a 5-second timer
// The callback function is not executed now, it will go to the callback queue after the timer finishes
// fetch is called:
// It also goes to Web APIs and starts the API request
// When the response is received (assume in 200ms), its .then() callback goes to the microtask queue
// console.log("end") runs → prints end

// Now the synchronous code is finished and the call stack becomes empty.

// At this point, the Event Loop starts working:

// It first checks the microtask queue (high priority)
// fetchData is present → pushed to call stack → prints fetch data
// Then it checks the callback queue (low priority)
// After 5 seconds, timeout function is there → pushed to call stack → prints timeout print
// ✅ Final Output
// start
// end
// fetch data
// timeout print
// ✅ Core Concepts (Easy to Remember)
// 📌 Event Loop

// The event loop continuously checks:

// If the call stack is empty
// Then it moves tasks from queues to the stack

// 👉 It always gives priority to microtasks first, then callback tasks.

// 📌 Microtask Queue

// This queue stores high priority tasks.

// Examples:

// Promises (.then)
// fetch

// 👉 These tasks run immediately after synchronous code finishes, before any timer or event.

// 📌 Callback Queue (Task Queue)

// This queue stores low priority tasks.

// Examples:

// setTimeout
// setInterval
// DOM events

// 👉 These run only after microtasks are completed

//         ┌──────────────┐
//         │ Call Stack   │
//         └──────┬───────┘
//                │
//                ▼
//         ┌──────────────┐
//         │ Event Loop   │
//         └──────┬───────┘
//                │
//      ┌─────────┴─────────┐
//      ▼                   ▼
// ┌──────────────┐   ┌──────────────┐
// │ Microtask Q  │   │ Callback Q   │
// │ (High Pri.)  │   │ (Low Pri.)   │
// └──────────────┘   └──────────────┘