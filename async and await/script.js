// ********************************** async  ************************

// In simple terms, it means doing tasks without waiting for each one to finish before starting the next.

// Easy idea:
// Synchronous (normal): do one thing at a time
// → wait → then next thing
// Asynchronous (async): start something and move on while it’s still working

// async funcation always return a promise if we dont return promise and return a string or other value then it  convert these value into the promise 


// async function myFuncation() {
//     return "hello world"
// }

// let result = myFuncation()
// console.log(result) // this will print promise { 'hello world' } because async function always return a promise if we return other value it convert into the promise

// // if we want to get the value we need to use then method of promise

// myFuncation().then((res) => {
//     console.log(res) // this will print hello world
// })



//  NOTE : ASYNC OR AWAIT IS USED TO HANDLE PROMISES IN JS 

// ***************************** before async and await how we handle promises *******************

// const p = new Promise((resolve, reject) => {
//         resolve("hello world")  
// })


function myData(){
    p.then((res) => console.log(res))
    console.log("this is my data")
}

myData()

OUTPUT : "this is my data"
         "hello world"


// when we handle the promise like this you know js wait for non it this promis take the 5 sec to resolved or reject js not wait to resolved the promise it excute the next line code and print this is my data first and then after 5 sec it print hello world because js not wait for the promise to resolved or reject it excute the next line code so this is the problem with handling promises without async and await


// *********************** after async and await ******************


async function myData(){
    let res = await p // this will wait for the promise to resolved or reject and then it will print the result
    console.log(res)
    console.log("this is my data")
}

myData()

// OUTPUT : "hello world"
//          "this is my data"

// now we get hello world first and then the log because this await keyword wait for the promise to be resolved and then excute the next line code so this is advantage to use async and await 

// NOTE  : AWAIT ALWAYS USED WITHIN THE ASYNC FUNCTION AND PUT THE FRONT OF THE PROMISE 

// ********************* Catch in the async and await ****************


  let p = new Promise((resolve, reject) => {
     setTimeout(() => {
           resolve("p1 is resolved")
     } , 10000)
})

let p2 = new Promise((resolve, reject) => {
     setTimeout(() => {
           resolve("p2 is resolved")
     } , 5000)
})

async function myData(){
    let val1 = await p1
    console.log(val1)

    let val2 = await p2
    console.log(val2)
}   

myData()

// OUTPUT : "p1 is resolved" after 10sec
//          "p2 is resolved" same after 10sec

//  in this example we have two promises first is p1 and second is p2 and we use await keyword front or both promises so now we think that first p1 will be call and it take 10 sec to resolved and then it print p1 is resolved and after this p1 is resolved the p2 will be call and wait 5 sec and then it ptint the p2 is resolved but this is not happen after 10sec we see both p1 and p2 is resolved in the console  and if we do its reverse lets see than what will happen now in the next p1 take 5 sec and p2 take 10 sec lets see

  let p = new Promise((resolve, reject) => {
     setTimeout(() => {
           resolve("p1 is resolved")
     } , 5000)
})

let p2 = new Promise((resolve, reject) => {
     setTimeout(() => {
           resolve("p2 is resolved")
     } , 10000)
})

async function myData(){
    let val1 = await p1
    console.log(val1)

    let val2 = await p2
    console.log(val2)
}   

myData()


// OUTPUT : "p1 is resolved"  after 5sec 
//          "p2 is resolved"   after 10 sec

// now in the console we see p1 is resolved after 5 sec and then after 10 sec we see p2 is resolved so how when the p1 take 10 sec so we see both p1 and p2 resolved after 10sec and when the p1 take 5 sec then first p1 reoslve and after 10 sec p2 is resolved so how this happen lets discuss deeply this 



// ****************************** code explain ************************

// now talk about the before code hoe these code work so async call the promises parallaly so when the first promise is called it also call the second promises and second get resolved in 5 sec and first take 10 sec
// so after the 10 sec it go dowan and check so the second ipromise is already resolved so it print the both p1 and p2 promise response after 10 sec but when we put the p1 to take 5 sec and p2 to take 10 sec so it call the p1 promise and also the p2 and p1 resolved in 5 sec so it print the p1 resolved but p2 take the 10 sec so after 10 it print the p2 is resolved await call the promise prallely not sequentially like one after another 

// *********************behind the scene async and await *************

// when we create the await we thing the code is wait to resolve the promise but if the code is wait then the other is not work at that time because and are all code excutation is stop and are code is freezed and we block the main thread and js is single threded so we dont block main thread so how js handle this await when the mydata is called is come to await and when i see the await it suspend  that async funcation and pop out the call stack and dont block the main thread and when the promise is resolved it again push the funcation in the call stack and go next and again it show the await so its again suspend the funcation and pop out the function from the call stack and when the promise is resolved it again push the funcation into the callstack so like this the async and await is worked  



let p1 = fetch ("take 10 sec to resolved")
let data1 = await p1.json()
console.log(data1)
let p2 = fetch ("take 5 sec to resolved")
let data2 = await p2.json()
console.log(data2)

// ************** interview question *******************



 let p = new Promise((resolve, reject) => {
     setTimeout(() => {
           resolve("p1 is resolved")
     } , 5000)
})

let p2 = new Promise((resolve, reject) => {
     setTimeout(() => {
           resolve("p2 is resolved")
     } , 10000)
})

async function myData(){
    let val1 = await p1
    console.log(val1)

    let val2 = await p2
    console.log(val2)
}   

myData()

// OUTPUT : "p1 is resolved"  after 5sec
        //  "p2 is resolved"   after 10 sec 
        // HERE IF THIS HAPPEN THEN TELL ME WHAT HAPPEN HERE 



//         let p1 = fetch ("take 10 sec to resolved")
// let data1 = await p1.json()
// console.log(data1)
// let p2 = fetch ("take 5 sec to resolved")
// let data2 = await p2.json()
// console.log(data2)

// so here the first api take 10 sec and then json convert data in json and then the second api call and take 5 sec and again convert into js so total time take 15 sec why in this it take 15 sec in the promises before it take 10sec so the promblemt is the await data.json() it block the parallel call the promises or the api before it have the data is dont excute the next api call so if we need to call it parallely then we need to convert it after 

// ex : 

//   let p1 = fetch ("take 10 sec to resolved")
// let p2 = fetch ("take 5 sec to resolved")
// let data1 = await p1.json()
// console.log(data1)
// let data2 = await p2.json()
// console.log(data2)

// now it only take 10 sec to resolve or give the data 

