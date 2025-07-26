 // throwing a custom error 
 let a = 10 ;
 let b = 10 ;
if(a !== b){
    //throw SyntaxError("this is not valid") // when we want to throw an errro we use throw 

}


// now how to handle error we are handle our error using try or catch

let c = 20;
let d = 40 ;
//console.log(e); // this giving an error undefined 
try {
    //console.log(e); // this giving an error undefined  but when we put this into try its not giving any error because try trys to check error
} catch (error) {
    // console.log(error); // and catch catch the error and handle it and print it so this is error handler
}
finally{
    //console.log("you are facing many error so stop coding "); // finally is basically used to function when we return the statement but some code are present in the under of the return statement we want to run this we use finally like 

}

function main(){
    let score = 500;
    let wicket = 3;
    // console.log(player); this is giving error so we use try or catch
    try {
        console.log(player);
        return true
    } catch (error) {
        //console.log(error);// print the complete error 
        //console.log(error.message);// print the error but in message form 
        console.log(error.name);// its print the error name like referance error , syntax error 
        
        return true
    }
    finally{
        console.log("this is the work of finally"); // we all known after the return statement function is no value and the function is dead but in this code first we return the true in try but the finally method is working this is the main use of finally matlab chlega hi chlega 
    }
}

main()




 



// console.log(c);// this is giveing error undefin