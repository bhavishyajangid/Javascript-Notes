// *********************** Promises **********************

// promises resolve our useCallback hell problem and also solve the inversation of control problem

// 1. what is promise 
// a promise is an object which is used to handle the asynchronous code in js and it return a empty object first and after some time when we get the data form the api or other thing it pass this data into this object 


// ex : 

// const promise = createOrder(cart)  // i am create a funcaiton here which is call the api and add the item to the cart and return the orderId

// so we have an api createOrder and we dont know how much time this api takes 
// but we want to get the orderId which is return by this api so when we call this api it return a empty object first and after some time when we get the data form the api or other thing it pass this data into this object and we can access this data using then method of promise like this

// promise.then(function (orderId){})  



// so we have a .then method in the promise and this then method take a callback function as an argument and this callback function will be called when the promise is resolved when we get the data it automatically run this callback function and this funcation run only once   and the data which is return by the api will be passed as an argument to this callback function so we can access this data in this callback function and we can do some operation on this data like log it or return it or do some other thing with it

















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

// ******************************* PROMISE API METHODS ************************

// 1. PROMISE.ALL : -  
                       // when we need to call multiple api pararally so we use this method it we fetch 10 user details at a time then we use this method it takes an array or api or promises and return the value of the api in the form or array like if we pass and array in which 3 api present then it return an array in which all the three api data were present

      // NOTE : - 
                    // WHEN YOU USE THIS METHOD IT CALL ALL THE API PARARALLY NOT LIKE CALL FIRST API THEN SECOND IT CALL ALL THE API AND IT WAIT IF THE EVERY API SUCESSUFFLY RESOLVE THEN IT RETURN THE RESULT NOT LIKE IF FIRST RESOLVE THEN RETURN THE DATA NOT WHEN THE EVERY API RESOLVE AFTER IT RETURN THE RESULT ARRAY SO IT TAKE TIME = THE HIGHEST TIME TAKES API MEAN IF IN THE ARRAY FIRST TAKE 2 SEC TO RESOLVE AND SECOND 1 SEC THIRD 5 SEC THEN IT RETURN THE DATA AFTER 5S NOT IN 1 OR 2 SEC IT TAKE HIGHEST TIME API CALL TIME 

     // NOTE : -   
                  // UPER I AM TALK IT RETURN THE DATA IF ALL THE API IS RESOLVE BUT WHAT IF ANY API REJECTED OT GIVES US ERROR THEN THIS METHOD GIVES US ERROR IF ANY OF THE API GIVE ERROR IT THROW AN ERROR IMMEDITELY NOT MATTER HOW MUCH API RESOLVE IF ANY ONE RETURN ERROR IT THORW ERROR LIKE IF WE HAVE 5 API 4 API RESOLVE OR 5TH API REJECTED OR ERROR THEN IT IMMEDITELY THROW THE ERROR AND RETURN THE ERROR NOT THE 4 API RESULT OR  1 ERROR                

//  EX : -     
            const p1 = new Promise((resolve , reject ) => {
                 setTimeout(() => resolve('p1 resolve'), 3000)
            })
            const p2 = new Promise((resolve , reject ) => {
                //  setTimeout(() => resolve('p2 resolve'), 1000)
                 setTimeout(() => reject('p2 fail'), 1000)
            })
            const p3 = new Promise((resolve , reject ) => {
                 setTimeout(() => resolve('p3 resolve'), 5000)
            })

            Promise.all([p1 , p2, p3])
            .then((res) => {
                console.log(res)
            })
            .catch((error) => {
                console.error(error)
                
            })
 
// 2. PROMISE.ALLSETTELED : - 
                               // this method is same as promise.all but in but in this when call multiple api and any of them rejected or gives error then it not throw the error it wait for other api calls and after every api call it return the data if the api call is gives error then it return erorr if resolve the return data it call all the api and wait for all the api response no matter the api is rejected or resolve it wait for all the api response like i have 5 api the 2 will resolve and 3 api rejected then it not throw the error it run 4 or 5 api and after all the api run it return an array in this if erorr comed it return error if not then result same a promise.all but change in error handling

//  EX : -     
            const k1 = new Promise((resolve , reject ) => {
                 setTimeout(() => resolve('p1 resolve'), 3000)
            })
            const k2 = new Promise((resolve , reject ) => {
                //  setTimeout(() => resolve('p2 resolve'), 1000)
                 setTimeout(() => reject('p2 fail'), 1000)
            })
            const k3 = new Promise((resolve , reject ) => {
                 setTimeout(() => resolve('p3 resolve'), 5000)
            })

            Promise.allSettled([k1 , k2, k3])
            .then((res) => {
                console.log(res)
            })
            .catch((error) => {
                console.error(error)
                
            })
                               
                               
// 3. PROMISE.RACE : - 
                          // this method take an array of api and return the first promise to resolve or rejecte like if have 3 api first take 3 sec secodn take 5sec third take 2sec then when the first api resolve or reject it return it and the first api resolve it 3 so ite reutrn the result mean it return the fastest api result first come first return no matter is resolve ot reject if reject then return error 
                          
//    EX : -                           

            Promise.race([k1 , k2, k3])
            .then((res) => {
                console.log(res)
            })
            .catch((error) => {
                console.error(error)
                
            })
                          
                    
// 4. PROMISE.ANY : -    
                        // this will take an array of promises and wait for first sucess or resolve promises like it onlt return the result of first resolve api or promises like if we have three api first take 1s second take 2s third take 3sec and the first got rejected and the second also get rejected and third is resolved then it return third because it only return the first resolved promises data in the race method it return the first promises data no matter resolve or reject in this not return reject promise only return first reoslve promises data if all the promises will rejected it will give error 

//  EX : - 
              Promise.any([k1 , k2, k3])
            .then((res) => {
                console.log(res)
            })
            .catch((error) => {
                console.error(error)
                
            })