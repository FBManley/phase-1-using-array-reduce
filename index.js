const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
const initialValue = 0

//const totalBatteries = batteryBatches.reduce(0, [0]) => previousValue + currentValue, initialValue);

const totalBatteries = batteryBatches.reduce(result, initialValue)
    
    
//function(){ return num});


// sum of all the battery amounts in above array

// Use reduce() to create a single aggregate of all items in a list
//1. create a new variable called totalBatteries, which holds the sum of all the battery amounts in the batterBatches array
//2. use reduce()
//CONCLUSION; reduce() wuickly get a single summary of value from the elements in an array. methods greatly cut down the amount of time spent recreating common fuinctionality, make code more expressive, and efficient.




// Code your solution here

//const products = [
 //   { name: 'Shampoo', price: 4.99},
   // { name: 'Donuts', price: 7.99},
    //{ name: 'Cookies', price: 6.49},
    //{ name: 'Bath Gel', price: 13.99}
//];
// .reduce the array of products to a single value: the total price. To do this, we create getTotalAmountForProducts()

//function getTotalAmountForProducts(products){
//    let totalPrice = 0;

//    for (const product of products){
//        totalPrice += product.price;
//    };

//    return totalPrice;
//}
//console.log(getTotalAmountForProducts(products));
// 1. Declare totalPrice variable and set initial value to 0
// 2. Iterate through the products in the basket and add the proce of each to the total
// 3. When loop is finished, return the totalPrice
//This is very specific way to handle this. More abstraction is the goaal to handle more situations. 
//Make our solution more abstract by writing a generalized function that accepts two additional arguments: an initial value AND a callback function that implements the reduce functionality we want. 

//const couponLocations = [ 
  //  { room: 'Living room', amount: 5},
    //{ room: 'kitchen', amount: 2},
    //{ room: 'Bathroom', amount: 1},
    //{ room: 'Master Bedroom', amount: 7},
//];
//function ourReduce(arr, reducer, init) {
  //  let accum = init;
    //for (consst element of arr) {
      //  accum = reducer(accum, element);
    //};
//}
//function couponCounter(totalAmount, location){
  //  return totalAmount + location.amount;
//}
//console.log(ourReduce(couponLocations, couponCounter, 0));
// ourReduce( accepts three arguments:
    //1. the array we want to reduce
    //2. the callback function or reducer, 
    //3. the initial value for our accumulator variable
    //THEN it iterates over the array, calling the reducer function each time, which returns the updated value of the accumulator
    //Final value of accumulator returned at the end.
//ourReduce() is generalized: the specifics(the callback function nd initial value) have been abstracted out, making more flexible code. 
// ex. we have three coupons in our hand, we can account for that without having to change any code by adjusting the initial value when we call ourReduce()

//Demonstrate using reduce() with a Primitive Return Value
// Just like ourReduce, the reduce() method is used when we want to get some information from each element in the collection and gather that information into a  final summary value. 
// console.log(couponLocations.reduce(couponCoiunter, 0));
//OR
//const doubledAndSummed = [1, 2, 3].reduce(function(accumulator, element){return element * 2 + accumulator},0)
// We are calling .reduce() on our input array and passing it two arguments: the callback function, and an optional start value for the accumulator(0)
//.reduce() executes the callback for each element in turn, passing the current value of the accumulator in each time. 
//The callback updates the value of the accumulator in each iteration, and that updated valueis then passed as the first argument to the callback in the next iteration.
//When theres nothing left to iterate, the final value of the accumulator (the total) is returned.  
//The output of the reduce() method does not need to be a primitive value like a Number or String.