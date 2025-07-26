1.//   SCOPE 

1.// GLOBAL SCOPE :- without any pranthesis or any funcation this is global scope

2.// funcation scope : - making any funcation under this { } is a funcation scope

3. // block scope : - under the { } without funcation is knows as block scope


// ******************** let var const **************

1.// LET : -   let is block scope element
2.// const : - const is also block scope 
3.// var : - var is funcation scope 

2.// ************************** shadowing *******************

// 1. shadowing : - mean if we delare a scope and reassign a new value to it in the block scope then this value change but the changeble value only accesseble in the block scope for global scope the value is still same for block scope the value will be changed 

// ex : - 

  function shadowing(){
    let a = 'hello'

    if(true){
        let a = "hi"
        console.log(a);       // output : - 'hi'

        // but if we doing without let then  this will not work and print on both log "hi"
        a = "hi"      // output "hi"
        
    }
    console.log(a);     // output : - "hello" ,  if a = 'hi' then output "hi"

           
    
  }

  shadowing()


//   NOTE : -  WE CAN CHANGE THE VAR VARIBLE IN TO THE LET BUT WE DONT CHANGE THE LET VARIBLE INTO VAR BECAUSE VAR HAS ACCESS TO LET VARIBLE AND IT IS GLOBAL SCOPE BUT THE LET IS BLOCK SCOPE SO 

  function eligalShadowing(){
      var a = 'hello'
      let b = 'hi'
      if(true){
        let a = "bye"
      //  var b = 'by'      error cannot redclare blocked scope varible
      console.log(a , b);
      
      }
  }

  eligalShadowing()


3.//   ************************* declaration *******************

// 1. let : = let cannot redeclare in the same scope 
// 2. const : - const also not redeclare in the same scope  and if we declare a const varible or not initilize it then the only const gives error
// 3. var : - but var can redeclare in the same scope


//  ex : - let 

let a 
//let a    we cannot redclare the let in the same scope
{
    let a   // now we can redeclare it 
}

// ex : - const 

// const b
//const b   const cannot redclare in the same scope
{
    // const b     give error because we declare the varible but not initilize any value to it and if we not initilize a value to the const this will give error
}

// ex : - var

var c 
var c      // we can  redeclare it
{
    var c   // we can  redeclare it
}


4.// ************************ re-initiallisation **************
// 1. let : = let can re-initialisation let a = 10 , a = 20  do this in let
// 2. const : - const cannot re-initialisation  const a = 10 , a = 20 cant do this 
// 3. var : -  var  can re-initialisation  var a = 10 , a= 20  , do this in var


5.// *************************javascript  excution context ********************
// when we run a code this first going inside the creation pahse and in this phase it store all the vaible and the funcaiton without is value because this code in creation phase it store all the varible to undefined or when the code going to the excution pahse it  initilize the varible value with the original value like if var a = 10 then it store var a  in the creation pase the it initilize this value in the excution pahse var a = 10 

// NOTE : - this is only working for var if we do it with let and const this will give error because this will go into temporary dead zone 


6.// ******************** HOISTING **************

// hoisting work on javascript excution constext first read it

1.// ex : var 
console.log(count);          // output undefinded
 var count = 1      
 
 // these code treat like this
 console.log(count);          
 var count = 1  

// when we do this this code triet like this or in this we see the var is decalred but not initilize so this wil not give error or this is called hoisting
 var count;  
 console.log(count);      //output undefined
 count = 1 

2.// ex : - let 
 // let a also hoisted but in the tempory dead zone mean the varible in the scope but they are not declare yet so if we do this 
 console.log(a);
// let a = 10            // give error cannot initilisation


3.// ex : - const 
// same as const like the let 
 // const a also hoisted but in the tempory dead zone mean the varible in the scope but they are not declare yet so if we do this 
 console.log(a);
// let const = 10       // give error cannot initilisation

 
7.//  ************** errors *******************

1. // . typeError : - typeerror occur when we try to change the type of the varible or assign a diffent type of data in it like 
// ex : -  const a = 10
//       a = 10   

2.// syntaxError : - synatax Error occur when we any issue with the synatx in the code 
 // ex : -  const b      because previous we tell we need to initiliaze a value to the const if we not assign a value ot it this will give error 

3. //  referenceError : ReferrenceError occur when it try to find a varible not this varible not excesting in the memory like hoisting with let and const

//ex : console.log(a)
    //    let a  = 10




