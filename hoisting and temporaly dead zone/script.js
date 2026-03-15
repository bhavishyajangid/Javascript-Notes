// *************************************** Hoisting *******************

//    Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their scope (global or local) during the compilation phase, before code is executed.
             // Explanation    : -  when we create a varible this varible store in the memory space as undefined no matter you declare its value or not in the first it always store in the memory as undefined and after when the code excute it store the original value or the varible in the global object so this varible are always preset in the global object this is know as hoisting 



//    EX :-  console.log(a);
//         var a = 10 ; 


        // we log the varible even this varible is not declare but when the code is run a global excutaion context is created and in this varible get the memory but in the first its store all the varible undefined and then when the code excute it decalre the its original value so when we not decalre the vaible in the first in the memory a name varible is created with the value of undefined and when we reach varible a its assing its orignal value so its log undefined at this time not give error 

        // NOTE : -  BUT THERE IS A CATCH THIS IS ONLY WORK WITH VAR KEYWORD NOT WITH LET AND CONST LETS SEE WHY


        // **************** LET AND CONST ***************


        // EX : -   
                // console.log(a);
                // let a = 10 

           
         // this will give error cannot access varible before initalization  all the process are same but some diffrence when the var is store in the global object memory rather than the let and const are stored in the diffrent memory space so we cannot access let and const varible till its assign a value mean we cannot access its undefined value we only able to access it when its value is assigned but this is hoisted because its store in the diffrent space but in the the value is undefined also but in anothe memory space here is a new topic comes lets talk on it
         
         
    //  **************** temporal dead zone ***************

    // The Temporal Dead Zone is the time between the hoisting of a let/const variable and its actual declaration in code.
    // temporal dead zone mean when the let and const varible declared and its store in the diffrent memory as undefined the time between its undefined and not get the origianl value mean not decalre is known as temporal dead zone mean the time in which the vaible is undefied is know as temporal dead zone
                
