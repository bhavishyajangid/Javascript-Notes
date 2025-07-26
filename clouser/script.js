// *********************** CLOUSER *******************


// clouser is the bundle of the funcation and its parent lexical scope is know as clouser 

// EX : - 
        //    function clouser(){
        //          let a = 10;
        //          function innerFun(){
        //             console.log(a);
                    
        //          }
        //          innerFun()
        //    }
        //    clouser()   // output : 10

           // when a funcation is invoked its store all the varible and also store the lexical scope it parent scope so innerfun also know the lexical scope of its parent which is clouser and when we log it check in the innerfun is any vaible is present if not then it check into the lexial scope it found then it log 

           // the funcation and its lexical scope bundle and make a clouser 

    // EX : - 
       function ClouserWithReturn(){
          let a = 10
          return function inner(){
             console.log(a);
             
          }
       }   
       let b = ClouserWithReturn()  // inside b is a (){}
    //    b()  // output : 10    


    //    question: =   i am return the inner function and ClouserWithReturn is also removed from memory and fro stack from every where because its completed and b carry a funcation because ClouserWithReturn return function a we call b but that time we call the b the ClouserWithReturn is not present anywhere then how its print 10 because with funcation the varible is also not anywhere in the memory 

    // answer ClouserWithReturn is return the clouser and the clouser  always have access of its lexical scope even if the funcation  present or not its not return the funcaiton because its return clouser and what is clouser bundle of funcation and its parent lexical scope so 



    // function ClouserWithReturn(){
    //       let a = 10
    //       function inner(){
    //          console.log(a);
             
    //       }
    //       a = 100
    //       return a

    //    }   
    //    let b = ClouserWithReturn()  // inside b is a (){}
    //    b()  // output : 100 

       // because clouser always reference the varible not its value its only carry the reference and when it need the value it point to the refrence value and the print current value 


    // ***************************INTERVIEW QUESTION ON CLOUSER ************
  1. 
    function outer(){
        let a = 10
       setTimeout(function(){
         console.log(a);            // output : 10 because of clouser 
         
       }, 2000)
    }

    // outer()

    2. 
       function outer(){
        let a = 10
       setTimeout(function(){
         console.log(a);            
         
       }, 2000)
       console.log('js print');        // output : js print
                                                // 10
    }

   //  outer()

    // this is because the js not wait for any code its store this clouser in other place and run other code so first print jsprint and when the timeout is out it print a which is 10 why i am telling setTimout funcation to clouser because you about clouser the bundle of funcation and its parent lexical scope 




    // now we need to print the 1 after 1 time like print 1 after 1 sec print 2 after 2 sec print 3 after 3 sec print 4 after sec and 5 after 5 sec like this 

    3. 
       function outer(){
        let a = 10
        for (var i = 0; i <= 5; i++) {
           setTimeout(function(){
         console.log(i);            
         
       }, i * 1000)
            
        }               // output : 6,6,6,6,6,6
    }

   //  outer()  

    // you think this is correct way but it print 6 five time not 1 or 2 why ?

    // because before we talk the javascript dont wait for anyone when we run the loop the setTimeout take time to print so the js store this clouser into another place run the next code again its run because i++ so its again store this clouser and run then again i++ like this it store the 5 clouser into the other palce and run under code but under is not code and when the timout is out it print 6 why because that time the loop is over and the value i is 6 for all the funcation and previous we know clouser not store the value of the varible it store the refrence of the vaible and when it need it point to that varible and currently the varible value is 6 so it print 6 every time 

    // now to fix it lets talk about it

     function outer(){
        let a = 10
        for (let i = 0; i <= 5; i++) {
           setTimeout(function(){
         console.log(a);            
         
       }, i * 1000)           // output : 1,2,3,4,5
            
        }
    }

    // outer()  

    
    //  we change the loop varible var i = 0 let because of this when it store the clouser it create a copy of a every time because let is blocked scope and when we store the funcaion in some other palce it make a seprate block for it and when the i change again the next funcation stoer the i value but this i value is diffrent for all the funcation because it cannot cchange becaue it change the global scope varible not the block so now print 1 , 2,3,4,5 every time gap

    
    // if interview tells solve it without using let so we solve it like this 

    function outer(){
        let a = 10
        for (var i = 0; i <= 5; i++) {
            function close(i){
                setTimeout(function(){
              console.log(a);            
              
            }, i * 1000)           // output : 1,2,3,4,5
            }
            close(i)
        }
    }

    // outer() 

    // its create every time a new copy of i for every funcation so nothing change we receive correct output 



    function count(){
      let counter = 0
      return function increament(){
         counter++
         console.log(counter);
         
      }
    }

    let counter1 = count()
    counter1()
    let counter2 = count()
    counter2()