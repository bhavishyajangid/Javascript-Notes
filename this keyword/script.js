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


// NOTE : THIS KEYWORD VLAUE IS DEPEND ON HOW THE FUNCATION IS CALLLED 

function myFunc(){
    "use strict"
    console.log(this)  // output : undefined 
}

myFunc() // output  undefined
window.myFunc() // output will be window object because we call the funcation with the window object so this keyword refer to the window object

// if we call the funcation with the object refrence the it target the window object

// ****************** this keyword behave in the object ***************

let obj = {
    a : 10,
    myfun : function(){
        console.log(this)  // output : obj object because we call the funcation with the obj object so this keyword refer to the obj object
    },
    b: ()=> {
          console.log(this)  // output : window object because arrow funcation does not have its own this keyword so it refer to the window object
    }
}

// NOTE : ARROW FUNCATION DONT PROVIDE OWN THIS KEYWORD BINDING (IT RETAINS THE THIS VALUE OF THE ENCLOSING LEXICAL CONTEXT )

// in the object this keyword refer to the object itself only in normal funcation but the arrow function dont have the this keyword access so it always target to the global stace 

EX : 2  


let obj2 = {
    a : 10,
    myfun : function(){
       let b = ()=> {
          console.log(this)  // output : obj2 object because arrow funcation does not have its own this keyword so it refer to the this keyword of the enclosing lexical context which is the myfun funcation and in the myfun funcation this keyword refer to the obj2 object so the output will be obj2 object
    }
    b()
    },
    
}

obj2.myfun()


// ******************* this keyword in the dom ********************


//   <button onclick=alert(this)> clickme </button> 

// this keyword in the dom refer to the element itself which is the button element in this case so when we click the button it will alert the button element because this keyword refer to the button element in this case