// what is function declaration 
// function declaration is a statement that declares a function with a name, parameters, and a body.
//  ex : 
//console.log(name(5));  this will give same output 25 doesnt matter call before the function or after

function name(num){
    return num * num
}
// console.log(name(5));
 

//  2. what is function expression 
// a function which is declared using a varible without his name called funcation expression 
const add = function (num){
    return num + num
}
// console.log(add(5));

// 3. what is first class function in js 
// so first class function are the function which are treated like a varible and also this function working like a varible known as first class function 
function sample (num){
    return num + num
}

function displayAdd (fn) {
   console.log('this is sample function '+ fn(5));
   
}

// displayAdd(sample)


// 4. what is IIFE 
// iife mean immeditely invoked function expression in this function there is no need to call 

//  (function square (num) {
//    return num +num
    
// })(10);


// 5. what is arrguent or param 
function sum(num) { // the which i receive this is params
    return num+ num
}

// sum(5) the vlaue pass when the function call is argument 

// 6. what is callback function 
// a callback function is a function which is pass through a another functionas an argument like first class fucntion check this 


// 7. what is arrow function 
// a function which is define not by function name its defined by an arrow this is called arrow function 
let data = (num) =>{
    return num + num
}

// data(5)


// 8. diffrence between arrow function and normal function 

// synatax
function name(){

}

const name = ( ) =>{}

// return keyword
// in the normal function we have to write return keyword but in the arrow function we write the code in on line and dont need to write return keyword 

function name () {
    return num + num
}

const name =  () => num + num  // this return num + num

// arguments 

// in  the normal function when we provide arguments but not write any para in it and log arguments it give  the result but in the arrow fucntion this give me errro

function sample () {
    console.log(arguments);
    
}

sample(1,2,3)


// this keyword 

// in the simple function this keyword target the its parent scope but the arrow function taget the global scope

const obj = {
    name : 'ram' ,
    fun1 : () => {
        console.log('this is arrow function' + this.name);
        
    },
    fun2() {
        console.log('this is simple function' + this.name);
    }
}

obj.fun1()
obj.fun2()