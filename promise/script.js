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