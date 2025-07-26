const obj = {
    name: 'John',
}


// so there we know this is pointing the window object and theres is no name varible is present in the window object so its give null 
function sayhello() {
    return 'hello my name is ' + this.name + 'my age is' 
}

// console.log(sayhello());

// but here we give call method to the function or in this call method it take first obj for which we call the method or any argument call method behind the scene call this funciton into the object so this find target the parent obj or in which name is present like this 


function sayhello(age) {
    // age is parameter is here 24
    return 'hello my name is ' + this.name + 'my age is' +age
}

// console.log(sayhello.call(obj , 24)); // output hello my name is john my age is 24 



// apply method the main diffrence between  in the apply method is the argument we pass the argument in the apply method in the form of array  

function sayhello(age) {
    // age is parameter is here 24
    return 'hello my name is ' + this.name + 'my age is' +age
}

console.log(sayhello.apply(obj , [24])); // output hello my name is john and my age is 


//bind method 
// in the bind method we reuse the return function by many times
function sayhello(age) {
    // age is parameter is here 24
    return 'hello my name is ' + this.name + 'my age is' +age
}

const bindfun = sayhello.bind(obj)
// console.log(bindfun(24));//like this
// console.log(bindfun(26));

const arr = ['a' , 'b' , 'c']
const arr2 = [1,2,3]
// now concate this both array into one array without using loop or any other built in method 

arr.push.apply(arr , arr2)
console.log(arr); // output is [a , b , c 1, 2 , 3d]







