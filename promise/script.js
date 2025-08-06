let promise2 = new Promise((resolve , reject )=>{
    setTimeout(()=>{
        // console.log("promise maked");
             resolve()
    },3000)
})

promise2.then(()=>{
    // console.log("promise resolved");
})

 //    this the second method of promise
 new Promise((resolve , reject)=>{
                // console.log("this is promise second");
                resolve()
}).then(()=>{
    // console.log("this is promise second resolved");
})

// this is the third method of promise 

let thirdpromise = new Promise((resolve , reject)=>{
      setTimeout(() => {
        //   console.log("this is third promise");
          resolve(20)
      }, 1000);
})
 
thirdpromise.then((data)=>{
        // console.log(data);
        
})


// this is promise four 
let promiseFour = new Promise((resolve , reject)=>{
    let error = false ;
    if(!error){
        resolve({username : "bhavishya" , age : 29})
    }else{
        reject("ERROR : This Syntax is Not Correct")
    }
    
})
promiseFour.then((data)=>{ // first this  is to print the resolve data 
    console.log(data);
    return data.username // but we print element in data we cant print like first stored in a varible and log this we are not using like this we use first we return this element which we want and print in an another this method
}).then((username)=>{
    //console.log(username);  // in this we have username present in the object which is resolved so we get the element like this 
}).catch((error)=>{
    console.log(error);// this catch is used to when the error occur this handle the error and print it 
}).finally(()=>{ // finally is always return wheather the promise is resolved or rejected 
    // console.log("your promise is either reslove or rejected");
})



//this is promise five

let promiseFive = new Promise((resolve , reject)=>{
    let error = false ;
    if(!error){
        resolve({username : "javascript" , age : 29})
    }else{
        reject("ERROR : This Syntax is Not Correct")
    }
})

async function consumerPromiseFive(){
    try {
        const promise = await promiseFive 
    console.log(promise);
    } catch (error) {
        console.log(error);
    } 
}
consumerPromiseFive()


const cart = ['shoes' , 'cloth' , 'men']

const prmoise = createOrder(cart)  // i am create a funcaiton here which is call the api and add the item to the cart and return the orderId 

console.log(prmoise);  // this time the promise is pending and it show promise pending because the createOrder take 5 sec to give response so that time the promise in the pending state 

promise.then(function (orderId){
 console.log(orderId);  // after the promise is resolve it return the orderid whcih si receive directly in thsi funcation because we make chain of it promise.then 
 return orderId
})
.then((orderId)=> {
    return proceedToPayment(orderId)
})
.then((paymentInfo) => {
     console.log(paymentInfo);
     
}).catch((eror)=> {
     console.log(error);
     
})


function createOrder(cart){
    // first we make a promise to check how behind the scene the api is working and return the promise error and the data suppose this is the api which i am call before in the top 
   const pr = new Promise(function (resolve , reject){

    // chekc the cart is valid or if not the we gives and error 
      if(!validateCart(cart)){
        let error = new Error('Cart is not valid')
         reject(error)
      }
      const orderId = '53465'

      if(orderId){
        // if every thing is done we return the order id and resolve the promiese it 
        setTimeout(() => {
            resolve(orderId)  // it take 5 sec to resolve it and that time the createORder wait to recieve the data
        } , 5000)
      }

   })

   return pr  // return the promise which is recive in createOrder funcation with fulfiled and data
}

function validateCart(cart){
    return true
}

function proceedToPayment(orderId){
    return new Promise((resolve , reject) => {
         resolve('Payment sucessfull done')
    })
}