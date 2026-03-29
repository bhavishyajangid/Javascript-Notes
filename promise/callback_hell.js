// **************** CALLBACK HELL *********************

// callback is used to handle the asynchronous code in js but there are some issue with this 

// 1. when we use callback we used it nested mean callback in the another callback in another callback so it make code messy and not maintainble so this is called the callback hell when we use nested callback in large amoutn


//  ex: suppose we are using a ecommerce website we add a item to the cart now after it we need to procedd the paymnet and show then to orders and in the dashboard how can i manage it asynchronuosly lets see or see how the callback hell created 

//  let asume we have the api 
  api.addToCart()
  api.processToPayment()
  api.Orders()
  api.overvew()

//   lets first make call add to cart api

    api.addToCart()

    // after the card is add the run the processTopaymnet api we use callback to do this

    // function(){
    //     api.processToPayment()
    // }
// i am add this callback funcation in the addto cart how when the add to cart api fulfilled this will run this processThePayment api 


api.addToCart(function(){
        api.processToPayment()
    })

    // like this now we add all the api 


    api.addToCart(function(){
        api.processToPayment(function () {
            api.Orders(function() {
                api.overvew()
            })
        })
    })

    // this is called the callback hell because in this i am use four api and every one dependent on other and this is not maintable and not looking good so when we use nested callback this is knows as callback hell


    // 2.  the second reason the inversion of contro mean when we use this callback we dont have control on our code mean when my processToPayment api is fully depeneden on the add to cart api if the api we dont have any controll on it if this is not working if this processThePayment api run two times if the error come we dont  control so this is inversion os condtro