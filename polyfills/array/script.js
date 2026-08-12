// ********************************** MAP POLYFILLS ********************

// IN THE MAP WE HAVE A ARRAY AND THEN WE RUN A CALLBACK FUNCATION WHICH GIVES US A ELEMENT , INDEX , ARRAY THEN WE PERFORM ANY TASK AND THEN ITS RETURN A NEW ARRAY SO NOW WE CREATE THIS WITHOUT USING THE MAP METHOD 


Array.prototype.myMap = function(callback){
    let result = [];

    for(let i = 0; i < this.length; i++){
        result.push(callback(this[i], i, this));
    }

    return result
}


let array = [1, 2, 3, 4, 5];

let newArray = array.myMap(function(element, index, array){
    return element * 2;
});

 output = [2, 4, 6, 8, 10]


//  now the main question why use the array.prototype all the array method is stored in the prototype so when we log this console.log(array.prototype) then its print all the array method so its store all the methid now i want to make are map polyfills avaliable for all the array if i am create this using the normal funcation then we need to call this funcation like this myMap(array , function(){}) but now this myMap is available for all the array so we can call this like this array.myMap(function(){}) so this is the main reason we use the array.prototype to make our polyfills available for all the array.



// *********************** FOR EACH ****************

Array.prototype.myMap = function(callback){


    for(let i = 0; i < this.length; i++){
       callback(this[i], i, this)
    }
}


let array = [1, 2, 3, 4, 5];

let newArray = array.myMap(function(element, index, array){
    return element * 2;
});

 output = [2, 4, 6, 8, 10]


 // SAME AS THE MAP POLYFILLS ONLY IN THE WE ARE NOT RETURN THE ARRAY 



//  ********************* FILTER **************************

Array.prototype.myMap = function(callback){

    let result = []

    for(let i = 0; i < this.length; i++){
       if(callback(this[i], i, this)){
         result.push(arr[i]);
       }
    }

    return result
}


let array = [1, 2, 3, 4, 5];

let newArray = array.myMap(function(element, index, array){
    return element * 2;
});

 output = [2, 4, 6, 8, 10]


 // now on this filter we only needto check if the condtion is true then only push the element n the new array and we do it 
