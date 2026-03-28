// so the callback is pass a funcation into another function as an argument and that funcation will be called or called after some time know as callback funcation 


// ********************** callback hell *********************

// when we need to do some task after some task and every task depend on the revios task so we use this callback function but when we have to do many task after some task and every task depend on the revios task so we have to use many callback function and this is called callback hell

// ex:
const cart = ["shoes", "pants", "kurta"];

api.createOrder(cart, function (orderId) {
    api.proceedToPayment(orderId, function (paymentInfo) {
        api.showOrderSummary(paymentInfo, function (orderSummary) {
            console.log(orderSummary);
        })
     })
})

// we have a cart array in which we have some items and we want to create order for that cart and after creating order we want to proceed to payment and after that we want to show order summary so but before payment  we have to check that order is created or not only after than we show this payment page so we do like this in the createorder funcation we pass a callback function and in that callback function we call the proceedToPayment funcation and in that funcation we pass a callback function and in that callback function we call the showOrderSummary funcation and in that funcation we pass a callback function and in that callback function we log the order summary and this code is very hard to maintain or understand so this is called the callback hell 

// now we have to do many task after some task and every task depend on the revios task so we have to use many callback function and this is called callback hell


//  ********************** inversation of control ***************
// when we pass a callback function to another function and that function call our callback function so we have no control over when our callback function will be called or this is not grantee is out funcation is called if any error occur in the create order or in the payment or in ordersummay or below code is not run so  this is called inversation of control and this problem is solve using the promises 
