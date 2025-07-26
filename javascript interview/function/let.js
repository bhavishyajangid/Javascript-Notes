let a = 10 ;
var b = 20 ;

function sample () {
    a = 20 ;
     b = 80
    console.log('inner' +a, b);
    
}
console.log('outer'+a , b);

sample()



