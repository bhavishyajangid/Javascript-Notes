// ******************* this keyowrd ********************


// this is a keyword which target diffrent with diffrent places 

// in the global scope this keyword refer to the window object

"use strict"

console.log(this)  

// **************** this work in the funcation ********************

function myFunc(){
    console.log(this)  // output : window object 
}

// but when we used strinct mode in the function then this keyword refer to the undefined

function myFunc(){
    "use strict"
    console.log(this)  // output : undefined 
}

// if the value of the this keyword is not defined ot null this keyword will be replaced by the window object in non strict mode but in the strinct mode this is not happen 

// why because in the non-strinct method this funcation is undefinded but if in nonstrict mode if the this is not defined then the js automaticall assign window object to it and in the non strinct mode this will not happen and we will see undefined


NOTE : THIS KEYWORD VLAUE IS DEPEND ON HOW THE FUNCATION IS CALLLED 

function myFunc(){
    "use strict"
    console.log(this)  // output : undefined 
}

myFunc() // output  undefined
window.myFunc() // output will be window object because we call the funcation with the window object so this keyword refer to the window object

// if we call the funcation with the object refrence the it target the window objec