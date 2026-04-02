


//************************ call method ************************** */

let name = {
    firstName: "Bhavishya",
    lastName: "Sharma",
    fullName: function () {
        console.log(this.firstName + " " + this.lastName);
    }
}

name.fullName()  // print bhavishya jangid


// lets make a another object 

let name2 = {
    firstName: "Rohit",
    lastName: "Sharma",
}

// now we need to use this same funation in the object two but how and now the call method is come into picture using the call method we borrow the function from one object to anothe object 

name.fullName.call(name2) // print rohit sharma

// in the call method first argument is the value which we want to give to that this varbile 

// so first we call the function name.fullname then use the call method .call then in the call method we pass the value which we give the access to it or we i want the funcation takes the value from this object so i am pass the obj2 in it 


let name1 = {
    firstName: "Bhavishya",
    lastName: "Sharma",
   
}

 let fullName = function () {
        console.log(this.firstName + " " + this.lastName);
    }



// lets make a another object 

let name3 = {
    firstName: "Rohit",
    lastName: "Sharma",
}

fullName.call(name1) // print bhavishya sharma
fullName.call(name3) // print rohit sharma

// and the second argument for the funation argument itself 

let name4 = {
    firstName: "Bhavishya",
    lastName: "Sharma",
   
}

 let fullName2 = function (hometown) {
        console.log(this.firstName + " " + this.lastName, + hometown);
    }



// lets make a another object 

let name5 = {
    firstName: "Rohit",
    lastName: "Sharma",
}

fullName2.call(name1 , "jaipur") // print bhavishya sharma
fullName2.call(name3 , "churu") // print rohit sharma

// NOTE : MEAN THE FIRST PARAMENT WHICH WE GIVE TO THIS CALL METHOD IS ALWAYS FOR THE THIS AND AFTER SECOND ARGUMENT THESE ARGUMENT FOR THE FUNTION IT SELF 

// *********************** APPLY METHOD *******************

// in the apply method the only diffrence is take the array of list as argument as remain same as call method 

fullName2.apply(name1 , ["jaipur"]) // print bhavishya sharma jaipur


// ****************** bind method **************

// in the bind method it make a copy of that funcation and return it and we invoked this funcation later 

let bindFunc = fullName2.bind(name1 , "jaipur") // it return the copy of that funcation and we can invoke it later

bindFunc() // print bhavishya sharma jaipur