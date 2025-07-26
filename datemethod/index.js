;
// let number = (new Date().getDay());

//     let arr = ['sunday' , 'monday' , 'tuesday' , 'wednesday' , 'thrusday' , 'friday' , 'saturday']

//     console.log(arr[number]);


 console.log(new Date ().toLocaleTimeString());
 let date = (new Date().getDate()); 
let month = (new Date().getMonth()); 
let year = (new Date().getFullYear()); 

// let data = `${date} - ${month} - ${year} `
let data = new Date(1714694909 * 1000).toLocaleTimeString()
console.log(data);



