

// function name (num) {
//     return function (num2) {
//         return num + num2
//     }
// }

// var addsix = name(6)
// console.log(addsix(10))
// addsix(21)

// function name () {
// console.log(arguments);

// }
// name()


// let obj  = {name : 'bhavishya' , total : 20 , balls : {type : 'lether'}}
// let newobj = {...obj}
// newobj.balls.type = 'tennis'

// console.log(newobj);
// console.log(obj);

// var object = {
//     foo : 'bar' , 
//     fun : function () {
//         var self = this
//         console.log(this.foo);
//         console.log(self.foo); 
    
//     (function(){
//          console.log(this.foo);
//          console.log(self.foo);
         
//     }())
//     }
// }

// object.fun()


// function evalution (a) {
//    return function (b) {
//       return function (c){
//         if(a === 'sum'){
//             return b+c
//         }else if(a === 'multiply'){
//             return b*c
//         }else if(a === 'subtract'){
//             return b - c
//         }
//       }
//    }
// }
// console.log(evalution('sum')(5)(3));
// console.log(evalution('multiply')(5)(3));
// console.log(evalution('subtract')(5)(3));

// var num = {
//     a : 100 , 
//     b : 200 , 
//     Tittle : 'my nums'
// }

// function multiplyByTwo (obj) {
    

//     for (const key in obj) {
//      if(typeof obj[key] === 'number'){
//          obj[key] *= 2
//      }
       
//     }
   
      
// }



// multiplyByTwo(num)
// console.log(num);
 


// function name (a , args) {
//      return [a , args]
// }

// console.log(name(1 , 2 , 3));
// let firstname = 'shyam' ;
// let str = 'ram ram bhiya kese ho'

// let obj = {}
// for (const ele of str) {
//    if(obj[ele]){
//      obj[ele]  += 1
//    }else{
//     obj[ele] = 1
//    }
   
    
// }

// console.log(obj);

// const calculate = {

//     read:function (a , b){
//          this.a = a  , this.b = b
//     }, 
//     sum : function () {
//      return this.a + this.b
//     }, 
//     mul : function () {
//      return this.a * this.b
//     }

// }


// calculate.read(2 ,5)
// console.log(calculate.sum());
// console.log(calculate.mul());
