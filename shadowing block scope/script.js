// *************************** block or block scope *******************

//  BLOCK : -  block mean {} which block is used to grouping the data and grouping the statemnet or its user in js where only one palce to use but we need to use more data 

//  EX : -  if(true) return a  if is return in the single line but if we want to return more data or setup some opearion on it we use block 

//  if(true){
//     if(age > 30){
//         return bigger
//     }else{               // like this 
//         return smaller
//     }
//  }
                


// ******************************* BLOCK SCOPE ************************

// when we make any varible in the block its create its own scope know as block scope and block scope is also as the access of lexical enviroment of its parent 


// EX : -   
        //   var a = 10
        //  {
        //     var a = 20
        //     console.log(a);          // 20
             
        //  }
        //  console.log(a); // 20

        //  because the var is funcation scope and var is store in the global scope of first a store and the second rewrite the value of a 


    // EX : -    
                let a = 10 
                {
                    let a = 20
                    console.log(a);   // output 20
                    
                }    
          console.log(a);  // output 10

        //   because the first let is store in the script scope not in the global scope and the second let is stored in the diffrent scope which is not global scope not script scope this is block scope in so in this block we log a this print from block scope or outer print from the script scoep same with cons

        
          