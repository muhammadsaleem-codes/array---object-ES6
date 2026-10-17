// let num = 0;
// if(num){
//     console.log("hello there ");  // there will nothing no error and nothing will show here becouse its not true
    
// }

// if(num !==20){
//      console.log("hello there ")
// }


//  block scope
// if(){
//     let a =20;
// }

// hoisting with var can work
// function cal() {
//     b=29;
//     console.log(b);
//     var b
    
    
// }
// cal()



// that will give an error
// LET ADD=20;
// console.log(ADD);


// higher order function (HOF)

/*A Higher-Order Function (HOF) is a function that does at least one of these two things:
1. Takes another function as an argument.
2. Returns another function.
1. Function ko argument ke taur par pass karna*/



//   sabse bahra umber find karna array ka and array ka small number find karna array
let arrr=[12, 34, 56, 78, 89, 10000];
console.log(Math.max(...arrr), Math.min(...arrr));

let num1 = [12, 45, 78, 900];
let num2 = [-1002, 23, 56, -1, 900.5];
let numberss = [...num1, ...num2];
console.log(numberss);
console.log(
    "This is the largest number from both arrays: " +
    Math.max(...numberss) +
    "\nThis is the smallest number from both arrays: " +
    Math.min(...numberss)
)


// console.log(Math.max(1, 5, 67, 89, 100));

// function great() {
//     console.log("hellow there ");
    
// }
// function welcome(callback) {
//         callback();
        
    
// }
// welcome(great)


