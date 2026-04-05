
// ******************** event Propagation *******************

// EVENT PROPAGATION : Event Propagation in JavaScript means how an event travels (or flows) through the DOM when you interact with an element (like click, hover, etc.).

// event propagation has three main phase :

// 1. event bubbling   // default is event bubbling
// 2. event capturing 
// 3. event delegation


// 1. EVENT BUBBLING : in the event bubbling when we child any element it goes down to up like an bubble a bubble comes down to up so this comes like this 

ex : 
    //   so we have three div every div are in some other div and all div have the event listner so in the event bubbling when we click on the child div then first child click event happen and print child and but the parent run and print parent and then grand parent also run without clicking to them so this is event bubbling it does down to up so when you click on the child then first child call then parent the grand parent and in the event listner default used event bubbling 

    // event bubbling is used default in all element and for manuplate it use the third paramenter true or false in event listner 
    // false for event bubbling and true is for event capturing 

//     ex : 
//          document.querySelector("#grandParent")
// .addEventListener("click" , () => {
//  console.log("Grand Parent")
// }, false);


document.querySelector("#grandParent")
.addEventListener("click" , () => {
 console.log("Grand Parent")
});


document.querySelector("#parent")
.addEventListener("click" , () => {
 console.log("parent")
} , false);


document.querySelector("#child")
.addEventListener("click" , () => {
 console.log("child")   // click this duv 
}, false);

// OUTPUT : child 
            // parent 
            // grandparent 


// 2. EVENT CAPTURING / TRICKLING :  event capturing is opposite of event bubbling is goes down to up so when we click grandparent then the event listern call like first grand parent then parent then child but this always start from top element like when we click on parent in capturing so then grandparent print then parent 

// event bubbling is used default in all element and for manuplate it use the third paramenter true or false in event listner 
    // false for event bubbling and true is for event capturing 


//     ex : 
//          document.querySelector("#grandParent")
// .addEventListener("click" , () => {
//  console.log("Grand Parent")
// }, true );


document.querySelector("#grandParent")
.addEventListener("click" , () => {
 console.log("Grand Parent")   // click this duv 
}, true);


document.querySelector("#parent")
.addEventListener("click" , () => {
 console.log("parent")
}, true);


document.querySelector("#child")
.addEventListener("click" , () => {
 console.log("child")   
} , true);

// OUTPUT : grandchild 
            // parent 
            // child
            
            

// NOTE : IF BOTH HAPPEN THEN ALWAYS CAPTURING IS RUN FIRST THEN THE EVENT BUBBLING 


document.querySelector("#grandParent")
.addEventListener("click" , () => {
 console.log("Grand Parent")
} , true);


document.querySelector("#parent")
.addEventListener("click" , () => {
 console.log("parent")
} , false);


document.querySelector("#child")
.addEventListener("click" , () => {
 console.log("child")
} , false);


// so now in this case when you click on the child then first event capturing happen then event bubbling happen so the output will be like this

// OUTPUT : // grandparent
            // child
            // parent 

//   MEAN IS BOTH PRESENT THEN THE EVENT CAPTURING IS HAPPEN FIRST THE THE EVENT BUBBLING 

// ***************** HOW TO STOP THIS EVENT PROPAGATION ******************

//  use the stopPropagation() method to stop the event propagation in the event listner

 ex :
    document.querySelector("#child")
.addEventListener("click" , (e) => {
 console.log("child")
 e.stopPropagation()  // this will stop the event propagation so when we click on the child then only child print and parent and grand parent will not print because we stop the event propagation
} , false);



// NOTE : THIS IS ONLY HAPPEN IN THE NESTED ELEMENTS NOT IN SINGLE ELEMENT
document.querySelector("#anotherdiv")
.addEventListener("click" , () => {
 console.log("another div")
});



            
